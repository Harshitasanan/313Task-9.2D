import './Card.css'

function Card(props) 
{
  return (
    <div className="column">
    <img src={props.image} alt= 'Staff'/> 
    <div className='name'>
    <h3>{props.name}</h3>
    </div>
    <p>{props.position}</p>
    <p>{props.description}</p>
    <div className='ratings'>
    <img src="./img/star.png" alt="Star" className="star-icon" />
        <p>{props.ratings}</p>
    </div>
    <div className='name-details'>
      <h4><b>{props.first} {props.name1}</b></h4>
  </div>
    </div>
  )
}

export default Card
