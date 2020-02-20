import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {


    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Какого цвета небо?',
                id: 1,
                rightAnswerId: 2,
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Красный', id: 3 },
                    { text: 'Зеленый', id: 4 }
                ]
            },
            {
                question: 'Какого цвета трава?',
                id: 2,
                rightAnswerId: 4,
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Красный', id: 3 },
                    { text: 'Зеленый', id: 4 }
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('AnswerId: ', answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <h1>Ответьте на вопросы</h1>
                <div className={classes.QuizWrapper}>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}



