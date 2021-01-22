//

//.................................. kilometerToMeter function

function kilometerToMeter(kilometer) {
    let meter = 0;
    if (kilometer > 0) {
        //1 kilometer equals to 1000 meter
        meter = kilometer * 1000;
    } else if (kilometer < 0) {
        return "it's should be positive.";
    } else if (kilometer == 0) {
        return "Your value is 0.";
    } else {
        return "warning error";
    }
    //if value is not positive, programme won't work.
    return meter;
}


//.......................................budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    let totalPrice = 0;
    if (watch <= 0 && mobile <= 0 && laptop <= 0) {
        return "You didn't buy anything.";
    } else if (watch <= 0 && mobile <= 0) {
        return "You didn't buy Watch and Mobile"
    } else if (watch <= 0 && laptop <= 0) {
        return "You didn't buy Watch and Laptop"
    } else if (mobile <= 0 && laptop <= 0) {
        return "You didn't buy Mobile and Laptop"
    } else if (watch <= 0) {
        return "You didn't buy Watch"
    } else if (mobile <= 0) {
        return "You didn't buy Mobile.";
    } else if (laptop <= 0) {
        return "You didn't buy Laptop.";
    } else if (watch > 0 && mobile > 0 && laptop > 0) {
        //here every product has absolute cost 50;100;500

        let watchPrice = watch * 50;
        let mobilePrice = mobile * 100;
        let laptopPrice = laptop * 500;
        totalPrice = watchPrice + mobilePrice + laptopPrice;
    } else {
        //show warning 
        return "Something is wrong!"
    }
    return totalPrice;
}


//...................................hotelCost

function hotelCost(day) {

    let totalCost = 0;
//using a condition for easy way
    if (day == 0) {
        return "Where is your day?";
    } else if (day < 0) {
        return "Day's value can't be negative.";
    } else if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
//calculating discount
        let first10days = 10 * 100;
        let remaining = day - 10;
        let second10days = remaining * 80;
        totalCost = first10days + second10days;
    } else {
//calculate whole cost with discount
        let first10days = 10 * 100;
        let second10days = 10 * 80;
        let remaining = day - 20;
        let anotherDays = remaining * 50;
        totalCost = first10days + second10days + anotherDays;
    }
    return totalCost;
}


//..........................................megaFriend

function megaFriend(friendName) {
    let largerName = friendName[0];

    if (friendName.length == 0) {
        return "Your array is balnk.";
    } else {
//using length for showing a variable size
        for (let i = 0; i < friendName.length; i++) {
            let element = friendName[i];

            if (element.length > largerName.length) {
                largerName = element;
            }
        }
    }
    return largerName;
}