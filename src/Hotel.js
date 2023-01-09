import React from "react";
import Listing from "./Api/listing";
import ReactStars from "react-rating-stars-component";

const Hotel = () => {
  return (
    <>
      {Listing.map((getHotel, index) => (
        <div key={getHotel.HotelList} className="container">
          <div className="app-box">
            {getHotel.HotelList.map((getHotelData, index) => (
              <div key={index} className="app-flex">
                <img src={getHotelData.ThumbNailURL} alt="Hotelimage" />
                <div>
                  <h4>{getHotelData.HotelName}</h4>
                  <ReactStars count={getHotelData.PropertyRating} size={24} edit={false} color="rgb(255, 215, 0)"/>  
                  <address>{getHotelData.Address}</address>
                  <p>{getHotelData.ShortDescription}</p>
                </div>
                <div>
                  <p>Form</p>
                  <b>{getHotelData.DisplayCurrencyCode} <span>{getHotelData.TotalCharges}</span></b>
                  <p></p>
                  <input type="submit" value="Choose Room" className="btn"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Hotel;
