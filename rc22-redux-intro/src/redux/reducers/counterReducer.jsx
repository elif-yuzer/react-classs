import React from 'react'

const counterReducer = (state={sayac:0,text:""},{type,payload}) => {
    console.log(type,payload);
 

    switch (type) {
        case "INCREASE":
            return {...state, sayac: state.sayac<10 && state.sayac+1 , text:payload}
        case "DECREASE":
     
            return {...state, sayac:state.sayac>0 ? state.sayac-1 : 0 , text:payload}
             case "RESET":
        return{sayac:0, text:payload}
       
    
        default:
          return state
    }

 

}

  
export default counterReducer