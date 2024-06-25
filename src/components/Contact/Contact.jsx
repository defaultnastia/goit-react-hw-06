import { Tooltip } from "react-tooltip";

import css from "./Contact.module.css";

const Contact = ({ contact, handleDelete }) => {
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
          handleDelete(contact.id);
        }}
      >
        ❌
      </button>
      <Tooltip id="delete" content="Delete contact" />
    </div>
  );
};

export default Contact;
