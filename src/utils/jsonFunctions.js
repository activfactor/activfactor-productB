export const getJSON = (response) => {
    const textContructor = "text".constructor;
    const objectConstructor = {}.constructor;
    let responseData;
    try{
        if (response.data.constructor === objectConstructor){
            responseData = JSON.stringify(response.data);
        } else if (response.data.constructor === textContructor) {
            responseData = response.data.replace(/\bNaN\b/g, null);
            responseData = responseData.replace(/-\bInfinity\b/g, null);
            responseData = responseData.replace(/\bInfinity\b/g, null);
        }
        return JSON.parse(responseData);
    } catch(err) {
        return false;
    }
}