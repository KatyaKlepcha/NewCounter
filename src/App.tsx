import React, {useState} from 'react';
import './App.css';
import SettingsDisplay from "./Components/Settings/SettingsDisplay";
import Display from "./Components/Display/Display";

function App() {
    let [count, setCount] = useState(0)
    let [inputMax, setInputMax] = useState(0)
    let [inputStart, setInputStart] = useState(0)

    let [changeIncrement, setChangeIncrement] = useState(false)
    let [changeReset, setChangeReset] = useState(false)


    return (
        <div className="App">
            <SettingsDisplay count={count}
                             setCount={setCount}
                             inputStart={inputStart}
                             setInputStart={setInputStart}
                             inputMax={inputMax}
                             setInputMax={setInputMax}
                             changeIncrement={changeIncrement}
                             setChangeIncrement={setChangeIncrement}
                             changeReset={changeReset}
                             setChangeReset={setChangeReset}
                             />

            <Display count={count}
                     setCount={setCount}
                     inputStart={inputStart}
                     inputMax={inputMax}
                     setInputMax={setInputMax}
                     changeIncrement={changeIncrement}
                     changeReset={changeReset}
                     setChangeIncrement={setChangeIncrement}
                     setChangeReset={setChangeReset}
                     />
        </div>
    );
}

export default App;
