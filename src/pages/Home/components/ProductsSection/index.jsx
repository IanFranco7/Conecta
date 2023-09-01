import { Card, CardDescription, CardImage, CardInfo, CardTitle, CardsContainer, Circle, CircleDiv, Citation, ColumnLeft, ColumnRight, Container, GridBottom, GridPhotoFullHeight, GridPhotoFullHeightMobile, GridPhotoFullHeightTablet, GridTop, PhotosContainer, ProductsSectionContainer, ProductsSectionTitle } from "./styles";
import bottleImg1 from "../../../../assets/bottle1.png"
import bottleImg2 from "../../../../assets/bottle2.png"
import imgGrid1 from "../../../../assets/gridImg1.png"
import imgGrid1Tablet from "../../../../assets/productsBg1Tablet.png"
import imgGrid1Mobile from "../../../../assets/productsBg1Mobile.png"

export function ProductsSection(){
    return(
        <ProductsSectionContainer>

                <ProductsSectionTitle>
                    <h2>Produtos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur alias est a fugit.</p>
                </ProductsSectionTitle>

                <CardsContainer>
                    <Card>
                        <CardImage>
                            <img src={bottleImg1} alt="" />
                        </CardImage>
                        <CardInfo>
                            <CardTitle>Garrafa 350ml</CardTitle>
                            <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
                        </CardInfo>
                        <button>Aqui um CTA</button>
                    </Card>
                    <Card>
                        <CardImage>
                        <img src={bottleImg2} alt="" />
                        </CardImage>
                        <CardInfo>
                            <CardTitle>Garrafa 100ml</CardTitle>
                            <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
                        </CardInfo>
                        <button>Aqui um CTA</button>
                    </Card>
                </CardsContainer>

                <PhotosContainer>
                    <Container>
                        <ColumnLeft>
                            <GridPhotoFullHeight src={imgGrid1} loading="lazy"/>
                            <GridPhotoFullHeightTablet src={imgGrid1Tablet} loading="lazy"/>
                            <GridPhotoFullHeightMobile src={imgGrid1Mobile} loading="lazy"/>
                        </ColumnLeft>
                    <ColumnRight>
                        <GridTop>
                            <Citation><span>&lsquo;&lsquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, recusandae fugiat.&rsquo;&rsquo;</span></Citation>
                            <span>@danielmaciel</span>
                            <CircleDiv>
                                <Circle/><Circle/><Circle/><Circle/>
                            </CircleDiv>
                        </GridTop>
                        <GridBottom><p>Peça para seu bar</p></GridBottom>
                    </ColumnRight>
                    </Container>
                </PhotosContainer>


            </ProductsSectionContainer>
    )
}