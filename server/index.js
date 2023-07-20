const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(
  "mongodb+srv://brahimkharmachi:lWt7xPPcZQGECoB2@cluster0.7ayln3q.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB is connected"))
  .catch(err => console.log(err))

const cardSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  quantity: Number
});

const Card = mongoose.model('Card', cardSchema);

app.post('/cards', async (req, res) => {
  const { title, image, price, quantity } = req.body;
  const card = new Card({ title, image, price, quantity });

  try {
    await card.save();
    res.send(card);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.put('/cards/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const card = await Card.findByIdAndUpdate(id, req.body, { new: true });
    res.send(card);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.delete('/cards/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Card.findByIdAndDelete(id);
    res.send(card);
  } catch (error) {
    res.status(500).send(error);
  }
});
    

app.listen (5000,()=>{
    console.log('server is runnnig')
})
