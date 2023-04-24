import { useState } from "react";
import Bugs from "../bugs.json";
import Bug from "./Bug";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import BugCard from "./BugCard";
import { Container } from "react-bootstrap";
import "../App.css";
import CustomCard from "./CustomCard";
const getFilteredItems = (query: string, items: Bug[]) => {
  query = query.toLowerCase();
  if (!query) {
    return items;
  }
  return items.filter((bug: Bug) => bug.titulo.toLowerCase().includes(query));
};
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const items = Bugs.map((item) => {
    return new Bug(item.titulo, item.cuerpo, item.encargado, item.estado);
  });

  const filteredItems = getFilteredItems(query, items);
  return (
    <div className="container-xl">
      <label></label>
      <input
        id="search-bar"
        className="form-control form-control-lg"
        type="search"
        aria-label="search"
        placeholder="Busca tu bug"
        onChange={(e) => setQuery(e.target.value)}
      />

      <h5 className="space-taker"></h5>
      <ul>
        {filteredItems.map((value) => (
          <CustomCard bug={value}></CustomCard>
        ))}
      </ul>
    </div>
  );
}
