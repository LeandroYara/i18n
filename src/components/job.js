import React from "react";
import {FormattedDate, FormattedPlural, FormattedNumber} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td> 
        {props.offer.salary}
        ㅤ
        <FormattedPlural value={props.offer.salary} one="Million" other="Millions" />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views} 
        />
      </td>
    </tr>
  );
};

export default Job;
