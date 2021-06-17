const LastCheckBoxes = ({handleChange}) => {
 return <ul>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="Swimming" onChange={handleChange} />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="Bathing" onChange={handleChange}  />Bathing</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="Chatting"  onChange={handleChange} />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value='timeSpent' onChange={handleChange} />I don't like to spend time with it</label
    >
  </li>
</ul>

}

export default LastCheckBoxes