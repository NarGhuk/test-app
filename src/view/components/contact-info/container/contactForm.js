import React from 'react';

import {
    DialogContentText,
    DialogContent,
    DialogActions,
    Button,
    Grid
} from '@material-ui/core';
import {useFormikContext} from 'formik';
import Field from './fields';

const ContactForm = ({appFields,isSuccess,setIsSuccess}) => {
    const formik = useFormikContext();

    return (
        <>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>

                <Grid container alignItems="flex-start" spacing={2}>
                    {appFields.map((field,index) => (
                        <Grid item xs={6} key={index}>
                            <Field  fieldData={field} />
                        </Grid>
                    ))}
                </Grid>


            </DialogContent>

            <DialogActions>
                 { isSuccess && <p>validation went successfully.</p>}
                <Button onClick={()=>{
                    formik.handleReset();
                    setIsSuccess(false)
                }} color="secondary">
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


