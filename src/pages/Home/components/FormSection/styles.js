import styled from 'styled-components'

export const FormSectionContainer = styled.div`
    background: ${props => props.theme["gray-300"]};
    position: relative;
    padding: 0 9rem;
    padding-top: 6rem;

    @media (max-width:735px){
        padding: 0 6.76rem;
        padding-top: 6rem;
    }

    @media (max-width: 375px){
        padding: 0 1.5rem;
        padding-top: 6rem;
    }
    
`
export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 735px){
        flex-direction: column;
    }
`
export const FormTextContent = styled.div`
    transform: translateY(-2rem);
    
    h3{
        font-weight: 700;
        font-size: 2.5rem;
        color: ${props => props.theme["white"]};
    }

    div{
        display: flex;
        margin-top: 1rem;
        gap: 1rem;
        align-items: center;

        @media(max-width:735px){
            justify-content:center;
        }

        span{
            width: 1px;
            height: 12px;
            background-color: ${props => props.theme["white"]};
        }

        p{
            font-size: .8rem;
            color: ${props => props.theme["white"]};
            text-transform: uppercase;
            font-weight: 400;
            margin-left: -.5rem;
        }
    }
`
export const FormContent = styled.div`
    width: 50%;

    @media (max-width:735px){
        width: 100%;
    }
    
    form{
        display: flex;
        flex-direction: column;
    }

`

export const Label = styled.label`
    margin-bottom: 0.56rem;
    color: ${props => props.variant ? 'green' : 'rgba(255,255,255,0.3)' };
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-size: 0.75rem;
`

export const Tel = styled.div`
    display: flex;
    flex-direction: column;
`

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`
export const RowTestAndEmail = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width:735px){
        flex-direction: column;
        gap: 0;
    }
`

const InputBase = styled.input`
    margin-bottom: 1rem;
    height: 2.87rem;
    outline: none;
    border:none;
    color: ${props => props.theme["white"]};
    background: transparent;

    
`
export const InputLarge = styled(InputBase)`
    background: rgba(255, 255, 255, 0.20);
    padding-left: 1rem;
    border-top: 1px solid ${props => props.theme['green']};
    border-right: 1px solid ${props => props.theme['green']};
    &::placeholder{
        color: ${props => props.theme["white"]};
        opacity: 0.8;
    }
`

export const Input = styled(InputBase)`
    border-top: 1px solid ${props => props.theme['white']};
    border-right: 1px solid ${props => props.theme['white']};
    width: 100%;
    display: block;
`

export const InputSmall = styled(InputBase)`
    border-top: 1px solid ${props => props.theme['white']};
    border-right: 1px solid ${props => props.theme['white']};
    width: 10rem;

    @media (max-width: 735px){
        width: 100%;
    }
`

export const Assunto = styled.div`
    position: relative;
    img{
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
        right: 1rem;
    }
`

export const Mensagem = styled.textarea`
    border: none;
    outline: none;
    background: transparent;
    border-top: 1px solid ${props => props.theme['white']};
    border-right: 1px solid ${props => props.theme['white']};
    height: 131px;
    resize: none;
    color: ${props => props.theme["white"]};
    padding-top: .5rem;
`
export const ButtonDiv = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    height: 3.5rem;
    width: 12rem;
    background-color: ${props => props.theme['green']};
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-family:'Inter', sans-serif;
    font-weight: 500;
    color: ${props => props.theme["gray-300"]};
    font-size: .9rem;
    transition: .2s ease-in-out;

    &:hover{
        background-color: ${props => props.theme["green-hover"]};
    }

    @media(max-width:735px){
        width: 100%;
    }
`

export const Footer = styled.footer`
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width:735px){
        flex-direction: column;
        margin-top: 6.8rem;
    }

    span{
        font-family: 'Inter', sans-serif;
        color: ${props => props.theme["white"]};
        opacity: .3;
        font-size: 0.75rem;
    }

    p{
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: ${props => props.theme["white"]};
        font-size: 0.56rem;

        @media(max-width:735px){
            margin-top: 2.5rem;
        }
    }
`