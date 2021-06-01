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
          {question.type === 'matrix' ? (
            <div className={`answers__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <>
                  {answer === ' ' ? '' : <input type="radio" />}
                  <label>{answer && answer}</label>
                </>
              ))}
            </div>
          ) : question.type === 'checkbox' ? (
            <div className={`answers__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <>
                  {answer === ' ' ? '' : <input type="checkbox" />}
                  <label>{answer && answer}</label>
                </>
              ))}
            </div>
          ) : question.type === 'rating' ? (
            <div className={`answers__${question.type}`}>
              {/* mapping the answerslist with a ternary */}
              {question.answersList.map((answer) => (
                <>
                  {answer === ' ' ? '' : <input type="radio" />}
                  <label>{answer && answer}</label>
                </>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default Domains;
