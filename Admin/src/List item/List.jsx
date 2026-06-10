import React from "react";
import Style from "../List item/List.module.css";
import Nav from "../Component/Nav";
import SideBar from "../Component/SideBar";
import { useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../Context/AuthContext";
import axios from "axios";
import { RxCrossCircled } from "react-icons/rx";
import { useEffect } from "react";
export const List = () => {
  let [list, setList] = useState([]);
  let { serverUrl } = useContext(AdminContext);

  let fetchlist = async () => {
    try {
      let result = await axios.get(`${serverUrl}/api/product/list`, {
        withCredentials: true,
      });
      console.log(result.data);
      setList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchlist();
  }, []);

  let removeproduct = async (id) => {
    try {
      let result = await axios.post(
        `${serverUrl}/api/product/remove/${id}`,
        {},
        { withCredentials: true },
      );
      console.log(result.data);

      if (result.data) {
        fetchlist();
      } else {
        console.log("Failed To Remove Product");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={Style.container}>
        <div className={Style.nav}>
          <Nav />
        </div>

        <div className={Style.box}>
          <div className={Style.boxleft}>
            <SideBar />
          </div>

          <div className={Style.boxright}>
            {list?.length > 0 ? (
              <div className={Style.productlist}>
                {list?.map((item, index) => (
                  <div className={Style.productlistleft} key={index}>
                    <div className={Style.a}>
                      <div className={Style.productlistleft1}>
                        <img src={item.image1} alt="" />
                      </div>

                      <div className={Style.productlistleft2}>
                        <h1>{item.name}</h1>
                        <p>{item.category}</p>
                        <span>₹{item.price}</span>
                      </div>
                    </div>

                    <div className={Style.productlistright1}>
                      <RxCrossCircled
                        onClick={() => {
                          removeproduct(item._id);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={Style.noProduct}>
                <h1>No Product Available </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
