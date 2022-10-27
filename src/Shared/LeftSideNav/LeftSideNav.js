import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

//9.leftsidenav have all category information
const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/language-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])




    return (
        <div>
            <h2>All Category :{categories.length}</h2>
            <div className='left-sidebar'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;