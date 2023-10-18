"use client";

import "./page.css";
import { Login } from "./Login";
import { Footer } from "@/components";
import Image from "next/image";
import landingImage from "../assets/SignIn-bg.jpg";
import petCloudLogo from "../assets/petcloud-logo.svg";
import petCloudQr from "../assets/petcloud-qr-code.svg";
import { Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <section className="landing-layout">
        <div className="images-container">
          <div className="overlay-logo">
            <Image src={petCloudLogo} alt="Pet Cloud Logo" />
          </div>
          <Image
            className="bg-img"
            src={landingImage}
            alt="My Pet Cloud Background"
          />
        </div>
        <div className="login-container">
          <div className="overlay-qr">
            <Image src={petCloudQr} alt="Pet Cloud QR Code" />
            <Typography className="download-text" variant="caption">
              Download
              <br />
              our mobile app
            </Typography>
          </div>
          <Login />
        </div>
      </section>
      <Footer />
    </>
  );
}
