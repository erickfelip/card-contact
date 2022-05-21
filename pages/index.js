import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <div className="avatar"></div>
        <div className="profile">
          <div className="info">
            <p> Marcelo Elias</p>
            <div className="position">
              <p> Diretor CDA Distribuidora Azevedo </p>
            </div>
            <div className="profile-icons">
              <a
                onClick={() => setShowModal(true)}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={("fab", "qrcode")}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
                <Modal
                  show={showModal}
                  onClose={() => setShowModal(false)}
                ></Modal>
              </a>
              <a
                href="https://wa.me/558491083265"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
              <a
                href="mailto: marcelo.elias@cdanatal.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={("fab", "envelope")}
                  size="2x"
                  style={{ width: 40, height: 40 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
