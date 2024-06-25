import { Tooltip } from "react-tooltip";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactBox}>
      <img src={contact.avatar} alt="avatar" />
      <div className={css.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        {/* <button>Add to Call</button> */}
      </div>
      <button
        className={css.delete}
        data-tooltip-id="delete"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        ❌
      </button>
      <Tooltip id="delete" content="Delete contact" />
    </div>
  );
};

export default Contact;
