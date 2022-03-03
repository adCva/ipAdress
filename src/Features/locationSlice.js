import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
    name: "locationSlice",
    initialState: {
        loading: false,
        locationData: {data: {
                lat: 40.6375,
                lng: -74.0216,
                ipAddress: "192.212.174.101",
                city: "Brooklyn, NY",
                timezone: "UTC -05:00",
                isp: "SpaceX Starlink"
            }
        }
    },

    reducers: {
        startLoading: state => {
            state.loading = true
        },
        updateLocationData: (state, action) => {
            const newData = {data: action.payload.data}

            return {
                ...state,
                loading: false,
                locationData: newData
            }
        }
    }
})


export const { startLoading, updateLocationData } = locationSlice.actions;

export default locationSlice.reducer;