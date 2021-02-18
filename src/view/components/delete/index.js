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
        lastName: '',
    });
    const [isValidForm, setIsValidForm] = useState(true);

    useEffect(() => {
        if (
            !!fields.lastName &&
        ){
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

    const validationSchema = Yup.object({
        lastNname: Yup.string("Enter a name").required("Name is required"),
    });

    return isLoading ? <CircularProgress color="inherit"/> :
        <Formik
            render={props => <ContactForm {...props} />}
            initialValues={values}
            validationSchema={isValidForm}
            onSubmit={this.submit}
        />



};
export default UserContact;
