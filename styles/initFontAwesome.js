import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMobile,
  faQrcode,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    faLinkedin,
    faQrcode,
    faTelegram,
    faWhatsapp,
    faMobile,
    faEnvelope,
    faXmark
  );
}
export default initFontAwesome;
