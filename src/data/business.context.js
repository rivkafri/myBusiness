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
            getBusinessByUserId('fb590aef-b2e0-4354-9feb-425b279dbcfb').then((business) => {
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