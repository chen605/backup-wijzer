import React, { useState } from 'react';

const FormQuestion = ({ question, handleChange }) => {


    return (
        <div className="subitem">
            <h2 className={`question__${question.type}`}>{question.question}</h2>
            {/* mapping object of the data domain */}
            {
                {
                    'matrix':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <div>
                                    <label>{answer}</label>
                                    <input type="radio" name={"answer" + question.id} value={`${answer}`} onChange={handleChange} />
                                </div>
                            ))}
                        </div>
                    ,
                    'checkbox':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <div>
                                    <input type="checkbox" name={"answer" + question.id} value={`${answer}`} onChange={handleChange} />
                                    <label>{answer}</label>
                                </div>
                            ))}
                        </div>
                    ,
                    'rating':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <div>
                                    <label>{answer}</label>
                                    <input type="radio" name={"answer" + question.id} value={`${answer}`} onChange={handleChange} />
                                </div>
                            ))}
                        </div>
                    ,
                    'radiogroup':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <div>
                                    <label>{answer}</label>
                                    <input type="radio" name={"answer" + question.id} value={`${answer}`} onChange={handleChange} />
                                </div>
                            ))}
                        </div>
                }[question.type]
            }
        </div>
    )
}
export default FormQuestion;
