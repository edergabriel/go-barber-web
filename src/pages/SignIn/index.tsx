import React from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiLogIn }  from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu logon</h1>

                <Input name="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />

                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login">
                <FiLogIn />
                Criar conta
            </a>

        </Content>

        <Background />
    </Container>
);

export default SignIn;