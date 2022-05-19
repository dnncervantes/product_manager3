import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Create = (props) => {

    //navigate back to home page
    const navigate = useNavigate();

// Keep track of what is being typed via useState hook
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");

//Handler when the form is submitted
const onSubmitHandler = e => {
    // Prevent default behavior of the submit
    e.preventDefault();
    // Make a post request to create a new product
    axios.post('http://localhost:8000/api/products/new', {
        title,
        price,
        description
    })
    .then(res => {
        console.log(res.data);
        console.log("Client Success!");
        navigate("/");
    })
    .catch(err => console.log(err))
}
    return(
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
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
                <button>Create</button>

            </form>
        </div>
    )

}
export default Create