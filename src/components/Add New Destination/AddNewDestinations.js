import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewDestination.css'

const AddNewDestinations = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://stark-shore-53835.herokuapp.com/tourpakages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added to Your Card sucessfully');
                    reset();
                }
            })
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >Type Name Of Pakage</label>
                <input {...register("name", { required: true, maxLength: 20 })} /> <br />
                <label >Type Name Of Country</label>
                <input {...register("country")} />
                <br />
                <label >Places wiill be Cover</label>
                <input {...register("places")} />
                <br />

                <label >Describe in Short</label>
                <input {...register("description")} />
                <br />
                <label >Price of pakage</label>
                <input type="number" {...register("Price")} />
                <br />
                <label >Rating out of 5</label>
                <input type="number" {...register("days")} />
                <br />
                <label >image Link</label>
                <input {...register("img1")} />
                <br />
                <label >image Link</label>
                <input {...register("img2")} />
                <br />
                <label >image Link</label>
                <input {...register("img3")} />
                <br />
                <label >Pakage Days</label>
                <input type="number" {...register("days")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewDestinations;