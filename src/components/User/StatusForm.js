import React from "react";
import { Field, Form } from "react-final-form";

const StatusForm = (props) => {

    // Обработка события onBlur, оно возвращает SyntheticFocusEvent
    const eventToString = (e) => {
        let text = e.target.value;
        props.handlerEditAndSendStatusText(text);
    }
    //Обработка события onSubmit (отправки формы по нажатию на Enter)
    //т.к. оно возвращает объект со значениями полей, из него выбираю текст тсатуса
    const send = (obj) => {
        let text = obj.statusText;
        props.handlerEditAndSendStatusText(text);
    }

    return (
        <Form
            onSubmit={send}
            initialValues={{ statusText: props.statusText }}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={'statusForm'}>
                    <Field
                        name="statusText"
                        component='input'
                        type="text"
                        placeholder="Введите свой статус"
                        onBlur={eventToString}
                        onSubmit={send}
                        autoFocus={true}
                    />
                </form>

            )}
        </Form>
    )
}

export default StatusForm;