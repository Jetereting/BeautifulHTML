// Click, tap screen or use your keyboard to play

/**********
Variables
***********/

// can1 varibles
can1 = document.getElementById('can-1');
can1Audio = document.getElementById('can1-Audio');
// can2 varibles
can2 = document.getElementById('can-2');
can2Audio = document.getElementById('can2-Audio');
// can3 varibles
can3 = document.getElementById('can-3');
can3Audio = document.getElementById('can3-Audio');
// bucket1 varibles
bucket1 = document.getElementById('bucket-1');
bucket1Audio = document.getElementById('bucket1-Audio');
// bucket2 varibles
bucket2 = document.getElementById('bucket-2');
bucket2Audio = document.getElementById('bucket2-Audio');
// bucket3 varibles
bucket3 = document.getElementById('bucket-3');
bucket3Audio = document.getElementById('bucket3-Audio');
// pot1 varibles
pot1 = document.getElementById('pot-1');
pot1Audio = document.getElementById('pot1-Audio');
// pot2 varibles
pot2 = document.getElementById('pot-2');
pot2Audio = document.getElementById('pot2-Audio');
// cup1 varibles
cup1 = document.getElementById('cup-1');
cup1Audio = document.getElementById('cup1-Audio');
// cup2 varibles
cup2 = document.getElementById('cup-2');
cup2Audio = document.getElementById('cup2-Audio');
// lid1 varibles
lid1 = document.getElementById('lid-1');
lid1Audio = document.getElementById('lid1-Audio');

// Autoplay button
autoButton = document.getElementById('auto-button');


/**********
Can1
**********/

