import { IoQrCodeOutline, IoShareSocialOutline } from "react-icons/io5";

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
              <a
                title="Qr-code"
                href="https:/github.com"
                target="_blank"
                rel="noreferrer"
              >
                <IoQrCodeOutline />
              </a>
              <p> Salvar na Agenda </p>
              <a href="https:/github.com" target="_blank" rel="noreferrer">
                <IoShareSocialOutline />
              </a>
            </div>
            <div className="profile-icons">
              <p> 1 </p>
              <p> 2 </p>
              <p> 3 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
