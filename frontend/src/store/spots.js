import { csrfFetch } from "./csrf";
// Action Type Constants:
export const LOAD_SPOTS = 'spots/LOAD_SPOTS';
export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT';
export const UPDATE_SPOT = 'spots/UPDATE_SPOT';
export const REMOVE_SPOT = 'spots/REMOVE_SPOT';

//Action Creators:
export const loadSpots = (spots) => ({
  type: LOAD_SPOTS,
  spots,
});

export const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot,
});

export const editSpot = (spot) => ({
  type: UPDATE_SPOT,
  spot,
});

export const removeSpot = (spotId) => ({
  type: REMOVE_SPOT,
  spotId,
});

// Thunk Action Creators:
export const fetchSpots = () => async (dispatch) => {
  const res = await fetch('/api/spots');

  if (res.ok) {
    const spots = await res.json();
    dispatch(loadSpots(spots));
    return spots;
  }
};

export const fetchDetailedSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`);

  if (res.ok) {
    const spotDetails = await res.json();
    dispatch(receiveSpot(spotDetails));
    return spotDetails
  }
};


export const createSpot = (spot) => async (dispatch) => {
  const res = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot),
  });

  if (res.ok) {
    const newSpot = await res.json();
    dispatch(receiveSpot(newSpot));
    return newSpot;
  } else {
    const errors = await res.json();
    console.log(errors)
    return errors;
  }
};

export const updateSpot = (spot) => async (dispatch) => {
  console.log(spot)
  const res = await csrfFetch(`/api/spots/${spot.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot),
  });

  const updatedSpot = await res.json();
  if (res.ok) {
    dispatch(editSpot(updatedSpot));
    return updatedSpot;
  } else {
    const errors = await res.json();
    return errors;
  };
}

export const deleteSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    dispatch(removeSpot(spotId));
  } else {
    const errors = await res.json();
    return errors;
  }
};

//Spots reducer
const initialState = {
  allSpots: {},
  singleSpot: {}
};

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPOTS: {
      const newState = { ...state, allSpots: {} }
      action.spots.spots.forEach(spot => {
        newState.allSpots[spot.id] = spot;
      });
      return newState
    }
    case RECEIVE_SPOT: {
        const newState = { ...state };
        newState.singleSpot[action.spot.id] = action.spot;
        return newState;
      }
    case UPDATE_SPOT: {
        const newState = { ...state };
        newState.allSpots[action.spot.id] = action.spot;
        newState.singleSpot[action.spot.id] = action.spot;
        console.log(newState)
        return newState;
      }
    case REMOVE_SPOT:
      const newState = { ...state };
      delete newState.allSpots[action.spotId];
      delete newState.singleSpot[action.spotId];
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
