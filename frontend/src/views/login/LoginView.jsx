import React, { useState } from 'react';
import { LoginForm, SignupForm } from '../../components/login';
import {
    StyledBackground,
    StyledAccountBox,
    AccountBoxImg,
    FormSwitch,
} from './LoginView.styled';

const Login = () => {
    const [activeForm, setActiveForm] = useState('login');

    return (
        <StyledBackground>
            <StyledAccountBox>
                <AccountBoxImg />
                {activeForm === 'login' && <LoginForm />}
                {activeForm === 'signup' && <SignupForm />}

                <FormSwitch
                    onClick={(e) =>
                        setActiveForm(
                            activeForm === 'login' ? 'signup' : 'login'
                        )
                    }
                >
                    {activeForm === 'login' && 'Want to create an account?'}
                    {activeForm === 'signup' && 'Already have an account?'}
                </FormSwitch>
            </StyledAccountBox>
        </StyledBackground>
    );
};

export default Login;
