const getCustomers = async () => {
    var requestOptions = {
        method:'GET',
        url:'/customers',
        baseURL:'http://localhost:8001',
    }
    const promise = await axios(requestOptions)
    return promise
};
getCustomers();
