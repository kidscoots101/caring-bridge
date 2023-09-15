import React from 'react'
import { useLocation } from "react-router-dom";


export default function Seemore() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const name = searchParams.get("name");
  const address = searchParams.get("address");
  const imageUrl = searchParams.get("imageUrl");
  const rating = parseFloat(searchParams.get("rating"));
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Address: {address}</p>
      <p>Rating: {rating}</p>
      <img src={imageUrl} alt={name} style={{ maxWidth: "100%" }} />
    </div>
 )
}
