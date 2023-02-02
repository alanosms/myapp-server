const express = require("express");
const app = express();
app.listen(3030);
const bodyParser = require("body-parser");

app.use(bodyParser.json());


const SCHEMA_DB = "myapp";
const USER_DB = "alanosms";
const PASSWORD_DB = "DUy4J7eyPSP64G6";
const HOST = "localhost";

const { Sequelize, Model, DataTypes, json } = require("sequelize");

const sequelize = new Sequelize(SCHEMA_DB, USER_DB, PASSWORD_DB, {
  host: HOST,
  dialect: "mysql",
});

const Product = sequelize.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  urlImage: {
    type: Sequelize.STRING,
    allowNull: false
  },
});


async function initConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  sequelize.sync();
}
initConnection();


app.get('/products/', async (req, res) =>{
const allProducts = await Product.findAll();
  return res.json(allProducts);
});

app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  return res.json(product);
});

app.delete('/products/:id', async (req, res) =>{
  const id = req.params.id;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found.' });
  }
  product.destroy()
    .then(() => {
      return res.json({ message: 'Product deleted successfully!' });
    })
    .catch((error) => {
      return res.status(500).json({ message: 'An error occurred while deleting the product.' });
    });
})

app.put('/products/:id', async (req, res) =>{
  const id = req.params.id;
  const product = await Product.findByPk(id);
  product.update({ name, description, amount, urlImage })
    .then(() => {
      return res.json({ message: 'Product updated successfully.' });
    })
    .catch((error) => {
      return res.json({ message: 'An error occurred while updating the product.' });
    });
});

app.post('/products/', (req, res) => {
  const { name, description, amount, urlImage } = req.body;
    Product.create({
      name,
      description,
      amount,
      urlImage,
    })
      .then((newProduct) => {
        return res.json({ message: 'Product created successfully!' });
      })
      .catch((error) => {
        return res.json({ message: 'An error occurred while saving the product.' });
      });
});
