import "./GitHubProfile.css";
import { useState, useEffect } from "react";

const Githubprofile = () => {
  const [githubPage, setGithubPage] = useState([]);
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    fetch("https://api.github.com/users/kalonOluwanifemi")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setGithubPage(result.avatar_url);
        setUserName(result.login)
        setName(result.name)
      });
  }, []);

  return (
    <div className="profile-container">
      <div className="img-container">
        <img src={githubPage} />
      </div>
      <p className="username">{username}</p>
      <p className="username">{name}</p>
    </div>
  );
};
export default Githubprofile;
