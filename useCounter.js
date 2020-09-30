import { useState } from "react"


export const useCounter = (Stateinicial=10) => {
     
    const [state, setstate] = useState(Stateinicial);
    const increm= ( )=>{
        setstate(state+1);

    }
    const decrem= ( )=>{
        setstate(state-1);

    }
    const reset= ( )=>{
        setstate(Stateinicial);

    }
    return{
        state,
        increm,
        decrem,
        reset
    }
}
