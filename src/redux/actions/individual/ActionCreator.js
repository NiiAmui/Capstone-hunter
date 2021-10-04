import { Types } from "./Types"
export const verifyIndividual=(data)=>{
    return {
        type: Types.VERIFY_INDIVIDUAL,
        payload: data
    }
}