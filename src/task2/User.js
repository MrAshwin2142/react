import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Parent from "../lifing state up/Parent";
function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch("http://localhost:8081/emp")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
    <Navbar2/>
      <div className="container row">
        {data.map((item,id) => {
          return (
            <div key={id} className="card col-4 text-white bg-primary" key={id} style={{margin:"25px",width:"270px",  padding: "10px"}}>
              <h4 className="card-header text-center">{item.name}</h4>
              <div className="card-body">
                <h6 className="card-title">Email: {item.email}</h6>
                <h6 className="card-title">Phone: {item.phone}</h6>
                <h6 className="card-title">Address: {item.address.city}</h6>
                <h6 className="card-title">Compny: {item.company.name}</h6>
                <Link className=" box bg-light" to={"/user/"+item.id} state={item}>user</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default User;
