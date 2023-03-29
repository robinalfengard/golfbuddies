import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import { useAuth } from '../security/AuthContext'




function HeaderComponent() {    

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.logout()
    }

    function CustomLink({ to, children, ...props }) {
  
        const resolvedPath = useResolvedPath(to) 
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
     
       return (
         <li className={isActive ? "active" : ""}>
           <Link to={to} {...props}>
             {children}
           </Link>
         </li>
       )
     }

    return (
        
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href=""></a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {isAuthenticated 
                                        && <CustomLink className="nav-link" to="">Hem</CustomLink>}
                                    
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated 
                                            && <CustomLink className="nav-link" to="/">Min sida</CustomLink>}                                    
                                </li>
                   
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {!isAuthenticated &&
                                    <Link className="nav-link" to="/login">Logga in</Link> }
                            </li>
                            <li className="nav-item">
                                {isAuthenticated &&
                                    <Link className="nav-link" to="/logout" onClick={logout}>Logga ut</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent
 
