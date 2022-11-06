import Repo from './Components/Pages/Repos/Repo'
import Page404 from './Components/Pages/Page404'
import Navigations from './Components/Navigations/Navigations';
import './App.css'
import HeaderComponent from './Components/Header/Header';
import Githubprofile from './Components/Pages/GithubProfile/GitHubProfile';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import ErrorFallback from './Components/Pages/ErrorBoundary/ErrorFallback';
import Repos from './Components/Pages/Repos/Repos'
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';


function Bomb() {
  throw new Error('💥 CABOOM 💥')
}

function App() { 
  const [explode, setExplode] = useState(false)

  return (
    <HelmetProvider>
    <div className='body'>
    <div className='app-container'>
     <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
    <HeaderComponent />
    <Navigations setExplode={setExplode}/> 
   <Routes>
       <Route path='Repo' element={<Repo/>}/>
      <Route path='/' element={<Githubprofile/>}/>
      <Route path='Githubprofile' element={<Githubprofile/>}/>
      <Route path='/:repoName' element={<Repos/>} />
      <Route path='*' element={<Page404/>}/>
   </Routes>
   {explode ? <Bomb /> : null}
   </ErrorBoundary>
  </div>
  </div>
  </HelmetProvider>
  );
}

export default App;

