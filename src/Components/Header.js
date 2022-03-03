import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { startLoading } from "../Features/locationSlice";
import { getNewLocation } from "../Features/middleware";

function Header() {
  const dispatch = useDispatch();

  const getIpAddressData = (e) => {
    e.preventDefault();
    dispatch(startLoading());
    dispatch(getNewLocation({ip: "51.179.96.116"}));
  }

  return (
    <div className="header-wrapper">
        <h1>IP Address Tracker</h1>
        <form className="form-container" onSubmit={getIpAddressData}>
            <input type="text" name="address" placeholder="Search for any IP address or domain" />
            <button type="submit"><FaChevronRight /></button>
        </form>
    </div>
  )
}

export default Header;