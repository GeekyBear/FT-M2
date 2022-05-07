import React, { useState } from 'react';

export function validate(input){
  let errors = {};

  if(!input.username){
    errors.username = 'Username is required';
  } else if  (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  
  if(!input.password){
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }  

  return errors
}

export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const [errors, setError] = useState({})

  const handleInputChange = function(e) {
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
 
  
  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          type="text"
          name="username"
          className={ errors.username && 'danger'}
          value={ input.username }
          onChange={handleInputChange}/>        
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          className={ errors.password && 'danger'}
          value={ input.password }
          onChange={handleInputChange}/>
        <button>Submit</button>  
      </div>
    </form>
  )
}
