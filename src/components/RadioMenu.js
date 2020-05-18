import React, { useState, useEffect } from "react";
// import Form from 'react-bootstrap/Form';
import '../../src/index.css';
import * as yup from 'yup';
import axios from 'axios'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from 'reactstrap';


//YUP VALIDATION FORMSCHEMA
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Enter a longer name"),
  size: yup.string().required("Please select a size"),
  sauce: yup.string().required("You must choose a sauce"),
  toppings: yup.string().required()
  .min(1, "You must choose at least one topping"),
  instructions: yup.string(),
});



const Form = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    instructions: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const [error, setError] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    instructions: "",
  });


  const validate = (e) => {
    let value =
    e.target.type === "checkbox"
    ? e.target.checked
    : e.target.type === "radio"
    ? e.target.checked
    : e.target.value;
    yup

      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setError({
          ...error,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setError({
          ...error,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const handleChange = (e) => {
    e.persist(); 
    validate(e);
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "radio"
        ? e.target.checked
        : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const [users, setUsers] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault(); 
    console.log("ORDER ACCEPTED & VALIDATED");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setUsers([...users, res.data]);
      })
      .catch((err) => console.log(err));
  };













  
    return (

<div className="formPage">
<div className="head">
    <div><h1>Build your Own Pizza!  </h1></div>
    <div><Link to="/"><Button color="secondary">Home</Button>{' '}</Link></div>
</div>

<div className="form1">
{/* FIRST FORM - Enter Name    */}
<form >
    
    <div>
        <label value={formState.name}>What is the name for the order?
        <input type="textarea" name="name" id="name" value={formState.name} onChange={handleChange} />
        {error.name.length > 0 ? <p>{error.name}</p> : null}
        </label></div>
    

  



{/* SECOND FORM - what size    */}
<label>
        What size pizza are you in the mood for?
        <select value={formState.size} name="size" id="size" onChange={handleChange} >
          <option onChange={handleChange}> Small</option>
          <option onChange={handleChange}> Medium</option>
          <option onChange={handleChange}> Large</option>
          <option onChange={handleChange}> xLarge</option>
        </select>
        {error.name.length > 0 ? <p>{error.size}</p> : null}
      </label>
 
 
 

<div className="spacer"></div>



{/* THIRD FORM - what sauce    */}

<h2>Choice of sauce</h2>

<div className="sauce">
    <div className="first"></div>
                <div className="second" >
                    <label onChange={handleChange}>
                        <div><input type="radio" id="sauce" name="sauce" value="Original Red" />Original Red</div>
                        <div><input type="radio" id="sauce" name="sauce" value="Garlic Ranch" />Garlic Ranch</div>
                        <div><input type="radio" id="sauce" name="sauce" value="BBQ Sauce" />BBQ Sauce</div>
                        <div><input type="radio" id="sauce" name="sauce" value="Spinach Alfredo" />Spinach Alfredo</div>
                    </label>
                    {error.name.length > 0 ? <p>{error.size}</p> : null}
                </div>
                <div className="third"></div>
</div>






{/* FOURTH FORM - what toppings    */}

<h2>Add Toppings</h2>
<div className="toppings">
<div className="firsttopping"></div>
    <div className="toppingForm">
        <div><label> Pepperoni <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Sausage <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Canadian Bacon <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Spicy Italian Sausage <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Grilled Chicken <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Onions <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Green Pepper <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Diced Tomatos <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Black Olives <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Artichoke Hearts <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Roasted Garlic <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Three Cheese <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Extra Cheese <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
        <div><label> Pineapple <input name="toppings" type="checkbox" defaultChecked={false} value={formState.toppings} onChange={handleChange} /> </label></div>
    </div>
    <div className="thirdtopping"></div>
</div>

<div className="spacer"></div>

<div className="notes">
    <h2>Special Instructions</h2>
    <div className="notesBox">
        <label htmlFor="instructions">
        <textarea
            id="instructions"
            name="instructions"
            value={formState.instructions}
            onChange={handleChange}
        />
        </label>
    </div>
    
</div>


<div className="btnbtn">
<button onClick={formSubmit}>Add to Order</button></div>
    <div className="results"><pre>{JSON.stringify(users, null, 2)}</pre></div>

            </form>
            </div>
 </div>
    )
};
export default Form

