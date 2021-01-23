import React from 'react';
import { getAvg } from './averageService';
const classes = require('./averageComponentStyles.scss').default;

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <span className={classes['result-background']}>
        Students average: {average}
      </span>
    </div>
  );
};
