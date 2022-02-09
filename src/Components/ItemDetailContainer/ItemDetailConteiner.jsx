import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../FireBase/Firebase";

const ItemDetailConteiner = () => {
  const { id } = useParams();
  const [getItem, setGetItem] = useState([]);

  useEffect(() => {
    const DataBase = getFirestore();

    const Collecion = DataBase.collection("items");

    const item = Collecion.doc(id);

    item
      .get()
      .then((doc) => {
        setGetItem({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      {getItem.length === 0 ? (
        <div className="loading show mt-5 row">
          <div className="spin"></div>
          <h4 className="text-center mt-3">...Loading...</h4>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <ItemDetail Items={getItem} />{" "}
        </div>
      )}
    </>
  );
};
export default ItemDetailConteiner;
