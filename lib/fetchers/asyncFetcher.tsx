import prepConfig from "./helper-methods/prepConfig";

export default async function asyncFetcher(endpoints: [], options = {}, debugMode = true) {

    try {
        if (!Array.isArray(endpoints)) {
            throw new Error("Endpoints must be provided as an array.");
        }

        // Create an array of promises for all requests
        const requests = endpoints.map(endpoint => {

            // Set default options and merge with user-defined options
            const requestOptions = prepConfig(options)

            // Add API prefix to the current endpoint
            const apiUrl = process.env.DEFAULT_API_PREFIX + endpoint;

            return fetch(apiUrl, requestOptions);
        });

        // Await all requests concurrently
        const responses = await Promise.all(requests);

        // Check for errors in responses
        responses.forEach(response => {
            if (!response.ok) {
                throw new Error(`Error fetching data from ${response.url}: ${response.statusText}`);
            }
        });

        // Parse and return the JSON from all responses
        return await Promise.all(responses.map(response => response.json()));

    } catch (error) {

        if (debugMode) {
            console.error("======================================================\n\n\n" + error + "\n\n\n======================================================");

        }

    }
}
