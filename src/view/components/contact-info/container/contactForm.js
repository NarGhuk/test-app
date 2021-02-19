import React from 'react';

import {
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
    Grid
} from '@material-ui/core';
import {getFieldName} from '../helpers';
import {useFormikContext} from 'formik';
import Field from './fields';

const ContactForm = ({appFields}) => {
    const formik = useFormikContext();

    return (
        <>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>

                <Grid container alignItems="flex-start" spacing={2}>
                    {appFields.map((field) => (
                        <Field key={getFieldName(field.name)} fieldData={field} />
                    ))}
                </Grid>


            </DialogContent>

            <DialogActions>
                <Button onClick={formik.handleReset} color="secondary">
                    Reset
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!(formik.isValid && formik.dirty)}
                >
                    Submit
                </Button>
            </DialogActions>
        </>
    )
};
export default ContactForm;


