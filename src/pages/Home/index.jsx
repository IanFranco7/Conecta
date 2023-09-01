import { FirstSection } from "./components/FirstSection";
import { ProductsSection } from "./components/ProductsSection";
import { CtaSection } from "./components/CtaSection";
import { FormSection } from "./components/FormSection";

export function Home(){
    return(
        <div>
            <FirstSection/>
            <ProductsSection/>
            <CtaSection/>
            <FormSection/>
        </div>
    )
}