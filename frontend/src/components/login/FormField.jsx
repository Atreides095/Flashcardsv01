import React, { useState } from 'react';
import { StyledField } from './Login.styled';

const FormField = ({ label, input }) => {
    const [active, setActive] = useState(false);

    return (
        <StyledField active={active}>
            <label>{label}</label>
            <input
                type={input}
                onFocus={(e) => setActive(true)}
                onBlur={(e) => {
                    setActive(e.target.value ? true : false);
                }}
            />
        </StyledField>
    );
};

export default FormField;
