import React from 'react';
import { FormBox, StyledTitle, StyledForm } from './Login.styled';
import FormButton from './FormButton';
import FormField from './FormField';

const LoginForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <FormBox onSubmit={submitHandler}>
            <StyledTitle>Log In</StyledTitle>

            <StyledForm>
                <FormField label="Username" input="text" />
                <FormField label="Password" input="password" />

                <FormButton>Log In</FormButton>
            </StyledForm>
        </FormBox>
    );
};

export default LoginForm;
