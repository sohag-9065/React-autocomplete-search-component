import React from 'react';
import AutoComplete from '../AutoComplete/AutoComplete';

import { autoCompleteData } from "../../data";

const Home = () => {
    return (
        <div className='flex flex-col items-center mt-20 '>
            <AutoComplete  data={autoCompleteData} />
        </div>
    );
};

export default Home;