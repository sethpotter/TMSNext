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
                </TMSPage>
            <Footer/>
        </>
    );
}
