import { Content, FirstSectionContainer, Header, Icon, ImageContent, ImageDesktop, ImageMobile, TextContent, Title } from "./styles";
import FacebookIcon from "../../../../assets/facebookIcon.png"
import InstagramIcon from "../../../../assets/instagramIcon.png"
import Logo from "../../../../assets/logo.png"
import guarana from "../../../../assets/guaranaImg.png"
import guaranaMobile from "../../../../assets/homeMobile.png"

export function FirstSection(){
    return(
        <FirstSectionContainer>
        <Header>
                <img src={Logo} />
            <div>
                <Icon src={FacebookIcon} />
                <Icon src={InstagramIcon} />
            </div>
        </Header>
        <Content>
            <TextContent>
                <Title>Aqui um título de duas linhas</Title>
                <button>Aqui um CTA</button>
            </TextContent>
            <ImageContent>
                <ImageDesktop src={guarana} />
                <ImageMobile src={guaranaMobile} />
            </ImageContent>  
        </Content>
    </FirstSectionContainer>
    )
}