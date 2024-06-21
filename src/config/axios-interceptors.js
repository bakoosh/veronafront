
import axios from 'axios';

axios.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        config.params = {
            ...config.params,
            user_id: user.id,
        };
    }
    return config;
});
