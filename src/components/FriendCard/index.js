import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" key={props.id}	onClick={() => props.handleClick(props.id, props.clicked)}>
		    <img 
            id={props.name}
            src={props.image}
            alt={props.name}
		    />
	    </div>
    </div>
  );
}

export default FriendCard;
