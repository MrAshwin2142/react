import React, { useState } from "react";
// import { WithRout} from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function UserInfo() {
  const { id } = useParams([]);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      // fetch("http://localhost:8081/emp")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div className="container" style={{padding :"30px"}}>
    <div className="card text-white bg-success" style={{width: "45rem",margin:"auto"}}>
      <div className="card-header">name : {data?.name}</div>
      <div className="card-body">
        <h5 className="card-title">Additional information</h5>
        <h6>userName : {data?.username}</h6>
        <p className="card-text">
            <h3>Contact info - </h3>
            <h5>email : {data?.email}</h5>
            <h5>phone : {data?.phone}</h5>
            <h5>website : {data?.website}</h5>
        </p>
        <p className="card-text">
            <h3>Address - </h3>
            <p>{data?.address?.street}, {data?.address?.suite}, {data?.address?.city},{data?.address?.zipcode}</p>
        </p>
      </div>
    </div>
    </div>
  );
}

export default UserInfo;
// export default withRouter(UserInfo);
