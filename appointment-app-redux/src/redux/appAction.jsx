import { type } from "@testing-library/user-event/dist/type"

export const doctoraTiklayinca=(id)=>({type:"DOCTORCLICK",payload:id})
export const hastaSil=(id)=>({type:"HASTASIL",payload:id})
export const change=(id)=>({type:"CHANGE",payload:id})
export const post=(input)=>({type:"POST",payload:input})
export const  tikla =()=>({type:"TIKLA"})
export const hastayatiklayinca=(id)=>({type:"HASTACLICK",payload:id})
