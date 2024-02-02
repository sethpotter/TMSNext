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
                    Warranty&nbsp;
                </Text>
                <br/>
                <br/>
                Temperature Measurement Systems (TMS) warrants its products to be free from defects
                in materials and workmanship. We are pleased to offer suggestions on the use of
                products; however, we assume no responsibility for any errors and/or omissions. We
                assume no liability for any damages resulting from use of suggested products.
                <br/>
                <br/>
                Temperature Measurement Systems (TMS) makes no warranties or representations of any
                kind whatsoever, expressed, or implied, except that of title. All implied warranties
                including nay warranty for merchantability and fitness for a particular purpose are
                hereby disclaimed.
                <br/>
                <br/>
                The remedies of the purchaser set forth herein are exclusive and
                the total liability of Temperature Measurement Systems (TMS) whether based on
                contract, warranty, negligence, indemnification, strict liability, or otherwise
                shall not exceed the purchase price of the component upon which liability is based.
                <br/>
                <br/>
                Temperature Measurement Systems (TMS) sole responsibility will be to replace the
                material found defective in workmanship and/or material. In no event shall
                Temperature Measurement Systems (TMS) be liable for any damages or losses, whether
                direct, indirect, incidental, special or consequential.
                <br/>
                <br/>
                Warranty is limited to the purchaser only and cannot be transferred to third
                parties.
                <br/>
                <br/>
                Materials furnished by Temperature Measurement Systems (TMS) is not intended for
                use in any nuclear installation or activity in medical applications or used on
                humans. Should any product be used in or with any of the above or misused in any
                way, Temperature Measurement Systems (TMS) assumes no responsibility as set forth
                in the above warranty disclaimer.
                <br/>
                <br/>
                Purchaser will hold Temperature Measurement Systems (TMS)
                harmless for any liability or damage whatsoever arising out of the use of products
                in any of these manners. Materials are warranted for 12 months from startup or 24
                months from shipment date.
                <br/>
                <br/>
                Please contact a sales associate regarding any questions or concerns.
            </TMSPage>
            <Footer/>
        </>
    );
}
