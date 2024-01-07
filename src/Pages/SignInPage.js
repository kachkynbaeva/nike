import React from 'react';
import Header from "../Components/Header";
import {useForm} from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},

    } = useForm()
    const navigate = useNavigate()


    const onSubmit = (data) => {
        axios.post(`https://api.escuelajs.co/api/v1/auth/login`,data)
            .then (({data}) => {
                Cookies.set('token',data.access_token)
                localStorage.setItem('token',data.access_token)
                navigate('/admin')
            })
    }
    return (
        <div>
            <Header/>
             <h4>SING IN PAGE</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:'flex'}}>
                    <input placeholder={'Email'} {...register("email")}/>
                    <input placeholder={'Password'} {...register("password")}/>
                    <button type={'submit'}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SignInPage

