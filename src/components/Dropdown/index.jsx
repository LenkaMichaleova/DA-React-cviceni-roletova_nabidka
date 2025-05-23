import './style.css';

export const Dropdown = ({ polePolozek, selected, onSelect, title}) => (
  <div className="select-box">
    <h1 className="select-box__title1">Custom select box</h1>

    <div className='select-container'>
      <h2 className='container__title'>{title}</h2>
      <select className='container__select'>
        {polePolozek.map((polozka) => (
          <option
            className={`option ${selected ? "option--selected" : ""}`}
            key={polozka.id}
            value={polozka.id}
            onChange={() => onSelect(polozka.id)}
          >
            {polozka.name}
          </option>
        ))}
      </select>
    </div>
  </div>
)