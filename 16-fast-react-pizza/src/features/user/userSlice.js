import { getAddress } from '../../services/apiGeocoding'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Async action creator function : thunk middleware
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress', async function () {

    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };

  })



const initialState = {
  username: '',
  status: 'idle',
  position: '',
  address: '',
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  // standard reducer logic, with auto-generated action types per reducer
  reducers: {
    updateName(state, action) {
      state.username = action.payload
    }
  },
  // async reducer
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => { //3 action type for async: pending,fulfilled,rejected
        state.status = 'loading'
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle'
        state.position = action.payload.position
        state.address = action.payload.address
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error'
        // state.error = action.error.message
        state.error = `There was a problem getting your address. 
                        Make sure to fill this field!`
      })
  }
})

// access action creators
export const { updateName } = userSlice.actions

export default userSlice.reducer

