import React, { useState } from 'react';
import Card from "./Card"
import "./Card.css"
import stafflist from "./stafflist";

function cardcomponent(staff, i) {
  return (
    <Card 
      key={i}
      image={staff.image}
      name={staff.name}
      position={staff.position}
      description={staff.description}
      ratings={staff.ratings}
      first={staff.first}
      name1={staff.name1}
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

function Cardlist() {
  const [visibleCards, setVisibleCards] = useState(3); // Number of initially visible cards

  const loadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 3); // Load 3 more cards on each click
  };

  const loadedCards = stafflist.slice(0, visibleCards);
  const chunkedCards = chunkArray(loadedCards, 3); // Changed to 3 columns
  const hasMoreCardsToLoad = visibleCards < stafflist.length;

  return (
    <div className="cardlist-container">
      {chunkedCards.map((chunk, index) => (
        <div key={index} className="row">
          {chunk.map(cardcomponent)}
        </div>
      ))}
      <div className="load-more-container">
        {hasMoreCardsToLoad && (
          <button className="load-more-button1" onClick={loadMore}>
            See all articles
          </button>
        )}
      </div>
    </div>
  );
}

export default Cardlist;