// can-1 bounce
var can1tl = new TimelineMax({
	paused: true
});
can1tl.to(can1, 0.1, {scaleX: 1.06, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(can1, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(can1, 0.2, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});

// can1 audio
function playCan1Audio() {
	can1Audio.currentTime = 0;
	can1Audio.play();
}

// can1 actions
function can1hit(){
	can1tl.restart();
	can1tl.play();
	playCan1Audio();
}

// can1 actions when clicked
can1.addEventListener("click", can1hit);


/**********
Can2
**********/

// can2 bounce
var can2tl = new TimelineMax({
	paused: true
});
can2tl.to(can2, 0.1, {scaleX: 1.06, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(can2, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(can2, 0.2, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});

// can2 audio
function playCan2Audio() {
	can2Audio.currentTime = 0;
	can2Audio.play();
}

// can2 actions
function can2hit(){
	can2tl.restart();
	can2tl.play();
	playCan2Audio();
}

// can2 actions when clicked
can2.addEventListener("click", can2hit);


/**********
Can3
**********/

// can3 bounce
var can3tl = new TimelineMax({
	paused: true
});
can3tl.to(can3, 0.1, {scaleX: 1.06, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(can3, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(can3, 0.2, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});

// can3 audio
function playCan3Audio() {
	can3Audio.currentTime = 0;
	can3Audio.play();
}
// can3 actions
function can3hit(){
	can3tl.restart();
	can3tl.play();
	playCan3Audio();
}
// can3 actions when clicked
can3.addEventListener("click", can3hit);


/**********
Bucket1
**********/

// bucket1 wobble
var bucket1tl = new TimelineMax({
	paused: true
});
bucket1tl.to(bucket1, 0.1, {rotation: 6, transformOrigin: "50% 50%"})
.to(bucket1, 0.4, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// bucket1 audio
function playBucket1Audio() {
	bucket1Audio.currentTime = 0;
	bucket1Audio.play();
}

// bucket1 actions
function bucket1hit(){
	bucket1tl.restart();
	bucket1tl.play();
	playBucket1Audio();
}

// bucket1 actions when clicked
bucket1.addEventListener("click", bucket1hit);


/**********
Bucket2
**********/

// bucket2 wobble
var bucket2tl = new TimelineMax({
	paused: true
});
bucket2tl.to(bucket2, 0.1, {rotation: 6, transformOrigin: "50% 50%"})
.to(bucket2,1, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// bucket2 audio
function playBucket2Audio() {
	bucket2Audio.currentTime = 0;
	bucket2Audio.play();
}

// bucket2 actions
function bucket2hit(){
	bucket2tl.restart();
	bucket2tl.play();
	playBucket2Audio();
}

// bucket2 actions when clicked
bucket2.addEventListener("click", bucket2hit);


/**********
Bucket3
**********/

// bucket3 wobble
var bucket3tl = new TimelineMax({
	paused: true
});
bucket3tl.to(bucket3, 0.1, {rotation: 6, transformOrigin: "50% 50%"})
.to(bucket3, 0.4, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// bucket3 audio
function playBucket3Audio() {
	bucket3Audio.currentTime = 0;
	bucket3Audio.play();
}

// bucket3 actions
function bucket3hit(){
	bucket3tl.restart();
	bucket3tl.play();
	playBucket3Audio();
}

// bucket3 actions when clicked
bucket3.addEventListener("click", bucket3hit);


/**********
Pot1
**********/

// pot1 bounce
var pot1tl = new TimelineMax({
	paused: true
});
pot1tl.to(pot1, 0.1, {scaleX: 1.06, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(pot1, 0.1, {scaleY: 0.9, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(pot1, 0.25, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// pot1 audio
function playPot1Audio() {
	pot1Audio.currentTime = 0;
	pot1Audio.play();
}

// pot1 actions
function pot1hit(){
	pot1tl.restart();
	pot1tl.play();
	playPot1Audio();
}

// pot1 actions when clicked
pot1.addEventListener("click", pot1hit);


/**********
Pot2
**********/

// pot2 wobble
var pot2tl = new TimelineMax({
	paused: true
});
pot2tl.to(pot2, 0.1, {rotation: 6, transformOrigin: "50% 50%"})
.to(pot2,1, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// pot2 audio
function playPot2Audio() {
	pot2Audio.currentTime = 0;
	pot2Audio.play();
}

// pot2 actions
function pot2hit(){
	pot2tl.restart();
	pot2tl.play();
	playPot2Audio();
}

// pot2 actions when clicked
pot2.addEventListener("click", pot2hit);


/**********
Cup1
**********/

// cup1 wobble
var cup1tl = new TimelineMax({
	paused: true
});
cup1tl.to(cup1, 0.1, {rotation: 6, transformOrigin: "50% 50%"})
.to(cup1,1, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// cup1 audio
function playCup1Audio() {
	cup1Audio.currentTime = 0;
	cup1Audio.play();
}

// cup1 actions
function cup1hit(){
	cup1tl.restart();
	cup1tl.play();
	playCup1Audio();
}

// cup1 actions when clicked
cup1.addEventListener("click", cup1hit);

/**********
Cup2
**********/

// cup2 wobble
var cup2tl = new TimelineMax({
	paused: true
});
cup2tl.to(cup2, 0.1, {rotation: 6, transformOrigin: "50% 50%"})
.to(cup2,1, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// cup2 audio
function playCup2Audio() {
	cup2Audio.currentTime = 0;
	cup2Audio.play();
}

// cup2 actions
function cup2hit(){
	cup2tl.restart();
	cup2tl.play();
	playCup2Audio();
}

// cup2 actions when clicked
cup2.addEventListener("click", cup2hit);

/**********
Lid1
**********/

// lid1 wobble
var lid1tl = new TimelineMax({
	paused: true
});
lid1tl.to(lid1, 0.1, {rotation: 3, transformOrigin: "50% 50%"})
.to(lid1, 0.3, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3)});

// cup2 audio
function playLid1Audio() {
	lid1Audio.currentTime = 0;
	lid1Audio.play();
}

// lid1 actions
function lid1hit(){
	lid1tl.restart();
	lid1tl.play();
	playLid1Audio();
}

// lid1 actions when clicked
lid1.addEventListener("click", lid1hit);


/**********
Keyboard Triggers
**********/

// keyboard guide
keyboardKeys = document.getElementById('keyboard');
key66 = document.getElementById('Key-66');
key72 = document.getElementById('Key-72');

// keyboard symbol wobble
function animateKey(key) {
keytl = new TimelineMax({
	paused: true
});
keytl.to(key, 0.1, {scale: 1.1, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(key, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});
			keytl.restart();
			keytl.play();
}

// keyboard triggers
document.onkeydown = function(e) {
	keyboardKeys.classList.remove("hidden");
	thisKeyID = 'Key-' + e.keyCode;
	thisKey = document.getElementById(thisKeyID);
	animateKey(thisKey);
	switch (e.keyCode) {
		case 83:
			can1hit();
			break;
		case 68:
			can2hit();
			break;
		case 70:
			can3hit();
			break;
		case 74:
			bucket1hit();
			break;
		case 75:
			bucket2hit();
			break;
		case 76:
			bucket3hit();
			break;
		case 66:
			pot1hit();
			break;
    case 78:
			pot2hit();
			break;
    case 71:
      cup1hit();
      break;
    case 72:
      cup2hit();
      break;
    case 89:
      lid1hit();
      break;
	}
};