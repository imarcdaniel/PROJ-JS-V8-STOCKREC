import * as React from 'react';
import ResultTable from '../ResultTable/resultTable';

const RecommendationResult = (props) => {

    return (
      <div>
        <span>I Reccomend that you {props.recommendation}</span>
        <br />
        <span>based on {renderSocialMediaData()}</span>
      </div>
    );
  };
  
  export default RecommendationResult