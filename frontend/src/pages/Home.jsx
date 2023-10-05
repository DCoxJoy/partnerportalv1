import { FaImages, FaQuestionCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>Access Your Partner Portal</h1>
                <p>Choose from options below</p>
            </section>

            <Link to='/request-assets' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Request New Assets
            </Link>
            <Link to='/new-asset' className='btn btn-block'>
                <FaImages /> Create New Asset
            </Link>
        </>
    )
}

export default Home
