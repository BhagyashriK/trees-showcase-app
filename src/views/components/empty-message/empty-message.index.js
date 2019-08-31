import React from "react";
import { Wrapper } from "./empty-message.style";

const EmptyMessage = ({ message }) => {
  return <Wrapper>{message}</Wrapper>;
};

export default EmptyMessage;
