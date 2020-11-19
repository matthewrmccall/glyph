// import React and use hooks to create objects
import React, { useReducer, useState} from 'react';
import './App.css';

// reducer function that takes inputs state and event
const formReducer = (state, event) => {
  return {
    ...state,
    // pass an event object with properties name and value
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
// show Submitting Form message for 3 sec on button click
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }
// function to pull the data from the event.target
// and pass the object to setFormData
  const handleChange = event => {
    // setFormData is an object with keys: name and value
    // and values of event.target.name and event.target.value
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
// the user-facing section
// update the onChange event handler to use the handleChange function
  return (
    <div className="wrapper">
      <h1>Let's get started!</h1>
      {submitting &&
      <div>
        You are submitting the following:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
          ))}
          </ul>
      </div>
      }
      <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Your Name</p>
          <input name="name" onChange={handleChange}/>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>How can we help?</p>
          <select name="claim" onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="New Claim">New Claim</option>
            <option value="Existing Claim">Existing Claim</option>
            <option value="Appeal">Appeal</option>
          </select>
        </label>
        <label>
        <p>Count</p>
        <input type="number" name="count" onChange={handleChange} step="1"/>
        </label>
        <label>
          <p>I agree to the terms of service.</p>
          <input type="checkbox" name="tos" onChange={handleChange} />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
