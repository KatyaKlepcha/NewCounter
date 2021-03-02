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
    let [changeSet, setChangeSet] = useState(true)



    return (
        <div className="App">
            <SettingsDisplay count={count}
                             setCount={setCount}
                             setInputMax={setInputMax}
                             inputStart={inputStart}
                             inputMax={inputMax}
                             setInputStart={setInputStart}
                             changeIncrement={changeIncrement}
                             changeReset={changeReset}
                             setChangeIncrement={setChangeIncrement}
                             setChangeReset={setChangeReset}
                             changeSet={changeSet}
                             setChangeSet={setChangeSet}
                             />

            <Display count={count}
                     setCount={setCount}
                     inputMax={inputMax}
                     setInputMax={setInputMax}
                     inputStart={inputStart}
                     changeIncrement={changeIncrement}
                     changeReset={changeReset}
                     setChangeIncrement={setChangeIncrement}
                     setChangeReset={setChangeReset}
                     changeSet={changeSet}
                     setChangeSet={setChangeSet}
                     />
        </div>
    );
}

export default App;
