import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState([]);

  const Getdata = () => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setName(data.products);
      });
  };

  useEffect(() => {
    Getdata();
  }, []);
  // console.log(name);
  return (
    <>
      <h1>this is home page</h1>
      {name.map((item, i) => {
        return (
          <tr key={i}>
            {/* {console.log(item, 'vdfasb')} */}
            <td>
              <Link to={`/home/${item.id}`}>{item.id}</Link>
            </td>
            {/* <td>{item.username}</td>
            <td>{item.email}</td> */}   
          </tr>
        );
      })}

      <li></li>
      <li>
        <Link to='user/shivam'>shivam</Link>
      </li>
    </>
  );
};

export default Home;
