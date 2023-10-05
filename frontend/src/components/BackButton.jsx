import {FaArrowCircleLeft} from 'react-icons/fa'

import React from 'react'
import {Link} from 'react-router-dom'

const BackButton = ({url}) => {
    return (
        <Link to={url} className='btn btn-reseverse btn-back'>
            <FaArrowCircleLeft />Back
        </Link>
    )
}
export default BackButton