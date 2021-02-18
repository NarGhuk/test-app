import React, {useCallback, useEffect, useState} from "react";
// import ContactForm from './container/contactForm';
import ContactForm from './container/testForm';
import {useContextData} from '../../../context';
import {useSelector} from 'react-redux';
import {coreFields} from '../../../redux/selectors/core-fields';
import {CircularProgress} from '@material-ui/core';
import { Formik } from "formik";

const UserContact = () => {
    const {data: {appFields}, isLoading} = useSelector((state) => coreFields(state));
    // name, title, type, required, options

    const getFieldsTypes = (arr) => {
        return arr.map((item) => {
            return {
                name: item['name'],
                title: item['title'],
                type: item['type'],
                required: item['required'],
                options: item['options']
            }
        })
    };

    const fieldsData = !isLoading && getFieldsTypes(appFields);

    const {contactIsOpen, toggleContact} = useContextData();
    const [fields, setFields] = useState({
        firsName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        email: '',
        emailValid: false,
        agree: null,
        checked: false
    });
    const [isValidForm, setIsValidForm] = useState(true);

    useEffect(() => {
        if (!!fields.firsName &&
            !!fields.lastName &&
            !!fields.company &&
            !!fields.jobTitle &&
            !!fields.emailValid &&
            !!fields.agree &&
            !!fields.checked
        ) {
            setIsValidForm(false)
        } else {
            setIsValidForm(true)
        }


    }, [fields]);

    const handleReset = () => {
        setFields(prev => {
            for (let key in prev) {
                prev[key] = ''
            }
            return {...prev}
        })
    };
    const handleChange = useCallback((ev) => {
        let targetName = 'value';
        if (ev.target.name === 'checked') {
            targetName = 'checked'
        }
        setFields((prevState) => ({
            ...prevState,
            [ev.target.name]: ev.target[targetName]
        }));

    }, []);

    const emailValidation = (e) => {
        setFields((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            emailValid: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)
        }));
    };


    return isLoading ? <CircularProgress color="inherit"/> :
        <ContactForm
            contactIsOpen={contactIsOpen}
            toggleContact={toggleContact}
            emailValidation={emailValidation}
            handleChange={handleChange}
            handleReset={handleReset}
            fields={fields}
            isValidForm={isValidForm}
            fieldsData={fieldsData}
        />


};
export default UserContact;

// export default function(values) {
//     const errors = {};
//     const requiredFields = [
//         'firstName',
//         'lastName',
//         'email',
//         'favoriteColor',
//         'notes',
//     ];
//     requiredFields.forEach(field => {
//         if (!values[field]) {
//             errors[field] = 'Required';
//         }
//     });
//     if (
//         values.email &&
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address';
//     }
//     return errors;
// }
