import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import '../../src/index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import * as yup from 'yup';

















export default function NewFORM() {
    const [formState, setFormState] = useState({
        size: "",   
        toppings: "",
        sauce: "",
      });








    const handleChange = event => {
        let value =
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
      setFormState({ ...formState, [event.target.name]: value });
    };


    const formSubmit = e => {
        e.preventDefault();
        console.log("submitted");

      };






    return (
<form>



<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Chose the Size
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onChange={handleChange}>Small</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onChange={handleChange}>Medium</Dropdown.Item>
    <Dropdown.Item href="#/action-3" onChange={handleChange}>Large</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>



<div className="spacer"></div>


            <div>
                <label>
                    Pepperoni
        <input
                        name="Pepperoni"
                        type="checkbox"
                        defaultChecked={false}
                        // value={formState.}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Sausage
        <input
                        name="Sausage"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>

            </div>
            <div>
                <label>
                    Canadian Bacon
        <input
                        name="Canadian Bacon"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Spicy Italian Sausage
        <input
                        name="Spicy Italian Sausage"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>
            </div><div>
                <label>
                    Grilled Chicken
        <input
                        name="Grilled Chicken"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Onions
        <input
                        name="Onions"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>

            </div>
            <div>
                <label>
                    Green Pepper
        <input
                        name="Green Pepper"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Diced Tomatos
        <input
                        name="Diced Tomatos"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange}
                    />
                </label>
            </div><div>
                <label>
                    Black Olives
        <input
                        name="Black Olives"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange} />
                </label>
                <label>
                    Roasted Garlic
        <input
                        name="Roasted Garlic"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange} />
                </label>

            </div>
            <div>
                <label>
                    Artichoke Hearts
        <input
                        name="Artichoke Hearts"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange} />
                </label>
                <label>
                    Three Cheese
        <input
                        name="Three Cheese"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange} />
                </label>
            </div><div>
                <label>
                    Pineapple
        <input
                        name="Pineapple"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange} />
                </label>
                <label>
                    Extra Cheese
        <input
                        name="Extra Cheese"
                        type="checkbox"
                        defaultChecked={false}
                        onChange={handleChange} />
                </label>
            </div>


<div className="spacer"></div>



        <label>
                <div>
                    Original Red
            <input type="radio" onChange={handleChange} /></div>
                <div>Garlic Ranch
            <input type="radio" onChange={handleChange} /></div>
                <div>BBQ Sauce
            <input type="radio" onChange={handleChange} /></div>
                <div>Spinach Alfredo
            <input type="radio" onChange={handleChange} /></div>
        </label>
        <div className="spacer"></div>



        <button onClick={formSubmit}>Submit</button>

</form>)}
