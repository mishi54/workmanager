import { httpAxios } from "@/helper/axioscreate"


export const Signup = async (data) => {
    try {
      const response = await httpAxios.post('/api/users', data);
      console.log("SignUp successfully:");
      return response.data;
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      throw error;
    }
  };
  export const Login = async (lgdata) => {
    try {
      const response = await httpAxios.post('/api/login', lgdata);
      console.log("Login successfully:");
      return response.data;
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      throw error;
    }
  };
  export const currentUser = async () => {
    try {
      const response = await httpAxios.get('/api/current');
      console.log("Data fetch successfully:");
      return response.data;
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      throw error;
    }
  };
  export const Logout = async () => {
    try {
      const response = await httpAxios.post('/api/logout');
      console.log("Logout successfully:");
      return response.data;
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      throw error;
    }
  };