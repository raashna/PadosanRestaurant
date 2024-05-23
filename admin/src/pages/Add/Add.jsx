import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image,setImage] =useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Beverages"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Beverages"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required />
        </div>
        <div className='add-product-name flex-col'>
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className='add-product-description flex-col'>
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className='add-category-price'>
            <div className='add-category flex-col'>
                <p>Product category</p>
                <select onChange={onChangeHandler} name='category'>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Pasta And Burger">Pasta And Burger</option>
                    <option value="Combos">Combos</option>
                    <option value="Salad And Papad">Salad And Papad</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Soup Non Veg">Soup Non Veg</option>
                    <option value="Veg Rolls">Veg Rolls</option>
                    <option value="Non-Veg Rolls">Non-Veg Rolls</option>
                    <option value="Noodles">Noodles</option>
                    <option value="Noodles Non Veg">Noodles Non Veg</option>
                    <option value="Chillies And More Veg">Chillies And More Veg</option>
                    <option value="Chillies And More Non Veg">Chillies And More Non Veg</option>
                    <option value="Indian Rice">Indian Rice</option>
                    <option value="Dal">Dal</option>
                    <option value="Biryani">Biryani</option>
                    <option value="Indian Vegetables (Sabji)">Indian Vegetables (Sabji)</option>
                    <option value="Paneer">Paneer</option>
                    <option value="Indian Egg">Indian Egg</option>
                    <option value="Jalpriya">Jalpriya</option>
                    <option value="Mutton Bahar">Mutton Bahar</option>
                    <option value="Murg">Murg</option>
                    <option value="Roti">Roti</option>
                    <option value="Roti (Non Veg)">Roti (Non Veg)</option>
                    <option value="Tandoor (Veg)">Tandoor (Veg)</option>
                    <option value="Tandoor (Non-Veg)">Tandoor (Non-Veg)</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product price</p>
                <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='Rs.20' />
            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
