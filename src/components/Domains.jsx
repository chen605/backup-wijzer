import React from 'react';
import useFetch from '../custom-hooks/useFetch';

const Domains = ({ domain }) => {
  const data = useFetch(`/questions?domain=${domain}`);
  console.log(data);

  return (
    <div>
      {data.map((question) => (
        <div key={question.id}>
          <h2 className={`question__${question.type}`}>{question.question}</h2>
          {/* mapping object of the data domain */}
          {
            {
              'matrix': (
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
              ),
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
              ' ': ''
            }[question.type]
          }
        </div>
      ))}
    </div>
  );
};

export default Domains;
