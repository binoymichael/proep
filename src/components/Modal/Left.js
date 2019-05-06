import React from 'react';
import { MDBInput } from 'mdbreact';

const Left = () => {
  return (
    <div>
      <MDBInput label="Year 1" filled type="checkbox" id="checkbox1" />
      <MDBInput label="Year 2" filled type="checkbox" id="checkbox2" />
      <MDBInput label="Year 3" filled type="checkbox" id="checkbox3" />
      <MDBInput label="Year 4" filled type="checkbox" id="checkbox4" />       
    </div>
  )
}

export default Left;