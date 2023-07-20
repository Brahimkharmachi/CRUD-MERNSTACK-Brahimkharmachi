import React, { useState, useEffect } from 'react';
import "./homess.css"
import axios from 'axios';
import Caroussells from '../Caroussel/Caroussels';
import { MDBBtn } from 'mdb-react-ui-kit';


const Homees = () => {
  
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [basket, setBasket] = useState([]);


  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cards');
      setCards(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleUpdateCard = async (id, updatedCard) => {
    try {
      const response = await axios.put(`http://localhost:5000/cards/${id}`, updatedCard);
      const updatedCards = cards.map(card => (card._id === id ? response.data : card));
      setCards(updatedCards);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cards/${id}`);
      const updatedCards = cards.filter(card => card._id !== id);
      setCards(updatedCards);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleAddToBasket = (card) => {
    setBasket([...basket, card]);
  };

  const handleRemoveFromBasket = (card) => {
    const updatedBasket = basket.filter(item => item._id !== card._id);
    setBasket(updatedBasket);
  };

  const calculateTotal = () => {
    let total = 0;
    basket.forEach(card => {
      total += card.price * card.quantity;
    });
    return total;
  };

  return (
    
    <div>
    
      <div>
        <Caroussells />
      </div>
       
      <div>
        <div class="nosproduits">
          <p >Nos produits</p>
        </div>

        <div class='search'>
          <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
        </div>

        <div className='card-shop'>
          {cards
          .filter(card => card.title.toLowerCase().includes(search.toLowerCase()))
          .map(card => (
          <div key={card._id} class='card'>
            <img src={card.image} alt={card.title} style={{ width: '100px' }} />
            <p class='sarouel'>{card.title}</p>
            <p class='price'>Prix: {card.price} €</p>
            <div class='btnquantite'>
            <button class='quantite' onClick={() => handleUpdateCard(card._id, { ...card, quantity: card.quantity - 1 })}>-</button>
            <p class='nquantite'>{card.quantity}</p>
            <button class='quantite' onClick={() => handleUpdateCard(card._id, { ...card, quantity: card.quantity + 1 })}>+</button>
            </div>
            <MDBBtn className='btn'  onClick={() => handleAddToBasket(card)}>Ajouter à mon panier</MDBBtn>
            <MDBBtn className='btn' onClick={() => handleDeleteCard(card._id)}>Supprimer la carte</MDBBtn>
          </div>
          ))}
        
        </div>
     
        <div class="basketicon">
          {basket.map(card => (
          <div key={card._id} className='basketicon2'>
          <img src={card.image} alt={card.title} style={{ width: '100px' }} />
          <h3>{card.title}</h3>
          <p>Prix: {card.price}</p>
          <p>Quantite: {card.quantity}</p>
          <button onClick={() => handleRemoveFromBasket(card)}>Retirer le produit</button>
        </div>
          ))}
      
        <h2>Total: {calculateTotal()}</h2>
        </div>  
        
        </div>
      </div>
      
    
  );
};

export default Homees;