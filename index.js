var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	let changedString = queryText.replace(/>/g, "LPGT1");
	changedString = changedString.replace(/</g, "LPLT1");
	

	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
        var data = {text: changedString};
	lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
	
}

lpTag.agentSDK.init({});
