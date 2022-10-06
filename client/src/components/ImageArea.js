import { useEffect, useRef } from 'react';

function ImageArea(props) {
  const { image, setStartTime } = props;
  const canvasRef = useRef(null);

  const handleClick = (event) => {
    const x = event.nativeEvent.layerX;
    const y = event.nativeEvent.layerY;
    console.log(`X: ${x}, Y: ${y}`);

    /*
      Send backend x, y and image name. Then we can check if the click is within bounds for any character
      JSON Response on success: { "found": true, "coords": [x, y], "name": "waldo" }
      JSON Response on fail: { "found": false, "coords": [], "name": "" }

      For now, we can have this JSON stored and handled in the front end.
    */
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