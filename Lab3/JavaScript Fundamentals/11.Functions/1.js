function checkAge(age) {
    if (age > 18) {
        return true;
    }
    //will work
    return confirm('Did parents allow you?');}