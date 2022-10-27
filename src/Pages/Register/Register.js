import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
//7.create a user function named createuser to return createUserWithEamilandPassword
const Register = () => {
    const[error,setError] =useState('')
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const handleSubmit = event =>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password)

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name,photoURL)
        })
        .catch(error=>{
          console.error(error)
           setError(error.message) ;
          });


          const handleUpdateUserProfile = (name,photoURL) =>{
              const profile ={
                displayName:name,
                photoURL:photoURL
              }
            updateUserProfile(profile)
            .then( () =>{})
            .catch(error=>console.error(error));
          }

    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>photoURL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Photo URL" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <span>Already have an account ? Please <Link to='/login'>login</Link> </span>
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
        
      </Form>
    );
};

export default Register;