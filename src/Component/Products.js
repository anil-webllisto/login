import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { id } = params;

  const Getdata = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => { 
    Getdata();
  }, []);

  return (
    <div>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      <p>{data?.price}</p>
      {/* {data?.images && data.images.map((x, i) => <img key={i} src={x} />)} */}
      {data?.images?.map((x, i) => {
        <img key={i} src={x} />
      })}
    </div>
  );
};

export default Products;
