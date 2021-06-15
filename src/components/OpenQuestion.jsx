import React, { useState } from 'react';
import FormQuestion from './FormQuestion';

const OpenQuestion = ({ items, handleChange }) => {
  const conditionals = items.filter((item) => !item.header);
  const [questions, setQuestions] = useState({
    invisible: conditionals,
    visible: [],
  });

  const checkboxHandler = (event) => {
    handleChange(event);
    const targetText = event.target.labels[0].innerText.trim();
    setQuestions((state) => {
      const target =
        state.invisible.find((item) => item.question === targetText) ||
        state.visible.find((item) => item.question === targetText);
      if (state.invisible.includes(target) && event.target.checked === true) {
        state.invisible.splice(state.invisible.indexOf(target), 1);
        state.visible.push(target);
      } else if (
        state.visible.includes(target) &&
        event.target.checked === false
      ) {
        state.visible.splice(state.visible.indexOf(target), 1);
        state.invisible.push(target);
      }
      state = {
        invisible: state.invisible,
        visible: state.visible,
      };
      
      return state;
    });
  };

  return (
    <>
      <div className="subitem">
        <h2 className={`question__${items[0].type}`}>{items[0].question}</h2>
        <div className={`answer answer__${items[0].type}`}>
          {/* mapping the answerslist with a ternary */}
          {items[0].answersList.map((answer) => (
            <div>
              <label>
                <input
                  type="checkbox"
                  name={'answer' + items[0].id}
                  value={`${answer}`}
                  onChange={checkboxHandler}
                />
                &nbsp;&nbsp;{answer}
              </label>
            </div>
          ))}
        </div>
      </div>
      {questions.visible.length === 0 ? (
        ''
      ) : (
        <div className="subitem">
          <h2 className={`question__${items[1].type}`}>{items[1].question}</h2>
        </div>
      )}
      {questions.visible.length === 0
        ? ''
        : questions.visible.map((item) => (
            <FormQuestion
              question={item}
              key={item.id}
              handleChange={handleChange}
            />
          ))}
    </>
  );
};

export default OpenQuestion;
