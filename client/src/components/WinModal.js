import ReactPortal from "./ReactPortal";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Close from '../assets/images/close.svg';
import useForm from "../hooks/useForm";

function WinModal(props) {
  const { children, setModalOpen, modalOpen, startTime, endTime } = props;
  let navigate = useNavigate();

  const closeCallback = useCallback(
    () => {
      // submit info to backend
      navigate('/');
      setModalOpen(!modalOpen);
    },
    [setModalOpen, modalOpen, startTime, endTime]
  );

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? closeCallback() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeCallback]);

  if (!modalOpen) return null;

  return(
    <ReactPortal className="absolute bg-alpha-white flex justify-center items-center top-0 left-0 w-screen h-screen" wrapperID="portal-container">
      <div className="bg-white border border-black border-solid p-4">
        <button className="flex" onClick={closeCallback}><img src={Close} alt="X"></img>Close</button>
        {children}
      </div>
    </ReactPortal>
  );
}

export default WinModal;