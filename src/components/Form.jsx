import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup'

const initialValues = {
    name: "",
    number: ""
};
const schema = yup.object().shape({
    name: yup.string().required().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" ),

})

export const ContactForm = ({addContact}) => {
    const  handleSubmit = (values, {resetForm}) => {
        console.log(values)
addContact(values)
        resetForm()
        
    }
  
    // const handleSubmit = (values, {resetForm}) => {
    //     console.log(values)
    // addContact(values)
    // resetForm()
    // }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            
           <Form >
               <h1>PhoneBook</h1>
               <div>
                   <h3>Name</h3>
    <Field
  type="text"
  name="name"/>
                    <ErrorMessage name="name" component="div" />
               </div>
<div>
                   <h3>Phone</h3>
    <Field
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/><ErrorMessage name="number" component="div" />
               </div>

        <button type="subbmit">Add contact</button>
           </Form></Formik>
       )
   }  
