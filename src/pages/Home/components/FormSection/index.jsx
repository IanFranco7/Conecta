import { Assunto, Button, ButtonDiv, Email, Footer, FormContainer, FormContent, FormSectionContainer, FormTextContent, Input, InputLarge, InputSmall, Label, Mensagem, RowTestAndEmail, Tel } from "./styles";
import FacebookIcon from "../../../../assets/facebookIcon.png"
import InstagramIcon from "../../../../assets/instagramIcon.png"
import Logo from "../../../../assets/logo.png"
import arrowImg from "../../../../assets/arrow.png"

export function FormSection(){
    return(
        <FormSectionContainer>
                <FormContainer>
                    <FormTextContent>
                        <h3>Fale conosco.</h3>
                        <div>
                            <img src={FacebookIcon}/>
                            <img src={InstagramIcon}/>
                            <span></span>
                            <p>Redes sociais</p>
                        </div>
                    </FormTextContent>
                    <FormContent>
                        <form>
                            <Label variant="green" htmlFor="nome" >Nome</Label>
                            <InputLarge type="text" id="nome" placeholder="Daniel Maciel"/>

                            <RowTestAndEmail>
                                <Tel>
                                    <Label htmlFor="telefone">Telefone</Label>
                                    <InputSmall type="tel" id='telefone' placeholder="(21) 00000-0000"  />
                                </Tel>
                                <Email>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id='email' placeholder="email@email.com.br" />
                                </Email>
                            </RowTestAndEmail>

                            <Label htmlFor="assunto" >Assunto</Label>
                            <Assunto>
                                <Input placeholder="Selecione um assunto" id="assunto"/>
                                <img src={arrowImg} />
                            </Assunto>
                            <Label htmlFor="mensagem" >Mensagem</Label>
                            <Mensagem name="" id="mensagem" cols="30" rows="10"/>

                        <ButtonDiv>
                            <Button>Aqui um CTA</Button>
                        </ButtonDiv>
                        </form>
                    </FormContent>
                </FormContainer>
            <Footer>
                <span>Todos os direitos reservados @ 2020 Conecta</span>
                <p>Projetado por Conecta <img src={Logo}/></p>
            </Footer>
                
            </FormSectionContainer>
    )
}