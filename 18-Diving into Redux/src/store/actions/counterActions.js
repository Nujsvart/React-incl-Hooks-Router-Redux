export const increaseCounter = () => {
  return {
    type: "INCREMENT",
    payload: 1,
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREMENT",
    payload: 1,
  };
};
