import React from 'react'
import Quiz from './quiz'
import './styles/question.css'

const Question=(props)=>
{
    const quiz=Quiz;
    let question=quiz.filter((ques)=>
    {
        console.log('in question',props.id)
        return ques.questionId==props.id;
    })
    question=question[0];
    console.log(question);
    const options=question.answers.map((q)=>
    {
        return (
            <div class='option'>{q}</div>
        )
    })
    return (
        <div class='main-div'>
            <div class='question'>{question.question}</div>
            {options}
        </div>
    )
}
export default Question;