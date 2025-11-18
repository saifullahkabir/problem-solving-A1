type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

// better approach
// time complexity: O(n)
// space complexity: O(1)
const calculateTotalPrice = (products: Product[]): number => {
  const grandTotalPrice = products.reduce((acc, product) => {
    const totalPrice = product.price * product.quantity;

    const discountedPrice = product.discount
      ? totalPrice - totalPrice * (product.discount / 100)
      : totalPrice;

    return acc + discountedPrice;
  }, 0);

  return grandTotalPrice;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));


