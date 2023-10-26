import React, { useState } from 'react';
import Tutorial from "./Tutorial"
import {faker} from "@faker-js/faker"
import "./Tutorial.css"
import TutorialList from "./List.js";

function Tutorialcomponent(List, i) {
  return (
    <Tutorial
      key={i}
      image={List.image}
      name={List.name}
      name1={List.name1}
      position={List.position}
      description={List.description}
      street={List.street}
    />
  );
}


function chunkArray(arr, size) {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  }
  
  function Tutoriallist() {
    const [visibleCards, setVisibleCards] = useState(3);
  
    const loadMore = () => {
      setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
    };
  
    const loadedCards = TutorialList.slice(0, visibleCards);
    const chunkedCards = chunkArray(loadedCards, 3);
    const hasMoreCardsToLoad = visibleCards < TutorialList.length;
  
    return (
      <div>
        {chunkedCards.map((chunk, index) => (
          <div key={index} className="row">
            {chunk.map(Tutorialcomponent)}
          </div>
        ))}
        <div className="load-more-container">
          {hasMoreCardsToLoad && (
            <button className="load-more-button" onClick={loadMore}>
              See all tutorials
            </button>
          )}
        </div>
      </div>
    );
  }

export default Tutoriallist;
