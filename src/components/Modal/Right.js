import React from 'react';
import { MDBInput } from 'mdbreact';

const Right = () => {
  return (
    <form action="#">
      <p>
        <input type="checkbox" id="test1" />
        <label for="test1">All Courses</label>
      </p> 
      <p>
        <input type="checkbox" id="test2" />
        <label for="test2">Electives</label>
      </p> 
      <p>
        <input type="checkbox" id="test3" />
        <label for="test3">Eligible</label>
      </p> 
      <p>
        <input type="checkbox" id="test4" />
        <label for="test4">Non-Eligible</label>
      </p> 
      <p>
        <input type="checkbox" id="test5" />
        <label for="test5">Passed</label>
      </p> 
      <p>
        <input type="checkbox" id="test6" />
        <label for="test6">Failed</label>
      </p> 
    </form>
  )
}

export default Right;