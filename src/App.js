import React from 'react';
import Section from './Section'
import Menu from './Menu'

function App() {

  const sections = [
    {id:0 , name: "", content: ""},
    {id:1 , name: "XIX OSKNF", content: ""},
    {id:2 , name: "Lokalizacja", content: ""},
    {id:3 , name: "Goście specjalni", content: ""},
    {id:4 , name: "Plan konferencji", content: ""},
    {id:5 , name: "Rejestracja", content: ""},
    {id:6 , name: "Patroni i sposnorzy", content: ""},
    {id:7 , name: "Kontakt", content: ""}
  ]


  const webSections = sections.map(section=> <Section key={section.id} id={section.id} name={section.name} content={section.content} />)
  
  return (
    <>
      <Menu sections={sections}/>
      {webSections}
      
    </>
  );
}

export default App;
