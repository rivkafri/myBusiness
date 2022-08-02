import React, { useState, useEffect, createContext } from "react";
import { getBusinessByUserId } from "./api";

export const context1 = createContext({});

export const BusinessContext = (props) => {
    const [business, setBusiness] = useState({});
    useEffect(() => {
        getBusiness();
    }, []);

    const getBusiness = () => {
        try {
            getBusinessByUserId('cadc7a4a-e6b6-4174-9d70-13571fa2d16d').then((business) => {
                console.log(business);
                setBusiness(business);
            });
        } catch (err) {
            console.log(err);
        }
    }

    return <context1.Provider value={[business,setBusiness]}>
        {props.children}
    </context1.Provider>
}