import React from 'react'
import { Product } from './Product';
//Materi re-useable components
export const ProductList = () => {
    const products = [
        {
          id: 1,
          name: "iPhone 14 Pro",
          description: "Latest Apple iPhone with A16 Bionic chip and improved camera system.",
          price: 1499,
          category: "Smartphone",
          stock: 25,
          image: "https://placehold.co/100x100",
        },
        {
          id: 2,
          name: "Samsung Galaxy S23",
          description: "Samsung's flagship phone with an advanced camera and a powerful Exynos processor.",
          price: 1299,
          category: "Smartphone",
          stock: 18,
          image: "https://placehold.co/100x100",
        },
        {
          id: 3,
          name: "Sony WH-1000XM5",
          description: "Industry-leading noise-cancelling headphones with premium sound quality.",
          price: 399,
          category: "Headphones",
          stock: 35,
          image: "https://placehold.co/100x100",
        },
        {
          id: 4,
          name: "Dell XPS 13",
          description: "Ultraportable laptop with Intel i7 processor and stunning 13-inch InfinityEdge display.",
          price: 1599,
          category: "Laptop",
          stock: 12,
          image: "https://placehold.co/100x100",
        },
      ];
  return (
    <div>
        Product List
        <div className="flex flex-col">
            {products.map((product) => (
            <Product
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
                stock={product.stock}
                image={product.image}
            />
            ))}
        </div>
    </div>
  )
}
