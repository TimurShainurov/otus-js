function checkData(string) {
    const date1 = /^\d{2}\.\d{2}\.\d{4}/;
    const email = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
    const phoneNumber = /^\+?\d[\d\s\-()]{7,}\d$/;
    
    if (date1.test(string)) {
        console.log("It's date");
    } else if (email.test(string)) {
        console.log("It's email");
    } else if (phoneNumber.test(string)) {
        console.log("It's phone number");
    } else {
        console.log("Invalid data");
    }
}
