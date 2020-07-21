window.addEventListener('load', function () {
    //get button tag from html
    const btn = document.querySelector('.btn_converter');

    //add click listener to button tag
    btn.addEventListener('click', function () {
        //get the number value from the input
        const intValue = parseInt(document.querySelector('#int_input').value);
        //identify if the number follow the rules
        if (intValue >= 10) {
            //begin with the apply of the rules conversion
            document.querySelector('#text_output').innerHTML = intRules(intValue);
        } else {
            //notify to the user that the number didnt follow the rules 
            window.alert("the input number is not greater than or equal to 10");
        }
    });

    //function that returns the string value of the rules applied to the number
    const intRules = (intValue) => {
        //string value of all the rules to apply to the number
        let str = intValue.toString();

        //loop apply rules until the number is 1
        while (intValue != 1) {

            var numbCase = 0;
            //calculate last digit from the number if this one have mora than 1 digit
            if (intValue >= 10) {
                console.log("entro al if de 10");
                console.log(intValue);
                var sNumb = intValue.toString();
                var cNumb = sNumb.substring(sNumb.length - 1, sNumb.lengthx);
                //get the last digit from the number
                numbCase = parseInt(cNumb);
            } else {
                //get the last digit from the number
                numbCase = parseInt(intValue);
            }

            //rule # 3
            if (numbCase == 0) {
                intValue = (intValue / 10) + 1;
            }
            //rule # 2
            if (numbCase % 2 == 0) {
                intValue--;
            }
            //rule # 1
            if (numbCase % 2 !== 0) {
                const subs = parseInt(intValue / 3);
                intValue -= subs;
            }

            //add the changes from the number at the string record value 
            str += " - " + (intValue.toString());
        }

        return str;
    }
});