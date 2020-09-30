import { useState } from "react"

export const useForm = (estadoInicial={}) => {

    const [values, setstate] = useState(estadoInicial)

    const Reset = ()=>{
        setstate(estadoInicial)

    }
    const H = ({target})=>{

        setstate({
            ...values,
            [target.name]: target.value
        })
    

}
return[values,H,Reset];



}
