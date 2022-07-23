const increment = (x) => {
  return {
    type: "INC",
    payload: x,
  };
};
const decrement = (x) => {
  return {
    type: "DEC",
    payload: x,
  };
};

export { increment, decrement };
