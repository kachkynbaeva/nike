import {useForm} from 'react-hook-form';
import axios from "axios";
import Header from "../Components/Header";

const Admin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {},
    } = useForm()

     const onSubmit = (data) => {
         axios.post('https://api.cloudinary.com/v1/_1/129864361427271/image/upload')
            .then(({data}) => console.log)
    }

    const handleUpload = (e) => {
        const formData = new FormData ();
        formData.append('file',e.target.files[0])
        formData.append('upload_preset','gallery')
        formData.append('cloud_name','dzvr5otpz')
        axios.post('https://api.cloudinary.com/v1/_1/dzvr5otpz/image/upload',formData)
            .then(({data}) => console.log(data))
    }

    return (
        <div>
            <Header />
            <h1>Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '400px',
                alignItems: 'center',
                margin: '20px auto 10px'
                }}>
                  <input type="file" onChange={handleUpload} />
                   <input placeholder={'Name'} {...register("name")}/>
                    <input placeholder={'Price'} {...register("price")}/>
                    <input placeholder={'Description'} {...register("description")}/>
                    <button type={'submit'}>
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Admin;