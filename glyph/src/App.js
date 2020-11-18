//glyph app for creating FOIA requests
import React, { useState} from 'react';
import './App.css';

function App() {
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
