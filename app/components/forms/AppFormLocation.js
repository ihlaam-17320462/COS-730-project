import { useFormikContext } from 'formik';
import React from 'react';
import AppLocation from '../AppLocation';
import ErrorMessage from "./ErrorMessage";

function AppFormLocation({name,label,placeholder,...otherProps}) {
    const {setFieldTouched, setFieldValue,touched,values} = useFormikContext();

    return(
        <>
            <AppLocation
                onBlur={() => setFieldTouched(name)}
                onSelect={(locationData) => setFieldValue(name, locationData)}
                placeholder={values[name] ? values[name].address : placeholder}
                {...otherProps}
            />
            <ErrorMessage error={values[name] === null ? `${label} not selected` : null} visible={touched[name]} />
        </>
    )
}

export default AppFormLocation