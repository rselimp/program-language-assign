import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LanguageCard from '../../Shared/LanguageCard/LanguageCard';


const Home = () => {
    
    const allLanguageDetails = useLoaderData();
    return (
        <div>
            
            <h2>All Programming Languages:{allLanguageDetails.length}</h2>
            {
                allLanguageDetails.map(languageDetails => <LanguageCard
                     key={languageDetails._id} 
                     languageDetails={languageDetails} ></LanguageCard>)
            }
        </div>
    );
};

export default Home;