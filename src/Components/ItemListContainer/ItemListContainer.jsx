import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../FireBase/Firebase";

const ItemListContainer = () => {
  const { category } = useParams();
  const [arrayProductos, setArrayProductos] = useState([]);

  useEffect(() => {
    const DataBase = getFirestore();

    const items = DataBase.collection("items");

    items
      .get()
      .then((querySnapShot) => {
        if (category > "") {
          let producto = querySnapShot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          let aux = producto.filter((item) => item.categoria === category);
          setArrayProductos(aux);
        } else {
          setArrayProductos(
            querySnapShot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },[category]);
  return (
    <div className="ms-4 me-4 mt-5">
      <ItemList Productos={arrayProductos} />
    </div>
  );
};
export default ItemListContainer;