import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaGoogle,FaGithub} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const[error,setError] = useState('');
    const [user, setUser] =useState({})
    const {providerLogin,githubProviderLogin,signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn =() =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
           // console.log(user)
            

        })
        .catch(error => console.error(error))
                
    }
    const handleGithubSignIn =() =>{
      githubProviderLogin(githubProvider)
      .then(result =>{
        const user = result.user;
        setUser(user)
        //console.log(user)
      })
      .catch(error =>console.error(error))

    }

    const handleSignIn = event =>{
      event.preventDefault ();
      const form = event.target;
      const email = form.email.value;
      const password =form.password.value;
    
      signIn(email,password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate( from,{replace:true})
      })
      .catch(error =>{
        console.error(error)
        setError(error.message)
      }) 
      
    }
//6.create a button for google sign in and github signin with a click handler
    return (
        <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <span>Are you new user ? Please <Link to='/register'>Register</Link> </span>
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
        <div>
          
            <ButtonGroup vertical className='mt-3'>
                <Button onClick={handleGoogleSignIn} variant='outline-dark'><FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant='outline-dark'><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
        
      </Form>
    );
};

export default Login;