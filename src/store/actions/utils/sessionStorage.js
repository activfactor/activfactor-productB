export const removeStorage = () => {
    sessionStorage.removeItem("exUserToken");
    sessionStorage.removeItem("exUserId");
    sessionStorage.removeItem("exBrokerLongName");
    sessionStorage.removeItem("exBroker");
    sessionStorage.removeItem("exToken");
    sessionStorage.removeItem("exAccountNumber");
    sessionStorage.removeItem("exAccounts");
}