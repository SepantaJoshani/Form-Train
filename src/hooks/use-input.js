import { useState } from "react"
const useInput = (validation)=>{

    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const enteredValueIsValid =validation(enteredValue)
    const hasError =!enteredValueIsValid && isTouched

    const valueChangeHandler = event => setEnteredValue(event.target.value)
    const valueBlurHandler = () =>setIsTouched(true)

    const resetFormHandler = ()=>{
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value:enteredValue,
        valueIsValid:enteredValue,
        touched:isTouched,
        error:hasError,
        change:valueChangeHandler,
       Blur: valueBlurHandler,
       reset: resetFormHandler
    }



}

export default useInput