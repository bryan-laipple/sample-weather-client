import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => _.round(_.sum(data)/data.length);

export default props => {
  const height = props.height || 120;
  const width = props.width || 180;
  const color = props.color || 'gray';
  const units = props.units || '';
  return (
    <div>
      <Sparklines height={height} width={width} data={props.data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
