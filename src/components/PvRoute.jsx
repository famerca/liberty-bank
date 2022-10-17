import { Navigate } from "react-router-dom"

const PvRoute = ({user, children}) => {
    if(!user)
        return <Navigate to='/login'/>
    return children
}

export default PvRoute;