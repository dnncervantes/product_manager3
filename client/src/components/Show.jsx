import React, {useEffect,useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const Show = (props) => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
}, [])

const deleteProduct = (deleteId) => {
    axios.delete("http://localhost:8000/api/products/delete/" + deleteId)
        .then(res => {
            console.log(res.data);
            //Remove 
            setProducts(products.filter( (product) => product._id !== deleteId));
        })
        .catch(err => console.log(err))
}


    return(
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return(
                        <div key={index}>
                            <Link to={`/view/${product._id}`}><h4>{product.title}</h4></Link>
                            <button><Link to={"/update/"+ product._id}>Edit</Link></button>
                            <button onClick={() =>deleteProduct(product._id)}>Delete</button>
                        </div>
                    )
                }) 
            }
        </div>
    )
}
export default Show
