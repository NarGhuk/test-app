import React, {useReducer} from 'react';
import {reducer, createStore} from "../helpers";

import {
    DialogContentText,
    FormControlLabel,
    DialogContent,
    DialogActions,
    RadioGroup,
    TextField,
    Checkbox,
    Button,
    Radio,
    Grid
} from '@material-ui/core';
import {createState, reduce} from '../helpers';

const ContactForm = ({

                         setFieldTouched,
                         contactIsOpen,
                         toggleContact,
                         handleChange,
                         handleReset,
                         appFields,
                         isValid,
                         errors
                     }) => {

    const [store, dispatch] = useReducer(reduce, createState(appFields));

    console.log('appFields',appFields);
    return (
        <>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>

                <Grid container alignItems="flex-start" spacing={2}>
                    {
                        appFields.map(item => {
                            const fieldData = store[item.name];
                            if (fieldData.type === 'radio') {
                                return (
                                    <RadioGroup aria-label={fieldData.title}
                                                name={fieldData.name}
                                                value={fieldData.value}
                                                onChange={({target: {value}}) => dispatch({
                                                    type: fieldData.name,
                                                    payload: value
                                                })}>
                                        {fieldData.options.map((_item) => (
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
                            if (fieldData.type === 'checkbox') {
                                fieldData.options.map((el) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={el.checked}
                                                onChange={handleChange}
                                                name="checked"
                                                color="primary"
                                            />

                                        }
                                        label={el.title}
                                    />
                                ))
                            }
                            if (fieldData.type === 'email') {
                                return (
                                    <TextField
                                        error={Boolean(errors.name)}
                                        autoFocus
                                        margin="dense"
                                        id={fieldData.title}
                                        label={fieldData.title}
                                        type={fieldData.type}
                                        name={fieldData.name}
                                        value={fieldData.email}
                                        fullWidth
                                        onChange={handleChange}
                                        // validators={['required']}
                                    />
                                )
                            }
                            return (


                                <Grid item xs={6}>
                                    <TextField
                                        error={Boolean(errors.name)}
                                        autoFocus
                                        margin="dense"
                                        id={fieldData.title}
                                        label={fieldData.title}
                                        type={fieldData.type}
                                        name={fieldData.name}
                                        value={fieldData.value}
                                        // validators={[fieldData.required]}
                                        onChange={handleChange}
                                        // onChange={({target: {value}}) => dispatch({type: fieldData.name, payload: value})}
                                        required={fieldData.required}
                                    />
                                </Grid>
                            )
                        })


                    }
                </Grid>


            </DialogContent>

            <DialogActions>
                <Button onClick={handleReset} color="secondary">
                    Reset
                </Button>

                <Button onClick={() => {
                }} variant="contained" color="primary" disabled={isValid}>
                    Submit
                </Button>
            </DialogActions>
        </>
    )
};
export default ContactForm;


