const routes = {
    "Home": "/",
    "Configure": "/configure",
    "Catalog": ["/catalog", {
        "Materials": "/materials",
        "Terminal Heads": "/catalog/terminal-heads",
        "Thermocouples": "/catalog/thermocouples",
        "RTDs": "/catalog/rtds",
        "Thermowells": "/catalog/thermowells",
        "Terminal Blocks": "/catalog/terminal-blocks",
        "Wire": "/catalog/wire",
        "Fittings & Hardware": "/catalog/fittings-hardware",
        "Transmitters": "/catalog/transmitters"
    }],
    "Contact": "/contact",
    "About": "/about",
    "Warranty": "/warranty",
    "Distributors": "/distributors"
}

export default routes;