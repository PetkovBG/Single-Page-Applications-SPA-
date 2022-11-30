import { del, get, post, put } from "./api.js";

export async function getDashboard(){
    return get('/data/shoes?sortBy=_createdOn%20desc')
}

export async function createItem(data){
    return post('/data/shoes', data)
}

export async function getDetails(id){
    return get('/data/shoes/' + id);
}

export async function deleteRecord(id){
    return del('/data/shoes/' + id)
}

export async function editRecord(id, data){
    return put('/data/shoes/' + id, data);
}

export async function searchRecord(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}