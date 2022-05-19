import {useState, useEffect} from 'react'
import axios from 'axios';
import Show from '../components/Show';


const Home = (props) => {
    return(
        <div>
            <h1>Product Manager</h1>
            <hr/>
            <Show />
        </div>
    )
}
export default Home