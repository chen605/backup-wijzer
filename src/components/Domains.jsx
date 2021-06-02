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
                <div className={`answers__${question.type}`}>
                  {/* mapping the answerslist with a ternary */}
                  {question.answersList.map((answer) => (
                    <>
                      {
                        answer === ' ' ? '' :
                          <>
                            <input type="radio" name={"Vraag " + question.id} />
                            <label>{answer}</label>
                          </>
                      }
                    </>
                  ))}
                </div>
              ),
              'checkbox':
                <div className={`answers__${question.type}`}>
                  {/* mapping the answerslist with a ternary */}
                  {question.answersList.map((answer) => (
                    <>
                      {
                        answer === ' ' ? '' :
                          <>
                            <input type="checkbox" />
                            <label>{answer}</label>
                          </>
                      }
                    </>
                  ))}
                </div>
              ,
              'rating':
                <div className={`answers__${question.type}`}>
                  {/* mapping the answerslist with a ternary */}
                  {question.answersList.map((answer) => (
                    <>
                      {
                        answer === ' ' ? '' :
                          <>
                            <input type="radio" name={"Vraag " + question.id} />
                            <label>{answer}</label>
                          </>
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
