var query_compression=0; // turn querystring obfuscation on or off
var config = {};



fname = [
	'node',
	'back',
	'root',
	'timer',
	'moves',
	'giver',
	'receiver',
	'metaNode',
	'passUseMode'
];
var mover = document.getElementById("wrap");  


//mover.addEventListener("click", scroll, false);

//main variables for system
var d = ""; //description buffer
var e = ""; //event description buffer
var b = "";
var root=0; //whether or not user is in primary location. 
var firstload=1; //first time loading up game
var querystring="";
var backIt = "start"; //don't remove this
var content;
var old;
var use; //activate inventory mode
var giver = 0;
var receiver = 0;
var deadX = "";
var deadEvent ="";
var links = 1;
var back = 1;
var lockdown = 0;
var scrollPosition;
var invText="";
var inv=1;
var metaNode=0;
var wait;
var no_exit_memory=0;
var dCount=1;
var thought;
var config = {};
config.debugMode=0;
var iBuffer = "";
var inventoryDescArray = [];
var last_uncorrupted_save = []; //for allowing user to jump back a few steps in case hit a game stopping bug
var metaVisible=0;
var restored=0;
var parent;
config.inventorySystem=1;
var waitSystem=0;
var saveLink;
var f={}; 	
var i={};
var scene_name=[];
var iName=[];
var iNameSorted=[];
var node_function=[];
var file_node_jumped;
var timeouts = [];
var d_ow = ""; //d buffer overwrite for quik jumps
var pre_node_f = []; //for recording the flag variables state before entering story nodes and the changes that they produce. Used for quik jumps 
var quik_responses = {}; 
i.z='sdssd';
f.node='start';
f.back='start';
back=1;
f.root='start';
f.metaNode=0;
f.reward=0;


