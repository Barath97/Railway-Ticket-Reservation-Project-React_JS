import http from '../http-common';

const create=(data)=>{
    console.log(data)
    return http.post("ticket/bookticket",data);
}

const register = (data)=>{
    return http.post("public/register",data);
}

const login = (data)=>{
    return http.post("public/login",data);
}

const deleteId=(data)=>{
    console.log(data);
    return http.delete("ticket/delete/"+data.id,data);
}

const TicketServices={
    create,
    register,
    login,
    deleteId
}

export default TicketServices;