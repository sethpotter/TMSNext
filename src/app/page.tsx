import {Text} from "@chakra-ui/react";
import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {TMSPage} from "@/app/tms-layouts";

export default function Page() {
    return (
        <>
            <Header/>
                <TMSPage>
                    <Text as="b">
                        Temperature Measurement Systems&nbsp;
                    </Text>
                    manufactures superior temperature sensors, wire and accessories.
                    Our on-site machine shops gives us the ability to provide
                    quality&nbsp;
                    <Text as="b" fontWeight="600" color="#071f4e">
                        thermocouples, thermocouple assemblies, thermowells, RTDs&nbsp;
                    </Text>
                    and other related hardware in either standard or custom designs.
                    <br/><br/>
                    Our services include hard facings, coatings, dye penetrate testing,
                    hydro-static testing and velocity/pressure calculations.
                    <br/><br/>
                    TMS has trained representatives who are knowledgeable and provide great customer
                    service. We can help you find or build the temperature measurement sensor for your
                    industry or application.
                </TMSPage>
            <Footer/>
        </>
    );
}
