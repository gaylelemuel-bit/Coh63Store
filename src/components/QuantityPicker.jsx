import "./QuantityPicker.css";
import {useState} from "react";

function QuantityPicker(props){

    const[quantity, setQuantity] = useState(1);
    //      name       function            intital value 
    //quantity = 2; //this wont work in react
    //we need to setQuantity to update value
    function handleIncrease(){
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
    }
    function handleDecrease(){
        let tempValue = quantity - 1;
        if(tempValue ===0){
            return;
        }
        setQuantity(tempValue);
        props.onChange(tempValue);
    }
    return(
        <div className="quantity-picker">
            <button type="button" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button type="button" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;