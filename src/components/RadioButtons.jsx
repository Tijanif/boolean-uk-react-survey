const RadioButtons = ({ handleChange }) => {
  return (
    <ul>
      <li>
        <input
          id='consistency1'
          type='radio'
          name='consistency'
          value='1'
          onChange={handleChange}
        />
        <label for='consistency1'>1</label>
      </li>
      <li>
        <input
          id='consistency2'
          type='radio'
          name='consistency'
          value='2'
          onChange={handleChange}
        />
        <label for='consistency2'>2</label>
      </li>
      <li>
        <input
          id='consistency3'
          type='radio'
          name='consistency'
          value='3'
          onChange={handleChange}
        />
        <label for='consistency3'>3</label>
      </li>
      <li>
        <input
          id='consistency4'
          type='radio'
          name='consistency'
          value='4'
          onChange={handleChange}
        />
        <label for='consistency4'>4</label>
      </li>
    </ul>
  );
};

export default RadioButtons;
