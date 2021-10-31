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
                if (res.data?.insertedId) {
                    alert('Added to Your Card sucessfully');
                    reset();
                }
            })
    };
    return (
        <div className="whole-container">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >Type Name Of Pakage</label>
                    <input {...register("name", { required: true, maxLength: 20 })} /> <br />
                    <label >Type Name Of Country</label>
                    <input {...register("country")} />
                    <br />
                    <label >Type the name of places that will be traveled</label>
                    <input {...register("places")} />
                    <br />

                    <label >Write a short description</label>
                    <input {...register("description")} />
                    <br />
                    <label >Price of the pakage</label>
                    <input type="number" {...register("Price")} />
                    <br />
                    <label >Rating out of 5</label>
                    <input type="number" {...register("days")} />
                    <br />
                    <label >image Link 1</label>
                    <input {...register("img1")} />
                    <br />
                    <label >image Link 2</label>
                    <input {...register("img2")} />
                    <br />
                    <label >image Link 3</label>
                    <input {...register("img3")} />
                    <br />
                    <label >Pakage will be completed in Days</label>
                    <input type="number" {...register("days")} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewDestinations;