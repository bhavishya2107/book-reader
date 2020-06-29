import React from "react";
import {Link} from 'react-router-dom'

function SingleBook(props) {
  return (
    <div className="mr-5" onClick={() => props.getSingleBook(props)}>
    <Link to={`/${props.title}`}>
     <figure style={{width:"250px"}}>
        <img
          src={props.cover || "/assets/cover.jpg"}
          width="100%"
          alt={props.title}
        />
         <p>{props.title}</p>
      </figure>
    </Link>
     
    </div>
  );
}

export default SingleBook;
