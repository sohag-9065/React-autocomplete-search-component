import React from 'react';
import AutoComplete from '../AutoComplete/AutoComplete';

import { autoCompleteData } from "../../data";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(true){
            console.log("hi")
            navigate('/login')
        }
    },[])
    
    return (
        <div className='flex flex-col items-center mt-20 '>
            <AutoComplete  data={autoCompleteData} />
        </div>
    );
};

export default Home;