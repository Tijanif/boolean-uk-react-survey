const Checkboxes = ({ answers, handleFeatureChange}) => {
 return <ul>
  <li>  
    <label
      ><input name="bestFeatures" type="checkbox" value='color' checked={answers.bestFeatures.includes('color')} onChange={handleFeatureChange} />It's
      yellow!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value='sound' checked={answers.bestFeatures.includes('sound')} onChange={handleFeatureChange} />It
      squeaks!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value='logo' checked={answers.bestFeatures.includes('logo')} onChange={handleFeatureChange} />It has a
      logo!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value='size' checked={answers.bestFeatures.includes('size')} onChange={handleFeatureChange} />Its big!</label
    >
  </li>
</ul>
}

  
export default Checkboxes