import React, { useState, useEffect, createContext } from "react";
import { getBusinessByUserId, getServicesByBusinessId } from "./api";

export const context = createContext([]);

//servicesContext
//businessContext
//או קונטקסט אחד לכולם?

export const Context = (props) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getAllServices();
    }, []);

    const getAllServices = () => {
        try {
            getBusinessByUserId('e43d7cbe-58fb-46fb-b91e-54d1a6e0ed5e').then((business) => {
                console.log(business);
                getServicesByBusinessId(business.id).then((services) => {
                    console.log(services);
                    setServices([...services]);
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    return <context.Provider value={services}>
        {props.children}
    </context.Provider>
}