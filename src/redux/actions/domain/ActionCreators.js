import { Types } from "./Types"
export const verifyDomain=(data)=>{
    return {
        type: Types.VERIFY_DOMAIN,
        payload: data
    }
}
