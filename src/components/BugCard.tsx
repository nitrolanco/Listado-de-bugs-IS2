import Bug from "./Bug";
function BugCard(props: { bug: Bug }) {
  let tittle = props.bug.titulo;
  return (
    <div className="card">
      <div className="card-header">{props.bug.estado}</div>
      <div className="card-body">
        <h5 className="card-title">{props.bug.titulo}</h5>
        <p className="card-text">{props.bug.cuerpo}</p>
      </div>
    </div>
  );
}

//carrusel
export default BugCard;
