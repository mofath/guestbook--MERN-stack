import { useState, useEffect } from 'react'


const LoginForm = (callback, initialState) => {
    const [values, setValues] = useState({...initialState});
    const [errors, setErrors] = useState({...initialState});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    };

    const validate = (values) => {
        let errors = {};
    
        if (!values.password) {
            errors.password = 'Password is Required'
        } else if (values.password.length < 3) {
            errors.password = 'Password must be more than 3 characters'
        }

        if (!values.username) {
            errors.username = 'Username is Required'
            alert(1)
        } else if (values.username.length < 3) {
            errors.username = 'Username must be more than 3 characters'
        }

        
        
        return errors;

    }    

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        setErrors(validate(values))
        setIsSubmitting(true);
    }

    const resetForm = () => {
        setValues(initialState)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);


    return {
        handleChange,
        handleSubmit,
        resetForm,
        values,
        errors,
    }
}

export default LoginForm;