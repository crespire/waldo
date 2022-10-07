import { useEffect, useRef } from 'react';

function ImageArea(props) {
  const { image, setStartTime, setCharacterStatus } = props;
  const canvasRef = useRef(null);

  const checkClick = async (x, y) => {
    const urlBase = 'http://localhost:3000/secrets/check/'
    const requestString = `?image=${image}&x=${x}&y=${y}`;
    const response = await fetch(urlBase + requestString);
    const data = await response.json();

    return data;

    // return { "found": true, "coords": [323, 683], "name": "odlaw" };
  }

  const markCanvas = (x, y) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, 75, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }

  const handleClick = (event) => {
    const x = event.nativeEvent.layerX;
    const y = event.nativeEvent.layerY;
    console.log(`X: ${x}, Y: ${y}`);

    /*
      Send backend x, y and image name. Then we can check if the click is within bounds for any character
      JSON Response on success: { "found": true, "coords": [x, y], "name": "waldo" }
      JSON Response on fail: { "found": false }

      For now, we can have this JSON stored and handled in the front end.
    */

    checkClick(x, y)
      .then(data => {
        console.log('Got data: ', data);
        if (Object.keys(data).includes('name')) {
          setCharacterStatus(oldStatus => {
            return { ...oldStatus, [data['name']]: true };
          });
        }
      })
      .catch((error) => {
        console.log('Unable to check click: ', error);
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
      <canvas ref={canvasRef} onClick={handleClick} id="image-canvas" width="3000" height="1920"></canvas>
    </div>
  );
}

export default ImageArea;