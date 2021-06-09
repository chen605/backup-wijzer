import React, { useState } from 'react';
import FormQuestion from './FormQuestion';

const OpenQuestion = ({ items }) => {
    const conditionals = items.filter(item => !item.header)
    const [questions, setQuestions] = useState({
        invisible: conditionals,
        visible: []
    })

    function checkboxHandler(event) {
        console.log(event)
        const targetText = event.target.labels[0].innerText
        setQuestions((state) => {
            const target = state.invisible.find(item => item.question === targetText)
                || state.visible.find(item => item.question === targetText)
            if (state.invisible.includes(target) && event.target.checked === true) {
                state.invisible.splice(state.invisible.indexOf(target), 1)
                state.visible.push(target)
            } else if (state.visible.includes(target) && event.target.checked === false) {
                state.visible.splice(state.visible.indexOf(target), 1)
                state.invisible.push(target)
            }
            state.visible = state.visible.slice()
            state.invisible = state.invisible.slice()
            return state
        })
        console.log(questions)
    }

    return (
        <>
            <div className="subitem">
                <h2 className={`question__${items[0].type}`}>{items[0].question}</h2>
                <div className={`answer answer__${items[0].type}`}>
                    {/* mapping the answerslist with a ternary */}
                    {items[0].answersList.map((answer) => (
                        <div>
                            <label>
                                <input type="checkbox" onChange={e => checkboxHandler(e)} />
                                {answer}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            {questions.visible.length === 0 ? '' :
                <div className="subitem">
                    <h2 className={`question__${items[1].type}`}>{items[1].question}</h2>
                </div>}
            {questions.visible.length === 0 ? '' :
                questions.visible.map(item => (
                    <FormQuestion question={item} key={item.id} />
                ))
            }
        </>
    )
}
{}
export default OpenQuestion;