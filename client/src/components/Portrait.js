function Portrait(props) {
  const { name, isFound } = props;
  const style = isFound ? 'opacity-50 ring ring-green-300' : '';

  return(
    <div className="basis-0 max-h-fit">
      <img className={'max-w-[100px] aspect-square border border-black border-solid ' + style} src={require(`../assets/portraits/${name}.png`)} alt={`${name.charAt(0).toUpperCase() + name.slice(1)}`} ></img>
    </div>
  );
}

export default Portrait;