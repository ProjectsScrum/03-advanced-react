import React from 'react';
import {data} from '../../../data';
import { useState } from "react";


const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  

  const handleClickRemove = () =>{

    return 
  }

  return <div>
        <h2>useState array example</h2>
        {
          people.map((item)=>{
              const {id, name} = item;

            return <div key={id}>
                <span>{name}</span>
                <br/>
                <button type="button" onClick={handleClickRemove}>Button</button>
            </div>
          })
        }

    </div>
};

export default UseStateArray;
