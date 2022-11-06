import './Pagination.css'
const Pagination = ({  postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

    return (
        <nav className='navigation'>
      <ul className="unordered-list">
        {pageNumbers.map(number => (
          <li key={number} className='list-items'>
            <a onClick={() => paginate(number)} href='#' className="anchor-tag">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav> 
    )
}
export default Pagination
