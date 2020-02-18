import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {


    state = {
        quiz: []
    }


    render() {
        return (
            <div className={classes.Quiz}>
                <h1>Quiz</h1>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}



