import React from 'react';

const FormQuestion = ({ question }) => {
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
                                <>
                                    {
                                        answer === ' ' ? '' :
                                            <div>
                                                <label>{answer}</label>
                                                <input type="radio" name={"Vraag " + question.id} />
                                            </div>
                                    }
                                </>
                            ))}
                        </div>
                    ,
                    'checkbox':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <>
                                    {
                                        answer === ' ' ? '' :
                                            <div>
                                                <input type="checkbox" />
                                                <label>{answer}</label>
                                            </div>
                                    }
                                </>
                            ))}
                        </div>
                    ,
                    'rating':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <>
                                    {
                                        answer === ' ' ? '' :
                                            <div>
                                                <label>{answer}</label>
                                                <input type="radio" name={"Vraag " + question.id} />
                                            </div>
                                    }
                                </>
                            ))}
                        </div>
                    ,
                    'radiogroup':
                        <div className={`answer answer__${question.type}`}>
                            {/* mapping the answerslist with a ternary */}
                            {question.answersList.map((answer) => (
                                <>
                                    {
                                        answer === ' ' ? '' :
                                            <div>
                                                <label>{answer}</label>
                                                <input type="radio" name={"Vraag " + question.id} />
                                            </div>
                                    }
                                </>
                            ))}
                        </div>
                }[question.type]
            }
        </div>
    )
}

export default FormQuestion;
