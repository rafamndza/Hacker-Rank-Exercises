/*
Camel Case is a naming style common in many programming languages.
 In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter
 (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.




*/

function processData(input){

    input.split(`\r\n`).forEach((str)=>{
        let arr = str.split(";");
        let output = "";
        //Split functionality
        if(arr[0]==="S"){
            output=arr[2].replace("()","").replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
            return console.log(output)
        }
        //Conbine functionality
        if (arr[0] === "C") {
            // eg.: C;V;mobile phone --> mobilePhone
            output = arr[2].replace(/\s+(.)/g, str => str.toUpperCase()).replace(/\s/g, "");
						
            if (arr[1] === "C") output = output.replace(/./, str => str.toUpperCase());
            if (arr[1] === "M") output += "()";
            return console.log(output);
        }
    });
}







processData("S;V;iPad","C;M;mouse pad","C;C;code swarm","S;C;OrangeHighlighter")