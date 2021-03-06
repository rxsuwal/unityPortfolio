import React from 'react'

import styles from './Input.module.scss'

const Input = (props) => {

    let inputElement = null;
    const inputStyles = [styles.inputElement]

    if(props.invalid  && props.shouldValidate && props.touched){
        inputStyles.push(styles.invalidInput)
    }

    switch (props.elementType){
        case ('input'):
            inputElement = <input className={inputStyles.join(' ')} 
                                    {...props.elementConfig} 
                                    value={props.value}  
                                    onChange={props.changed}/>
            break;

        case ('textarea'):
            inputElement =<textarea className={inputStyles.join(' ')} 
                                    {...props.elementConfig} 
                                    value={props.value} 
                                    onChange={props.changed}/>
            break
        

        default:
            inputElement =<input className={inputStyles.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}/>
    }

    return (
        <div className={styles.input}> 
            <label className={styles.label}>
              {props.label}
            </label>

            {inputElement}
            
        </div>
    )
}

export default Input
