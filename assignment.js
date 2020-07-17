// feet to mile
function feetToMile(feet) {

    // invalid value chacking
    if(feet == 0 || typeof feet !== "number") {

        // error massege
        var result = 'Invalid value! please submit valid value';

    }else{

        // one feet = 0.00018939 mile
        var oneFeet = 0.00018939
        var result = feet * oneFeet;

    }

    return result;
}



// wood calculator
function woodCalculator(chair, table, bed) {

    // undefined value defined
    if(chair == undefined) {
        var chair = 0;
    }
    if(table == undefined) {
        var table = 0;
    }
    if(bed == undefined) {
        var bed = 0;
    }

    // invalid value chacking
    if(typeof chair !== "number" || typeof table !== "number" || typeof bed !== "number") {

        // error massege
        var result = 'Invalid value! please submit valid value';

    }else{

        var oneChairOfWood = 1;
        var oneTableOfWood = 3;
        var oneBedOfWood = 5;
        var chairWoodCount = chair * oneChairOfWood;
        var tableWoodCount = table * oneTableOfWood;
        var bedWoodCount = bed * oneBedOfWood;

        var result = chairWoodCount + tableWoodCount + bedWoodCount;

    }

    return result;
}


// brick calculator
function brickCalculator(height) {

    // 1 feet = 1000 brick
    var oneFeet = 1000; 

    if(height == 0 || typeof height !== "number") {

        // error massege
        var result = 'Invalid value! please submit valid value';

    }else if(10 >= height) {

        var roomHeight = 15;
        var totalFeet = roomHeight * height;

        var result = totalFeet * oneFeet;
        
    }else if(20 >= height) {

        var heightCount = height - 10
        var roomHeight = 12;
        var totalFeet = roomHeight * heightCount;

        // 10 height = 150000 brick
        var result = (totalFeet * oneFeet) + 150000;

    }else{

        var heightCount = height - 20;
        var roomHeight = 10;
        var totalFeet = roomHeight * heightCount;

        // 10 height = 150000 brick and 11-20 height = 120000 brick
        var result = (totalFeet * oneFeet) + 150000 + 120000;

    }

    return result;

}


// tiny friend
function tinyFriend(allFriendName) {

    // invalid value chacking
    if(allFriendName == undefined || !Array.isArray(allFriendName)) {

        // error massege
        var result = 'Invalid value! please submit valid value';

    }else{

        var result = allFriendName[0];

        for(var i = 0; i < allFriendName.length; i++) {

            var currentName = allFriendName[i];

            if(currentName.length < result.length) {
                var result = currentName;
            }

        }

    }

    return result;

}