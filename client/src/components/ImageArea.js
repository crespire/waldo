import { useEffect, useRef, useContext } from 'react';
import { BaseURLContext } from '../App';

function ImageArea(props) {
  const { image, setStartTime, setCharacterStatus } = props;
  const canvasRef = useRef(null);
  const baseURL = useContext(BaseURLContext);

  const checkClick = async (x, y) => {
    const request = `${baseURL}secrets/check/?name=${image}&x=${x}&y=${y}`;
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    return data;
  }

  const markCanvas = (x, y) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }

  const handleClick = (event) => {
    const x = event.nativeEvent.layerX;
    const y = event.nativeEvent.layerY;

    checkClick(x, y)
      .then(data => {
        if (data['found']) {
          setCharacterStatus(oldStatus => {
            return { ...oldStatus, [data['name']]: true };
          });
          markCanvas(...data['coords']);
        }
      })
      .catch((error) => {
        console.error('Unable to check click: ', error);
      });
  }
  
  useEffect(() => {    
    const img = new Image();
    const ctx = canvasRef.current.getContext('2d');

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      setStartTime(Date.now());
    }

    img.src = require(`../assets/images/${image}.jpg`);    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div id="play-area" className="basis-full h-full w-full overflow-auto">
      <div className="fixed bottom-0 right-0 h-full w-full flex justify-center items-center pointer-events-none animate-disappear overflow-hidden">
        <div className="bg-white border border-black border-solid p-4 pointer-events-none overflow-hidden">
          Scroll to see entire image.
        </div>          
      </div>
      <canvas ref={canvasRef} onClick={handleClick} id="image-canvas" width="3000" height="1920"></canvas>
    </div>
  );
}

export default ImageArea;