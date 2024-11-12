import { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Input:', input);
    setInput('');
  };

  return (
    <div>
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a movie or show"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;