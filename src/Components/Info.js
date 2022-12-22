import {Fragment,useState,useEffect}from "react";

function Info(){
    const [data, setData] = useState([]);
    useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then((data) => data.json())
			.then((res) => {
				setData(res);
			});
	}, []);
    return (
        <div className="container row">
			{data.map((item, id) => {
				return (
                    <div  className="card col-4"  style={{ width: "250px",margin:"30px",padding:"10px"}}>
                        <img src={item.url} className="card-img-top" alt="not found"/>
                        <div >
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href={item.thumbnailUrl} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
				);
			})}
		</div>
    );
};

export default Info;