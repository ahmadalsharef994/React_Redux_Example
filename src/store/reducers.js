const initialState = {
  count: 0,
  description: "each click increase/decrease by 2"
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };
    case "DEC":
      return { ...state, count: state.count - action.payload };
  }
};

export default counter;
