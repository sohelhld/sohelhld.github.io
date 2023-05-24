import { SIDEBARTOGEL, STICK } from "./actionType"

export const stickNavbar=(d)=>{
return {type:STICK,payload:d}

}

export const sidebartogel=(t)=>{
    return {type:SIDEBARTOGEL,payload:t}
}