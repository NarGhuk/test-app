import {useReducer} from 'react';
import RadioGroup from './index';
import {TextField} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {coreFields} from '../../../redux/selectors/core-fields';
import React from 'react';

const choueInitialValue = (type) => {
    switch (type) {
        case 'text':
            return '';
        case 'radio':
            return null;
        case 'checkbox':
            return null;
        default:
            return '';
    }
};


const createStore = (data = []) => {
    const store = {};
    for (const value of data) {
        store[value.name] = {
            ...value,
            value: choueInitialValue(value.type)
        }
    }
    return store;
};


function reducer(state, action) {
    return {...state, [action.type]: {...state[action.type], value: action.payload}}
}


const Content = ({appFields}) => {
    const [store, dispatch] = useReducer(reducer, createStore(appFields))


    return appFields.map(item => {
        const fieldData = store[item.name];
        console.log(fieldData.name);

        if (fieldData.type === 'radio') {
            return (
                <RadioGroup aria-label={fieldData.title} name={fieldData.name} value={fieldData.value} onChange={({target: {value}}) => dispatch({type: fieldData.name, payload: value})}>
                    {  fieldData.options.map((_item)=>(
                        <FormControlLabel
                            defaultValue={_item.default}
                            name={'agree'}
                            value={_item.value}
                            label={_item.key}
                            control={<Radio/>}
                        />
                    ))}
                </RadioGroup>

            )
        }
        if (fieldData.type === 'email') {
            return (
                <TextField
                    name={fieldData.name}

                    required={fieldData.required}
                    // helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                    // error={Boolean(errors.confirmPassword)}
                    label={fieldData.title}
                    // fullWidth
                    type={fieldData.type}
                    value={fieldData.value}
                    inputProps={{
                        pattern: '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'
                    }}
                    onChange={({target: {value}}) => dispatch({type: fieldData.name, payload: value})}
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //             <LockIcon />
                    //         </InputAdornment>
                    //     )
                    // }}
                />

            )
        }
        return (
            <TextField
                name={fieldData.name}
                required={fieldData.required}
                // helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                // error={Boolean(errors.confirmPassword)}
                label={fieldData.title}
                // fullWidth
                type={fieldData.type}
                value={fieldData.value}
                onChange={({target: {value}}) => dispatch({type: fieldData.name, payload: value})}
                // InputProps={{
                //     startAdornment: (
                //         <InputAdornment position="start">
                //             <LockIcon />
                //         </InputAdornment>
                //     )
                // }}
            />
        )
    })
}


const ContentCont = () => {
    const {data: {appFields}, isLoading} = useSelector((state) => coreFields(state));
    if (appFields) {
        return (<form onSubmit={(e) => {
            console.log('qweqwe')
        }}><Content appFields={appFields} />

            <button type='submit'>Submit</button>
        </form>)
    }
    return null
}

// name, title, type, required, options

export default  ContentCont;




















































{/*
  // values: {name, email, password, confirmPassword},
        // errors,
        // handleSubmit,
        // handleChange,
        // isValid,
        // setFieldTouched
        //////////////
        //   emailValidation,
        //   contactIsOpen,
        //   toggleContact,
        //   handleChange,
        //   handleReset,
        //   isValidForm,
        //   fieldsData,
        //   fields
 <TextField
                    autoFocus
                    error={!fields.emailValid}
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    name={'email'}
                    value={fields.email}
                    fullWidth
                    onChange={emailValidation}
                    validators={['required']}
                />
<Grid item xs={6}>
    <TextField
        error={!fields.firsName.trim().length}
        autoFocus
        margin="dense"
        id="firsName"
        label="firsName*"
        type="text"
        name={'firsName'}
        value={fields.firsName}
        onChange={handleChange}
    />
</Grid>
<Grid item xs={6}>
    <TextField
error={!fields.lastName.trim().length}
autoFocus
margin="dense"
id="lastName"
label="lastName*"
type="text"
name={'lastName'}
value={fields.lastName}
onChange={handleChange}
/>
</Grid>

 <Grid item xs={6}>
                        <TextField
                            error={!fields.company.trim().length}
                            autoFocus
                            margin="dense"
                            id="Company"
                            label="Company*"
                            type="text"
                            name={'company'}
                            value={fields.company}
                            validators={['required']}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            error={!fields.jobTitle.trim().length}
                            autoFocus
                            margin="dense"
                            id="jobTitle"
                            name={'jobTitle'}
                            label="Job title*"
                            type="text"
                            value={fields.jobTitle}
                            validators={['required']}
                            onChange={handleChange}
                        />
                    </Grid>
*/
}




// initialValues={values}
// validationSchema={validationSchema}
// onSubmit={this.submit}
// contactIsOpen={contactIsOpen}
// toggleContact={toggleContact}
// appFields={appFields}
























import React, {useReducer} from "react";
import ContactForm from './container/contactForm';
import {useContextData} from '../../../context';
import {useSelector} from 'react-redux';
import {coreFields} from '../../../redux/selectors/core-fields';
import {CircularProgress, Grid, TextField} from '@material-ui/core';
import { Formik } from "formik";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

