import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Enter your name" />
      {errors.name && <span className="error">name is required</span>}
      
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Enter your email" />
      {errors.email && <span className="error">email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder="Enter your Adderss" />
      {errors.address && <span className="error">address is required</span>}
     
      <input name="phone" ref={register({ required: true })} placeholder="Enter your phone" />
      {errors.phone && <span className="error">phone is required</span>}


      <input type="submit" />
    </form>
  );
};

export default Shipment;