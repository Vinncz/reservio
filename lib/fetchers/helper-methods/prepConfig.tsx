const defaultConfig = {
    method: "GET",
    headers: {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
    }
};

export default function prepConfig (options:any, logTheResult = false, endpoint = "") {
    let modifiedOptions = {
        ...defaultConfig,               // load the default config first
        ...options,                     // override or append additional configs that are inside the passed param
        headers: {
            ...defaultConfig.headers,     // make the "Accept" and "Content-Type" values to always exist inside the headers key, to counter the "header" key being overrriden to be an empty object
            ...(options.headers || {})    // allows the "Accept" and "Content-Type" values to be overriden by the passed param
        }
    };

    (logTheResult) ? console.log (`\n\nmodified options for "${endpoint}": `, modifiedOptions, `\n\n`) : null

    return modifiedOptions
}
