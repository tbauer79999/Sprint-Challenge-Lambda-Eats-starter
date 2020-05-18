import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  
export default function NavNav() {
    return (
<div className="frontPage">
    <div className="newMenu">
        <h1>Welcome to Lambda Pizza!</h1></div>
        <div className="buttongroup">
            <Link to=""><Button color="secondary">Home</Button>{' '}</Link>
            <Link to=""><Button color="secondary">About Us</Button>{' '}</Link>
            <Link to="/pizza"><Button color="secondary">Order!</Button>{' '}</Link>
        </div>


<div className="newMenu">
    <p>We pride ourselves in the ability to customize ANY type of pizza your heart desires!</p>
    {/* <Van></Van> */}
</div>
<div className="bigImage"></div>

<div className="pizzaStrip">

<div className="smallimg1"><h4>Meat Pizza!</h4>
    
</div>
<div className="smallimg2"><h4>Veggie Pizza!</h4>
    
</div>
</div>
<div><Link to="/pizza"><Button color="secondary">Order Now!</Button>{' '}</Link></div>
</div>
    )
}; 
