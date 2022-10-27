import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//5. distructure in database information
const Language = () => {
    const languageDetails =useLoaderData();
    const {title,details,image_url,category_id} = languageDetails;
    return (
      
        <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary">Category Programming language</Button>
        </Link>
        <br />
        <br />
        <Link to='/'>
        <Button variant="primary">All Programming Language</Button>
        </Link>
      </Card.Body>
    </Card>
    
    );
};

export default Language;