import styled from 'styled-components'
import imgGrid2 from "../../../../assets/gridImg2.png"
import imgGrid2Mobile from "../../../../assets/productsBg2Mobile.png"
import imgGrid2Tablet from "../../../../assets/productsBg2Tablet.png"

export const ProductsSectionContainer = styled.section`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ProductsSectionTitle = styled.div`
    margin-top: 5.56rem;
    width: 40%;

    @media (max-width: 735px){
        width: 65%;
    }
    h2{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    p{
        text-align: center;
    }
`
export const CardsContainer = styled.div`
    padding-top: 4.8rem;
    display: flex;
    justify-content: center;
    width: 100%;
    gap:5rem;
    margin-bottom: 5rem;

    @media(max-width:735px){
        padding: 0 1.5rem;
        padding-top: 4.8rem;
    }

    @media(max-width:375px){
        flex-direction: column;
        gap: 4.1;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22.5rem;
    padding: 1rem;
    border-radius: 16px;
    box-shadow: 0px 8px 24px -4px rgba(0, 0, 0, 0.25);

    @media (max-width:735px){
        width: 21.6rem;
    }

    @media (max-width:375px){
        width: 20.3rem;
    }

    button{
        width: 193px;
        height: 53px;
        border-radius: 50px;
        background-color: ${props => props.theme["green"]};
        transform: translateY(42px);
        border: none;
        cursor: pointer;
        font-family:'Inter', sans-serif;
        font-weight: 500;
        color: ${props => props.theme["black-300"]};
        font-size: .9rem;
        transition: .2s ease-in-out;

        &:hover{
            background-color: ${props => props.theme["green-hover"]};
        }
    }
`
export const CardImage = styled.div`
    height: 290px;
    display:flex;
    align-items: center;
    margin-bottom: 1rem;
`
export const CardInfo = styled.div`
`
export const CardTitle = styled.p`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
`
export const CardDescription = styled.p`
    margin-top: 0.75rem;
    font-family: 'Roboto', sans-serif;
`
export const PhotosContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 9rem;

    @media(max-width: 735px){
        padding: 0 1.5rem;
    }

    @media(max-width: 375px){
        margin-top: 6.2rem;
    }
`
export const Container = styled.div`
    position: relative;
    display: flex;

    @media(max-width: 375px){
        display: flex;
        flex-direction: column;
        height: auto;
        grid-template-columns: 1fr;
    }
`
export const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
`
export const ColumnLeft = styled.div`
    @media (max-width: 375px){
        height: 520px;
    }
`
export const GridPhotoFullHeight = styled.img`
    width: 100%;
    height: 50.68rem;

    @media (max-width: 735px){
        display: none;
    }

`
export const GridPhotoFullHeightTablet = styled.img`
    display: none;

    @media (max-width: 735px){
        display: block;
        width: 100%;
        height: 100%;
    }

    @media(max-width: 375px){
        display: none;
    }

`
export const GridPhotoFullHeightMobile = styled.img`
    display: none;

    @media (max-width: 375px){
        display: block;
        width: 100%;
        height: 100%;
    }
`
export const GridTop = styled.div`
    background: ${props => props.theme["gray-300"]};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme["white"]};
    height: 50%;
    
    span{
        margin-top: 1.5rem;
    }

    @media(max-width:375px){
        height: 400px;
    }
  
`
export const Citation = styled.p`
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;

    span{
        display: block;
        width: 60%;
    }
`
export const CircleDiv = styled.div`
    display: flex;
    gap: 1.2rem;
`
export const Circle = styled.span`
    width:9px;
    height: 9px;
    background-color: ${props => props.theme["white"]};
    border-radius: 50%;

    &:nth-child(n +2){
        opacity: 19.5%;
    }
`
export const GridBottom = styled.div`
    position: relative;
    background: url(${imgGrid2});
    z-index:0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    @media(max-width: 735px){
        background: url(${imgGrid2Tablet});
        height: 422px;
    }
    
    @media (max-width: 375px){
        background: url(${imgGrid2Mobile});
        height: 287px;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: ${props => props.theme["gray-300"]};
        opacity: 0.5;
    }
    p{
        position: absolute;
        z-index: 1;
        color: ${props => props.theme["white"]};
        font-size: 2rem;
        font-weight: 700;
    }
`
