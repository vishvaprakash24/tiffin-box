import React, {  useState } from 'react'
import './Add.css'
import axios from "axios"
import {toast} from 'react-toastify'
import { assets } from '../../assets/assets'


const Add = ({url}) => {
    const [image, setImage]= useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Fast Food"
    })

const onChangeHandler = (event)=> {
        const name= event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))
    }

 const onSubmitHandler = async (event) =>{
     event.preventDefault();
     const formData = new FormData();
     formData.append("name", data.name)
     formData.append("description", data.description)
     formData.append("price", Number(data.price))
     formData.append("category", data.category)
     formData.append("image", image)
     const response= await axios.post(`${url}/api/food/add`, formData);
     if(response.data.success){
        setData({
            name:"",
            description:"",
            price:"",
            category:"Fast Food"
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
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />

            </div> 
            <div className='add-product-name flex-col'>
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type Here' required />
            </div>
            <div className='add-product-description' flex-col>
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='write content here' required></textarea>
            </div>
            <div className='add-category-price'>
                <div className='add-category flex-col'>
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name='category'>
                        <option value="Fast Food">Fast Food</option>
                        <option value="North Indian">North Indian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="South Indian">South Indian</option>
                        <option value="Ice Cream">Ice Cream</option>
                        <option value="Cakes">Cake</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Vrat">Vrat</option>
                    </select>
                </div>
                <div className='add-price flex-col'>
                    <p>Product price</p>
                    <input 
                   onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='₹20' required />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        
        </form>

    </div>
  )
}

export default Add