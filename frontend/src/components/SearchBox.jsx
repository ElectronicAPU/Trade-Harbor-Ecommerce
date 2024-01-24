import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const SearchBox = () => {
  const { keyword: urlKeyword } = useParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="outline-light" className="p-2 mx-2">
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
