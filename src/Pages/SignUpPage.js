import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import React from "react";


const SignUpPage = () =>{
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const newData ={
            ...data,
            avatar: "https://i.imqur.com/vhW6Yw1.jpq",
        }
        axios.post('https://api.escuelajs.co/api/v1/users/',newData)
            .then(({data})=> navigate('/sign-in'))
    }
    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    gap: '10px',
                    width: '400px',
                    alignItems: 'center',
                    margin: '20px auto 10px'
                }}>
                    <input placeholder={'Name'} {...register("name")}/>
                    <input placeholder={'Email'} {...register("email")}/>
                    <input placeholder={'Password'} {...register("Password")}/>
                    <button type={'submit'}>
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SignUpPage