import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import BOOTSTRAP
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { IoIosStar } from "react-icons/io";
import style from "../Styles/RatingBootstrap.module.css";
import { postReview } from "../redux/actions";

export default function RatingBootstrap() {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [current, setCurrent] = useState(0);
  // const [description, setDescription] = useState("");
  const [input, setInput] = useState({
    usuario: "Nicolas",
    rating: 0,
    description: "",
  });
  const dispatch = useDispatch();

  function handleClick(index) {
    setCurrent(index);
    setInput({...input, rating:index})
  }
  function handleChange(e) {
    
    setInput({...input, [e.target.name]:e.target.value});
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input)
    dispatch(postReview(input));
    
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="container">
        {rating.map((r, index) => (
          <IoIosStar
            className={r <= current ? style.yellow : style.grey}
            key={index}
            name="rating" //No acepta name
            value={current}
            
            onClick={() => handleClick(r)}
          ></IoIosStar>
        ))}
        <br />
        <FloatingLabel
          name="description"
          value={input.description}
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
          onChange={(e) => handleChange(e)}
          style={{ height: "100px" }}
        >
          {" "}
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        {/*rows=10 filas,  cols = columnas  max length = maximo caracteres*/}
        <br />
        <Button type="submit" value="Enviar">
          Enviar
        </Button>
      </div>
    </form>
  );
}
