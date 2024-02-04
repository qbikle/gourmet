import React from "react";
import "./footer.css";

function FooterComp() {
  const style = {
    position: "absolute",
    paddingTop: "40px",
    width: "100vw",
    backgroundColor: "rgba(255, 255, 255, 0.073)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#f50000",
    height: "400px",
    borderRadius: "20px",
    borderColor: "#f50000",
  };

  return (
    <footer class="footer" style={style}>
      <div className="content">
        <div className="info">
          <span className="title">About Us</span>
          <br />
          <span className="description">
            We are a restaurant that specializes in serving delicious food made
            from the freshest ingredients.
          </span>
        </div>
        <div className="info">
          <span className="title">Contact Us</span>
          <br />
          <span className="description">
            Phone: 6969696969 Email: coolGourmet@gmail.com
          </span>
        </div>
        <div className="info">
          <span className="title">Hours of Operation</span>
          <br />
          <span className="description">24 Hours</span>
        </div>
        <div className="info">
          <span className="title">Location</span>
          <br />
          <span className="description">Rajlabdi</span>
        </div>
      </div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.6807761915056!2d72.62739272537203!3d23.145340779087892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81ee8a9670fd%3A0xe387e3cfb88812c4!2sRaj%20Labdhi%20Heritage%2C%20Gujarat%20382421!5e0!3m2!1sen!2sin!4v1682159233656!5m2!1sen!2sin"
          width="600"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ filter: "invert(90%)", color: "#0affff" }}
          title="Google Maps"
        ></iframe>
      </div>
    </footer>
  );
}

export default FooterComp;
