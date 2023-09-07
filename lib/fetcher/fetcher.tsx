
// export default async function fetcher(endpoint: string, options = {}) {
//     try {
//         const response = await fetch(endpoint, options);
//         if (!response.ok) {
//             throw new Error(response.status.toString());
//         }

//         return await response.json();

//     } catch (error) {
//         throw error;

//     }
// }

export default async function fetcher() {
    try {
        const response = await fetch("http://localhost:8000/api/reservations/all", {
            method: "GET",
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            },
        });
        if (!response.ok) {
            throw new Error(response.status.toString());
        }

        return await response.json();

    } catch (error) {
        throw error;

    }
}
