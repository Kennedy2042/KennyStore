import { useSelector } from "react-redux";
import "./LandingPage.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { items } from "../Redux/ProductState";
import axios from "axios";
import Card from "../Cards/Card";

const LandingPage = () => {
    const apiDATA = useSelector((state) => state.apiProducts.product)
    const dispatch = useDispatch()
    // accepts an object that represents the type of action we want to execute when it is called
    const url = "https://fakestoreapi.com/products"
    const getApi = () => {
        axios.get(url)
            .then(res => dispatch(items(res.data)))
    }
    useEffect(() => {
        getApi()
    }, [])
    console.log(apiDATA)
    // const url = "https://fakestoreapi.com/products"

    // const getApi = () => {
    //     axios.get(url)
    //         .then(res => console.log(res))
    // }
    // getApi()

    return (
        <>
      <Card />
            <div className="cardBody">
                {
                    apiDATA?.map((e) => (
                        <div className="card">
                            <img src={e.image} alt="" />
                            <h3>Price: ${e.price}</h3>
                            <p>Title: {e.title}</p>
                            <div>
                                <button>Buy Now</button>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
}

export default LandingPage;