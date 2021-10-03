import Main from "../../../components/main"

import api from "../../../utils/api"
import { verifyDomain } from "./ActionCreators"
export const handleDomainVerification = (url) => (dispatch) => {
    return new Promise((resolve, reject) => {
        api().get( `https://api.hunter.io/v2/domain-search?domain=${url}&api_key=${process.env.REACT_APP_API_KEY}`).then((res) => {
            dispatch(verifyDomain(res.data))
            resolve(res)
        }).catch((err) => {
            // reject(err)
            return <Main/>
        })
    })
}