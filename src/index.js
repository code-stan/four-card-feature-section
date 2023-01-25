import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';
import './app.css'
function FourCard(){
  const cardElements = data.map((item, index)=> {
    return(
      <Card key={index} classes={item.id} heading={item.heading} text={item.text} img={item.img} alt={item.alt}/>
    )
  })
  return(
    <main className='mainContainer flex'>
      <Header/>
      <section className='cardSection'>
        {cardElements[0]}
        <div className='cardGrid'>
        {cardElements[1]}
        {cardElements[2]}
        </div>
        {cardElements[3]}
      </section>
    </main>
  )
}
ReactDOM.render(<FourCard />, document.getElementById("root"))

