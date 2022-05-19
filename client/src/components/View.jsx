import React, {useEffect,useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const View = (props) => {

    const[products, setProducts] = useState([])

    const{id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/find/" + id)
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
}, [id])


    return(
        <div>
            <h3>Title: {products.title}</h3>
            <h3>Price: ${products.price}</h3>
            <h3>Description: {products.description}</h3>
        </div>
    )
}
export default View