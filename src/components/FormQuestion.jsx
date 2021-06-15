import React from 'react';

const FormQuestion = ({ question, handleChange }) => {
  return (
    <div className="subitem">
      <h2 className={`question__${question.type}`}>{question.question}</h2>
      {/* mapping object of the data domain */}
      {
        {
          matrix: (
            <div className={`answer answer__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <div>
                  <label>
                    <span>{answer}</span>
                    <input
                      type="radio"
                      name={'answer' + question.id}
                      value={`${answer}`}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              ))}
            </div>
          ),
          checkbox: (
            <div className={`answer answer__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name={'answer' + question.id}
                      value={`${answer}`}
                      onChange={handleChange}
                    />
                    <span>{answer}</span>
                  </label>
                </div>
              ))}
            </div>
          ),
          rating: (
            <div className={`answer answer__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <div>
                  <label>
                    <span>{answer}</span>
                    <input
                      type="radio"
                      name={'answer' + question.id}
                      value={`${answer}`}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              ))}
            </div>
          ),
          radiogroup: (
            <div className={`answer answer__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <div>
                  <label>
                    <input
                      type="radio"
                      name={'answer' + question.id}
                      value={`${answer}`}
                      onChange={handleChange}
                      required
                    />
                    <span>{answer}</span>
                  </label>
                </div>
              ))}
            </div>
          ),
        }[question.type]
      }
    </div>
  );
};
export default FormQuestion;
