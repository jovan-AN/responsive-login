import "./Footer.css";
import { Typography } from "@mui/material";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-support">
        <Typography variant="h6">Have questions?</Typography>
        <a href="mailto:help@support.mypetcloud.com">
          <IoIosMail size={25} />
          <Typography variant="body1">help@support.mypetcloud.com</Typography>
        </a>
      </div>
      <Typography className="footer-copyright">
        Copyright © 2015-2023 Figo Pet insurance LLC. All rights reserved.
      </Typography>
    </footer>
  );
};
