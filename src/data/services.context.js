import React, { useState, useEffect, createContext, useContext } from "react";
import { getBusinessByUserId, getServicesByBusinessId } from "./api";
// import { context1 } from './business.context';

export const context = createContext([]);

export const ServicesContext = (props) => {
    // const [business, setBusiness] = useContext(context1);
    const [services, setServices] = useState([]);

    useEffect(() => {
        getAllServices();
    }, []);

    const getAllServices = () => {
        try {
            getBusinessByUserId('fb590aef-b2e0-4354-9feb-425b279dbcfb').then((business) => {
                console.log(business);
                getServicesByBusinessId(business.id).then((services) => {
                    console.log(services);
                    setServices([...services]);
                    console.log(services);
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    return <context.Provider value={[services,setServices]}>
        {props.children}
    </context.Provider>
}