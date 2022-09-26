import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import FormControl from '../../UI/FormControl/FormControl';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const checkEnteredValue = () => enteredValue.trim().length > 0;

  const goalInputChangeHandler = event => {
    if (checkEnteredValue()) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!checkEnteredValue()) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
