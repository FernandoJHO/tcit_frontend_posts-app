import axios from 'axios'

const get = (path) =>
    axios.get(path)

const post = (path, data = null) => 
    axios.post(path, data)

const del = (path) =>
    axios.delete(path)

const ApiClient = {
    get,
    post,
    delete: del,
}

export default ApiClient;