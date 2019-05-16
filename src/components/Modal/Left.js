import React from 'react';

const Left = (props) => {
  return (
    <form action="#">
      <p>
        <input type="checkbox" onclick={props.checkboxHandler} id="cbName" />
        <label for="cbName">{props.title}</label>         
      </p>  
    </form>
  )
}

export default Left;