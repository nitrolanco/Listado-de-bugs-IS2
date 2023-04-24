import BugCard from "./BugCard";
import Bug from "./Bug";
import { Container } from "react-bootstrap";

function ListGroup(props: { items: Bug[] }) {
  let BugsToDisplay = props.items.map((item) => (
    <li key={item.titulo} className="list-group-item">
      <BugCard bug={item}></BugCard>
    </li>
  ));
  return (
    <div className="container-xl">
      <h1>shoapep</h1>
      <ul className="list-group">{BugsToDisplay}</ul>
    </div>
  );
}

export default ListGroup;
