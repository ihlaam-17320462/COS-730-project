import {create} from 'apisauce';

const apiClient = create
 ({
    baseURL:'http://192.168.3.166:4000/api/'
})

export default apiClient;