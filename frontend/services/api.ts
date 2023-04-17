import axios from 'axios';

export const backend = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const loginAdmin = async (formData: any) => {
  try {
    const { data } = await backend.post('auth/signin', formData);
    console.log(data, 'data');
    return data;
  } catch (error) {
    return error;
  }
};
