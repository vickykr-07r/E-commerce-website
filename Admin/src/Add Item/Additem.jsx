import React from 'react'
import Style from "../Add Item/Additem.module.css"
import Nav from '../Component/Nav.jsx'
import SideBar from '../Component/SideBar.jsx'
import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AdminContext } from '../Context/AuthContext.jsx'
export const Additem = () => {
  let [image,setImage]=useState({
  image1:"",
  image2:"",
  image3:"",
  image4:""
  })
  const [preview, setPreview] = useState({
  image1: "",
  image2: "",
  image3: "",
  image4: ""
});

  let[data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"",
    subCategory:"",
    sizes:"",
    bestSeller:false
  })

  let {serverUrl}=useContext(AdminContext);

  let ref1=useRef();
  let ref2=useRef();
  let ref3=useRef();
  let ref4=useRef();

  function handleimage(e, key) {
  const file = e.target.files[0];

  if (file) {
    setImage((prev) => ({
      ...prev,
      [key]: file,
    }));

    setPreview((prev) => ({
      ...prev,
      [key]: URL.createObjectURL(file),
    }));
  }
}

  function handledata(e){
   setData({...data,[e.target.name]:e.target.value})
  }

  async function handlesubmit(e){
    e.preventDefault()
    try {
      let formData=new FormData()
      formData.append("name",data.name);
      formData.append("description",data.description);
      formData.append("category",data.category);
      formData.append("subCategory",data.subCategory);
      formData.append("price",data.price);
      formData.append("sizes",JSON.stringify(data.sizes));
      formData.append("bestSeller",data.bestSeller);
      formData.append("image1",image.image1);
      formData.append("image2",image.image2);
      formData.append("image3",image.image3);
      formData.append("image4",image.image4);
      let result=await axios.post(`${serverUrl}/api/product/addproduct`,formData,{withCredentials:true})
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const placeholder="https://thfvnext.bing.com/th/id/OIP.Rbs86DIG2bR45PRUIqP_XgHaHa?w=186&h=186&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.3&pid=1.7&rm=3"
  return (
    <>
    <div className={Style.container}>

         <div className={Style.nav}>
         <Nav/>
         </div>

         <div className={Style.box}>
          <div className={Style.boxleft}>
           <SideBar/>
          </div>

          <div className={Style.boxright}>
           <h1>Add Product Page</h1>
           <div className={Style.inputimage}>
             <h2>Upload Image</h2>
             <div className={Style.imagebox} onClick={()=>{ref1.current.click()}}>
              <img src={preview.image1 || placeholder} alt="" />
             </div>
             <div className={Style.imagebox} onClick={()=>{ref2.current.click()}}>
              <img src={preview.image2 || placeholder} alt="" />
             </div>
             <div className={Style.imagebox} onClick={()=>{ref3.current.click()}}>
               <img src={preview.image3 || placeholder} alt="" />
             </div>
             <div className={Style.imagebox} onClick={()=>{ref4.current.click()}}>
               <img src={preview.image4 || placeholder} alt="" />
             </div>
           </div>

           <div className={Style.form}>
            <form onSubmit={handlesubmit}>
             <input type="file" hidden accept="image/*" ref={ref1} onChange={(e)=> handleimage(e,"image1")}/>
             <input type="file" hidden accept="image/*" ref={ref2} onChange={(e)=> handleimage(e,"image2")}/>
             <input type="file" hidden accept="image/*" ref={ref3} onChange={(e)=> handleimage(e,"image3")}/>
             <input type="file" hidden accept="image/*" ref={ref4} onChange={(e)=> handleimage(e,"image4")}/>

             <label htmlFor="">Product Name</label>
             <input type="text" placeholder='Enter product name' value={data.name} onChange={handledata} name='name'/>

             <label htmlFor="">Product Description</label>
             <textarea  value={data.description} onChange={handledata} name='description' placeholder='Write about product'/>

             <label htmlFor="">Product Category</label>
             <select name="category"  value={data.category} onChange={handledata}>
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
             </select>

             <label htmlFor="">Sub-Category</label>
             <select name="subCategory" value={data.subCategory} onChange={handledata}>
              <option value="">Select SubCategory</option>
              <option value="Topwear">Top Wear</option>
              <option value="Bottomwear">Bottom Wear</option>
              <option value="Winterwear">Winter wear</option>
             </select>

             <label htmlFor="">Product price</label>
             <input type="number" value={data.price} placeholder='Enter Price' onChange={handledata} name='price'/>

             <label htmlFor="">Product Size</label>
             <select name="sizes" value={data.sizes} onChange={handledata}>
               <option value="">Select Sizes</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
             </select>

           <label className={Style.checkboxLabel}>
  <input
    type="checkbox"
    checked={data.bestSeller}
    onChange={(e) =>
      setData({ ...data, bestSeller: e.target.checked })
    }
    name="bestSeller"
  />
  Best Seller
</label>

             <button type="submit" className={Style.submitBtn}> Add Product</button>
            </form>
          
           </div>
          
           
          </div>
          
         </div>

        </div>
    </>
  )
}
