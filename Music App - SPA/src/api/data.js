import { del, get, post, put } from "./api.js";

const endpoints = {
    'createNewAlbum': '/data/albums',
    'getAlbums': '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'getDetails': '/data/albums/'
}

export async function getAllAlbums(){
    return get(endpoints.getAlbums)
}

export async function createAlbum(data){
    return post(endpoints.createNewAlbum, data)
}

export async function getDetailsById(id){
    return get(endpoints.getDetails + id);
}

export async function deleteById(id){
    return del(endpoints.getDetails + id);
}

export async function editById(id, data){
    return put(endpoints.getDetails + id, data);
}

export async function searchAlbum(query){
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}


//---------------------------------

// export async function getAll(){
//     return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
// }

// export async function getById(id){
//    return get('/data/pets/' + id)
// }

// export async function deleteById(id){
//     return del('/data/pets/' + id)
// }

// export async function createPet(petData){
//     return post('/data/pets', petData);
// }

// export async function editPet(id, petData){
//     return put('/data/pets/' + id, petData);
// }