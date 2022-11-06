import {  useState } from "react";


const useForm = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});


    const validate = (event, name, value) => {

        switch (name) {
            case "username":
                if (value.length <= 4) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        username: 'Username atleast have 5 letters'
                    })
                }

                break;
            case "email":

                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                }
                break;

            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                }
                break;

            default:
                break;
        }
    }

    const handleChange = (event) => {
        event.persist();

        let name = event.target.name
        let val = event.target.value

        validate(event, name, val)

        setValues({
            ...values,
            [name]: val,
        })
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback()
        } else {

        }
    }
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
}

export default useForm