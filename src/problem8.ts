type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  const newProducts = products.map((product) => {
    const totalPrice = product.price * product.quantity;

    if (product.discount) {
      const discount = totalPrice * (product.discount / 100);
      const discountedPrice = totalPrice - discount;
      return discountedPrice;
    } else {
      return totalPrice;
    }
  });

  const grandTotalPrice = newProducts.reduce((acc, currentPrice) => {
    return acc + currentPrice;
  }, 0);

  return grandTotalPrice;
};

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
