const routes = {
    "Home": "/",
    "Configure": "/configure",
    "Catalog": ["/catalog", {
        "Thermocouples": "/catalog/thermocouples",
        "RTDs": "/catalog/rtds",
        "Terminal Heads": "/catalog/terminal-heads",
        "Terminal Blocks": "/catalog/terminal-blocks",
        "Extensions": "/catalog/extensions",
        "Thermowells": "/catalog/thermowells",
        "Materials": "/materials",
        "Wire": "/catalog/wire",
        "Fittings & Hardware": "/catalog/fittings-hardware"
    }],
    "Contact": "/contact",
    "About": "/about",
    "Warranty": "/warranty",
    "Distributors": "/distributors"
}

export default routes;