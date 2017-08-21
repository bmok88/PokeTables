import React from 'react';

let AddPokemon = () => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      console.log(input.value, 'input.value');
      input.value = '';
    }}>
      <input ref={node => input = node}/>
      <button type="submit">Add Pokemon</button>
    </form>
  );
};

export default AddPokemon;