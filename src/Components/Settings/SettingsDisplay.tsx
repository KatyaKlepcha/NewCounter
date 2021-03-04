import React, {ChangeEvent} from 'react';
import Buttons from "../Buttons/Buttons"
import css from './SettingsDisplay.module.css'

type SettingsPropsType = {
    count: number
    setCount: (number: any) => void
    inputStart: number
    setInputStart: (number: any) => void
    inputMax: number
    setInputMax: (number: any) => void
    changeIncrement: boolean
    setChangeIncrement: (boolean: boolean) => void
    changeReset: boolean
    setChangeReset: (boolean: boolean) => void
}

const SettingsDisplay = (props: SettingsPropsType) => {

    let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        let numberMax = (Number(e.currentTarget.value))
        props.setInputMax(numberMax)
        if (numberMax > props.inputMax) {
            props.setChangeIncrement(true)
            props.setChangeReset(true)
        }
        props.setCount('Enter values and press "set"')

        if (numberMax < 0) {
            props.setCount('Incorrect value!')
        } else if (numberMax === props.inputStart) {
            props.setCount('Incorrect value!')
        } else if (numberMax < props.inputStart) {
            props.setCount('Incorrect value!')
        } else if (numberMax <= 0 && props.inputStart < 0) {
            props.setCount('Incorrect value!')
        } else if (numberMax > 0 && props.inputStart < 0) {
            props.setCount('Incorrect value!')
        }
    }

    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {

        let numberStart = (Number(e.currentTarget.value))
        props.setInputStart(numberStart)
        if (numberStart > props.inputStart) {
            props.setChangeIncrement(true)
            props.setChangeReset(true)
        }
        props.setCount('Enter values and press "set"')
        if (numberStart < 0 && props.inputMax > 0) {
            props.setCount('Incorrect value!')
        } else if (numberStart === props.inputMax) {
            props.setCount('Incorrect value!')
        } else if (numberStart > props.inputMax) {
            props.setCount('Incorrect value!')
        } else if (props.inputMax < 0 && numberStart < 0) {
            props.setCount('Incorrect value!')
        }
    }

    let disabledSettingsButton = props.inputStart === props.inputMax ||
        props.inputStart < 0 ||
        props.inputMax < 0 ||
        props.inputStart > props.inputMax ||
        props.count === props.inputStart ||
        props.count <= props.inputMax

    return (
        <div className={css.settings}>
            <div className={css.settingsDisplay}>
                <div>
                    <span>Max value: </span>
                    <input type={'number'}
                           onChange={onChangeMaxValue}
                           value={props.inputMax}
                           className={props.inputMax < 0 ||
                           props.inputStart === props.inputMax ? css.error : css.input_max}/>
                </div>
                <div>
                    <span>Start value: </span>
                    <input type={'number'}
                           onChange={onChangeStartValue}
                           value={props.inputStart}
                           className={props.inputStart < 0 ||
                           props.inputStart === props.inputMax ||
                           props.inputStart > props.inputMax ? css.error : css.input_start}/>
                </div>
            </div>
            <div className={css.buttonSettings}>
                <Buttons title={'settings'}
                         disabled={disabledSettingsButton}
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

export default SettingsDisplay;