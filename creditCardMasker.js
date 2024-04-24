// Question 1 : Implement a Credit Card Masker | Klarna Frontend Interview Question | JavaScript ? 

// Summary : In this question the candidate needs to implement a function that takes a credit card number and returns the masked version.

// Requirements : It should replace all but the 1st and last 4 digits in the provided sequence.
               // Should not mask input shorter than 6 characters.
               // Should not mask non-numeric characters.
               // Should return empty string for all other input types apart from string and number.

// Syntax : maskify(cardNumber);

// Argument : cardNumber (string | number): The credit card number provided by the user.

// Return : the masked version of the card number as a string

// Example :
// maskify('5512103073210694');
// 5###########0694

// maskify('4556-3646-0793-5616')
// 4###-####-####-5616

// maskify('');
// ''

// maskify('Devtools Tech');
// Devtools Tech

// maskify('S2k3i4p65p7y');
// S#k#i#p#5p7y

function maskify(cardNumber){

    const inputType = typeof cardNumber;

    if (inputType !== "number" && inputType !== "string" ){
        return '';
    }

    const cc = String(cardNumber);
    const length = cc.length;

    if (length < 6 ){
        return cc;
    }

    // TestCase 1
    // cc: "5512103073210694"
    // first : "5"
    // lastFour : "0694"
    // remaining : "51210307321"
    // with a #

    // TestCase 2 (With '-' including)
    // cc: "5512-1030-7321-0694"
    // first : "5"
    // lastFour : "0694"
    // remaining : "512-1030-7321-"
    // with a #

    // TestCase 3 (With string including)
    // cc: "S2k3i4p65p7y"
    // first : "S"
    // lastFour : "5p7y"
    // remaining : "2k3i4p6"
    // with a #


    const first = cc.slice(0, 1);
    const lastFour = cc.slice(-4);
    const masked = cc.slice(1, length - 4).replace(/\d/g, "#");

    return `${first}${masked}${lastFour}`;
}

//const card = maskify(5512103073210694); // return = 5###########0694
//const card = maskify('5512-1030-7321-0694'); //return = 5###-####-####-0694
//const card = maskify('S2k3i4p65p7y'); // return = S#k#i#p#5p7y
const card = maskify('sammed chougule'); // return = sammed chougule
console.log(card);


