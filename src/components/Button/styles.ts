import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
    background: #ff9900;
    height: 56px;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    color: #212e38;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#ff9900')}
    }
`;