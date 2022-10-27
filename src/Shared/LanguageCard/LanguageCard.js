import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LanguageCard = ({languageDetails}) => {
    const {_id,title,details,image_url} = languageDetails
    return (
        <Card>
      <Card.Header>Download Pdf</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length >550 ?
            <p>{details.slice(0,550) + '...'}<Link to={`/languageDetails/${_id}`}>Read More</Link></p>
            :
            {details}
        }
        </Card.Text>
        <Button variant="info"><Link to={`/languageDetails/${_id}`}>Get premium access</Link> </Button>
      </Card.Body>
    </Card>
    );
};

export default LanguageCard;