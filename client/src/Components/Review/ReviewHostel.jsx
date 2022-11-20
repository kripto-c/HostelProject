import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import BOOTSTRAP --------------------------------------------->>
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { IoIosStar } from "react-icons/io";
import style from "../../Styles/ReviewHostel.module.css";
import { postReview } from "../../Redux/actions/index.js";
// const Swal = require("sweetalert2");
import Swal from "sweetalert2";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function RatingBootstrap() {
  const client = useSelector((state) => state.client);
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [current, setCurrent] = useState(0);
  // const [description, setDescription] = useState("");
  const [input, setInput] = useState({
    usuario: client.name,
    rating: 0,
    description: "",
  });
  const dispatch = useDispatch();

  function handleClick(index) {
    setCurrent(index);
    setInput({ ...input, rating: index });
  }
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (input.rating === 0) {
      return input.rating === 0
        ? Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Por favor, seleccione un número de estrellas de acuerdo a su experencia en Project Hostel.",
          })
        : null;
    } else {
      dispatch(postReview(input));
      setInput({ usuario: client.name, rating: 0, description: "" });
      setCurrent(0);
      setRating([1, 2, 3, 4, 5]);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Gracias por darnos su opinion. ¡Que tenga un buen dia!",
      });
    }
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
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
          onChange={(e) => handleChange(e)}
          style={{ height: "100px" }}
        >
          {" "}
          <Form.Control
            as="textarea"
            value={input.description}
            name="description"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <br />
        <Button type="submit" value="Enviar">
          Enviar
        </Button>
      </div>
    </form>
  );
}

export default withAuthenticationRequired(RatingBootstrap, {
  onRedirecting: () => (
    <div>
      <h1>No estas registrado para esto....</h1>
    </div>
  ),
});