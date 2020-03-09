import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-b5f16.firebaseio.com/'
})