import styled from 'styled-components'
import bg from '../../../../assets/bg.png'
import bgMobile from '../../../../assets/bgMobile.png'


export const FirstSectionContainer = styled.div`
    background: url(${bg});
    height: 45rem;
    padding:1.1rem 8rem;

    @media(max-width: 735px){
        padding: 1.1rem 2rem;
    }

    @media(max-width:375px){
        height: auto;
        background: url(${bgMobile});
    }
`



export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Icon = styled.img`
    margin-left: 1.37rem;
`

export const Content = styled.div`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;

    @media(max-width: 375px){
        flex-direction: column-reverse;
    }
`

export const TextContent = styled.div`
    margin-top: -1rem;
    width:50%;

    @media(max-width:375px){
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

    button{
        margin-top: 1.1rem;
        height:3.5rem;
        width: 11.75rem;
        border-radius: 50px;
        background-color: ${props => props.theme["green"]};
        border:none;
        font-family:'Inter', sans-serif;
        font-weight: 500;
        color: ${props => props.theme["black-300"]};
        font-size: .9rem;
        cursor: pointer;
        transition: .2s ease-in-out;

        @media (max-width: 735px){
            margin-top: 2rem;
        }

        @media(max-width: 375px){
            margin-top: 4.5rem;
            margin-bottom: 6.3rem;
        }

        &:hover{
            background-color:  ${props => props.theme["green-hover"]};
        }

        
    }
`

export const Title = styled.h1`
    color: ${props => props.theme["white"]};
    font-size: 4rem;
    font-weight: 400;
    width: 90%;

    @media (max-width:735px){
        width: 100%;
        font-size: 3rem;
    }

    @media (max-width:375px){
        margin-top: 1rem;
        font-size: 2.3rem;
        text-align: center;
    }
`

export const ImageContent = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

export const ImageDesktop = styled.img`

@media (max-width: 375px){
    display: none;
}
`

export const ImageMobile = styled.img`
    display: none;

    @media (max-width: 375px){
    display: block;
}
`