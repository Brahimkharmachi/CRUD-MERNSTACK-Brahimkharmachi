import React, { useState} from 'react';
import "./adcartes.css"
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddCartes() {

  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');


  const handleAddCard = async () => {
    if (!title || !image || !price || !quantity) {
      return toast.error('Please fill Title, Image , Price and quantity');
    }
    const newCard = {
      title: title,
      image: image,
      price: price,
      quantity: quantity
    };

    toast.success("welcome");

    try {
      const response = await axios.post('http://localhost:5000/cards', newCard);
      setCards([...cards,response.data ] );
      setTitle('');
      setImage('');
      setPrice(0);
      setQuantity(0);

    } catch (error) {
      console.log(error);
    }
  };
  
  


  return (
    <div class='addcartes'>
      <ToastContainer position="bottom-center" limit={1} />
      <h2>Ajouter un produit</h2>
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantite" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  )
}

export default AddCartes

