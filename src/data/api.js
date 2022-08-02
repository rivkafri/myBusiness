import axios from 'axios';

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
        const { business } = await axios.put('https://meetings-test.herokuapp.com/business/' + businessId, updates);
        return business;
    }
    catch (error) {
        console.log('error - put task');
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