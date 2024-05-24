import client from "./client";

const api_suffix="/api/posts/"

export const create = async (body) => {
    try{
        const {data} = await client.post(`${api_suffix}/post/create`, body, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const showPost = async () => {
    try{
        const {data} = await client.get(`${api_suffix}posts/posts/show`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const showSinglePost = async (id) => {
    try{
        const {data} = await client.get(`${api_suffix}post/${id}`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const deletePost = async (id) => {
    try{
        const {data} = await client.delete(`${api_suffix}delete/post/${id}`, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const updatePost = async (id, title, content, image) => {
    try{
        const {data} = await client.put(`${api_suffix}update/post/${id}`, {title, content, image}, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const addComment = async (id, comment) => {
    try{
        const {data} = await client.put(`${api_suffix}comment/post/${id}`, {comment}, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const removeComment = async (id, comment) => {
    try{
        const {data} = await client.put(`${api_suffix}comment/post/${id}`, {comment}, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const addLike = async (id) => {
    try{
        const {data} = await client.put(`${api_suffix}addlike/post/${id}`, {}, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}

export const removeLike = async (id) => {
    try{
        const {data} = await client.put(`${api_suffix}removelike/post/${id}`, {}, {withCredentials: true});
        // console.log(data);
        return data;
    }catch(error) {
        // console.log(error);
        return error
    }
}