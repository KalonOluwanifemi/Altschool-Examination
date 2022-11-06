import './Errorfallback.css'
import { Helmet } from 'react-helmet-async'
export default function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div style={{}}>
        <Helmet >
        <title>Something went wrong</title>
      </Helmet>
        <p style={{color:'black', width: '300px', textAlign: 'center', margin: '20px auto',fontSize:'50px'}}>Something went wrong:</p>
        <pre style={{color:'black', width: '300px', textAlign: 'center', margin: '20px auto',fontSize:'50px'}}>{error.message}</pre>
        <button style={{color:'black', width: '300px', textAlign: 'center', margin: '20px auto',fontSize:'50px', textAlign: 'center', backgroundColor:'white', margin:'10px auto'}} onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }