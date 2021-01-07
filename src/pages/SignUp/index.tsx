import React from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiLogIn, FiMail, FiLock, FiUser }  from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu cadastro</h1>

                <Input name="nome" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Password" />

                <Button type="submit">Cadastrar</Button>
            </form>

            <a href="login">
                <FiLogIn />
                Voltar para o logon
            </a>

        </Content>
    </Container>
);

export default SignUp;