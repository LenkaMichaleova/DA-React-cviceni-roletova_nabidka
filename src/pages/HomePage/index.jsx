import { useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import './style.css';

const categories = [
  { id: 1, name: "Akční" },
  { id: 2, name: "Dobrodružný" },
  { id: 3, name: "Komedie" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Horor" },
  { id: 6, name: "Sci-fi" },
  { id: 7, name: "Romantický" },
  { id: 8, name: "Animovaný" },
  { id: 9, name: "Dokumentární" },
  { id: 10, name: "Fantasy" }
]

export const HomePage = () => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <div className="container">
        <Dropdown 
          polePolozek={categories} 
          selected={selectedId === categories.id} 
          onSelect={setSelectedId}
          title="Video Category"
        >  
          {/* <p>nějaký text</p> */}
        </Dropdown>
      </div>
    </>
  );
};
