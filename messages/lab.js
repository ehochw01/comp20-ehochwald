var request = new XMLHttpRequest();


function parse() {

	//makes request
	request.open("GET", "data.json", true);

	//Handles the response
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;
			mes = JSON.parse(data);
			message = document.getElementById("messages");
			for (i = 0; i < mes.length; i++) {
				console.log("HI");
				message.innerHTML += "<p>" + mes[i]["content"] + " " + mes[i]["username"] + "</p>";
			}
		}
	};
	request.send(null);
}
