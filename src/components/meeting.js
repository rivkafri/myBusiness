import { React, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { createMeeting } from '../data/api';
import { context } from '../data/context';

export const Meeting = () => {
    const { id } = useParams();
    const [customerName, SetcustomerName] = useState();
    const [customerPhoneNumber, SetcustomerPhoneNumber] = useState();
    const [customerStartTime, SetcustomerStartTime] = useState();
    const services = useContext(context);
    const duration = services.duration;
    const createNewMeeting = (id, customerStartTime, duration, customerName, customerPhoneNumber) => {
        const meeting = {
            "id": id,
            "startTime": customerStartTime,
            "duration": duration,
            "meeting": {
                "name": customerName,
                "phon": customerPhoneNumber
            }
        }
        try {
            createMeeting(meeting).then((meeting) => {
                console.log(meeting);
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form>
            <label>enter name</label><input onChange={(event) => SetcustomerName(event.target.value)}></input>
            <label>enter phoneNumber</label><input onChange={(event) => SetcustomerPhoneNumber(event.target.value)}></input>
            <label>startTime</label><input onChange={(event) => SetcustomerStartTime(event.target.value)}></input>
            <button onClick={createNewMeeting(id, customerStartTime, duration, customerName, customerPhoneNumber)}>to make</button>
        </form>
    );
};

