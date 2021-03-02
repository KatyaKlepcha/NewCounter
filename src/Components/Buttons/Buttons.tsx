import React, {useEffect} from 'react';
import css from './Buttons.module.css'

type ButtonsPropsType = {
    title: string
    disabled: boolean
    count: number
    setCount: (number: number) => void
    inputStart: number
    inputMax: number
    setInputMax: (number: number) => void
    changeIncrement: boolean
    changeReset: boolean
    setChangeIncrement: (boolean: boolean) => void
    setChangeReset: (boolean: boolean) => void
}

const Buttons = (props: ButtonsPropsType) => {
    useEffect(() => {
        let storageMax = localStorage.getItem('inputMax')
        if (storageMax) {
            let newStorageMax = JSON.parse(storageMax)
            props.setInputMax(newStorageMax)
        }
    }, [])

    const buttonsClick = () => {
        if (props.title === 'increment') {
            increment()
        } else if (props.title === 'reset') {
            reset()
        } else if (props.title === 'settings') {
            settings()
        }
    }

    const increment = () => {
        if (props.count < props.inputMax) {
            props.setCount(props.count + 1);
        }
    }

    const reset = () => {
        props.setCount(props.inputStart)
    }
    const settings = () => {
        localStorage.setItem('inputMax', JSON.stringify(props.inputMax))
        props.setCount(props.inputStart);
        props.setChangeIncrement(false)
        props.setChangeReset(false)
    }

    return (
        <div>
            <button onClick={buttonsClick}
                    disabled={props.disabled}
                    className={css.buttons}>{props.title}

            </button>
        </div>
    );
};

export default Buttons;