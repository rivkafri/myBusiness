import { React, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createMeeting, getServiceByServiceId } from '../data/api';
import { context } from '../data/services.context';
import { context1 } from '../data/business.context';

export const Meeting = () => {
    const { id } = useParams();
    const [customerName, SetcustomerName] = useState();
    const [customerPhoneNumber, SetcustomerPhoneNumber] = useState();
    const [customerStartTime, SetcustomerStartTime] = useState();
    const [duration, setDuration] = useState(0);
    const [business, setBusiness] = useContext(context1);

    const getService = async () => {
        const service = await getServiceByServiceId(id);
        setDuration(service.duration);
    }

    const createNewMeeting = async (e) => {
        e.preventDefault();
        const meeting = {
            "business_id": business.id,
            "start_time": customerStartTime,
            "duration": duration,
            "meeting": {
                "serviceId": id,
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

    useEffect(() => {
        getService();
    }, []);

    return (
        <form>
            <label>enter name</label><input onChange={(event) => SetcustomerName(event.target.value)}></input>
            <label>enter phoneNumber</label><input onChange={(event) => SetcustomerPhoneNumber(event.target.value)}></input>
            <label>startTime</label><input onChange={(event) => SetcustomerStartTime(event.target.value)}></input>
            <button onClick={createNewMeeting}>to make</button>
        </form>
    );
};

