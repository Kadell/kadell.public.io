var readQuery = function(){
	let queryText = document.getElementById("queryText").value;
	let changedString = queryText.replace(/>/g, "&gt;");
	changedString = changedString.replace(/</g, "&lt;");
	

	var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
        var data = {text: changedString};
	lpTag.agentSDK.command(cmdName, data);
	
}

lpTag.agentSDK.init({});
