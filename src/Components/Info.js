import {Fragment,useState,useEffect}from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Navbar2 from "../task2/Navbar2";

function Info(){
    const [data, setData] = useState([]);
    useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
            // fetch("http://localhost:8081/emp")
			.then((data) => data.json())
			.then((res) => {
				setData(res);
			});
	}, []);
    // console.log(data);
    return (
        <>
        <Navbar2/>
        <div className="container row">
			{data.map((item,id) => {
				// if(id%2===0)
                // {
                //     return (
                //         <div  className="card col-4"  style={{ width: "250px",margin:"30px",padding:"10px"}}>
                //             <img src={item.url} className="card-img-top" alt="not found"/>
                        
                //                 <div>
                //                     <h5 className="card-title">{id} {item.title}</h5>
                //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                     <a href={item.thumbnailUrl} className="btn btn-primary">Go somewhere</a>
                //                 </div>
                        
                //         </div>
				//     );
                // }
                // else return<></>;

                return <Card item = {item} />
                // return <h1>{item.name}</h1>
			})}
		</div>
        </>
    );
};

export default Info;