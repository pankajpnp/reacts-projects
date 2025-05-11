import React, { useEffect, useState } from "react";
import axios from "axios";
function AxiosExample(){
    const [value,setvalue] = useState([]);
    const [data,setdata] = usedata({fname: "",lname:""});
    useEffect(()=>{
        // axios.get()
        // axios.put()
        // axios.post()
        // axios.delete()
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // console.log(response);
            setvalue(Response.data);
        });
    });
    const handlechange =(e) =>{
        e.preventdefault();
        setdata({...data, [e.target.name]:e.trget.value});
    };
    const handlesubmit =(e) =>{
        e.preventdefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((response)=>{
            console.log(response)
        });
    };
    const handleupdate =() =>{
        e.preventdefault();
        axios
        .put("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
        console.log(response);
        }); 
    };
    return(
        <div>
            <h1>Axios Example!!</h1>
            <h2>POST API</h2>
            <form >
            <lable htmlfor="fname">first name</lable>  
            <input name="fname" type="text" onchange={handlechange}/>  
            <br />
            <lable htmlfor="lname">last name</lable>  
            <input name="lname" type="text" onchange={handlechange}/>  
            <br />
            <button onclick={handlesubmit} type="submit">submit</button>
            <button type="submit" onclick={handleupdate}>update</button>
            </form>
                
            <h1>GET API</h1>
            {
                value.map((val) => (
                    <li>{val.title}</li>
                ))

            }
        </div>
        
    )
}