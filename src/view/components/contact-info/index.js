import React from "react";
import ContactForm from './container/contactForm';
import {useContextData} from '../../../context';
import {useSelector} from 'react-redux';
import {coreFields} from '../../../redux/selectors/core-fields';
import {CircularProgress, Dialog} from '@material-ui/core';
import {Formik} from "formik";
import * as Yup from 'yup';
import {DialogTitle} from './container/contactModal';

const UserContact = () => {
    const {data: {appFields}, isLoading} = useSelector((state) => coreFields(state));
    const {contactIsOpen, toggleContact} = useContextData();


    const validationSchema = Yup.object({
        name: Yup.string("Enter a name").required("Name is required"),
        email: Yup.string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
    });
    const values = {name: "", email: "",};
// name, title, type, required, options
    console.log('---',appFields);
    return isLoading ? <CircularProgress color="inherit"/> :
        <Dialog open={contactIsOpen} onClose={toggleContact()} aria-labelledby="form-dialog-title">
            <DialogTitle id="customized-dialog-title" onClose={toggleContact()}>
                Modal title
            </DialogTitle>
            <Formik
                render={props => <ContactForm {...props} />}
                initialValues={appFields}
                validationSchema={validationSchema}
                appFields={appFields}
            />
        </Dialog>
};
export default UserContact;


//todo  delete comment

{/*<TextField*/
}
{/*name="confirmPassword"*/
}
{/*helperText={touched.confirmPassword ? errors.confirmPassword : ""}*/
}
{/*error={Boolean(errors.confirmPassword)}*/
}
{/*label="Confirm Password"*/
}
{/*fullWidth*/
}
{/*type="password"*/
}
{/*value={confirmPassword}*/
}
{/*onChange={handleChange}*/
}
{/*InputProps={{*/
}
{/*startAdornment: (*/
}
{/*<InputAdornment position="start">*/
}
{/*<LockIcon />*/
}
{/*</InputAdornment>*/
}
{/*)*/
}
{/*}}*/
}
{/*/>*/
}
