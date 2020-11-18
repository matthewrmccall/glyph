//glyph app for creating FOIA requests
import React from 'react';
import './App.css';

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('Form submitted!')
  }

  return (
    <div className="wrapper">
      <h1>Start your FOIA request!</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Your Name</p>
          <input name="name" />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
