import './Page404.css'
import { Helmet } from 'react-helmet-async';
const Page404 = () =>{
    return(
        <div className="page404-container">
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <p>OOPS YOU'VE NAVIGATED TO A WRONG ROUTE <span>!!!</span></p>
            <p>ERROR 404!</p>
        </div>
    )
}
export default Page404;