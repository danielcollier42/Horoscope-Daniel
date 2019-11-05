// A game that asks the user for their birth month and birth day (“May 5”) and returns the user’s Zodiac sign and a
// horoscope - a message telling the user what to expect in the future.
// - Drop down (<select>) menus for choosing the birth day/month.
// - On submit, the program returns an image and a message to the user
// - Center your page elements using css.
// - Display an error message for bad date like February 31st
// - Program must have multiple functions and use both parameters and return values
//     - The program must be able to be “played again” without a page reload or error

//   Advanced:
// - Ask the user’s name up front and then customize the message they receive
// - Dynamically populate the days options based on the month selected
// - Give the user a special horoscope if today is their birthday

var signs = [
    "Aquarius", //0
    "Pisces", //1
    "Aries", //2
    "Taurus", //3
    "Gemini", //4
    "Cancer", //5
    "Leo", //6
    "Virgo", //7
    "Libra", //8
    "Scorpio", //9
    "Sagittarius", //10
    "Capricorn", //11
    "Whoops, wrong date!" //12
];
var messages = [
    "Unlike the wicked witch of the west, you will not melt in contact with water. In fact, you might enjoy it! Just don't try deep sea diving - or if you do, don't get caught by the giant octopdes.", //0
    "Hmm, something smells fishy, are you sure you got your birth date right? Well, if you did, en", //1
    "Have fun conquering nations! Just don't go Napoleon Bonaparte and blow-n-apart(e) the whole world please.", //2
    "You may get the urge to get a nose ring in the near future... please don't.", //3
    "Start looking out for your long lost twin! The stars say you might find them sometime soon!", //4
    "Look, it's not as bad as it sounds... You may be a bit grumpy in the coming weeks but don't just hide from the world in your shell! ", //5
    "You may notice the volume of your hair increasing drastically in the near future, just keep calm and brush on.", //6
    "Hello fair maiden... or maybe not, I don't know what you look like. Anyways, you have a good future ahead, just stay strong!", //7
    "I hope you like the symmetry of your sign! I hear you like symmetry, sjust don't let the world dissapoint you and you will be fine.", //8
    "Your are of the superior zodiac sign. Just don't get too prickly with your friends and don't lose your footing and you will go far... very far.", //9
    "You may get the urge to try your hand at a bow and arrow, do it and you may find a new hobby - collecting arrows after you lose them... just kidding, you might actually be very good!", //10
    "Your hands and feet may start forming into hooves but don't let that bring you down, at least you will have some fur to keep you warm!...and some horns to poke your enemies with...", //11
    "You will do amazing things... or at least I think you will, there's no way to predict what will happen to someone with a birthday like that!" //12
];
var images = [
    "image/Aquarius.png", //0
    "image/Pisces.png", //1
    "image/Aries.png", //2
    "image/Taurus.png", //3
    "image/Gemini.png", //4
    "image/Cancer.png", //5
    "image/Leo.png", //6
    "image/Virgo.png", //7
    "image/Libra.png", //8
    "image/Scorpio.png", //9
    "image/Sagittarius.png", //10
    "image/Capricorn.png"//, //11
//    "images/oops.png" //12
];


function seeker(month, day, array){
    var arrayPosition = "";
    //Aquarius
    if (month == 1 && day >= 20 || month == 2 && day <= 18){
        arrayPosition = array[0];
    }
    //Pisces
    if (month == 2 && day >= 19 || month == 3 && day <= 20){
        arrayPosition = array[1];
    }
    //Aries
    if (month == 3 && day >= 21 || month == 4 && day <= 19){
        arrayPosition = array[2];
    }
    //Taurus
    if (month == 4 && day >= 20 || month == 5 && day <= 20){
        arrayPosition = array[3];
    }
    //Gemini
    if (month == 5 && day >= 21 || month == 6 && day <= 20){
        arrayPosition = array[4];
    }
    //Cancer
    if (month == 6 && day >= 21 || month == 7 && day <= 22){
        arrayPosition = array[5];
    }
    //Leo
    if (month == 7 && day >= 23 || month == 8 && day <= 22){
        arrayPosition = array[6];
    }
    //Virgo
    if (month == 8 && day >= 23 || month == 9 && day <= 22){
        arrayPosition = array[7];
    }
    //Libra
    if (month == 9 && day >= 23 || month == 10 && day <= 22){
        arrayPosition = array[8];
    }
    //Scorpio
    if (month == 10 && day >= 23 || month == 11 && day <= 21){
        arrayPosition = array[9];
    }
    //Sagittarius
    if (month == 11 && day >= 22 || month == 12 && day <= 21){
        arrayPosition = array[10];
    }
    //Capricorn
    if (month == 12 && day >= 22 || month == 1 && day <= 19){
        arrayPosition = array[11];
    }
    return arrayPosition;
}

function isRealDate(month, day){
    var max = 31;
    var trueDate = true;
    if(month == 4 || month == 6 || month == 9 ||  month == 11){
        max = 30;
    }
    if(month == 2){
        max = 29;
    }
    if(day > max){
        trueDate = false;
    }
    return trueDate;
}

function doNameThing(name){
    var message = "";
    if(name.length > 0){
        message += name + ", ";
    } else {
        message += "Welcome you sexy anonymous beast, ";
    }
    return message;
}

function isBirthday(month, day){
    var message = "";
    var date = new Date();
    var monthToday = date.getMonth() + 1;
    var dayToday = date.getDate();
    if(dayToday == day && monthToday == month){
        message += "I will start off by wishing you the most wonderful of birthdays! ";
    }
    return message;
}

function onButtonClick(){
    var userMonth = document.getElementById('Month').value;
    var userDay = document.getElementById("Day").value;
    var userName = document.getElementById("userName").value;
    var nameMessage = doNameThing(userName);

    var birthday = isBirthday(userMonth, userDay);
    var sign = seeker(userMonth, userDay, signs);
    var image = seeker(userMonth, userDay, images);
    var message = nameMessage + birthday + seeker(userMonth, userDay, messages);

    document.getElementById('sign').innerHTML = sign;
    document.getElementById('message').innerHTML = message;
    document.getElementById('image').src = image;
}