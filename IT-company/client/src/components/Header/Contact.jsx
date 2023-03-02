import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="contact">
      <a href="mailto:lormail@gmail.com">
        <AiFillMail />
        <span>lormail@gmail.com</span>
      </a>

      <a href="tel:+212698584458">
        <AiFillPhone />
        <span>+212698584458</span>
      </a>
    </div>
  );
};

export default Contact;
