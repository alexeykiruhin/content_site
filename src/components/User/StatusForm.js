import React, {useEffect} from "react";
import { Field, Form } from "react-final-form";

const StatusForm = (props) => {

    // Обработка события onBlur, оно возвращает SyntheticFocusEvent
    const eventToString = (e) => {
        let text = e.target.value;
        props.handlerSendStatusText(text);
    }
    //Обработка события onSubmit (отправки формы по нажатию на Enter)
    //т.к. оно возвращает объект со значениями полей, из него выбираю текст тсатуса
    const send = (obj) => {
        let text = obj.statusText;
        props.handlerSendStatusText(text);
    }

    return (
        <Form 
        onSubmit={send}
        initialValues={{statusText: props.statusText}}
        >
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field 
                    name="statusText"
                    component='input'
                    type="text"
                    placeholder="Введите свой статус"
                    onBlur={eventToString}
                    onSubmit={send}
                />
                </form>
                
            )}
        </Form>
    )
}

export default StatusForm;