//glyph app for creating FOIA requests
// import React and use hooks to create objects
import React, { useReducer, useState} from 'react';
import './App.css';

//function to pull name and value from event.target
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  return (
    <div className="wrapper">
      <h1>Let's get started!</h1>
      {submitting &&
      <div>Submitting Form...</div>
      }
      // connect to JSX using an event handler
      <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Your Name</p>
          <input name="name" onChange={setFormData}/>
        </label>
      </fieldset>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
