var button_trans=document.querySelector('#button_translate')
var textinput=document.querySelector("#textarea")
var output=document.querySelector('#output')
// console.log(textinput.value)
console.log(output.value)

// console.log(output)
var  serverURl="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURl+ "?" + "text=" + text
}

function errorhandler(error){
    console.log("error occures",error); 
    alert("something went wrong!try again later! ")
};
function clickhandler(){
    var inputText=textinput.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    })  
    .catch(errorhandler)      
}
button_trans.addEventListener("click", clickhandler)
