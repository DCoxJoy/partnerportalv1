import {Link} from 'react-router-dom'

function AssetItem({asset}) {
    return (
        <div className='asset'>
            <div>{new Date(asset.createdAt).toLocaleString('en-US')}</div>
            <div>{asset.product}</div>
            <div className={`status status-${asset.status}`}>
                {asset.status}
            </div>
            <Link to={`/asset/${asset._id}`} className='btn btn-reverse btn-sm'>
                View
            </Link>
        </div>
    )
}

export default AssetItem
