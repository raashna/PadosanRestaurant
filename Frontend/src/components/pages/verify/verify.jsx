import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../StoreContext';
import axios  from 'axios';
const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const userId = searchParams.get("userId")

    console.log(success,userId);
    const navigate= useNavigate();
   const {url}=useContext(StoreContext)
 const verifyPayment = async()=>{
  const response = await axios.post(url+"/api/order/verify",{success,userId});
  if(response.data.success){
  navigate("/myorders")
  }else{
    navigate("/")
  }
 }
 useEffect(()=>{
  verifyPayment()
 },[])

  return (
    <div className='verify'>
      <div className='spinner'> </div>

    </div>
  )
}

export default Verify
