// #1

function getWeekDay(d) {
    let daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let day = daysOfWeek[d.getDay()];
    return day;
}

// console.log(getWeekDay(new Date()));
// console.log(getWeekDay(new Date(2022, 9, 22)));

// #2

function getAmountDaysToNewYear() {
    let nyDate = 31;
    let nyMonth = 11; //December
    let today = new Date();
    let ny = new Date(today.getFullYear(), nyMonth, nyDate);
    let dayInMs = 86400000; // 1000 * 60 * 60 * 24
    let daysToNY = Math.round((ny.getTime() - today.getTime()) / dayInMs);
    return daysToNY;
}

console.log(getAmountDaysToNewYear());

// #3

function getApprovedToPass(birthday) {
    let adult = 18;
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDay = today.getDate();

    let birthYear = birthday.getFullYear();
    let birthMonth = birthday.getMonth();
    let birthDay = birthday.getDate();

    let ageYear = todayYear - birthYear;
    let ageMonth = todayMonth - birthMonth;
    let ageDay = todayDay - birthDay;

    if (ageYear === adult) {
        if (ageMonth < 0) {
            alert(
                'Hello adventurer, you are to young for this quest wait for few more months!'
            );
        } else if (ageMonth === 0 && ageDay < 0) {
            alert(
                'Hello adventurer, you are to young for this quest wait for few more days!'
            );
        }
    } else if (ageYear > adult) {
        alert('Hello adventurer, you may pass!');
    } else if (ageYear < adult) {
        alert(
            `Hello adventurer, you are to young for this quest wait for ${
                adult - ageYear
            } years more!`
        );
    }
}

// #4

let str = 'tag="div" class="main" style={width: 50%;} value="Hello World!"';
let str1 = 'tag="p" class="text" style={color: #aeaeae;} value="Aloha!"';

function transformStringToHtml(str) {
    let regex = /"(.*?)"/g;
    let regex1 = /{(.*?)}/g;

    function extractTextBtwQuotes(str, reg) {
        let arrOfKeys = [];
        let current;
        while (current === reg.exec(str)) {
            arrOfKeys.push(current.pop());
        }
        return arrOfKeys.length > 0 ? arrOfKeys : [str];
    }

    let tag_ = extractTextBtwQuotes(str, regex)[0];
    let class_ = extractTextBtwQuotes(str, regex)[1];
    let style_ = extractTextBtwQuotes(str, regex1)[0];
    let value_ = extractTextBtwQuotes(str, regex)[2];

    let result = `<${tag_} class="${class_}" style="${style_}">${value_}</${tag_}>`;
    return result;
}

// console.log(transformStringToHtml(str)); // <div class="main" style="width: 50%;">Hello World!</div>
// console.log(transformStringToHtml(str1)); // <p class="text" style="color: #aeaeae;">Aloha!</p>

// #5

function isValidIdentifier(myVar) {
    let regex = '^([a-zA-Z_$][a-zA-Z0-9_$]*)$';
    if (myVar.match(regex)) {
        return true;
    }
    return false;
}

// console.log(isValidIdentifier('myVar!')); // false
// console.log(isValidIdentifier('myVar$')); // true
// console.log(isValidIdentifier('myVar_1')); // true
// console.log(isValidIdentifier('1_myVar')); // false

// #6

function capitalize(str) {
    let capitalized = str.toLowerCase().replace(/\b\w/g, function (c) {
        return c[0].toUpperCase() + c.slice(1);
    });
    return capitalized;
}

// console.log(capitalize('My name is John Smith. I am 27.'));

// #7

function isValidPassword(str) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(str);
}

// console.log(isValidPassword('agent007')); // false (no uppercase letter)
// console.log(isValidPassword('AGENT007')); // false (no lowercase letter)
// console.log(isValidPassword('AgentOOO')); // false (no numbers)
// console.log(isValidPassword('Age_007')); // false (too short)
// console.log(isValidPassword('Agent007')); // true

// #8

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([7, 5, 2, 4, 3, 9])); //[2, 3, 4, 5, 7, 9]

// #9

const inventory = [
    { name: 'milk', brand: 'happyCow', price: 2.1 },
    { name: 'chocolate', brand: 'milka', price: 3 },
    { name: 'beer', brand: 'hineken', price: 2.2 },
    { name: 'soda', brand: 'coca-cola', price: 1 }
];

function sortByItem({ item: item, array: array }) {
    let sorted = array.sort(function (a, b) {
        if (a[item] < b[item]) {
            return -1;
        }
        if (a[item] > b[item]) {
            return 1;
        }
        return 0;
    });
    return sorted;
}

// console.log(sortByItem({ item: 'name', array: inventory }));
// // [
// // { "name": "beer", "brand": "hineken", "price": 2.2 },
// // { "name": "chocolate", "brand": "milka", "price": 3 },
// // { "name": "milk", "brand": "happyCow", "price": 2.1 },
// // { "name": "soda", "brand": "coca-cola", "price": 1 }
// // ]
