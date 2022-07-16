import React from 'react';

const UserForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form"> 
        
          <label> Name: </label>
          <input 
            name="name" 
            type="text"
          />
          

        <button type="submit"> Save </button>
      </div>
    </form>
  );
};

export default UserForm;