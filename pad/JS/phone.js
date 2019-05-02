  // Create our JsSIP instance and run it:
//var JsSIP = require('jssip');
var socket = new JsSIP.WebSocketInterface('wss://chats-development.smartz-solutions.com:8089/ws');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:12345@chats-development.smartz-solutions.com',
  password : '12345@chats'
};

var ua = new JsSIP.UA(configuration);

ua.start();
ua.on('registered', function(e){
//console.log('registered'); 
document.getElementById('rgf').innerHTML='registered';
 });
ua.on('unregistered', function(e){ ua.register();
  console.log('unregistered');
 });
ua.on('registrationFailed', function(e){
 // var re=e;
  //console.log('registetionFailed')
  document.getElementById('rgf').innerHTML='registetionFailed';
 });


 
  ua.register();


// Register callbacks to desired call events
var eventHandlers = {
  'progress': function(e) {
    console.log('call is in progress');
  },
  'failed': function(e) {
    console.log('call failed with cause: '+ e.data.cause);
  },
  'ended': function(e) {
    console.log('call ended with cause: '+ e.data.cause);
  },
  'confirmed': function(e) {
    console.log('call confirmed');
  }
};

var options = {
  'eventHandlers'    : '',
  'mediaConstraints' : { 'audio': true, 'video': true }
};
  

//ua.on('connected',function(e){
  ua.on('newRTCSession', function(data){

  data.session.on('ended', function(data) {
     console.log('call ended');
  });
      data.session.on('connected', function(data) {
     console.log('call connected');
  });
       data.session.on('connecting', function(data) {
     console.log('call connecting');
  });
      data.session.on('failed', function(data) {
    //console.log('call failedsc');
    document.getElementById('cll').innerHTML='call failed';
  });
    
  });
//});
function call(number){
  
  var session = ua.call('sip:'+number+'@chats-development.smartz-solutions.com', options);
}
 
 
 

