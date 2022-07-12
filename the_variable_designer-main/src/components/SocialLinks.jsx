import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaGithub,
} from "react-icons/fa";

import "../styles/sociallink.css";

export const SocialLinks = () => {
    return (
        <div className="socialLinks">
            <div className="socialLink">
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebook className="socialLinkIcon" />
                </a>
            </div>
            <div className="socialLink">
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram className="socialLinkIcon" />
                </a>
            </div>
            <div className="socialLink">
                <a href="https://twitter.com/DIGIBEA2" target="_blank" rel="noreferrer">
                    <FaTwitter className="socialLinkIcon" />
                </a>
            </div>
            <div className="socialLink">
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="socialLinkIcon" />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
