import Individual from "../../../components/individual"
import api from "../../../utils/api"
import { verifyIndividual } from "./ActionCreator"


export const handleIndividualVerification = (url,firstname,lastname) => (dispatch) => {
    return new Promise((resolve, reject) => {
        api().get( `https://api.hunter.io/v2/email-finder?domain=${url}&first_name=${firstname}&last_name=${lastname}&api_key=${process.env.REACT_APP_API_KEY}`).then((res) => {
            dispatch(verifyIndividual(res.data))
            resolve(res)
        }).catch((err) => {
            // reject(err)
            return <Individual/>
        })
    })}
