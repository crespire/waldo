function Image(props) {
  const { image } = props;

  const handleClick = (event) => {
    const x = event.nativeEvent.layerX;
    const y = event.nativeEvent.layerY;
    console.log(`X: ${x}, Y: ${y}`);
  }

  return(
    <div className="basis-full h-full w-full overflow-auto">
      <img onClick={handleClick} className="min-w-min min-h-min" src={require(`../assets/images/${image}.jpg`)} alt={image}></img>
    </div>
  );
}

export default Image;