import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="bg-dark p-3 text-white">
        <div className="py-5 d-lg-flex justify-content-around">
          <div>
            <img style={{ width: "50px", marginLeft: "5px" }} src="" alt="" />
            <h3>
              Watch
              <span className="text-success">Zone</span>
            </h3>
            <p className="mb-0">
              "We Provide best products <br /> to make you happy"
            </p>
          </div>
          <div className="text-start">
            <p>About Watch Zone</p>
            <p>Read Our Blog</p>
            <p>Sign up for Discount</p>
            <p>Choose Your Favourite Watch</p>
          </div>
          <div className="text-start">
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>Views All Collections</p>
            <p>Stay With Us </p>
          </div>
        </div>
        <p>Follow Us</p>
        <p className="d-md-flex justify-content-center">
          <GoogleIcon sx={{ mr: 2 }}></GoogleIcon>
          <FacebookIcon sx={{ mr: 2 }}></FacebookIcon>
          <TwitterIcon sx={{ mr: 2 }}></TwitterIcon>
          <InstagramIcon sx={{ mr: 2 }}></InstagramIcon>
        </p>
      </div>
      <p className="mb-0 p-3 text-center text-white bg-primary">
        Copyright<i className="far fa-copyright"></i> 2022 Watch Zone All right
        reserved.
      </p>
    </>
  );
};

export default Footer;
