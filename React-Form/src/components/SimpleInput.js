import {useRef, useState, useEffect} from "react";
import {getCLS} from "web-vitals";

const SimpleInput = (props) => {
    const usingRef = useRef()
    const [getEnteredName, setEnteredName] = useState('')
    const [getValidation, setValidation] = useState(false)
    const [getTouchableInput, setTouchableInput] = useState(false)
    const [getNameBlurHandler, setNameBlurHandler] = useState(false)

    const nameInputHandler = (event) =>{
        setEnteredName(event.target.value)
        if(event.target.value.trim() === ''){
            setValidation(true)
        }
    }

    useEffect(()=>{
        if(!getValidation){
            console.log('Name input is valid');
        }
    }, [getValidation])

    const formSubmissionHandler = (event) =>{
        event.preventDefault()
        setTouchableInput(true)
        if(getEnteredName.trim() === ''){
            setValidation(true)
            return
        }
        setValidation(false)
        console.log('menggunakan state');
        console.log(getEnteredName)
        // const refObjeck= usingRef.current.value
        // console.log('menggunakan ref');
        // console.log(refObjeck);

        //nameInputRef.current.value = ''; =>Not Ideal, Don't Manipulate The DOM
        setEnteredName('');
    }
    const nameInputBlur = (event)=>{
        setNameBlurHandler(true);
        if(getEnteredName.trim() === ''){
            setValidation(true);
            return;
        }
    }
    const nameInputIsInvalid = getValidation && getTouchableInput
    const nameInputClass = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
            ref = {usingRef}
            type='text'
            id='name'
            onBlur ={nameInputBlur}
            onChange={nameInputHandler} />
      </div>
        {nameInputIsInvalid && <p className={'error-text'}>masukan huruf di input ini </p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
