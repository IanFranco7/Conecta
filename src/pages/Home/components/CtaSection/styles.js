import styled from 'styled-components'

export const CtaContainer = styled.div`
   position: relative;
   margin-top: 7.75rem;
   height:290px;
   background-color: ${props => props.theme["green"]};
   width:100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
   

   h3{
        font-weight: 700;
        font-size: 1.5rem;

        @media (max-width: 375px){
            margin-top: -3rem;
        }
   }

   button{
        margin-top: 1.5rem;
        background-color: ${props => props.theme["black-300"]};
        width: 12rem;
        height:3.5rem;
        border: none;
        border-radius: 50px;
        color:${props => props.theme["white"]};
        cursor: pointer;
        font-family:'Inter', sans-serif;
        font-weight: 500;
        font-size: .9rem;
        margin-bottom: 4rem;
        transition: .2s ease-in-out;

        &:hover{
            background-color: ${props => props.theme["black-hover"]};
        }
        
   }

   @media (max-width: 375px){
    height: auto;
   }
`

const imgLata = styled.img`
    position: absolute;
`

export const LataSM = styled(imgLata)`
    top: -4.5rem;
    left: 12rem;

    @media(max-width: 735px){
        left: 0;
    }

    @media(max-width: 375px){
        display: none;
    }
`
export const LataMD = styled(imgLata)`
    bottom: -6.5rem;
    left: 15.5rem;

    @media(max-width: 735px){
        display: none;
        left: 2rem;
    }
`

export const LataMDTablet = styled(imgLata)`
    display: none;
    bottom: -6.5rem;
    left: 15.5rem;

    @media(max-width: 735px){
        display: block;
        bottom: -6.5rem;
        left: 2rem;
    }

    @media(max-width: 375px){
        display: none;
    }
`

export const LataLG = styled(imgLata)`
    bottom: -10.2rem;
    right: 8rem;

    @media(max-width: 735px){
        display: none;
        right: 0;
    }
`

export const LataLGTablet = styled(imgLata)`
    display: none;
    bottom: -10.2rem;
    right: 8rem;

    @media(max-width: 735px){
        display: block;
        bottom: -10.2rem;
        right: 0;
    }

    @media(max-width: 375px){
        display: none;
    }
`

export const LataMobile = styled.img`
    display: none;

    @media(max-width: 375px){
        display: block;
        transform: translateY(-4rem);
    }
`