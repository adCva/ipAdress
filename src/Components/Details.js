import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

function Details() {
    const locationData = useSelector(state => state.location.locationData.data);
    const loading = useSelector(state => state.location.loading);

    return (
        <div className="details-wrapper">
            {loading ? (
                <Loading />
            ) : (
                <div className="details-container">
                    <div className="details-box">
                        <h2>IP Address</h2>
                        <p>{locationData.ipAddress}</p>
                    </div>
                    <div className="details-box">
                        <h2>Location</h2>
                        <p>{locationData.city}</p>
                    </div>
                    <div className="details-box">
                        <h2>Timezone</h2>
                        <p>{locationData.timezone}</p>
                    </div>
                    <div className="details-box">
                        <h2>ISP</h2>
                        <p>{locationData.isp}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Details;