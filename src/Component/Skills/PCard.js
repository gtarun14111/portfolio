import React from 'react';
import './PCard.css';

const PCard = ({ cardNo }) => {
  // let head = "";
  // switch(cardNo) {
  //   case 1: 
  // }

  return (
      <div class="card">
          <div class="front">
            <p>Face Detection <br />-projectbrain</p>
          </div>
          <div class="back">
            <div>
              <p>Face Detection App</p>
              <p>The app is built using Node.js with React and Express.
              It uses Prostges SQL as server and detects face using Face Detection APi.</p>
              <button class="button"><a href="https://gtarun14111.github.io/projectbrain/" target="_blank">View App!</a></button>
            </div>
          </div>
      </div>
);
}

export default PCard;