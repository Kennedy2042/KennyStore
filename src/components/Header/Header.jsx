import { useState } from 'react'
import './Header.css'
import { AiOutlineSearch, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegUserCircle } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const [user, setUser] = useState(false)
    const Nav = useNavigate()


    return (
        <>
        <header>
            <div className='centerHeader'>
                <h2>Shop with <span style={{color: "red"}}>Kenny</span> </h2>
                <ul className='headerUl'>
                    <li className='headerLi'>Home</li>
                    <li className='headerLi'>Product</li>
                    <li className='headerLi'>Services</li>
                    <li className='headerLi'>Contact</li>
                </ul>
                <div className='iconsDiv'>
                    <div className="iconImgDiv">
                        {/* <AiOutlineHome className='iconImg'/> */}
                        <AiOutlineSearch className='iconImg'/>
                        <AiOutlineShoppingCart className='iconImg' onClick={
                            ()=>{
                                Nav("/cart")
                            }
                        }/>
                        <div className="qtyCircle">0</div>
                        <FaRegUserCircle className='iconImg' onMouseOver={() => {
                            setUser(true)
                        }}/>
                    </div>
                </div>
            </div>
        </header>
        {
            user?<div className="dropDown" onMouseLeave={() => {
                setUser(false)
            }}>
            <Link to="/login">
                <li style={{cursor: "pointer", listStyle: "none"}}>Login</li>
            </Link>

            <Link to="/signup">
                <li style={{cursor: "pointer", listStyle: "none"}}>Sign Up</li>
            </Link>
        </div>: null
        }
        </>
    );
}
 
export default Header;




















