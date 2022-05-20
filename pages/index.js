import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faQrcode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="avatar"></div>
        <div className="profile">
          <div className="info">
            <p> Marcelo Elias</p>
            <div className="position">
              <p> Diretor CDA Distribuidora Azevedo</p>
            </div>
            <div className="contact">
              {/* <a href="https:/github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faQrcode} size="2x" />
              </a>
              <a href="https:/github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "whatsapp"]} size="2x" />
              </a> */}
            </div>
            <div className="profile-icons">
              <a href="https:/github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={("fab", "qrcode")}
                  size="2x"
                  style={{ width: 30 }}
                />
              </a>
              <a href="https:/github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  size="2x"
                  style={{ width: 30 }}
                />
              </a>
              <a href="https:/github.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={("fab", "envelope")}
                  size="2x"
                  style={{ width: 30 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
