//glyph app for creating FOIA requests
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Start your FOIA request!</h1>
      <form>
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
