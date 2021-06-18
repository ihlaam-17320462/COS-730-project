import {create} from 'apisauce';

const apiClient = create
 ({
    baseURL:'http://192.168.43.228:4000/api/'
})

export default apiClient;