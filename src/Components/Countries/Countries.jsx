import React, { use } from 'react';

const Countries = ({CountriesPromise}) => {
    
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    
    return (
        <div>
            <h1>samim country: {countries.length}</h1>
        </div>
    );
};

export default Countries;