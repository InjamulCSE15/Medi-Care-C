import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";




Modal.setAppElement('#root')


const BookForm = ({ modalIsOpen, closeModal, bookingOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal();
        alert('Your Appointment Successfully Done');
        data.service = bookingOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Your appointment created successfully.');
                }
            })

    }
    return (
        <div className="container"> <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="container mt-5 card"
        >
            <h2 className="text-center p-4">{bookingOn}</h2>
            <h4 className="text-center">ON {date.toDateString()}</h4>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group p-2">
                    <input type="text" className="form-control" placeholder="Enter your name" name="name"{...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group p-2">
                    <input type="text" className="form-control" placeholder="Enter your phone number" name="phone"{...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group p-2">
                    <input type="text" className="form-control" placeholder="Enter your email" name="email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group row p-2">
                    <div className="col-4">
                        <select className="form-control" name="gender"{...register("gender", { required: true })} >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                        {errors.gender && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <div className="form-group mt-5 text-center">
                    <button type="submit" className="btn btn-outline-primary">Request</button>
                </div>
            </form>
        </Modal>
        </div>
    );
};

export default BookForm;