export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAqPXXDPVFnOpGU1YEQA2vWHNJoWPh0dwKc_uJNYLz6ndqODhwxMgnOb-dyYIqjhssGlygO3xKqJhdLBvoJDATifx4mcnsVhTDMG_iczpeR0O2-HY3RWckqvDCjHR3_pv-jm_C51ux79o7xac1w6Ifd9IB5ASzfgsg",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
