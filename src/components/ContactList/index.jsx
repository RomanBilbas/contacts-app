import { connect } from "react-redux";
import { deleteContact, updateContact } from "../../store/slices/contactsSlice";

function ContactList({ contacts, deleteContactById, updateContactByID }) {
  const changeIsFavorite = (id, checked) =>
    updateContactByID(id, { isFavorite: checked });

  return (
    <ul>
      {contacts.map((c) => (
        <li key={c.id}>
          <label>
            <input
              type="checkbox"
              checked={c.isFavorite}
              onChange={({ target: { checked } }) => {
                changeIsFavorite(c.id, checked);
              }}
            />
            {JSON.stringify(c)}
          </label>
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ contactsList }) => contactsList;
const mapDispatchToProps = (dispatch) => ({
  deleteContactById: (id) => {
    dispatch(deleteContact(id));
  },
  updateContactByID: (id, date) => {
    dispatch(updateContact({ id, date }));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
