import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Repos = () => {
    const [loading, setLoading] = useState(false)
const {repoName} = useParams()

useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/kalonOluwanifemi/repos/${repoName}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      });
      setLoading(false)
      
  }, []);

console.log(repoName)

  return (
    <div>Repos</div>
  )
}

export default Repos