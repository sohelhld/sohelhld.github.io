import {  SIDEBARTOGEL, STICK } from "./actionType"

const initial={
    static:false,
    sidebarTogel:false
}

export const ScrollReducer=(state=initial,{type,payload} )=>{

switch (type) {
    case STICK:{
        return{
            ...state,
            static:payload
        }
    }
    case SIDEBARTOGEL:{
        return {
            ...state,
            sidebarTogel:payload
        }
    }
        
   

    default:
        return state
}

}