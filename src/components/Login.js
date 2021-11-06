import React, {useState, useEffect} from 'react';

import { validation } from './Validation';

import { notify } from './Toastify';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./Login.module.css"
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        name: "",
        password: "",
        isAccept: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validation(data, "login"))
        
    }, [data, touched])

    const changeHandler = (event) => {
        if(event.target.name === "isAccept") {
            setData({...data,[event.target.name]: event.target.checked})
        } else {
            setData({...data,[event.target.name]: event.target.value})
        }
        // console.log(data)
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true})
        console.log(touched)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You sign in successfully", "success")
        } else {
            notify("Invalid data!" ,"error")
            setTouched({...touched,
            name:true,
            password:true,
            isAccept:true
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.input}>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} required />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.input}>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} required />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
        
                <div className={styles.checkBox}>
                    <label>I accept the privacy</label>
                    <input type="checkbox" name="isAccept" value={data.isAccept} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.isAccept && touched.isAccept && <span className={styles.checkBoxError}>{errors.isAccept}</span>}
                </div>
                <div className={styles.footer}>
                    <button type="submit" className={styles.button}>Login</button>
                    <Link to="/" className={styles.link}>Sign in</Link>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;