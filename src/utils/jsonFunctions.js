export const getJSON = (response) => {
    const textContructor = "text".constructor;
    const objectConstructor = {}.constructor;
    let responseData;
    try{
        if (response.constructor === objectConstructor){
            responseData = JSON.stringify(response);
        } else if (response.constructor === textContructor) {
            responseData = response.replace(/\bNaN\b/g, null);
            responseData = responseData.replace(/-\bInfinity\b/g, null);
            responseData = responseData.replace(/\bInfinity\b/g, null);
        }
        return JSON.parse(responseData);
    } catch(err) {
        return false
    }
}