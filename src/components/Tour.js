import { useState } from "react";
import "../styles.css";

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [desc, setDesc] = useState(info.slice(0, 300));
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <img src={image} alt="img" />
      <div className="title">
        <h4>{name}</h4>
        <p className="price">${price}</p>
      </div>
      <div className="desc">
        <span>{desc}</span>
        {toggle ? (
          <span
            onClick={() => {
              setToggle(!toggle);
              setDesc(info.slice(0, 300));
            }}
            style={{ color: "skyblue", cursor: "pointer" }}
          >
            Read Less
          </span>
        ) : (
          <span
            onClick={() => {
              setToggle(!toggle);
              setDesc(info);
            }}
          >
            ...{" "}
            <span style={{ color: "skyblue", cursor: "pointer" }}>
              Read More
            </span>
          </span>
        )}
      </div>

      <button onClick={() => removeTour(id)} className="remove">
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
