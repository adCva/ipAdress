import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
    name: "locationSlice",
    initialState: {
        loading: false,
        error: false,
        locationData: {data: {
                ip: "192.212.174.101",
                isp: "SpaceX Starlink",
                location: {
                    region: "Brooklyn",
                    country: "US",
                    timezone: "-05:00",
                    lat: "40.6375",
                    lng: "-74.0216"
                }
            }
        }
    },

    reducers: {
        startLoading: state => {
            state.loading = true
        },
        updateError: state => {
            state.loading = false
            state.error = true

        },
        updateLocationData: (state, action) => {
            const newData = {data: action.payload.data}

            return {
                ...state,
                loading: false,
                error: false,
                locationData: newData
            }
        }
    }
})


export const { startLoading, updateError, updateLocationData } = locationSlice.actions;

export default locationSlice.reducer;