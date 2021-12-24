import React, { useState } from 'react';
import { FormBox, StyledTitle, StyledForm, StyledField } from './Login.styled';
import FormField from './FormField';
import FormButton from './FormButton';

const SignupForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <FormBox>
            <StyledTitle>Sign Up</StyledTitle>

            <StyledForm onSubmit={submitHandler}>
                <FormField label="Choose A Username" input="text" />
                <FormField label="Choose A Password" input="password" />
                <FormField label="Confirm Password" input="password" />
                <FormButton>Create Account</FormButton>
            </StyledForm>
        </FormBox>
    );
};

export default SignupForm;
