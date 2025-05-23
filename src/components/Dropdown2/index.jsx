import { useState } from "react";
import './style.css';

export const Dropdown2 = ({ polePolozek, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const selectedItem = polePolozek.find((item) => item.id === selected);

  return (
    <div className="dropdown">
      <div className="dropdown__label" onClick={() => setOpen(!open)}>
        {selectedItem ? selectedItem.name : "Vyber kategorii"}
        <span className="dropdown__arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <ul className="dropdown__menu">
          {polePolozek.map((polozka) => (
            <li
              key={polozka.id}
              className={`dropdown__item ${
                selected === polozka.id ? "dropdown__item--selected" : ""
              }`}
              onClick={() => {
                onSelect(polozka.id);
                setOpen(false);
              }}
            >
              {polozka.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};