var socket = new JsSIP.WebSocketInterface('wss://chats-development.smartz-solutions.com:8089/ws')
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:12345@chats-development.smartz-solutions.com',
  password : '12345@chats'
};

var ua = new JsSIP.UA(configuration);

ua.start();

// ​var options ={
// 'eventHandlers'    : '',
// 'mediaConstraints' : { 'audio': true, 'video': true }
// };
  



ua.on("newRTCSession", function(data){
    var session = data.session; 
    
    if (session.direction === "incoming") {
        // incoming call here
        session.on("accepted",function(){
            // the call has answered
        });
        session.on("confirmed",function(){
            // this handler will be called for incoming calls too
        });
        session.on("ended",function(){
            // the call has ended
        });
        session.on("failed",function(){
            // unable to establish the call
        });
        // session.on('addstream', function(e){
        //     // set remote audio stream (to listen to remote audio)
        //     // remoteAudio is <audio> element on page
        //     remoteAudio.src = window.URL.createObjectURL(e.stream);
        //     remoteAudio.play();
        // });
        
        // Answer call
        session.answer(options);
        
        // Reject call (or hang up it)
        session.terminate();
    }
});