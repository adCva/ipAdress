import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateLocationData } from  "./locationSlice";


// ========= The thunk.
export const getNewLocation = createAsyncThunk(
    "locationMiddleware/getNewLocation",
    async ({ip}, { dispatch }) => {
        return fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_k9o3bu1SPH8OMYBms9tK7oPXDJ4DS&ipAddress=${ip}`)
        .then((res) => res.json()).then(resData => dispatch(updateLocationData({data: resData})))
        .catch((err) => console.log(err))
    }
);


const countriesSlice = createSlice({
    name: "getNewLocation",
    initialState: {
        newLocationData: [],
        status: null
    },
    extraReducers: {
        [getNewLocation.pending]: (state) => {
            state.status = "loading"
        },
        [getNewLocation.fulfilled]: (state, {payload}) => {
            state.countriesList = payload
            state.status = "success"
        },
        [getNewLocation.rejected]: (state) => {
            state.status = "failed"
        }
    }
})


export default countriesSlice.reducer;