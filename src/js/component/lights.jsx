import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [ active, setActive] = useState("");
    
    useEffect(() => ([console.log("Status is:", active)]), {active})
    
    const handleClick = (color) => {
      setActive(color);
    };

    return(<>
      <div className="body">
			<div className={`red-light` + `${active === "red-light" ? " red-light-active" : ""}`} onClick={(e) => { setActive(e.target.className) }}></div>
			<div className={`yellow-light` + `${active === "yellow-light" ? " yellow-light-active" : ""}`} onClick={(e) => { setActive(e.target.className) }}></div>
			<div className={`green-light` + `${active === "green-light" ? " green-light-active" : ""}`} onClick={(e) => { setActive(e.target.className) }}></div>
    
		<div className="text-center">
				<p className="fixed-bottom">
					Made by
					<a href="https://github.com/EffySolorzano"> Solórzano 
          </a><i className="fa fa-feather"></i>
				</p>
			</div>
      </div>
      </>
    )
 };

export default TrafficLight;