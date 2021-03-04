import React from 'react';
import Buttons from "../Buttons/Buttons";
import css from "./Display.module.css"

type DisplayPropsType = {
    count: number
    setCount: (number: any) => void
    inputStart: number
    inputMax: number
    setInputMax: (number: any) => void
    changeIncrement: boolean
    setChangeIncrement: (boolean: boolean) => void
    changeReset: boolean
    setChangeReset: (boolean: boolean) => void
}

const Display = (props: DisplayPropsType) => {


    let inputValidation = props.count === props.inputMax ||
    props.inputStart === props.inputMax ||
    props.inputStart < 0 ||
    props.inputMax < 0 ||
    props.inputMax < props.inputStart ? css.error : css.count

    return (
        <div className={css.display}>

            <div
                className={inputValidation}>{props.count}
            </div>

            <div className={css.buttonsDisplay}>
                <Buttons title={'increment'}
                         disabled={props.changeIncrement}
                         count={props.count}
                         setCount={props.setCount}
                         inputStart={props.inputStart}
                         inputMax={props.inputMax}
                         setInputMax={props.setInputMax}
                         changeIncrement={props.changeIncrement}
                         setChangeIncrement={props.setChangeIncrement}
                         changeReset={props.changeReset}
                         setChangeReset={props.setChangeReset}
                />
                <Buttons title={'reset'}
                         disabled={props.changeReset}
                         count={props.count}
                         setCount={props.setCount}
                         inputStart={props.inputStart}
                         inputMax={props.inputMax}
                         setInputMax={props.setInputMax}
                         changeIncrement={props.changeIncrement}
                         setChangeIncrement={props.setChangeIncrement}
                         changeReset={props.changeReset}
                         setChangeReset={props.setChangeReset}
                />
            </div>
        </div>
    );
};

export default Display;

