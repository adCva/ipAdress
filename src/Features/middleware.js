import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateLocationData, updateError } from  "./locationSlice";
let apiKey = "at_DfnOlRlJmxVwTV12rqGGIekUobZdC";


// ========= The thunk.
export const getNewLocation = createAsyncThunk(
    "locationMiddleware/getNewLocation",
    async ({ip}, { dispatch }) => {
        return fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
            .then((response) => {
                if(!response.ok) {
                    dispatch(updateError())
                } else {
                    response.json().then(resData => dispatch(updateLocationData({data: resData})))
                }
            })
            .catch((err) =>  console.log(err))
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