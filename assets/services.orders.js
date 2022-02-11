const getOrders = async () => {
    var requestOptions = {
        method:'GET',
        url:'/orders',
        baseURL:'http://localhost:8001',
    }
    const promise = await axios(requestOptions)
    console.log(promise);
    
    return promise
};
getOrders();
