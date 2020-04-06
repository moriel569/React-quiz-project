import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionTypes"
import axios from '../../axios/axios-quiz'

function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}

export default { createQuizQuestion, resetQuizCreation, finishCreateQuiz }