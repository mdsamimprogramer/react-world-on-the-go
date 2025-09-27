import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ CountriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlags] = useState([]);


    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>country: {countries.length}</h1>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <h2>Total Flags Visited: {visitedFlag.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li
                        key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlag.map((flag, i) => <img key={i} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;