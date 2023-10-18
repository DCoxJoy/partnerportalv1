import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAssets, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import AssetItem from '../components/AssetItem'

function Assets() {
    const {assets, isLoading, isSuccess} = useSelector((state) => state.assets )

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getAssets())
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
          <BackButton url='/'/>
            <h1>My Assets</h1>
            <div className="assets">
                <div className="asset-headings">
                    <div>Date</div>
                    <div>Product</div>
                    <div>Status</div>
                    <div></div>
                </div>
                {assets.map((asset)=>(
                    <AssetItem key={asset._id} asset={asset}/>
                ))}
            </div>
        </>
    )
}

export default Assets
