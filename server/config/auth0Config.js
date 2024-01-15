import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience:"http://localhost:8000",
    issuerBaseURL:"dev-hfwz6oy8w6lyzulf.us.auth0.com",
    tokenSigningAlg:"RS256"
})

export default jwtCheck