import React, { useEffect, useState } from 'react'
import './login.css';
import cogoToast from 'cogo-toast';
import {  Link} from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    // Handle Login is for user login..
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const body = { userName, passWord };
            const res = await fetch("http://localhost:5000/postjwtlogin", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            const result = await res.json();
            console.log(`${result.mountainjwt} Login `);
            if (result.mountainjwt !== undefined && userName !== '') {
                localStorage.setItem("token", result.mountainjwt);
                cogoToast.success("You Login Successfully!", {
                    position: 'top-center',
                    heading: 'Successs',
                    hideAfter: 2000
                });
                setUserName("");
                setPassWord("");
                
                setTimeout(()=>{
                window.location.replace('https://ethicswalacoder.com');
            },3000);

            } else {
                cogoToast.error(`Your Login is undefined!`, {
                    position: 'top-center',
                    heading: 'Error'
                });
                setUserName("");
                setPassWord("");
            }



        }
        catch (err) {
            console.log(err.message);
        }

    }



    return (
        <div className="container">
            <div className="form_container">
                <h2>Login</h2>
                <form action="">
                    <div className="control">
                        <label htmlFor="name">UserName</label>
                        <input type="text" name="UserName" id="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                    </div>
                    <span><input type="checkbox" />&nbsp;Remember me.</span>
                    <div className="control">
                        <button onClick={handleLogin} >Login</button>
                    </div>
                </form>
                <div className="link">
                    <Link to="/signin">Forgot Password ?, SignIn</Link>
                </div>
            </div>

        </div>
    )
}

export default Login
