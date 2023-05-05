import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
   <Link to="/" className="site-title">
    Site Name
    </Link>
  
   <ul>
    <CustomLink to="/recepten">Recepten</CustomLink>
    <CustomLink to="/inspiratie">Inspiratie</CustomLink>
    <CustomLink to="/about">About</CustomLink>
    <CustomLink to="/login">Login</CustomLink>
    <CustomLink to="/signup">Signup</CustomLink>
    <CustomLink to="/profile">Profile</CustomLink>
    
   </ul>
   </nav>
    )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to) 
  const isActive = useMatch({ path: resolvedPath.pathname, end: true}) 
  
return (
    <li className={isActive ? "active" : ""}>
    <Link to={to}{...props}>
        {children}
        </Link>
    </li>
)
}