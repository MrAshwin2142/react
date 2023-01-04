import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  console.log(props);
  return (
    <>
      {
        <div
          className="card col-4"
          style={{ width: "270px", margin: "25px", padding: "10px" }}
        >
          <img src={props.item.url} className="card-img-top" alt="not found" />
          <div>
            <h5 className="card-title">
              {props.item.emp_id} {props.item.emp_name}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <Link to="/card-info">more</Link> */}
            <a href={props.item.thumbnailUrl} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      }
    </>
  );
}

export default Card;
