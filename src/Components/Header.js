import React from 'react';
import { FaChevronRight } from "react-icons/fa";

function Header() {
  return (
    <div className="header-wrapper">
        <h1>IP Address Tracker</h1>
        <form className="form-container">
            <input type="text" name="address" placeholder="Search for any IP address or domain" />
            <button type="submit"><FaChevronRight /></button>
        </form>
    </div>
  )
}

export default Header;