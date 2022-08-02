import React, { useState, useEffect, useContext } from "react";
import { context1 } from '../data/business.context';
import { updateBusiness } from '../data/api';
import '../css/business.css';

export const Business = () => {
    const [business, setBusiness] = useContext(context1);
    console.log(business);
    const [nameBusiness, setNameBusiness] = useState(business.nameBusiness);
    const [phone, setPhone] = useState(business.phone);
    console.log(nameBusiness + " " + phone);

    const save = (e) => {
        e.preventDefault();
        const updates = {
            "business": {
                "nameBusiness": nameBusiness,
                "phone": phone
            }
        }
        console.log(updates);
        try {
            updateBusiness(business.id, updates).then((updatedBusiness) => {
                console.log(updatedBusiness);
                setBusiness(updatedBusiness);
            });
        } catch (err) {
            console.log(err);
        }
    }
    const editBusiness = (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        nameInput.removeAttribute('readonly');
        const phoneInput = document.getElementById('phone');
        phoneInput.removeAttribute('readonly');
    }

    return business ?
        <form onSubmit={save} >
            <div id="business">
                <label>name:
                    <input type="text" required id="name" name="name" readonly="readonly" defaultValue={nameBusiness} onChange={e => setNameBusiness(e.target.value)} /> <br />
                </label><br />
                <label>phone:
                    <input type="text" required id="phone" name="phone" readonly="readonly" defaultValue={phone} onChange={e => setPhone(e.target.value)} /> <br />
                </label><br />
                <button type="button" onClick={editBusiness}>Edit</button>
                <button type="submit">Save</button>
                <br />
            </div>
        </form> : '';
};
