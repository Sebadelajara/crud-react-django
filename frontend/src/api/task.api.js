import axios from 'axios';

// Crear una instancia de axios para interactuar con la API de tareas.
// Se configura la URL base como "http://localhost:8000/task/api/v1/tasks".
const tasksApi = axios.create({
    baseURL: "http://localhost:8000/task/api/v1/tasks"
})


export const getAllTasks = () => {
    return axios.get('http://localhost:8000/task/api/v1/tasks/');  //peticion para obtener datos

}
export const getTask = (id) => tasksApi.get(`/${id}/`) // peticion para obtener solo 1 registro

export const createTask = (task) => tasksApi.post('/', task); // peticion para crear un registro

export const deleteTask = (id) => tasksApi.delete(`/${id}`) // peticion para eliminar un registro

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)  // peticion para actualizar datos


