
export interface TopLevel {
    "1": The1;
}

export interface The1 {
    name: string;
}


export default async function useFetch(url: string) {
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        return response.blob();
       } catch(error) {
        console.error(error);
      }
}