import './Navigations.css'
import { NavLink } from "react-router-dom"
export default function Navigations ({setExplode}){
    return(
        <div className="navigations">
            <NavLink id='link_styles' to="GithubProfile">GitHubProfile</NavLink>
            <NavLink id='link_styles' to='Repo'>Repos</NavLink>
            <NavLink id='link_styles' onClick={() => setExplode(e => !e)}>ErrorBoundary</NavLink>
        </div>
    )
}
