import Nav from "../Component/Nav.jsx"
import Style from "../PlaceOrder/PlaceOrder.module.css"
export const PlaceOrder = () => {
  return (
    <div className={Style.container}>
      <div className={Style.nav}>
      <Nav/>
      </div>
     <div className={Style.heading}>
      <h1>Delivery Information</h1>
     </div>
     <div className={Style.form}>
      <form action="">
        <div className={Style.name}>
         <input type="text"  placeholder="First Name"/>
         <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Enter Email"/>
        <input type="text" placeholder="Street"/>
        <div className={Style.address}>
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State" />
        </div>
        <div className={Style.code}>
          <input type="text" placeholder="Pin Code"/>
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number"/>
        <button type="submit">Place Order</button>
      </form>
     </div>
    </div>
  )
}
