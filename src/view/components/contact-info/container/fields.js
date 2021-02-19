import React from "react";
import {useField, Field as FormikField} from "formik";
import {getFieldName} from "../helpers";
import {Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextField} from '@material-ui/core';

const Field = ({fieldData}) => {
    const fieldName = getFieldName(fieldData.name);
    const [field, meta] = useField(fieldName);

    const fieldsRender = () => {
        if (fieldData.type === "text" || fieldData.type === "email") {
            return (
                <FormikField
                    type="text"
                    name={fieldName}
                    placeholder={fieldData.name}
                />
            );
        }

        if (fieldData.type === "textarea") {
            return (
                <textarea name={fieldName} placeholder={fieldData.name} {...field} />
            );
        }

        if (fieldData.type === "radio") {
            return (
                <>
                    <RadioGroup aria-label={fieldData.title}
                                name={fieldData.name}
                                value={fieldData.value}
                                >
                        {fieldData.options.map((option) => (

                            <FormControlLabel
                            key={option.key}
                            defaultValue={fieldName}
                            name={fieldName}
                            value={option.value}
                            label={option.key}
                            control={<Radio/>}
                            />
                        ))}


                    </RadioGroup>

                </>
            );
        }

        if (fieldData.type === "checkbox") {
            if (!fieldData.options.length) {
                return <FormikField type={fieldData.type} name={fieldName}/>;
            }

            return (
                <>
                    {fieldData.options.map((option) => (
                        <label>
                            {option.key}
                            <FormikField
                                key={option.key}
                                type={fieldData.type}
                                name={fieldName}
                                value={option.value}
                            />
                        </label>
                    ))}
                </>
            );
        }

        return null;
    };

    return (
        <>
            <div>
                {
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `${
                                !!fieldData.required ? "<span style='color: red'>*</span>" : ""
                                } ${fieldData.title}`
                        }}
                    />
                }

                {fieldsRender()}
                {meta.touched && meta.error ? (
                    <p style={{color: "red"}}>{meta.error}</p>
                ) : null}
            </div>
        </>
    );
};

export default Field;
//


//         <FormControlLabel
//             control={
//                 <Checkbox
//                     checked={el.checked}
//                     onChange={handleChange}
//                     name="checked"
//                     color="primary"
//                 />
//
//             }
//             label={el.title}
//         />


//         <TextField
//             error={Boolean(errors.name)}
//             autoFocus
//             margin="dense"
//             id={fieldData.title}
//             label={fieldData.title}
//             type={fieldData.type}
//             name={fieldData.name}
//             value={fieldData.email}
//             fullWidth
//             onChange={handleChange}
//             // validators={['required']}
//         />

//
//
//     <Grid item xs={6}>
//         <TextField
//             error={Boolean(errors.name)}
//             autoFocus
//             margin="dense"
//             id={fieldData.title}
//             label={fieldData.title}
//             type={fieldData.type}
//             name={fieldData.name}
//             value={fieldData.value}
//             // validators={[fieldData.required]}
//             onChange={handleChange}
//
//             required={fieldData.required}
//         />
//     </Grid>
