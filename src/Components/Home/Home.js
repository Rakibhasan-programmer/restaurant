import { Input } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Restaurant from '../Restaurant/Restaurant';


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals));
    }, [inputValue]);

    // event handler for getting input value 
    const textValue = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <Input onChange={textValue} sx={{ m: 5 }} placeholder="Search food items" />
            </div>
            <div className='gridGap'>
                {
                    meal.map(item => <Restaurant key={item.idMeal} item={item}></Restaurant>)
                }
            </div>
        </div>
    );
};

export default Home;