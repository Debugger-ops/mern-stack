str = "mafewf";
rev = str.split("").reverse().join("");
if(str == rev){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}