import React, { useState, useEffect } from 'react';
// ========= Components.
import Loading from './Loading';
import Error from './Error';
// ========= Redux.
import { useSelector } from 'react-redux';
// ========= React Icons.
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from "react-icons/ri";


function Details() {
    // ========= Local & redux state.
    const [ displayDataMobile, setDisplayDataMobile ] = useState(false);
    const locationData = useSelector(state => state.location.locationData.data);
    const loading = useSelector(state => state.location.loading);
    const error = useSelector(state => state.location.error);


    // ========= Toggle display data.
    const toggleDetailsMenu = () => {
        setDisplayDataMobile(!displayDataMobile);
    }

    // ========= Show data on big screen.
    useEffect(() => {
        let showData = () => {
            if (window.innerWidth > 767) {
                setDisplayDataMobile(true);
            } else {
                setDisplayDataMobile(false);
            }
        }

        window.addEventListener("load", showData);
        window.addEventListener("resize", showData);

        return() => {
            window.removeEventListener("load", showData);
            window.removeEventListener("resize", showData);
        }
    });


    
    return (
        <div className={loading ? "details-wrapper details-wrapper-loading" : "details-wrapper"}>
            {error ? (
                <Error />
            ) : loading ? (
                <Loading />
            ) : (
                <div className="details-container">
                    <div className={displayDataMobile ? "boxes-show" : "boxes-hide"}>
                        <div className="details-box">
                            <h2>IP Address</h2>
                            <p>{locationData.ip}</p>
                        </div>
                        <div className="details-box">
                            <h2>Location</h2>
                            <p>{locationData.location.region}, {locationData.location.country}</p>
                        </div>
                        <div className="details-box">
                            <h2>Timezone</h2>
                            <p>{locationData.location.timezone}</p>
                        </div>
                        <div className="details-box">
                            <h2>ISP</h2>
                            <p>{locationData.isp}</p>
                        </div>
                    </div>
                    <button onClick={toggleDetailsMenu} className={displayDataMobile ? "show-btn show-btn-up" : "show-btn show-btn-down"}>{displayDataMobile ? <RiArrowUpCircleFill/> : <RiArrowDownCircleFill/>}</button>
                </div>
            )}
        </div>
    )
}

export default Details;