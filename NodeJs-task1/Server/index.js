import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
  },
];

app.get("/products", (req, res) => {
  console.log(products);

  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/api/products", (req, res) => {
  const { title, description, price, category } = req.body;

  const newProduct = {
    id: uuidv4(),
    title,
    description,
    price,
    category,
  };
  products.push(newProduct);

  res.status(201).send({
    message: "Posted Product!",
    newProduct,
  });
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, price, category } = req.body;
  const idx = products.findIndex((p) => p.id == +id);
  const updated = {
    id: +id,
    title,
    description,
    price,
    category,
  };
  products[idx] = updated;

  res.status(201).send({
    updatedProducts: updated,
  });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const idx = products.findIndex((p) => p.id == +id);

  if (idx === -1) {
    return res.status(404).send({ message: "Product not found" });
  }

  const deleted = products.splice(idx, 1);

  res.status(200).send({
    deletedProducts: deleted,
    message: "Product deleted successfully",
    products: products,
  });
});