// const UserContact = () => {
//     const {data: {appFields}, isLoading} = useSelector((state) => coreFields(state));
//     // name, title, type, required, options
//
//     const getFieldsTypes = (arr) => {
//         return arr.map((item) => {
//             return {
//                 name: item['name'],
//                 title: item['title'],
//                 type: item['type'],
//                 required: item['required'],
//                 options: item['options']
//             }
//         })
//     };
//
//     const fieldsData = !isLoading && getFieldsTypes(appFields);
//
//     const {contactIsOpen, toggleContact} = useContextData();
//     const [fields, setFields] = useState({
//         firsName: '',
//         lastName: '',
//         company: '',
//         jobTitle: '',
//         email: '',
//         emailValid: false,
//         agree: null,
//         checked: false
//     });
//     const [isValidForm, setIsValidForm] = useState(true);
//
//     useEffect(() => {
//         if (!!fields.firsName &&
//             !!fields.lastName &&
//             !!fields.company &&
//             !!fields.jobTitle &&
//             !!fields.emailValid &&
//             !!fields.agree &&
//             !!fields.checked
//         ) {
//             setIsValidForm(false)
//         } else {
//             setIsValidForm(true)
//         }
//
//
//     }, [fields]);
//
//     const handleReset = () => {
//         setFields(prev => {
//             for (let key in prev) {
//                 prev[key] = ''
//             }
//             return {...prev}
//         })
//     };
//     const handleChange = useCallback((ev) => {
//         let targetName = 'value';
//         if (ev.target.name === 'checked') {
//             targetName = 'checked'
//         }
//         setFields((prevState) => ({
//             ...prevState,
//             [ev.target.name]: ev.target[targetName]
//         }));
//
//     }, []);
//
//     const emailValidation = (e) => {
//         setFields((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//             emailValid: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)
//         }));
//     };
//
//
//     return isLoading ? <CircularProgress color="inherit"/> :
//         <ContactForm
//             contactIsOpen={contactIsOpen}
//             toggleContact={toggleContact}
//             emailValidation={emailValidation}
//             handleChange={handleChange}
//             handleReset={handleReset}
//             fields={fields}
//             isValidForm={isValidForm}
//             fieldsData={fieldsData}
//         />
//
//
// };
// export default UserContact;

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


{/*<TextField*/}
{/*name="confirmPassword"*/}
{/*helperText={touched.confirmPassword ? errors.confirmPassword : ""}*/}
{/*error={Boolean(errors.confirmPassword)}*/}
{/*label="Confirm Password"*/}
{/*fullWidth*/}
{/*type="password"*/}
{/*value={confirmPassword}*/}
{/*onChange={handleChange}*/}
{/*InputProps={{*/}
{/*startAdornment: (*/}
{/*<InputAdornment position="start">*/}
{/*<LockIcon />*/}
{/*</InputAdornment>*/}
{/*)*/}
{/*}}*/}
{/*/>*/}


















import React from 'react';
import {DialogTitle} from './contactModal'
import {
    DialogContentText,
    FormControlLabel,
    DialogContent,
    DialogActions,
    RadioGroup,
    TextField,
    Checkbox,
    Button,
    Dialog,
    Radio,
    Grid
} from '@material-ui/core';


const ContactForm = ({
                         emailValidation,
                         contactIsOpen,
                         toggleContact,
                         handleChange,
                         handleReset,
                         isValidForm,
                         fieldsData,
                         fields
                     }) => {



    return (
        <Dialog open={contactIsOpen} onClose={toggleContact()} aria-labelledby="form-dialog-title">
            <DialogTitle id="customized-dialog-title" onClose={toggleContact()}>
                Modal title
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>

                <Grid container alignItems="flex-start" spacing={2}>
                    {
                        fieldsData.map((item) => (
                            <Grid item xs={6}>
                                <TextField
                                    error={!fields.company.trim().length}
                                    autoFocus
                                    margin="dense"
                                    id={item.title}
                                    label={item.title}
                                    type={item.type}
                                    name={item.name}
                                    value={fields.company}
                                    validators={[item.required]}
                                    onChange={handleChange}
                                />
                            </Grid>
                        ))
                    }
                </Grid>

                <RadioGroup aria-label="quiz" name="quiz" value={fields.agree} onChange={handleChange}>
                    <FormControlLabel
                        name={'agree'}
                        value={'yes'}
                        label="Yes!"
                        control={<Radio/>}
                    />
                    <FormControlLabel
                        name={'agree'}
                        value={'no'}
                        label="No"
                        control={<Radio/>}
                    />
                </RadioGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={fields.checked}
                            onChange={handleChange}
                            name="checked"
                            color="primary"
                        />
                    }
                    label="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleReset} color="secondary">
                    Reset
                </Button>

                <Button onClick={() => {
                }} variant="contained" color="primary" disabled={isValidForm}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
};
export default ContactForm;




























{/*

 <TextField
                    autoFocus
                    error={!fields.emailValid}
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    name={'email'}
                    value={fields.email}
                    fullWidth
                    onChange={emailValidation}
                    validators={['required']}
                />
<Grid item xs={6}>
    <TextField
        error={!fields.firsName.trim().length}
        autoFocus
        margin="dense"
        id="firsName"
        label="firsName*"
        type="text"
        name={'firsName'}
        value={fields.firsName}
        onChange={handleChange}
    />
</Grid>
<Grid item xs={6}>
    <TextField
error={!fields.lastName.trim().length}
autoFocus
margin="dense"
id="lastName"
label="lastName*"
type="text"
name={'lastName'}
value={fields.lastName}
onChange={handleChange}
/>
</Grid>

 <Grid item xs={6}>
                        <TextField
                            error={!fields.company.trim().length}
                            autoFocus
                            margin="dense"
                            id="Company"
                            label="Company*"
                            type="text"
                            name={'company'}
                            value={fields.company}
                            validators={['required']}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            error={!fields.jobTitle.trim().length}
                            autoFocus
                            margin="dense"
                            id="jobTitle"
                            name={'jobTitle'}
                            label="Job title*"
                            type="text"
                            value={fields.jobTitle}
                            validators={['required']}
                            onChange={handleChange}
                        />
                    </Grid>
*/
}
