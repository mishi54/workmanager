import { httpAxios } from "@/helper/axioscreate"


export const addTask = async (task) => {
    try {
      const response = await httpAxios.post('/api/tasks', task);
      console.log("Task added successfully:");
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error.response?.data || error.message);
      throw error;
    }
  };
  
  export const showTask = async (userId) => {
    try {
      const response = await httpAxios.get(`/api/users/${userId}/tasks`);
      console.log("Task fetch successfully:");
      return response.data;
    } catch (error) {
      console.error("Error fetch task:", error.response?.data || error.message);
      throw error;
    }
  };
  export const delTask = async (taskId) => {
    try {
      const response = await httpAxios.delete(`/api/tasks/${taskId}`);
      console.log("Task deleted successfully:");
      return response.data;
    } catch (error) {
      console.error("Error del task:", error.response?.data || error.message);
      throw error;
    }
  };