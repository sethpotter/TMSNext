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
                    Become a Distributor of TMS Product&nbsp;
                </Text>
                <br/>
                <br/>
                Temperature Measurement Systems (TMS) is looking for distributors throughout the United States and
                the world to distribute our quality line of temperature sensors.
                <br/>
                <br/>
                Please contact us if you are interested.
            </TMSPage>
            <Footer/>
        </>
    );
}
