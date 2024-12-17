const initialState = {
    genres: [],
    isLoading: true,
    error: null,
  };
  
  const genreReducer = (state = initialState, action) => {
    switch (action.type) {
      case "x":
        return state;
      case "y":
        return state;
      default:
        return state;
    }
  };
  
  export default genreReducer;
  