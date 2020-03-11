import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleSetGood = () => {        
        setGood(good + 1);
    }

    const handleSetNeautral = () => {        
        setNeutral(0);
    }
    
    const handlesSetBad = () => {        
        setGood(bad - 1);
    }
    

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => handleSetGood()}>good</button>
            <button onClick={() => handleSetNeautral()}>neautral</button>
            <button onClick={() => handlesSetBad()}>bad</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));