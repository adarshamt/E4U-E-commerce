import '../Styles/StoreSignin.css'
import Navbars from '../Componets/Navbar'
import { useNavigate } from 'react-router-dom'


const StoreSignin = () => {

  const link = useNavigate()

    
  const nav = useNavigate()
  return (<>
        <Navbars/>
    <div className='Main_div'>
        
        <div className="subscription-form">
          
        <h2>Login <span>E4U store</span> </h2>
        <form>
          <input  type="email" placeholder="email" required/>
          <input type="email" placeholder="password" required/>
          <button onClick={()=>link('/storeowner')} type="submit">login</button>
          
        </form>
          <p >Register  </p><button className='str_login_btn' onClick={()=>nav('/storesignup')} >Sign up</button>
      </div>


    </div>

    </>
  )
}

export default StoreSignin