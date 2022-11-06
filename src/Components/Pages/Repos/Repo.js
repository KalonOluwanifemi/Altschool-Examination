import './Repo.css'
import { useState, useEffect } from "react";
import Pagination from './Pagination'
import { Helmet } from 'react-helmet-async';


const Repo = () => {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3) 

  useEffect(() => {
    setLoading(true)
    fetch("https://api.github.com/users/kalonOluwanifemi/repos")
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setRepos(result);
      });
      setLoading(false)
      
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    
if(loading){
 return <p>Loading...</p>
}

    return (
      <>
       <Helmet>
                <title>Repos</title>
                <meta name="description" content=" Github Repos" />
                <meta
                    name="keywords"
                    content="react-helmet, altschool, github repos, github api, react hooks, pagination"
                />
            </Helmet>
    {currentPosts.map((items)=>{
   return <li key={items.id} className='repo-list'>
    {items.name}
    </li>
  })}

  <Pagination postsPerPage={postsPerPage}
        totalPosts={repos.length}
        paginate={paginate} />
      </>

    );
  };
  export default Repo;
  