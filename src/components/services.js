import React, { useEffect, useState, useContext, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// import { useRecoilState, useSetRecoilState } from 'recoil';
import { getServiceByServiceId } from '../data/api';

export const Services = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    const navigate = useNavigate();
    const [service, SetService] = useState({});
    // useEffect(() => {
    //     if (!task) {
    //         console.log('no tasks');
    //         navigate('/tasks');  // דוגמא לניווט ע"י קוד
    //     }
    //     else {
    //         setName(task.name);
    //         setDone(task.done);
    //     }
    // }, [taskId, task]);
    // useEffect(() => {
    //     console.log('run after every state or prop change');
    // });
    useEffect(() => {
        console.log('call once at the first render');

    }, []);
    const getService = async () => {
        try {
            await getServiceByServiceId(serviceId).then((serviceDetails) => {
                console.log(serviceDetails);

            });
        } catch (err) {
            console.log(err);
        }
    }

    const save = async (event) => {
        console.log("save");
        // event.preventDefault();
        // const newTask =
        // {
        //     id,
        //     name,
        //     done,
        // };
        // console.log(newTask);

        // await UpdateTask(id, newTask).then(()=>{
        //     loadTasks().then((data)=>{
        //       setTasks([...data]);  
        //     });
        //    });

        // navigate('/tasks');
    }

    return service ?
        <div>
            <h4>{service.id}</h4><br />
            <h4>{service.name}</h4><br />
            <h3>{service.service}</h3><br />
            <button> <Link to="newMeeting">Add New Meeting</Link></button>
        </div> : ' ';

}