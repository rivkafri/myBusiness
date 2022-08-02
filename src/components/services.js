import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { context } from '../data/services.context';
import { context1 } from '../data/business.context';
import { updateService, deleteService } from '../data/api';
import '../css/services.css';

export const Services = () => {
    const [business, setBusiness] = useContext(context1);
    const [services, setServices] = useContext(context);
    console.log(services);
    const [name, setName] = useState("");
    const [descreption, setDescreption] = useState("");

    const save = async (id) => {
        console.log(id);
        const updates = {
            "service": {
                "businessId": business.id,
                "name": name,
                "descreption": descreption
            }
        }
        console.log(updates);
        try {
            const data = await updateService(id, updates);
            setServices(data);
        } catch (err) {
            console.log(err);
        }
    }

    const editService = (s) => {
        setName(s.name);
        setDescreption(s.descreption);
        const nameInput = document.getElementById('name');
        nameInput.removeAttribute('readonly');
        const desInput = document.getElementById('des');
        desInput.removeAttribute('readonly');
    }

    const deleteOneService = async (id) => {
        console.log(id);
        try {
            const data = await deleteService(id);
            setServices(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <ul>
                {services.map((s) => (
                    <li id="li" key={s.id} >
                        <div id="service">
                            <input type="text" required id="name" name="name" readonly="readonly" defaultValue={s.name} onChange={e => setName(e.target.value)} /> <br />
                            <input type="text" required id="des" name="des" readonly="readonly" defaultValue={s.descreption} onChange={e => setDescreption(e.target.value)} /> <br />
                            <button type="button" onClick={e => deleteOneService(s.id)}>Delete</button>
                            <button type="button" onClick={e => editService(s)}>Edit</button>
                            <button type="button" onClick={e => save(s.id)}>Save</button>
                        </div>
                        <br />
                    </li>
                ))}
            </ul>
            <button type="button" id="add" >Add</button>
        </div >
    );
}