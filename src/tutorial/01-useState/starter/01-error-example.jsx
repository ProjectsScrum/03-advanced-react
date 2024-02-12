import {useState} from 'react'

const ErrorExample = () => {
  const [num, setNum] = useState(0);
 
  const handleClickIncrease = () =>{
    return setNum((num)=> num +1)
  }

  const handleClickDecrease = () =>{
    return num > 0 ? setNum((num)=> num -1) : "";
  }
  
  return(
    <div>
        <h1>INCREASE VALUE</h1>
        <h2>{num}</h2>
        <button type='button' className="btn" onClick={handleClickDecrease}>Decrease</button>
        <button type='button' className="btn" onClick={handleClickIncrease}>Increase</button>
    </div>
  ) 
  
};

export default ErrorExample;

/*

const ErrorExample = () => {
  const [num, setNum] = useState(0);

  const handleClick = () =>{
    return setNum((num)=> num + 1);
  }

  return(
    <div>
        <h2>useState error example</h2>
        <button onClick={handleClick}>Click to Increase</button>
        <p>{num}</p>
    </div>
  ) 
  
};
*/
