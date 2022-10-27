import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LanguageCard from '../../Shared/LanguageCard/LanguageCard';

const Category = () => {
    const categoryLanguageDetails = useLoaderData();

    return (
        <div>
            <h2>This is category:{categoryLanguageDetails.length}</h2>
            {
                categoryLanguageDetails.map(languageDetails =><LanguageCard
                     key={languageDetails._id} languageDetails ={languageDetails} ></LanguageCard>)
            }
        </div>
    );
};

export default Category;