import React, {useState} from "react";
import ContactForm from './container/contactForm';
import {useContextData} from '../../../context';
import {useSelector} from 'react-redux';
import {coreFields} from '../../../redux/selectors/core-fields';
import {CircularProgress, Dialog} from '@material-ui/core';
import {getFieldName} from './helpers';
import {Formik, Form} from "formik";
import * as yup from "yup";
import {DialogTitle} from './container/contactModal';

const UserContact = () => {
    const {data: {appFields}, isLoading} = useSelector((state) => coreFields(state));
    const {contactIsOpen, toggleContact} = useContextData();
    const [isSuccess, setIsSuccess] = useState(false);
    if (isLoading) return null;

    const formSchema = {};
    appFields.forEach((field) => {
        if (field.required) {
            const fieldName = getFieldName(field.name);

            if (["text", "textarea", "radio"].includes(field.type))
                formSchema[fieldName] = yup.string().required();
            else if (field.type === "email")
                formSchema[fieldName] = yup.string().email().required();
            else if (field.type === "checkbox") {
                formSchema[fieldName] = !!field.options.length
                    ? yup.array().min(1, "This field is required").required()
                    : yup.bool().oneOf([true], "This field is required");
            }
        }
    });
    const validationSchema = yup.object().shape(formSchema);

    const initialValues = appFields.reduce((prev, curr) => {
        prev[getFieldName(curr.name)] = "";
        return prev;
    }, {});
    return isLoading ? <CircularProgress color="inherit"/> :
        <Dialog open={contactIsOpen} onClose={toggleContact()} aria-labelledby="form-dialog-title">
            <DialogTitle id="customized-dialog-title" onClose={toggleContact()}>
                Modal title
            </DialogTitle>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                validateOnMount
                onSubmit={() => setIsSuccess(true)}
            >
                {(props) => (
                    <Form>
                        <ContactForm appFields={appFields}
                                     isSuccess={isSuccess}
                                     setIsSuccess={setIsSuccess}/>
                    </Form>
                )}
            </Formik>
        </Dialog>
};
export default UserContact;