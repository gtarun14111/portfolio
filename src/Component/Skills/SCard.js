import React from 'react';
import './SCard.css';

const SCard = ({ cardNo }) => {
  let head = "";
  switch(cardNo) {
    case 1: head = (<h5> HTML5 </h5>);
    break;
    case 2: head = (<h5> CSS </h5>);
    break;
    case 3: head = (<h5> JavaScript </h5>);
    break;
    case 4: head = (<h5> React </h5>);
    break;
    case 5: head = (<h5> Node.js </h5>);
    break;
    case 6: head = (<h5> Express.js </h5>);
    break;
    case 7: head = (<h5> Postgres </h5>);
    break;
    default: ;
  }

  return (
      <div class="center">
        <div class="property-card">
            <div class={`property-image sc${cardNo}`}>
            </div>
          <div class="property-description">
            {head}
          </div>
        </div>
      </div>
);
}

export default SCard;