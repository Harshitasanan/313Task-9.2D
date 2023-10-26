import './Tutorial.css';

function Tutorial(props) {
  return (
    <div className="column1">
      <img src={props.image} alt="List" /> 
      <div className='name'>
        <h3>{props.name}</h3>
        <h3>{props.name1}</h3>
      </div>
      <p>{props.position}</p>
      <p>{props.description}</p>
      <p>{props.street}</p>
    </div>
  );
}

export default Tutorial;
