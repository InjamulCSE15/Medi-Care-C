import React, { useState } from 'react';
import SideBar from '../../SideBar/SideBar';

const UserReview = () => {
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
        formData.append('name', info.name);
        formData.append('post', info.quote);
        formData.append('from', info.from);
        formData.append('contact', info.phone);

        fetch('https://vast-thicket-09583.herokuapp.com/addreview', {
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
            <SideBar />
            <div className="col-md-10 me-5 pe-5" style={{ position: "absolute", right: 0, backgroundColor: "#212529" }}>
                <h4 className="App-link">My review for this service</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="name" className="form-control" name="name" placeholder="Enter Service Name" />
                    </div>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="text" className="form-control" name="quote" placeholder="Enter your review" />
                    </div>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="text" className="form-control" name="from" placeholder="Where are you from" />
                    </div>
                    <div className="form-group pt-2">
                        <input onBlur={handleBlur} type="text" className="form-control" name="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group pt-2">
                        <label htmlFor="exampleInputPassword1" style={{color: "white"}}>Upload an image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-3 text-uppercase">Send</button>
                </form>
            </div>
        </section>
    );
};

export default UserReview;