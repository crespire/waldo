import ReactPortal from "./ReactPortal";
import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "./Game";
import useForm from "../hooks/useForm";

function WinModal(props) {
  const { children, setModalOpen, modalOpen, startTime, endTime } = props;
  const secondsToComplete = (Math.floor(endTime - startTime) / 1000).toFixed(1);
  const image = useContext(ImageContext);
  const [leaderboard, setLeaderboard] = useState({});
  let navigate = useNavigate();

  const closeCallback = useCallback(
    () => {
      console.log('Submitted to backend!');
      navigate('/');
      setModalOpen(!modalOpen);
    },
    [setModalOpen, modalOpen, startTime, endTime]
  );

  const { values, errors, handleChange, handleSubmit } = useForm(closeCallback);

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? closeCallback() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeCallback]);

  // Load leaderboard info
  useEffect(() => {
    const getLeaderboard = async (img) => {
      const response  = await fetch(
        'url'
      ).then((response) => response.json());
  
      return response;
    }

    let entries = getLeaderboard(image).catch(console.error);
    setLeaderboard(entries);
  }, []);

  if (!modalOpen) return null;

  return(
    <ReactPortal className="absolute bg-alpha-white flex justify-center items-center top-0 left-0 w-screen h-screen" wrapperID="portal-container">
      <div className="flex flex-col space-y-2 bg-white border border-black border-solid p-4">
        <h1 className="text-2xl">You found them all!</h1>
        <p>Your search took {secondsToComplete} seconds.</p>
        <form className="flex flex-col p-2 border border-solid border-black space-y-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input className="border border-slate-400 border-solid" type="text" name="name" value={values['name'] || ''} onChange={handleChange} placeholder="AAA" required></input>
            { errors.name && <p className="border border-rose-500 border-solid">{errors.name}</p>}
          </div>
          <button className="border border-solid border-black" type="submit">Add your score!</button>
        </form>
      </div>
    </ReactPortal>
  );
}

export default WinModal;