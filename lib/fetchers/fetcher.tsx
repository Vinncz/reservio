/**
 * Works as of September 9th, 2023 at 01:29 AM
 */

import prepConfig from "./helper-methods/prepConfig";

export default async function fetcher(endpoint: string, options = {}, debugMode = false) {

    try {
        const sanitisedOptions = prepConfig(options)

        const apiUrl = process.env.DEFAULT_API_PREFIX + endpoint;

        const response = await fetch(apiUrl, sanitisedOptions);

        if (!response.ok) {
            throw new Error(`\nFailed to fetch data from "${endpoint}".\n∟  Reason:\n   ${response.status} ${response.statusText}`);
        }

        return await response.json();

    } catch (error) {

        if (debugMode) {
            console.error("======================================================\n\n\n" + error + "\n\n\n======================================================");

        }

    }
}
