import {Header} from "@/components/Navbar/header";
import {Footer} from "@/components/Navbar/footer";
import {EasyTable, FlexH, FlexV, KeyValue, Parameter} from "@/components/common";
import {Oswald, Roboto} from "next/font/google";
import {Text, Image, Divider} from "@chakra-ui/react";

import parameters from "@/../public/data/parameters.json";
import thermocouples from "@/../public/data/thermocouples.json";
import {SensorCatalogTemplate} from "@/app/tms-layouts";

const roboto = Roboto({weight: "100", subsets: ["latin"]});
const robotoBold = Roboto({weight: "400", subsets: ["latin"]});

export default function Page() {

    const thermocouple = thermocouples["type_1"];

    const getParameters = () => {
        const sheath_material = parameters["sheath_material"];
        const sheath_diameter = parameters["sheath_diameter"];
        const thermocouple_calibration_type = parameters["thermocouple_calibration_type"];
        const hot_junction = parameters["hot_junction"];
        return (
            <FlexH justifyContent="space-between">
                <FlexV gap={3}>
                    <Parameter parameter={sheath_material}/>
                    <Parameter parameter={sheath_diameter}/>
                    <Parameter parameter={thermocouple_calibration_type}/>
                </FlexV>
                <FlexV gap={3}>
                    <Parameter parameter={hot_junction}/>
                    <FlexV flexGrow={0}>
                        <Text fontWeight="600">Sheath Length &quot;L&quot; - Specify In Inches</Text>
                        <Text>
                            Represented by a number. Specify the length &quot;L&quot;
                            <br/>
                            of the sheath in inches.
                        </Text>
                    </FlexV>
                </FlexV>
            </FlexH>
        );
    }

    return (
        <>
            <Header/>
            <SensorCatalogTemplate sensor={thermocouple}
                                   exampleOrder="1-R-6-2K-U-24"
            >
                {getParameters()}
            </SensorCatalogTemplate>
            <Footer/>
        </>
    );
}
