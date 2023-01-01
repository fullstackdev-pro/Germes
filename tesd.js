let products = [
  {
    name: "iPhone 7",
    price: 700,
    brand: "apple",
  },
  {
    name: "iPhone 8",
    price: 800,
    brand: "apple",
  },
  {
    name: "Galaxy A7",
    price: 700,
    brand: "samsung",
  },

  {
    name: "redmi 7",
    price: 700,
    brand: "xiaomi",
  },
];

let brands = products.map((product) => product.brand);
console.log(brands);
