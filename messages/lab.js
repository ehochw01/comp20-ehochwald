function parse() {
	request = new XMLHttpRequest();

	//makes request
	request.open("GET", "data.json", true);

	//Handles the response
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;
			messageData = JSON.parse(data);
			message = document.getElementById("messages");
			for (i = 0; i < messageData.length; i++) {
				console.log("HI");
				message.innerHTML = "<p>messageData[i].content + " " + messageData[i].username</p>";
			}
		}
	};
	request.send(null);
}
