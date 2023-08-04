// import './ApiCard.css'
// import { useEffect,useState } from 'react';



// const ApiCard = () => {
//     const [items, setItems]=useState([])
//     useEffect(()=>{
//         fetch (`https://fakestoreapi.com/products/`)
//         .then (res=>res.json())
//         .then (json=>setItems(json))
//     },[]
//     );
//     console.log



//     return (
//         <div className="cardDiv">
//             <div className="Card">
//                 {
//                     items.map((ele)=>(
//                         <div className="cardChild">
//                             <div className="imageDiv">
//                                 <img className='cardImage' src={ele.image} alt="" />
//                             </div>
//                             <h4>Title: {ele.title}</h4>
//                             <h3>price: ${ele.price}</h3>
//                             <div className="btnDiv">
//                                 <button className='buyBtn'>Buy Now</button>
//                                 <button className='addBtn'>Add to Cart</button>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }
 
// export default ApiCard;