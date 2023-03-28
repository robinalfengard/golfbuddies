import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../security/AuthContext'

function WelcomeComponent() {

    const {username } = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)


    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                 - <Link to="/">Go here</Link>
            </div>
           
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent