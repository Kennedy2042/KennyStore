import { useState } from "react";
import "./Card.css"
// import { useSelector } from "react-redux";

const Card = () => {
    // const apidata = useSelector((state)=>state.ecommerce.allProduct)
    const [jewelry, setJewelry] = useState(false)
    const [men, setMen] = useState(false)
    const [women, setWomen] = useState(false)
    const [electronic, setElectronic] = useState(false)
    const [seeAll, setSeeAll] = useState(true)
    // console.log(apidata)
    return (
        <>
            <div className="productBody">
                <div className="aboutUs">
                    <div className="about"></div>
                </div>
                <h1 style={{padding: "15px"}}>Top Categories</h1>
                <hr />
                <div className="cardHolder">
                    <ul style={{display:"flex", width: "60%", justifyContent: "space-between", paddingLeft: "4%"}}>
                        <li className= {
                            jewelry? "Active": null
                        }
                        onClick={() => {
                            setJewelry(true)
                            setMen(false)
                            setWomen(false)
                            setSeeAll(false)
                            setElectronic(false)
                        }}>Jewelry</li>
                        <li className={
                            men? "Active": null
                        }onClick={
                            ()=>{
                                setMen(true)
                                setJewelry(false)
                                setWomen(false)
                                setSeeAll(false)
                                setElectronic(false)
                            }
                        }>Men's Clothing</li>
                        <li className={
                            women? "Active": null
                        }onClick={
                            ()=>{
                                setWomen(true)
                                setMen(false)
                                setSeeAll(false)
                                setJewelry(false)
                                setElectronic(false)
                            }
                        }>Women's clothing</li>
                        <li className={
                            electronic? "Active": null
                        }onClick={
                            ()=>{
                                setElectronic(true)
                                setMen(false)
                                setSeeAll(false)
                                setJewelry(false)
                                setWomen(false)
                            }
                        }>Electronics</li>
                        <li className={
                            seeAll? "Active": null
                        } onClick={
                            ()=>{
                                setSeeAll(true)
                                setElectronic(false)
                                setMen(false)
                                setJewelry(false)
                                setWomen(false)
                            }
                        }>See all</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Card;