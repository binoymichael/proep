import React from 'react';
import { MDBInput } from 'mdbreact';

const Right = () => {
  return (
    <div>
      <MDBInput label="All Courses" filled type="checkbox" id="checkbox1" />
      <MDBInput label="Electives" filled type="checkbox" id="checkbox2" />
      <MDBInput label="Eligible" filled type="checkbox" id="checkbox3" />
      <MDBInput label="Non-Eligible" filled type="checkbox" id="checkbox4" />
      <MDBInput label="Passed" filled type="checkbox" id="checkbox5" />
      <MDBInput label="Failed" filled type="checkbox" id="checkbox6" />      
    </div>
  )
}

export default Right;