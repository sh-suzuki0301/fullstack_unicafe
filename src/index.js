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

    const handleValue = (value) => {
        setAll(allClicks + 1);
        if (value > 0) {
            setGood(good + 1);
        } else if (value === 0) {
            setNeutral(neautral + 1);
        } else {
            setBad(bad + 1);
        }
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => handleValue(1)} text='good'/>
            <Button handleClick={() => handleValue(0)} text='neautral'/>
            <Button handleClick={() => handleValue(-1)} text='bad'/>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neautral {neautral}</p>
            <p>bad {bad}</p>
            <p>all {allClicks}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));