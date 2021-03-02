import React from 'react';
import Buttons from "../Buttons/Buttons";
import css from "./Display.module.css"

type DisplayPropsType = {
    count: number
    setCount: (number: any) => void
    inputMax: number
    inputStart: number
    setInputMax: (number: any) => void
    changeIncrement: boolean
    changeReset: boolean
    setChangeIncrement: (boolean: boolean) => void
    setChangeReset: (boolean: boolean) => void
    changeSet: boolean
    setChangeSet: (boolean: boolean) => void

}

const Display = (props: DisplayPropsType) => {

    if (props.count === props.inputMax && props.count !== 0) {
        props.setChangeIncrement(true)
    }

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
                         inputStart={props.inputStart}
                         setCount={props.setCount}
                         setInputMax={props.setInputMax}
                         inputMax={props.inputMax}
                         changeIncrement={props.changeIncrement}
                         changeReset={props.changeReset}
                         setChangeIncrement={props.setChangeIncrement}
                         setChangeReset={props.setChangeReset}
                />
                <Buttons title={'reset'}
                         disabled={props.changeReset}
                         count={props.count}
                         inputStart={props.inputStart}
                         setInputMax={props.setInputMax}
                         setCount={props.setCount}
                         inputMax={props.inputMax}
                         changeReset={props.changeReset}
                         changeIncrement={props.changeIncrement}
                         setChangeIncrement={props.setChangeIncrement}
                         setChangeReset={props.setChangeReset}
                />
            </div>
        </div>
    );
};

export default Display;

