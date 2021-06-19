import {create} from 'apisauce';

const apiClient = create
 ({
    baseURL:"192.168.8.124:4000/api"
})

export default apiClient;