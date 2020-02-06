const intialState = {
  count: 0
};

export const reducer = (state = intialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case "decrement":
      return {
        count: state.count - 1
      };
    case "increment":
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};
