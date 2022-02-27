import React from 'react';

function Details() {
  return (
    <div className="details-wrapper">
        <div className="details-container">
            <div className="details-box">
                <h2>IP Address</h2>
                <p>198.12.212.111</p>
            </div>
            <div className="details-box">
                <h2>Location</h2>
                <p>Brooklyn, NY</p>
            </div>
            <div className="details-box">
                <h2>Timezone</h2>
                <p>UTC +03:00</p>
            </div>
            <div className="details-box">
                <h2>ISP</h2>
                <p>Internet Service Provider</p>
            </div>
        </div>
    </div>
  )
}

export default Details;