import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//DataBase
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    color: "",
    company: "",
    title: "",
  });

  //Input Filter
  const handleInputChange = (event) => {
    setFilters((prev) => ({ ...prev, title: event.target.value }));
  };

  //Radio Filter
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  //Buttons Filter
  const handleClick = (event) => {
    setFilters((prev) => ({ ...prev, company: event.target.value }));
  };

  function filteredData(products, filters) {
    let filteredProducts = products;

    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) => {
        let matchPrice = true;
        if (filters.price && filters.price.includes("~")) {
          const [min, max] = filters.price
            .split("~")
            .map((val) => (val === "" ? Infinity : Number(val)));
          const productPrice = Number(newPrice);
          matchPrice = productPrice >= min && productPrice <= max;
        }

        const matchTitle = title
          .toLowerCase()
          .includes(filters.title.toLowerCase());

        const matchCategory =
          !filters.category || category === filters.category;
        const matchColor = !filters.color || color === filters.color;
        const matchCompany = !filters.company || company === filters.company;

        return (
          matchPrice &&
          matchCategory &&
          matchColor &&
          matchCompany &&
          matchTitle
        );
      },
    );

    return filteredProducts.map((item) => <Card key={item.title} {...item} />);
  }

  const result = filteredData(products, filters);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={filters.title} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}
export default App;
