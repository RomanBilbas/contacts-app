import ContactForm from "../../components/ContactsForm";
import ContactList from "../../components/ContactList";

function ContactsPage() {
  return (
    <main>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactList />
    </main>
  );
}

export default ContactsPage;
