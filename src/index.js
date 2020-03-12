import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    return (
        <div>

        </div>
    )
}

const Button = (props)  => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const App = () => {
    const [allClicks, setAll] = useState(0)
    const [good, setGood] = useState(0);
    const [neautral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleSetGood = () => {  
        setAll(allClicks +1);      
        setGood(good + 1);
    }

    const handleSetNeautral = () => { 
        setAll(allClicks +1);       
        setNeutral(neautral + 1);
    }
    
    const handleSetBad = () => {  
        setAll(allClicks +1);      
        setBad(bad + 1);
    }

    

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => handleSetGood()} text='good'/>
            <Button handleClick={() => handleSetNeautral()} text='neautral'/>
            <Button handleClick={() => handleSetBad()} text='bad'/>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neautral {neautral}</p>
            <p>bad {bad}</p>
            <p>all {allClicks}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));