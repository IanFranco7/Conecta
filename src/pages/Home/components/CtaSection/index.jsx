import { CtaContainer, LataSM, LataMD, LataMDTablet, LataLG, LataLGTablet, LataMobile } from "./styles";
import lataSm from "../../../../assets/guaranaSM.png"
import lataMd from "../../../../assets/guaranaMD.png"
import lataLg from "../../../../assets/guaranaLG.png"
import lataLgTablet from "../../../../assets/guaranaLG-tablet.png"
import lataMdTablet from "../../../../assets/guaranaMD-Tablet.png"
import lataMobile from "../../../../assets/guaranaMobile.png"

export function CtaSection(){
    return(
        <CtaContainer>
                <LataMobile src={lataMobile} loading="lazy"/>
                <h3>Quer experimentar?</h3>
                <button>Aqui um CTA</button>
                <LataSM src={lataSm} loading="lazy"/>
                <LataMD src={lataMd} loading="lazy"/>
                <LataMDTablet src={lataMdTablet} loading="lazy"/>
                <LataLG src={lataLg} loading="lazy"/>
                <LataLGTablet src={lataLgTablet} loading="lazy"/>
            </CtaContainer>
    )
}