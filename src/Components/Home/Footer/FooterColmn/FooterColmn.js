import React from 'react';
import './FooterColmn.css';
import { Link } from 'react-router-dom';

const FooterColmn = (props) => {
    return (
        <div className="col-md-3">
            <h3 style={{color: '#1CC7C1'}}>{props.menuTitle ? props.menuTitle : " "}</h3>
            <hr/>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-white text-link">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterColmn;