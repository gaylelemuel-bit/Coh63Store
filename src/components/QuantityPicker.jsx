import "./QuantityPicker.css";
import {useState} from "react";

function QuantityPicker(){

    const[quantity, setQuantity] = useState(1);
    //      name       function            intital value 
    //quantity = 2; //this wont work in react
    //we need to setQuantity to update value
    function handleIncrease(){
        let value = quantity + 1;
        setQuantity(value);
    }
    function handleDecrease(){
        let tempValue = quantity - 1;
        if(tempValue ===0){
            return;
        }
        setQuantity(tempValue);
    }
    return(
        <div className="quanity-picker">
            <button onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;