import React from 'react'
import "./Cart.css"
import { TiDelete } from "react-icons/ti"

const Cart = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h2>Your Cart (0 items)</h2>
      <div className="cartBody">
        <div className="subtitle">
          <h4 style={{width: "70%", backgroundColor: "white"}}>Item</h4>
          <h4 style={{width: "10%", backgroundColor: "white"}}>Price</h4>
          <h4 style={{width: "10%", backgroundColor: "white", display: "flex"}}>Quantity</h4>
          <h4 style={{width: "10%", backgroundColor: "white", display: "flex", justifyContent: "flex-end",}}>Total</h4>
        </div>
        <div className="itemList">
          <div style={{height: "100%", width: "15%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{height: "85%", width: "85%"}}>
              <img style={{height: "100%", width: "100%"}} src="./src/components/Screenshot (1).png" alt="" />
            </div>
          </div>
          <div style={{height: "60%", width: "55%", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <h3>Title</h3>
            <h3>Description</h3>
          </div>
          <div style={{height: "60%", width: "10%", display: "flex", alignItems: "center"}}>
            <h2>$</h2>
          </div>
          <div style={{height: "60%", width: "10%", display: "flex", alignItems: "center"}}>
            <div style={{width: "70%", height: "30%", border: "1px solid gray", borderRadius: "10px", display: "flex"}}>
              <div style={{borderRight: "1px solid black", height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>-</div>
              <div style={{borderRight: "1px solid black", height: "100%", width: "40%", display: "flex", alignItems: "center", justifyContent: "center"}}>0</div>
              <div style={{width: "30%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>+</div>
            </div>
          </div>
          <div style={{height: "60%", width: "10%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h2>$</h2>
            <TiDelete style={{cursor: "pointer"}}/>
          </div>
        </div>
        <div className="checkoutContainer">
          <div className="checkoutBody">
            <div className="subtotal">
              <h4>Subtotal</h4>
              <h4>$</h4>
            </div>
            <div className="subtotal">
              <h4>Sales Tax</h4>
              <h4>$</h4>
            </div>
            <div className="subtotal">
              <h4>Grand total</h4>
              <h1>$</h1>
            </div>
            <div className="checkOut">
              <div className="checkOutBtn">
                <h5>Congrats you're eligible for free shipping</h5>
                <hr />
                <button style={{width: "100%", height: "40%", border: "none", background: "black", color: "white", cursor: "pointer"}}>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart