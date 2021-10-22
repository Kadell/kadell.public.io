pathToData = "chatTranscript.lines";

var updateCallback = function(data) {
console.log("***updateCallback****");
console.log(JSON.stringify(data));
//retrieving the conversation Data
var path = data.key;
var value = data.newValue;
var index = value.length - 1;
let queryObj = value[index];
let updatedQueryObjText = "";
console.log("***index****", index);
console.log("***index****", JSON.stringify(queryObj));
//checking of the conversation is from visitor
if (queryObj.source === "visitor") {
let queryObjText = queryObj.text;
let updated = false;
//if conversation from visitor, match the pattern to replace
if(queryObjText.includes("LPGT1") || queryObjText.includes("LPLT1")){
	updatedQueryObjText = queryObjText.replace(/LPGT1/g, ">");
	updatedQueryObjText = updatedQueryObjText.replace(/LPLT1/g, "<");
	updated = true;
}


if(updated){
	document.getElementById("updatedQuery").innerHTML = updatedQueryObjText;
	}
}
};
var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	let changedString = queryText.replace(/>/g, "LPGT1");
	changedString = changedString.replace(/</g, "LPLT1");
	
	var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };
	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    var data = {text: changedString};
	lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
	
}
var notifyWhenDone =function(err) {
if (err){
// Do something with the error
console.log("error",err);
}
// called when the bind is completed successfully,
// or when the action terminated with an error.
};
lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData,updateCallback, notifyWhenDone);
