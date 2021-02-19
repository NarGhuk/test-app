import React from "react";
import {useField, Field as FormikField} from "formik";
import {getFieldName} from "../helpers";

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
