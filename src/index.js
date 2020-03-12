import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({good, neautral, bad}) => {
    let count = good + neautral + bad;
    let total = 1 * good + 0 * neautral + -1 * bad;
    let average = count && total/count;
    let positive = `${count && good/count * 100}%`;

    return(
        <table>
            <tbody>
                <Statistic text='good' value={good}/>
                <Statistic text='neautral' value={neautral}/>
                <Statistic text='bad' value={bad}/>
                <Statistic text='all' value={count}/>
                <Statistic text='average' value={average}/>
                <Statistic text='positive' value={positive}/>
            </tbody>
        </table>
    )
}

const Statistic = ({text, value}) => {
    return (
        <div>{text} {value}</div>
    )
}

const Button = ({handleClick, text})  => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neautral, setNeautral] = useState(0);
    const [bad, setBad] = useState(0);
    const addGood = () => setGood(good + 1);
    const addNeautral = () => setNeautral(neautral + 1);
    const addBad = () => setBad(bad + 1);



    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={addGood} text='good'/>
            <Button handleClick={addNeautral} text='neautral'/>
            <Button handleClick={addBad} text='bad'/>
            <h1>statistics</h1>
            { good || neautral || bad > 0 ? (
            <Statistics good={good} neautral={neautral} bad={bad}/>
            ) : (
                <div>No feedback given</div>
            )}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));