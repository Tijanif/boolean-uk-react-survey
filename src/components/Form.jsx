import { useState } from 'react';

import Checkboxes from './Checkboxes';
import RadioButtons from './RadioButtons';
import LastCheckBoxes from './LastCheckBoxes';

// username,
//   email,
//   logo,
//   colour,
//   consistency,
//   timeSpent,
//   review,
//   bestFeatures,
//   worstFeatures

const InitialAnswers = {
  username: '',
  email: '',
  bestFeatures: [],
  worstFeatures: [],
  consistency: '',
  colour: '',
  logo: '',
  timeSpent: '',
  review: '',
};

const Form = () => {
  const [answers, setAnswers] = useState(InitialAnswers);

  const handleFeatureChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setAnswers({
      ...answers,
      [key]: answers[key].includes(value)
        ? answers[key].filter((feature) => {
            return feature !== value;
          })
        : [...answers[key], value],
    });
  };

  const handleChange = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  };

  return (
    <form className='form'>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className='form__group'>
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        {
          /* <!-- checkboxes go here --> */
          <Checkboxes
            answers={answers}
            handleFeatureChange={handleFeatureChange}
          />
        }
      </div>
      <div className='form__group'>
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        {
          /* <!-- Checkboxes go here --> */
          <Checkboxes
            answers={answers}
            handleFeatureChange={handleFeatureChange}
          />
        }
      </div>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck consistency?</h3>
        {
          /* <!-- radio buttons go here --> */
          <RadioButtons handleChange={handleChange} />
        }
      </div>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck colour?</h3>
        {
          /* <!-- Radio inputs go here --> */
          <RadioButtons handleChange={handleChange} />
        }
      </div>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck logo?</h3>
        {
          /* <!-- radio inputs go here --> */
          <RadioButtons handleChange={handleChange} />
        }
      </div>
      <div className='form__group'>
        <h3>How do you like to spend time with your rubber duck</h3>
        {
          /* <!-- checkboxes go here --> */
          <LastCheckBoxes handleChange={handleChange} />
        }
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name='review' cols='30' rows='10'></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type='text' name='username' value='' />
      </label>
      <label>
        Leave us your email pretty please??
        <input type='email' name='email' value='' />
      </label>
      <input className='form__submit' type='submit' value='Submit Survey!' />
    </form>
  );
};

export default Form;
