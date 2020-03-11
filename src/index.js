import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <button>good</button>
            <button>neautral</button>
            <button>bad</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));