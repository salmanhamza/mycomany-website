const Button = (props) => {
  return (
    <button className="btn" onClick={props.click}>
      {props.content}
    </button>
  );
};

export default Button;
