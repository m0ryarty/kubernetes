import axios from 'axios'
const baseUrl = '/api/todos'

const getTodos = async () => {
    const request = axios.get(baseUrl)
    const response = await request    
    return response.data
}

const setNewTodo = async (newTodoObj) => {
    console.log(newTodoObj)
    await axios.post(baseUrl, newTodoObj)
    

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getTodos, setNewTodo}