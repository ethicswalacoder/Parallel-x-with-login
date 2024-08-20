import React, { useEffect, useState } from 'react'
import './login.css';
import cogoToast from 'cogo-toast';
import { Link } from 'react-router-dom';
import Login from './Login';

const Signin = () => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    // const [phoneNo, setPhoneNo] = useState("");
    const [emailId, setEmailId] = useState("");

    // Handle Login is for user login..
    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const body = { userName, passWord };
    //         const res = await fetch("http://localhost:5000/postjwtlogin", {
    //             method: "POST",
    //             headers: { "content-Type": "application/json" },
    //             body: JSON.stringify(body)
    //         })
    //         const result = await res.json();
    //         console.log(`${result.mountainjwt} Login `);
    //         if (result.mountainjwt !== undefined) {
    //             cogoToast.success("You Login Successfully!", {
    //                 position: 'top-center',
    //                 heading: 'Successs'
    //             });
    //             setUserName("");
    //             setPassWord("");
    //             window.location.replace('https://ethicswalacoder.com');

    //         } else {
    //             cogoToast.error(`Your Login is  ${result.mountainjwt}!`, {
    //                 position: 'top-center',
    //                 heading: 'Error'
    //             });
    //             setUserName("");
    //             setPassWord("");
    //         }



    //     }
    //     catch (err) {
    //         console.log(err.message);
    //     }

    // }
    const handleSignin = async (e) => {
        e.preventDefault();

        try {
            const body = { userName, passWord, emailId };
            const res = await fetch("http://localhost:5000/usersignin", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            const result = await res.json();

            console.log(result);

            if(passWord ==='' && userName === ''){
                cogoToast.warn("Enter your Username and Password", {
                    position: 'top-center',
                    heading: 'Warning'
                });
            }
            else if (res.status === 400) {
                

                cogoToast.error("This User is Already Exist", {
                    position: 'top-center',
                    heading: 'Error'
                });
               setUserName("");
                setEmailId("");
                setPassWord("");

            } else {
                cogoToast.success("User Created Successfully!", {
                    position: 'top-center',
                    heading: 'Successs',
                    hideAfter: 2000
                });

                setUserName("");
                setEmailId("");
                setPassWord("");
                setTimeout(()=>{
                    window.location.href= "/";
                }, 3000)
                
                
            }

        } catch (err) {
            console.log(err.message);


        }
    }



    return (
        <div className="container">
            <div className="form_container">
                <h2>Sign in</h2>
                <form action="">
                    <div className="control">
                        <label htmlFor="name">UserName</label>
                        <input type="text" name="UserName" id="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    {/* <div className="control">
                        <label htmlFor="phone">PhoneNo.</label>
                        <input type="number" name="UserName" id="phone" value={phoneNo}  />
                    </div> */}
                    <div className="control">
                        <label htmlFor="email">EmailId</label>
                        <input type="email" name="EmailId" id="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                    </div>
                    <div className="control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                    </div>
                    {/* <span><input type="checkbox" />&nbsp;Remember me.</span> */}
                    <div className="control">
                        <button onClick={handleSignin} >Sign In</button>
                    </div>
                </form>
                <div className="link">
                    <Link to="/login">Ask for any help ?, Login</Link>
                </div>
            </div>

        </div>
    )
}

export default Signin
