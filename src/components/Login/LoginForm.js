import React from 'react';
import {Form, Field} from 'react-final-form';
import {LoginNameField} from "../common/FormsControls/LoginNameField";

const LoginForm = (props) => {
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Это поле обязательно';
        }

        if (!values.username) {
            errors.username = 'Это поле обязательно';
        }

        if (!values.password) {
            errors.password = 'Это поле обязательно';
        }
        return errors;
    };

    return (
        <Form onSubmit={props.onSubmit} validate={validate}>
            {({handleSubmit, submitting, form}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="email">
                                Поле
                            </label>
                        </div>
                        <div>
                            <Field
                                name='email'
                                component={LoginNameField}
                                type="text"
                                placeholder="Введите email"
                            />
                        </div>
                        <div>
                            <label htmlFor="username">
                                Имя пользователя
                            </label>
                        </div>
                        <div>
                            <Field
                                name="username"
                                component="input"
                                type="text"
                                placeholder="Введите имя пользователя"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password">Пароль</label>
                        </div>
                        <div>
                            <Field
                                name="password"
                                component="input"
                                type="password"
                                placeholder="Введите пароль"
                            />
                        </div>
                    </div>
                    <button type="submit" disabled={submitting}>Войти</button>
                </form>
            )}
        </Form>
    );
};

export default LoginForm;