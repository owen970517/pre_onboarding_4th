import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const ButtonItem = styled.button<{isActive :boolean}>`

    ${props => props.isActive ? 
        `
            border-radius: 20px;
            background-color: #60a5fa;
            color: #fff;
        ` :
        `
            background-color: #fff;
            border-radius: 20px;
        `
    }

`