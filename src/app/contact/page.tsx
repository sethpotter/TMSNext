import {ListItem, Text, UnorderedList, Link} from "@chakra-ui/react";
import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {TMSPage} from "@/app/tms-layouts";

export default function Page() {
    return (
        <>
            <Header/>
            <TMSPage>
                <Text>
                    <Text as="b">
                        Representatives
                    </Text>
                    <br/>
                    <br/>
                    We have trained representatives who are knowledgeable and provide great customer service. We can
                    help you find or build the temperature measurement sensor for your industry or application.
                    <br/>
                    <br/>
                    1502 East Royall Blvd, Malakoff, TX 75148
                    <br/>
                    <br/>
                    daphne@tms80.com
                    <br/>
                    Toll-Free: 800-967-6498
                </Text>
            </TMSPage>
            <Footer/>
        </>
    );
}
