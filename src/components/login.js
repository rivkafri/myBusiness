import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../data/api'

export const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const save = async (event) => {
        console.log("save");
        event.preventDefault();
        if (userName && password) {
            try {
                login(userName, password).then((user) => {
                    console.log(user);
                    if (user.password === '12345')
                        navigate('/Admin');
                    else
                        navigate('/Customer');
                    if (user.username === '')
                        console.log('user not found');
                });
            } catch (err) {
                console.log(err);
                navigate('/Login');
            }
        } else {
            alert('User not found');
        }
    }

    return (
        <form onSubmit={save}>
            <label>enter userName</label><br />
            <input type="text" placeholder={"userName"} onChange={e => setUserName(e.target.value)} /> <br />
            <label>enter password</label><br />
            <input type="text" placeholder={"password"} onChange={e => setPassword(e.target.value)} /> <br />
            <button type="submit">login</button><br />
        </form>
    );
};