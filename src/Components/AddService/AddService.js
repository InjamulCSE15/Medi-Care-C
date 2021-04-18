import React, { useState } from 'react';
import SideBar from '../DashBoard/SideBar/SideBar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('img', file);
        formData.append('subject', info.name);
        formData.append('visitingHour', info.time);
        formData.append('price', info.price);
        formData.append('totalSpace', info.space);

        fetch('http://localhost:5000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <SideBar/>
            <div className="col-md-10 me-5 pe-5" style={{ position: "absolute", right: 0, backgroundColor: "#212529" }}>
                <h4 className="App-link">Add a Service</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="name" className="form-control" name="name" placeholder="Enter Service Name" />
                    </div>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="text" className="form-control" name="time" placeholder="Enter Visiting Hours" />
                    </div>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Enter Service Charge" />
                    </div>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="text" className="form-control" name="space" placeholder="Enter Available Space" />
                    </div>
                    <div className="form-group pt-2">
                        <label htmlFor="exampleInputPassword1">Upload an image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-3 text-uppercase">Update</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;