ERIC HOCHWALD
COMP 20
LAB 6

I believe that I have properly implemented the Javascipt code that pases the
JSON, and modidies the "messages" section of the HTML.
I worked on this assignment alone.
This assignment took me a couple of hours to complete.

Part 2: Chrome and Safari were not able to display the JSON message 
information. To quote the developer.mozilla.org page "Two pages have the same
origin if the protocol, port (if one is specified), and host are the same for
both pages." When the python server was being used for the folder, the file 
that held the JSON had the same host. When simply opening the HTML file, 
and the JSON file is no longer under the same port, the XMLHttpRequest
in the javascript failed to complete

Part 3: This doesn't work because the cross origin read is not allowed. 

XMLHttpRequest cannot open files on your own machine part of the same origin
policy. As far as requesting data from a different origin, it depends. An 
extension  can talk to remote servers outside of its origin as long as it first
requests cross-origin permissions.