import axios from 'axios';
const userId = 'fb590aef-b2e0-4354-9feb-425b279dbcfb';
const BusinessId = 'da10f87a-c055-4d04-96a0-796c1d33f009';

//business
export const getBusinessByUserId = async (userId) => {
    try {
        console.log(userId);
        const { data } = await axios.get(`https://meetings-test.herokuapp.com/business/${userId}`);
        return data;
    }
    catch (error) {
        console.log('error-getBusinessesByUserId ');
    }
}

export const createBusiness = async (business) => {
    try {
        return await axios.post('https://meetings-test.herokuapp.com/business/', business);
    }
    catch (error) {
        console.log('error-createBusiness');
    }
}

export const updateBusiness = async (businessId, updates) => {
    try {
        const _business = await axios.put(`https://meetings-test.herokuapp.com/business/${businessId}`, updates);
        return _business;
    }
    catch (error) {
        console.log('error -updateBusiness');
    }
}


//user
export const login = async (username, password) => {
    console.log(username + ' ' + password);
    try {
        const { data } = await axios.post('https://meetings-test.herokuapp.com/user/signin', { username: username, password: password });
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-login');
    }
}

//service
export const getServicesByBusinessId = async (BusinessId) => {
    try {
        const { data } = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${BusinessId}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-getServicesByBusinessId ');
    }
}

export const getServiceByServiceId = async (ServiceId) => {
    try {
        const { service } = await axios.get(`https://meetings-test.herokuapp.com/service/${ServiceId}`);
        console.log(service);
        return service;
    }
    catch (error) {
        console.log('error-getServiceByServiceId ');
    }
}


//meeting
export const createMeeting = async (meeting) => {
    try {
        return await axios.post('https://meetings-test.herokuapp.com/meeting', meeting);
    }
    catch (error) {
        console.log('error-createMeeting');
    }
}

export const updateService = async (servicId, updates) => {
    try {
        const _service = await axios.put(`https://meetings-test.herokuapp.com/service/${servicId}`, updates);
        const { data } = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${BusinessId}`);
        console.log(data);
        return data;
        // return _service;
    }
    catch (error) {
        console.log('error -updateService');
    }
}

export const deleteService = async (serviceId) => {
    console.log("delete" + serviceId);
    try {
        await axios.delete(`https://meetings-test.herokuapp.com/service/${serviceId}`);
        console.log("success");
        const { data } = await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${BusinessId}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error - deleteService');
    }
}


export const addService = async (businessId, name, des) => {
    try {
        return await axios.post('https://meetings-test.herokuapp.com/service', { business_id: businessId, name: name, service: { descreption: des } });
    }
    catch (error) {
        console.log('error - add task');
    }
}



