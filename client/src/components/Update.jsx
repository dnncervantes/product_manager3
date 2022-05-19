import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Update = (props) => {

    const {id} = useParams();

    //navigate back to home page
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //Data from DB and put it in state for prefilled info
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/find/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => {
                console.log(err);
            })
}, [id])


    //Handler when the form is submitted
const updateProduct = e => {
    // Prevent default behavior of the submit
    e.preventDefault();
    // Make a post request to create a new product
    axios.put('http://localhost:8000/api/products/update/'+ id, {
        title,
        price,
        description
    })
    .then(res => {
        console.log(res.data);
        navigate("/");
    })
    .catch(err => console.log(err))
}


    return (
        <div>
            <h2>Update</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title </label><br/>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </p>
                <button>Update</button>

            </form>
        </div>
    )
}

export default Update