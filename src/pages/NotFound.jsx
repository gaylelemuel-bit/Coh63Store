import { Link } from "react-router-dom"

function NotFound(){
    return (
        <div className='mb-4 p-5'>
            <h1 className="display-1 fw-bold text-danger mb-0"><strong> 404 Error:</strong> Page Not Found</h1>
            <h2 className="fw-bold text-dark m-4">Opps!</h2>
            <p>The page you’re looking for has wandered off like a lost sheep. We’ve looked everywhere, but frankly, even the most righteous links can go astray.  </p>
            <li className="list-group-item p-4">Did you mistype the URL?(Pride comes before a typo).</li>
            <p>Don't panic. Return to the Garden (Home) | Cast your Search again</p>
            <Link className="btn btn-success btn-lg px-4 gap-3" to='/'>Go Home</Link>
        </div>

    )
}

export default NotFound 