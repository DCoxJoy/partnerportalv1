import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {createAsset, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

function NewAsset() {
    const {user} = useSelector((state) => state.auth)
    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.assets)

    const [name] = useState(user.name)
    const [email] = useState(user.email)  
    const [product, setProduct] = useState('Cases') 
    const [description, setDescription] = useState('') 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            dispatch(reset())
            navigate('/assets')
        }
        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createAsset({product, description}))
    }

    if(isLoading) {
        return <Spinner />
    }
    return (
        <>
        <BackButton url='/' />
          <section className='heading'>
              <h1>Create New Asset</h1>
              <p>Please fill out the form below.</p>
          </section>

          <section className='form'>
              <div className='form-group'>
                  <label htmlFor="name">Customer Name</label>
                  <input type='text' className='form-control' value={name} disabled></input>
              </div>
              <div className='form-group'>
                  <label htmlFor="name">Customer Email</label>
                  <input type='email' className='form-control' value={email} disabled></input>
              </div>
              <form onSubmit={onSubmit}>
                  <div className='form-group'>
                  <label htmlFor="product">Product</label>
                  <select name='product' id='product' value={product} onChange={(e) => setProduct(e.target.value)}>
                    <option value='Cases'>Cases</option>
                    <option value='Mounts'>Mounts</option>
                    <option value='Kiosks'>Carts</option>
                    <option value='Cases'>Kiosks</option>
                  </select>
                  </div>
                  <div className='form-group'>
                      <label htmlFor='description'>Description of assets needed</label>
                      <textarea name='description' id='description' className='form-control' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                  </div>
                  <div className='form-group'>
                      <button className='btn btn-block'>Submit</button>
                  </div>
              
              </form>
          </section>


        </>
    )
}

export default NewAsset
