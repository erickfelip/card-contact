import react, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  function handleCloseModal(e) {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }

  const modalContent = show ? (
    <div className="overlay" onClick={handleCloseModal}>
      <div className="modal">
        <div className="closebutton">
          <a href="#" onClick={handleCloseModal}>
            <FontAwesomeIcon
              icon={("fab", "xmark")}
              size="2x"
              style={{ width: 25, height: 25 }}
            />
          </a>
        </div>

        <div className="headerr">
          <p>Salve meu contato na sua agenda!</p>
        </div>
        <div className="body">
          <Image
            src="/images/qrcodecontato.png"
            alt="qr-code-contato"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
