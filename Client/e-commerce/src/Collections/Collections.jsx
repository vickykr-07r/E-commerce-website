import React, { useContext, useEffect, useState } from "react";
import Nav from "../Component/Nav.jsx";
import Style from "../Collections/Collections.module.css";
import { shopDataContext } from "../Context/ShopContext";
import { Card } from "../Component/Card";
export const Collections = () => {
  let { products,setSearch,search,showSearch,setShowSearch } = useContext(shopDataContext);
  let [filterProducts, setFilterProducts] = useState([]);
  let [category, setCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);
  let [shortType, setShortType] = useState("relevant");
  
  const applyFilter = () => {
    let productCopy = products.slice();
    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productCopy);
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);
  return (
    <div className={Style.container}>
      <div className={Style.nav}>
        <Nav />
      </div>
      <div className={Style.box}>
        <div className={Style.sidebar}>
          <h1>Filters</h1>

          <div className={Style.categories}>
            <h2>Categories</h2>

            <label>
              <input type="checkbox" value="Men" onChange={toggleCategory} />{" "}
              Men
            </label>
            <label>
              <input type="checkbox" value="Women" onChange={toggleCategory} />{" "}
              Women
            </label>
            <label>
              <input type="checkbox" value="Kids" onChange={toggleCategory} />{" "}
              Kids
            </label>
          </div>

          <div className={Style.subcategories}>
            <h2>Sub-Categories</h2>

            <label>
              <input
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />{" "}
              Top Wear
            </label>
            <label>
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />{" "}
              Bottom Wear
            </label>
            <label>
              <input
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
              />{" "}
              Winter Wear
            </label>
          </div>
        </div>
        <div className={Style.boxright}>
          {filterProducts.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image1}
              id={item._id}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
