import React from 'react';
import styles from './LoginForm.module.css';
import { Form, Field } from 'react-final-form';
import { LoginNameField } from "../common/FormsControls/LoginNameField";
import {NavLink} from "react-router-dom";

const LoginForm = (props) => {

    const validate = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Это поле обязательно';
        }

        if (!values.password) {
            errors.password = 'Это поле обязательно';
        }
        return errors;
    };

    return (
        <div className={styles.wrapForm}>
            <Form onSubmit={props.onSubmit} validate={validate}>
                {({ handleSubmit, submitting }) => (
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <span className={styles.loginFormText}>
                            LOG IN
                        </span>
                        <div className={styles.loginFormWrapInput}>
                            <Field
                                name="username"
                                component={LoginNameField}
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div className={styles.loginFormWrapInput}>
                            <Field
                                name="password"
                                component={LoginNameField}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className={styles.loginFormWrapBtn}>
                            <button className={styles.loginFormBtn} type="submit" disabled={submitting}>Login</button>
                        </div>
                        <div className={styles.loginFormWrapBtn}>
                            <NavLink to={'/register'}>
                                <button className={styles.loginFormBtn} disabled={submitting}>Reg</button>
                            </NavLink>
                        </div>
                    </form>
                )}
            </Form>
        </div>
    );
};

export default LoginForm;
