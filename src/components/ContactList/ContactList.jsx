import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.contact} key={contact.id}>
            <Contact contact={contact} handleDelete={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
