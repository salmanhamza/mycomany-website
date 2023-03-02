const Testimony = (props) => {
  return (
    <div className="testimony">
      <div className="testimony__avatar">
        <img src={props.img} />
      </div>
      <div className="testimony__comment">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          pariatur totam error aliquid?
        </p>
        <p className="text">
          <strong style={{ color: "black" }}>Dani Moreno / </strong>
          Businessman
        </p>
      </div>
    </div>
  );
};
export default Testimony;
