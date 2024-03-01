import React from 'react'
import './Profile.css'
import { Link ,useNavigate} from 'react-router-dom';
export default function Profile() {
    let name=localStorage.getItem('name');
    let email=localStorage.getItem('email');
    let password=localStorage.getItem('password');
    let birthdate=localStorage.getItem("birthdate");
    let institute=localStorage.getItem("institutename").toLowerCase();
    const words = institute.split(" ");
    const navigate=useNavigate();
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)+" ";
}
    let instituteid=localStorage.getItem('instituteid')
    let acctype=localStorage.getItem('acctype');

words.join("");
  return (
    <div>
        <div className='info-block'>
            <p className='info-text'><strong>Name: </strong> <span>{name}</span></p>
            <p className='info-text'><strong>Email: </strong> <span>{email}</span></p>
            <p className='info-text'><strong>Password: </strong> <span>{password}</span></p>
            <p className='info-text'><strong>Institute: </strong> <span>{words}</span></p>
            <p className='info-text'><strong>Institute ID: </strong> <span>{instituteid}</span></p>
            <p className='info-text'><strong>Account Type: </strong> <span>{acctype}</span></p>
            <button className='back-button' type='button' onClick={navigate('/')}>Back</button>

        </div>
    </div>
  )
}
