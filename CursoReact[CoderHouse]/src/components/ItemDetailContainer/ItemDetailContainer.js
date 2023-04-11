import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../items/Item";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [ItemDetail, SetItemDetail] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
      SetItemDetail(res.data)
    );
  }, [id]);

  return (
    <div className="ItemDetail">
      <Item data={ItemDetail} />
    </div>
  );
};

export default ItemDetailContainer;
