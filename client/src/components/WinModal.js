import ReactPortal from "./ReactPortal";
import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "./Game";
import Close from '../assets/images/close.svg';
import useForm from "../hooks/useForm";
import Leaderboard from './Leaderboard';

function WinModal(props) {
  const { setModalOpen, modalOpen, startTime, endTime } = props;
  const secondsToComplete = (Math.floor(endTime - startTime) / 1000).toFixed(1);
  const image = useContext(ImageContext);
  const [leaderboard, setLeaderboard] = useState({});
  let navigate = useNavigate();

  const closeCallback = async (_, submitted = false) => {
    if (values['name'] && submitted) {
      const requestBody = { image: image, name: values['name'], start: startTime, end: endTime, seconds: secondsToComplete };
      const requestURL = `http://localhost:3000/scores/create`;
      await fetch(requestURL, {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      })
        .then((response) => console.log(response.json()));
    } else {
      console.log('Skipped score submit');
    }
    navigate('/');
    setModalOpen(!modalOpen);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(closeCallback);

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? closeCallback() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  useEffect(() => {
    const getLeaderboard = async (img) => {
      const requestURL = `http://localhost:3000/leaderboards/${img}`;
      const response  = await fetch(requestURL, { mode: 'cors' })
        .then((response) => response.json());
  
      setLeaderboard(response);
    }

    getLeaderboard(image).catch(console.error);
  }, [image]);

  if (!modalOpen) return null;

  return(
    <ReactPortal className="absolute bg-alpha-white flex justify-center items-center top-0 left-0 w-screen h-screen" wrapperID="portal-container">
      <button className="flex border border-black rounded-full border-solid p-2 bg-white mr-2" onClick={closeCallback}><img src={Close} alt="X"></img></button>
      <div className="flex flex-col space-y-2 bg-white border border-black border-solid p-4">
        <h1 className="text-2xl">You found them all!</h1>
        <p>Your search took {secondsToComplete} seconds.</p>
        { leaderboard.length > 0 && <Leaderboard scores={leaderboard} /> }
        <p>Add your score below, or try again!</p>
        <form className="flex flex-col p-2 border border-solid border-black space-y-2" onSubmit={(e) => {handleSubmit(e, true)}}>
          <div className="grow">
            <label className="grow-0" htmlFor="name">Name: </label>
            <input className="grow border border-slate-400 border-solid" type="text" name="name" value={values['name'] || ''} onChange={handleChange} placeholder="AAA" required></input>
            { errors.name && <p className="text-center border border-rose-500 border-solid">{errors.name}</p>}
          </div>
          <button className="border border-solid border-black" type="submit">Add your score!</button>
        </form>
      </div>
    </ReactPortal>
  );
}

export default WinModal;