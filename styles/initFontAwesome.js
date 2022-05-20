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
} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    faLinkedin,
    faQrcode,
    faTelegram,
    faWhatsapp,
    faMobile,
    faEnvelope
  );
}
export default initFontAwesome;
