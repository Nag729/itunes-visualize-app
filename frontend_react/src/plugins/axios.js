import axiosBase from 'axios';

const axios = axiosBase.create({
	// baseURL: 'https://itunes-visualize-app.herokuapp.com',
	responseType: 'json',
});

export default axios;
