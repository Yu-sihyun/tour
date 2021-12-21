(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"stamp_tour_f_atlas_1", frames: [[806,1589,274,88],[0,998,884,69],[826,564,790,134],[0,564,824,134],[734,821,504,175],[503,1468,265,103],[1818,1475,224,103],[1467,1475,349,78],[770,1509,349,78],[138,1524,349,78],[0,700,732,142],[734,700,840,119],[1006,1715,239,91],[1082,1635,309,78],[1850,653,128,163],[1393,1635,309,78],[1704,1635,309,78],[455,1669,309,78],[1247,1715,261,78],[367,1223,142,219],[1510,1715,261,78],[1773,1715,261,78],[240,1749,261,78],[503,1749,261,78],[0,1387,136,221],[1247,1795,261,78],[1510,1795,261,78],[1773,1795,261,78],[655,1900,211,64],[868,1900,211,64],[123,1909,211,64],[1662,1949,211,64],[0,1784,121,155],[1550,1343,476,64],[511,1402,476,64],[1550,1409,476,64],[989,1443,476,64],[547,1829,106,153],[1298,1955,211,64],[655,1966,211,64],[868,1966,211,64],[1081,1973,211,64],[0,1975,211,64],[213,1975,211,64],[426,1984,211,64],[630,844,101,146],[1510,1092,162,119],[766,1779,162,119],[1662,1875,188,72],[1852,1875,188,72],[1240,821,771,100],[1240,923,771,100],[0,844,313,152],[1223,1166,271,152],[315,844,313,152],[547,1213,271,152],[232,1069,313,152],[886,1025,834,65],[766,1679,238,98],[0,1684,238,98],[913,1092,595,72],[812,301,365,105],[1121,1555,346,78],[1469,1555,315,78],[138,1444,363,78],[489,1589,315,78],[138,1604,315,78],[820,1302,363,98],[1185,1343,363,98],[1496,1236,365,105],[735,418,823,144],[1863,1236,154,96],[1142,1875,154,96],[930,1808,210,78],[1298,1875,180,78],[123,1829,210,78],[1480,1875,180,78],[335,1829,210,78],[0,386,733,169],[0,1280,365,105],[1870,435,160,216],[1618,576,230,209],[1722,1025,230,209],[0,1069,230,209],[0,0,430,353],[812,0,430,299],[432,0,378,384],[1618,300,250,274],[1244,0,306,416],[1552,0,334,298],[1888,0,160,433],[913,1166,308,134],[547,1092,364,119]]},
		{name:"stamp_tour_f_atlas_2", frames: [[0,840,1064,323],[0,1165,1064,323],[0,0,1168,418],[0,420,1168,418],[1730,696,248,716],[1256,1660,454,366],[0,1490,734,416],[1256,1238,472,420],[736,1490,518,396],[1066,840,518,396],[1170,0,700,694]]},
		{name:"stamp_tour_f_atlas_3", frames: [[788,840,1224,418],[0,0,1330,418],[788,1260,1224,418],[0,420,1330,418],[0,840,786,694]]},
		{name:"stamp_tour_f_atlas_4", frames: [[788,654,1165,487],[740,1143,1165,487],[0,0,786,782],[0,784,738,782],[788,0,894,652]]},
		{name:"stamp_tour_f_atlas_5", frames: [[794,722,1243,516],[794,1240,1243,516],[0,0,1280,720],[0,722,792,1110]]},
		{name:"stamp_tour_f_atlas_6", frames: [[0,0,1215,965],[0,967,1180,801]]},
		{name:"stamp_tour_f_atlas_7", frames: [[0,1070,1215,965],[0,0,1600,1068]]},
		{name:"stamp_tour_f_atlas_8", frames: [[0,0,1569,1121]]},
		{name:"stamp_tour_f_atlas_9", frames: [[0,0,1920,1080]]},
		{name:"stamp_tour_f_atlas_10", frames: [[0,0,1833,1466]]},
		{name:"stamp_tour_f_atlas_11", frames: [[869,354,116,86],[445,357,116,86],[563,489,74,103],[312,430,116,86],[430,445,131,63],[0,288,179,72],[181,296,130,89],[213,0,184,72],[0,66,184,72],[399,0,184,72],[585,0,184,72],[930,74,88,126],[771,0,184,72],[186,74,184,72],[0,140,184,72],[372,74,184,72],[372,222,99,126],[558,74,184,72],[744,74,184,72],[186,148,184,72],[0,214,184,72],[0,362,88,126],[372,148,184,72],[558,148,184,72],[744,148,184,72],[186,222,184,72],[90,362,88,126],[925,222,91,130],[0,0,211,64],[430,510,86,72],[180,467,130,72],[312,518,86,72],[0,490,130,72],[473,222,224,53],[639,508,317,10],[699,222,224,53],[639,520,317,10],[473,277,130,78],[313,350,130,78],[180,387,130,78],[605,277,130,78],[737,277,130,78],[639,532,379,4],[639,538,379,4],[0,564,229,6],[0,572,229,6],[563,357,144,64],[709,357,144,64],[563,423,144,64],[709,423,144,64],[855,442,144,64]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_146 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(img.CachedBmp_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3065,1698);


(lib.CachedBmp_126 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["stamp_tour_f_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["stamp_tour_f_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["stamp_tour_f_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["stamp_tour_f_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["stamp_tour_f_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["stamp_tour_f_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["stamp_tour_f_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["stamp_tour_f_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["stamp_tour_f_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["stamp_tour_f_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["stamp_tour_f_atlas_11"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.arrow1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.bookmark2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.borderg5e3090fe8_1280 = function() {
	this.initialize(ss["stamp_tour_f_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.butt = function() {
	this.initialize(ss["stamp_tour_f_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.butt1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.buttennn1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.buttennn2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.buttennn3 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.clear1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.clear2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.cong1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cong2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.cong3 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.fibutten1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.grand1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hole = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hole1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.home2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hp = function() {
	this.initialize(img.hp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3968,2855);


(lib.ingr1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ingr3 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.memo11 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.memo1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.memory7th = function() {
	this.initialize(img.memory7th);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1932,3000);


(lib.memory8th = function() {
	this.initialize(img.memory8th);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,1785);


(lib.mus1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mus2 = function() {
	this.initialize(ss["stamp_tour_f_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.next = function() {
	this.initialize(ss["stamp_tour_f_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.parking = function() {
	this.initialize(img.parking);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3680,2456);


(lib.repaly = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.road = function() {
	this.initialize(ss["stamp_tour_f_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shp = function() {
	this.initialize(img.shp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4800,3200);


(lib.st1 = function() {
	this.initialize(ss["stamp_tour_f_atlas_1"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.YSH_07642 = function() {
	this.initialize(img.YSH_07642);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5528,4912);


(lib.YSH_07683 = function() {
	this.initialize(img.YSH_07683);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4912,7180);


(lib.YSH_0837 = function() {
	this.initialize(img.YSH_0837);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7360,4912);


(lib.YSH_2800 = function() {
	this.initialize(ss["stamp_tour_f_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.YSH_31051 = function() {
	this.initialize(img.YSH_31051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4470,3200);


(lib.YSH_32162 = function() {
	this.initialize(img.YSH_32162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1985,3285);


(lib.YSH_32611 = function() {
	this.initialize(img.YSH_32611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4092,2696);


(lib.YSH_3598 = function() {
	this.initialize(ss["stamp_tour_f_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.YSH_96821 = function() {
	this.initialize(ss["stamp_tour_f_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_038_뿅");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// 레이어_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,0.0998,0.0998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.6,107.8);


(lib.mus1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.mus1();
	this.instance.setTransform(0,0,0.073,0.073);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.4,50.7);


(lib.mus_n = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.mus2();
	this.instance.setTransform(0,0,0.0705,0.0705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.4,48.9);


(lib.menual2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_145();
	this.instance.setTransform(0,313.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_144();
	this.instance_1.setTransform(0,156.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_143();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menual2, new cjs.Rectangle(0,0,442,347.7), null);


(lib.menual = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_142();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menual, new cjs.Rectangle(0,0,252,87.5), null);


(lib.memoo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.memo1();
	this.instance.setTransform(0,0,0.7546,0.7113);

	this.instance_1 = new lib.memo11();
	this.instance_1.setTransform(4,0,0.7375,0.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390.9,292.1);


(lib.map44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_8
	this.instance = new lib.CachedBmp_139();
	this.instance.setTransform(1218.8,227.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 레이어_7
	this.instance_1 = new lib.ingr3();
	this.instance_1.setTransform(1302.75,65.2,0.3987,0.3987,21.4476);

	this.instance_2 = new lib.ingr1();
	this.instance_2.setTransform(1205,96,0.121,0.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// 레이어_6
	this.instance_3 = new lib.CachedBmp_140();
	this.instance_3.setTransform(934.7,700.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 레이어_4
	this.instance_4 = new lib.hole1();
	this.instance_4.setTransform(856,572,0.3518,0.2964);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 레이어_5
	this.instance_5 = new lib.CachedBmp_141();
	this.instance_5.setTransform(549.4,211,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 레이어_3
	this.instance_6 = new lib.grand1();
	this.instance_6.setTransform(508,16,0.1792,0.1792);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 레이어_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("EAI2AiCQg3gkgNg/QgNhAAlg3QAjg1BAgNQBAgOBgAZQBiAagNAzQgLA1g2BMQg2BNhAANQgRADgQAAQgtAAgngagEA5HgTYQhBgEgsgxQgqgwAEhBQACgkAPgpQgnAGggABQgwABhfgXQhegYgrgmQgpgmgVgqQg0hmAthOQAthOBygFQAXgDAYACQAYACAYAEQA6AMA6AfIAUAMQBdA1A0BMQANATAKAWQAWAsAFAfQAjAbAoAvQA8BIgEBBQgEBBgxArQgsAng6AAIgLAAgEgztgX0Qg+gVgdg7Qgdg5AVg+QAJgcAUgfQgoAGgfABQgxAChegYQhfgXgqgmQgqgmgVgqQgzhnAthOQAshNBygGQAYgCAYACQAXABAYAFQA6AMA7AfIAUALQBcA2A0BLQANAUALAVQAWAtAGAfIAFAFQAnAkAoBVQAnBVgVA+QgVA9g5AdQgiARgjAAQgZAAgagIg");
	this.shape.setTransform(780.2757,390.3867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 레이어_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC6600").ss(6,0,1).p("EBLQgilQAAI4mSGRQmRGSo4AAQo4AAmSmSQiOiOhciiQiokqAAlvQAAo4GSmSQGSmSI4AAQI4AAGRGSQGSGSAAI4gEggYgm5QAAALgBALQAAAJAAAIQgNIfmEGDQmSGSo4AAQmSAAk/jJQiDhTh2h2QmRmRAAo4QAAo4GRmSQB2h2CDhTQE/jJGSAAQI4AAGSGSQAfAfAcAgQDXDvBQEnQAwCxAADEgEAgZAm6QAAI4mSGSQmRGSo4AAQo4AAmRmSQmSmSAAo4QAAj/BRjdQBjkQDejeQGRmRI4AAQI4AAGRGRQGSGSAAI4g");
	this.shape_1.setTransform(927.825,386.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543001").ss(30,0,1).p("Eh39AA5QKehfKxg4UAkngC+AoHAEUQKwBJLBBsQQ7irQlhNUAsggDSAqJAHD");
	this.shape_2.setTransform(767.7503,361.7808);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#543001").ss(22,0,1).p("EA0fgGYIawzNAizlVIWqcLQIZC0GxEbEhPhgGrMAyygXS");
	this.shape_3.setTransform(644.8153,395.0556);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(22,0,1).p("AgCACIAFgD");
	this.shape_4.setTransform(1152.225,231.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("EgELA2EQmSmSAAo4QAAj/BRjdQBjkQDejeQGRmRI4AAQI4AAGRGRQGSGSAAI4QAAI4mSGSQmRGSo4AAQo4AAmRmSgEAmrgTcQiOiOhciiIAGgFIgGAFQiokqAAlvQAAo4GSmSQGSmSI4AAQI4AAGRGSQGSGSAAI4QAAI4mSGRQmRGSo4AAQo4AAmSmSgEhBFgUnQiDhTh2h2QmRmRAAo4QAAo4GRmSQB2h2CDhTQE/jJGSAAQI4AAGSGSQAfAfAcAgQDXDvBQEnQAwCxAADEIAAAWIgBARQgNIfmEGDQmSGSo4AAQmSAAk/jJg");
	this.shape_5.setTransform(927.825,386.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.map44, new cjs.Rectangle(-15,-3,1565.2,778.4), null);


(lib.map33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_6
	this.instance = new lib.CachedBmp_137();
	this.instance.setTransform(983.45,700.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 레이어_4
	this.instance_1 = new lib.hole1();
	this.instance_1.setTransform(856,572,0.3518,0.2964);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 레이어_5
	this.instance_2 = new lib.CachedBmp_138();
	this.instance_2.setTransform(549.4,211,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 레이어_3
	this.instance_3 = new lib.grand1();
	this.instance_3.setTransform(508,16,0.1792,0.1792);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 레이어_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("EAI2AiCQg3gkgNg/QgNhAAlg3QAjg1BAgNQBAgOBgAZQBiAagNAzQgLA1g2BMQg2BNhAANQgRADgQAAQgtAAgngagEA5HgTYQhBgEgsgxQgqgwAEhBQACgkAPgpQgnAGggABQgwABhfgXQhegYgrgmQgpgmgVgqQg0hmAthOQAthOBygFQAXgDAYACQAYACAYAEQA6AMA6AfIAUAMQBdA1A0BMQANATAKAWQAWAsAFAfQAjAbAoAvQA8BIgEBBQgEBBgxArQgsAng6AAIgLAAgEgztgX0Qg+gVgdg7Qgdg5AVg+QAJgcAUgfQgoAGgfABQgxAChegYQhfgXgqgmQgqgmgVgqQgzhnAthOQAshNBygGQAYgCAYACQAXABAYAFQA6AMA7AfIAUALQBcA2A0BLQANAUALAVQAWAtAGAfIAFAFQAnAkAoBVQAnBVgVA+QgVA9g5AdQgiARgjAAQgZAAgagIg");
	this.shape.setTransform(780.2757,390.3867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 레이어_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC6600").ss(6,0,1).p("EBLQgilQAAI4mSGRQmRGSo4AAQo4AAmSmSQiOiOhciiQiokqAAlvQAAo4GSmSQGSmSI4AAQI4AAGRGSQGSGSAAI4gEggYgm5QAAALgBALQAAAJAAAIQgNIfmEGDQmSGSo4AAQmSAAk/jJQiDhTh2h2QmRmRAAo4QAAo4GRmSQB2h2CDhTQE/jJGSAAQI4AAGSGSQAfAfAcAgQDXDvBQEnQAwCxAADEgEAgZAm6QAAI4mSGSQmRGSo4AAQo4AAmRmSQmSmSAAo4QAAj/BRjdQBjkQDejeQGRmRI4AAQI4AAGRGRQGSGSAAI4g");
	this.shape_1.setTransform(927.825,386.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543001").ss(30,0,1).p("Eh39AA5QKehfKxg4UAkngC+AoHAEUQKwBJLBBsQQ7irQlhNUAsggDSAqJAHD");
	this.shape_2.setTransform(767.7503,361.7808);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#543001").ss(22,0,1).p("EA0fgGYIawzNAizlVIWqcLQIZC0GxEbEhPhgGrMAyygXS");
	this.shape_3.setTransform(644.8153,395.0556);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(22,0,1).p("AgCACIAFgD");
	this.shape_4.setTransform(1152.225,231.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("EARPA2EQmRmSAAo4QAAj/BRjdQBjkQDdjeQGSmRI4AAQI4AAGSGRQGSGSAAI4QAAI4mSGSQmSGSo4AAQo4AAmSmSgEgrpgUnQiEhTh1h2QmSmRAAo4QAAo4GSmSQB1h2CEhTQE/jJGSAAQI4AAGRGSQAfAfAdAgQDWDvBQEnQAwCxAADEIAAAWIAAARQgOIfmEGDQmRGSo4AAQmSAAk/jJg");
	this.shape_5.setTransform(790.675,386.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.map33, new cjs.Rectangle(-15,-3,1565.2,778.4), null);


(lib.map22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_5
	this.instance = new lib.CachedBmp_136();
	this.instance.setTransform(549.4,211,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 레이어_3
	this.instance_1 = new lib.grand1();
	this.instance_1.setTransform(508,16,0.1792,0.1792);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 레이어_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("EAI2AiCQg3gkgNg/QgNhAAlg3QAjg1BAgNQBAgOBgAZQBiAagNAzQgLA1g2BMQg2BNhAANQgRADgQAAQgtAAgngagEA5HgTYQhBgEgsgxQgqgwAEhBQACgkAPgpQgnAGggABQgwABhfgXQhegYgrgmQgpgmgVgqQg0hmAthOQAthOBygFQAXgDAYACQAYACAYAEQA6AMA6AfIAUAMQBdA1A0BMQANATAKAWQAWAsAFAfQAjAbAoAvQA8BIgEBBQgEBBgxArQgsAng6AAIgLAAgEgztgX0Qg+gVgdg7Qgdg5AVg+QAJgcAUgfQgoAGgfABQgxAChegYQhfgXgqgmQgqgmgVgqQgzhnAthOQAshNBygGQAYgCAYACQAXABAYAFQA6AMA7AfIAUALQBcA2A0BLQANAUALAVQAWAtAGAfIAFAFQAnAkAoBVQAnBVgVA+QgVA9g5AdQgiARgjAAQgZAAgagIg");
	this.shape.setTransform(780.2757,390.3867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 레이어_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC6600").ss(6,0,1).p("EBLQgilQAAI4mSGRQmRGSo4AAQo4AAmSmSQiOiOhciiQiokqAAlvQAAo4GSmSQGSmSI4AAQI4AAGRGSQGSGSAAI4gEggYgm5QAAALgBALQAAAJAAAIQgNIfmEGDQmSGSo4AAQmSAAk/jJQiDhTh2h2QmRmRAAo4QAAo4GRmSQB2h2CDhTQE/jJGSAAQI4AAGSGSQAfAfAcAgQDXDvBQEnQAwCxAADEgEAgZAm6QAAI4mSGSQmRGSo4AAQo4AAmRmSQmSmSAAo4QAAj/BRjdQBjkQDejeQGRmRI4AAQI4AAGRGRQGSGSAAI4g");
	this.shape_1.setTransform(927.825,386.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543001").ss(30,0,1).p("Eh39AA5QKehfKxg4UAkngC+AoHAEUQKwBJLBBsQQ7irQlhNUAsggDSAqJAHD");
	this.shape_2.setTransform(767.7503,361.7808);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#543001").ss(22,0,1).p("EA0fgGYIawzNAizlVIWqcLQIZC0GxEbEhPhgGrMAyygXS");
	this.shape_3.setTransform(644.8153,395.0556);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(22,0,1).p("AgCACIAFgD");
	this.shape_4.setTransform(1152.225,231.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("ArQSSQiEhTh1h2QmSmRABo4QgBo3GSmSQB1h1CEhTQE/jJGRgBQI4AAGSGSQAfAfAcAgQDWDwBQEnQAxCwAADDIgBAXIAAAQQgNIfmEGDQmSGTo4AAQmRAAk/jKg");
	this.shape_5.setTransform(583.35,137.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.map22, new cjs.Rectangle(-15,-3,1565.2,778.4), null);


(lib.map = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("EAI2AiCQg3gkgNg/QgNhAAlg3QAjg1BAgNQBAgOBgAZQBiAagNAzQgLA1g2BMQg2BNhAANQgRADgQAAQgtAAgngagEA5HgTYQhBgEgsgxQgqgwAEhBQACgkAPgpQgnAGggABQgwABhfgXQhegYgrgmQgpgmgVgqQg0hmAthOQAthOBygFQAXgDAYACQAYACAYAEQA6AMA6AfIAUAMQBdA1A0BMQANATAKAWQAWAsAFAfQAjAbAoAvQA8BIgEBBQgEBBgxArQgsAng6AAIgLAAgEgztgX0Qg+gVgdg7Qgdg5AVg+QAJgcAUgfQgoAGgfABQgxAChegYQhfgXgqgmQgqgmgVgqQgzhnAthOQAshNBygGQAYgCAYACQAXABAYAFQA6AMA7AfIAUALQBcA2A0BLQANAUALAVQAWAtAGAfIAFAFQAnAkAoBVQAnBVgVA+QgVA9g5AdQgiARgjAAQgZAAgagIg");
	this.shape.setTransform(780.2757,390.3867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 레이어_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC6600").ss(6,0,1).p("EBLQgilQAAI4mSGRQmRGSo4AAQo4AAmSmSQiOiOhciiQiokqAAlvQAAo4GSmSQGSmSI4AAQI4AAGRGSQGSGSAAI4gEggYgm5QAAALgBALQAAAJAAAIQgNIfmEGDQmSGSo4AAQmSAAk/jJQiDhTh2h2QmRmRAAo4QAAo4GRmSQB2h2CDhTQE/jJGSAAQI4AAGSGSQAfAfAcAgQDXDvBQEnQAwCxAADEgEAgZAm6QAAI4mSGSQmRGSo4AAQo4AAmRmSQmSmSAAo4QAAj/BRjdQBjkQDejeQGRmRI4AAQI4AAGRGRQGSGSAAI4g");
	this.shape_1.setTransform(927.825,386.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543001").ss(30,0,1).p("Eh39AA5QKehfKxg4UAkngC+AoHAEUQKwBJLBBsQQ7irQlhNUAsggDSAqJAHD");
	this.shape_2.setTransform(767.7503,361.7808);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#543001").ss(22,0,1).p("EA0fgGYIawzNAizlVIWqcLQIZC0GxEbEhPhgGrMAyygXS");
	this.shape_3.setTransform(644.8153,395.0556);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(22,0,1).p("AgCACIAFgD");
	this.shape_4.setTransform(1152.225,231.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.map, new cjs.Rectangle(-15,-3,1565.2,778.4), null);


(lib.list2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_135();
	this.instance.setTransform(0,288.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_134();
	this.instance_1.setTransform(0,144.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_133();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.list2, new cjs.Rectangle(0,0,174.5,327.9), null);


(lib.ingr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_4
	this.instance = new lib.ingr1();
	this.instance.setTransform(21,39,0.0979,0.0979);

	this.instance_1 = new lib.ingr3();
	this.instance_1.setTransform(90.65,8.6,0.3155,0.3155,23.974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},2).wait(1));

	// 레이어_2
	this.instance_2 = new lib.CachedBmp_132();
	this.instance_2.setTransform(61.9,139.1,0.3945,0.3945);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,102,0.949)").s().p("AmUMMQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqQAAFrkAEAQkBEBlrAAQjeAAi2hgg");
	this.shape.setTransform(87.6,87.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ANsAAQAAFrkAEAQkBEBlrAAQjeAAi2hgQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqg");
	this.shape_1.setTransform(87.6,87.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AmUMMQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqQAAFrkAEAQkBEBlrAAQjeAAi2hgg");
	this.shape_2.setTransform(87.6,87.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,177.2,177.3);


(lib.grandmamama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_4
	this.instance = new lib.grand1();
	this.instance.setTransform(41,21,0.1158,0.1158);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// 레이어_2
	this.instance_1 = new lib.CachedBmp_131();
	this.instance_1.setTransform(55.9,137.05,0.3461,0.3461);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,102,0.949)").s().p("AmUMMQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqQAAFrkAEAQkBEBlrAAQjeAAi2hgg");
	this.shape.setTransform(87.6,87.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ANsAAQAAFrkAEAQkBEBlrAAQjeAAi2hgQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqg");
	this.shape_1.setTransform(87.6,87.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AmUMMQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqQAAFrkAEAQkBEBlrAAQjeAAi2hgg");
	this.shape_2.setTransform(87.6,87.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,177.2,177.3);


(lib.fo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_130();
	this.instance.setTransform(-12.9,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fo2, new cjs.Rectangle(-12.9,0,366,71), null);


(lib.fo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_129();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fo, new cjs.Rectangle(0,0,420,59.5), null);


(lib.finst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.st1();
	this.instance.setTransform(0,0,0.5834,0.5834);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5161,scaleY:0.5161,x:12,y:4},0).wait(1).to({scaleX:0.4681,scaleY:0.4681,x:21,y:7},0).wait(1).to({scaleX:0.5834,scaleY:0.5834,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.4,69.4);


(lib.cong2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.cong2();
	this.instance.setTransform(-30.35,34.9,1.1034,1.1034,-8.9441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:10.449,x:41.85,y:-34.15},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.1,487,492.3);


(lib.buttennnnnnn2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.buttennn1();
	this.instance.setTransform(128.55,4,0.5502,0.5502,0,0,180);

	this.instance_1 = new lib.buttennn3();
	this.instance_1.setTransform(127.25,5,0.5576,0.5576,0,0,180);

	this.instance_2 = new lib.buttennn2();
	this.instance_2.setTransform(128.25,0,0.5576,0.5576,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:127.25,y:5}},{t:this.instance,p:{x:128.55,y:4}}]}).to({state:[{t:this.instance_1,p:{x:127.25,y:5}},{t:this.instance,p:{x:128.55,y:4}}]},1).to({state:[{t:this.instance_1,p:{x:128.25,y:5}},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:128.25,y:3}},{t:this.instance,p:{x:129.55,y:2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,130.6,121.6);


(lib.buttennnnnnn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.buttennn1();
	this.instance.setTransform(-1,4,0.5502,0.5502);

	this.instance_1 = new lib.buttennn3();
	this.instance_1.setTransform(0,5,0.5576,0.5576);

	this.instance_2 = new lib.buttennn2();
	this.instance_2.setTransform(0,0,0.5576,0.5576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:0,y:5}},{t:this.instance,p:{x:-1,y:4}}]}).to({state:[{t:this.instance_1,p:{x:0,y:5}},{t:this.instance,p:{x:-1,y:4}}]},1).to({state:[{t:this.instance_1,p:{x:0,y:5}},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{x:1,y:3}},{t:this.instance,p:{x:0,y:2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,130.3,121.6);


(lib.but4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.butt();
	this.instance.setTransform(78.3,0,0.0996,0.0996,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.3,77.9);


(lib.but3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.butt();
	this.instance.setTransform(0,0,0.0996,0.0996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.3,77.9);


(lib.but2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.butt1();
	this.instance.setTransform(74.8,0,0.1013,0.1013,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.8,79.3);


(lib.but1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.butt1();
	this.instance.setTransform(0,0,0.1013,0.1013);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.8,79.3);


(lib.but_base_cu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("A25F0IAArnMAtzAAAIAALng");
	this.shape.setTransform(146.625,37.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293.3,74.3);


(lib.but_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AlSFSQiMiLAAjHQAAjFCMiNQCNiMDFAAQDHAACLCMQCNCNAADFQAADHiNCLQiLCNjHAAQjFAAiNiNg");
	this.shape.setTransform(47.9,47.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.8,95.8);


(lib.bookmakr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_128();
	this.instance.setTransform(62.25,19.4,0.5,0.5);

	this.instance_1 = new lib.bookmark2();
	this.instance_1.setTransform(0,84.45,0.3406,0.3406,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bookmakr, new cjs.Rectangle(0,0,243.9,84.5), null);


(lib.book = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_127();
	this.instance.setTransform(0,-23.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book, new cjs.Rectangle(0,-23.2,1532.5,849), null);


(lib.betweenn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_4
	this.instance = new lib.hole();
	this.instance.setTransform(2,31,0.2549,0.2549);

	this.instance_1 = new lib.hole1();
	this.instance_1.setTransform(2,32,0.2356,0.2501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// 레이어_2
	this.instance_2 = new lib.CachedBmp_126();
	this.instance_2.setTransform(59.6,73.05,0.3564,0.3564);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,102,0.949)").s().p("AmUMMQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqQAAFrkAEAQkBEBlrAAQjeAAi2hgg");
	this.shape.setTransform(87.6,87.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ANsAAQAAFrkAEAQkBEBlrAAQjeAAi2hgQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqg");
	this.shape_1.setTransform(87.6,87.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AmUMMQh0g9hjhkQkAkAAAlrQAAlqEAkAQBjhjB0g+QC2hgDeAAQFrAAEBEBQEAEAAAFqQAAFrkAEAQkBEBlrAAQjeAAi2hgg");
	this.shape_2.setTransform(87.6,87.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,177.2,177.3);


(lib.baseee = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AxlGeIAAs7MAjLAAAIAAM7g");
	this.shape.setTransform(112.575,41.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225.2,82.9);


(lib.arrow2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.arrow1();
	this.instance.setTransform(66.2,0,0.4138,0.4138,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,89.4);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.arrow1();
	this.instance.setTransform(0,0,0.4138,0.4138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,89.4);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.repaly();

	this.instance_1 = new lib.repaly();
	this.instance_1.setTransform(308,299,1,1,180);

	this.instance_2 = new lib.CachedBmp_146();
	this.instance_2.setTransform(101,297.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:0,y:0}}]}).to({state:[{t:this.instance_1,p:{rotation:180,x:308,y:299}},{t:this.instance,p:{rotation:0,x:0,y:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-141.5212,x:181.55,y:362.35}},{t:this.instance,p:{rotation:38.4788,x:126.5,y:-63.35}},{t:this.instance_2}]},1).to({state:[{t:this.instance,p:{rotation:0,x:0,y:0}}]},1).wait(1));

	// 레이어_2
	this.instance_3 = new lib.but_base("synched",0);
	this.instance_3.setTransform(154.1,134.1,2.713,2.6275,0,0,0,48,48);
	this.instance_3.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-63.3,427.1,425.7);


(lib.fibutten = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.fibutten1();
	this.instance.setTransform(0,0,0.1986,0.1986);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:42},0).wait(2).to({x:0},0).wait(1));

	// 레이어_2
	this.instance_1 = new lib.but_base_cu("synched",0);
	this.instance_1.setTransform(65.35,37.1,0.4478,1,0,0,0,146.6,37.1);
	this.instance_1.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,132.5,74.3);


(lib.clear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.clear1();
	this.instance.setTransform(0,0,0.8782,0.8782);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:3},0).wait(1));

	// 레이어_2
	this.instance_1 = new lib.but_base("synched",0);
	this.instance_1.setTransform(191.95,146.8,3.5887,2.7549,-33.9598,0,0,47.9,48.1);
	this.instance_1.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,377.6,313);


(lib.butt_base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.but_base("synched",0);
	this.instance.setTransform(47.9,47.9,1,1,0,0,0,47.9,47.9);
	this.instance.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.8,95.8);


(lib.anss4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.CachedBmp_121();
	this.instance.setTransform(23.9,-13.5,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_122();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_123();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_124();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_125();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_3
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(37.5,18,0.2567,0.4616,0,0,0,146.7,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-13.5,92.1,63);


(lib.anss3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.CachedBmp_116();
	this.instance.setTransform(14.45,-13.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_117();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_118();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_119();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_120();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_3
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(37.65,17.15,0.2567,0.4616,0,0,0,146.7,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.4,92,63);


(lib.anss2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(24.45,-13.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_112();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_113();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_114();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_115();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_3
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(37.5,18,0.2567,0.4616,0,0,0,146.7,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-13.4,92.1,63);


(lib.anss1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.CachedBmp_106();
	this.instance.setTransform(24.45,-13.45,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_107();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_108();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_109();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_110();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_3
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(37.5,18,0.2567,0.4616,0,0,0,146.7,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-13.4,92.1,63);


(lib.ans3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_102();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_104();
	this.instance_2.setTransform(48.8,-22.35,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_103();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_105();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.baseee("synched",0);
	this.instance_5.setTransform(80.9,18.45,0.7196,0.4451,0,0,0,112.4,41.5);
	this.instance_5.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.3,162,81.5);


(lib.ans2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_97();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_99();
	this.instance_2.setTransform(35.1,-37.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_98();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_100();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.baseee("synched",0);
	this.instance_5.setTransform(70.5,18.45,0.6267,0.4451,0,0,0,112.5,41.5);
	this.instance_5.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.9,141.1,109.5);


(lib.ans1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.CachedBmp_91();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_92();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_94();
	this.instance_2.setTransform(36.45,-37.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_93();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_95();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.baseee("synched",0);
	this.instance_5.setTransform(70.5,18.45,0.6267,0.4451,0,0,0,112.5,41.5);
	this.instance_5.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.9,141.1,110.5);


(lib.ann4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_3
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(20.35,-23.55,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_87();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_88();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_89();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_90();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(50.65,15.15,0.3727,0.4078,0,0,0,146.8,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-23.5,109.5,77.5);


(lib.ann3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_3
	this.instance = new lib.CachedBmp_81();
	this.instance.setTransform(90.7,-20,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_82();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_83();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_84();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_85();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(117.25,18.15,0.823,0.4886,0,0,0,146.7,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20,241.5,76.5);


(lib.ann2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_3
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(30.7,-16.6,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_77();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_78();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_79();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_80();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(52.6,16.15,0.3863,0.4347,0,0,0,146.7,37.1);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-16.6,113.3,65);


(lib.ann1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_3
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(36.35,-20.3,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// 레이어_1
	this.instance_1 = new lib.CachedBmp_72();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_73();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_74();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_75();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 레이어_2
	this.instance_5 = new lib.but_base_cu("synched",0);
	this.instance_5.setTransform(61.65,16.2,0.4204,0.3271,0,0,0,146.7,37.3);
	this.instance_5.alpha = 0.0586;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20.3,123.3,73);


(lib.home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.home2();
	this.instance.setTransform(0,0,0.1595,0.1595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// 레이어_2
	this.instance_1 = new lib.butt_base("synched",0);
	this.instance_1.setTransform(28.1,26.2,0.5267,0.545,0,0,0,48.1,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,52.2);


// stage content:
(lib.stamp_tour_f = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,14,15,16,17,18,19,20,21,22,23,329,330,331,332,333,334,335,336,337,338,646,647,648,649,651,653,655,657,659,660,1020,1021,1022,1023,1024,1092];
	this.streamSoundSymbolsList[23] = [{id:"Old_Vienna",startFrame:23,endFrame:329,loop:1,offset:0}];
	this.streamSoundSymbolsList[338] = [{id:"Bumper_Tag",startFrame:338,endFrame:646,loop:1,offset:0}];
	this.streamSoundSymbolsList[660] = [{id:"Serenity",startFrame:660,endFrame:1020,loop:1,offset:1235}];
	this.streamSoundSymbolsList[1024] = [{id:"_028_예YEAH",startFrame:1024,endFrame:1092,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		/* 이 프레임에서 중단
		이 코드를 삽입하는 프레임에서 타임라인이 중단/일시 정지됩니다.
		동영상 클립의 타임라인을 중단/일시 정지하는 데 사용할 수도 있습니다.
		*/
		
		this.stop();
		
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.ar1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_124.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_124()
		{
			this.gotoAndStop(1);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.fst.addEventListener("click", fl_ClickToGoToAndStopAtFrame_128.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_128()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_1 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.ar1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_125.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_125()
		{
			this.gotoAndStop(2);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.ar2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_126.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_126()
		{
			this.gotoAndStop(0);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.fst.addEventListener("click", fl_ClickToGoToAndStopAtFrame_129.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_129()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_2 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.ar2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_127.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_127()
		{
			this.gotoAndStop(1);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.fst.addEventListener("click", fl_ClickToGoToAndStopAtFrame_130.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_130()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.hm.addEventListener("click", fl_ClickToGoToAndStopAtFrame_120.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_120()
		{
			this.gotoAndStop(0);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.nex.addEventListener("click", fl_ClickToGoToAndStopAtFrame_131.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_131()
		{
			this.gotoAndStop(15);
		}
	}
	this.frame_14 = function() {
		/* 이 프레임에서 중단
		이 코드를 삽입하는 프레임에서 타임라인이 중단/일시 정지됩니다.
		동영상 클립의 타임라인을 중단/일시 정지하는 데 사용할 수도 있습니다.
		*/
		
		this.stop();
		
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.nex.addEventListener("click", fl_ClickToGoToAndStopAtFrame_46.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_46()
		{
			this.gotoAndStop(15);
		}
	}
	this.frame_15 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.graam.addEventListener("click", fl_ClickToGoToAndStopAtFrame_134.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_134()
		{
			this.gotoAndStop(16);
		}
	}
	this.frame_16 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_58.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_58()
		{
			this.gotoAndStop(18);
		}
		
		
		
		/* 동영상 클립 재생
		스테이지에서 지정한 동영상 클립을 재생합니다.
		
		지침:
		1. 현재 중단된 동영상 클립에 이 코드를 사용합니다.
		*/
		
		this.mus1.play(18);
	}
	this.frame_17 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_59.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_59()
		{
			this.gotoAndStop(18);
		}
	}
	this.frame_18 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_60.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_60()
		{
			this.gotoAndStop(19);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_69.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_69()
		{
			this.gotoAndStop(17);
		}
	}
	this.frame_19 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_61.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_61()
		{
			this.gotoAndStop(20);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_68.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_68()
		{
			this.gotoAndStop(18);
		}
	}
	this.frame_20 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_62.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_62()
		{
			this.gotoAndStop(21);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_67.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_67()
		{
			this.gotoAndStop(19);
		}
	}
	this.frame_21 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_63.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_63()
		{
			this.gotoAndStop(22);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_66.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_66()
		{
			this.gotoAndStop(20);
		}
	}
	this.frame_22 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_64.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_64()
		{
			this.gotoAndStop(23);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_65.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_65()
		{
			this.gotoAndStop(21);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 재생
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 해당 프레임에서 계속 재생됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		this.mus1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay(23);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_71.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_71()
		{
			this.gotoAndStop(21);
		}
		
		
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_76.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_76()
		{
			this.gotoAndStop(330);
		}
	}
	this.frame_23 = function() {
		var soundInstance = playSound("Old_Vienna",0);
		this.InsertIntoSoundStreamData(soundInstance,23,329,1);
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.musn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_121.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_121()
		{
			this.gotoAndStop(22);
		}
	}
	this.frame_329 = function() {
		/* 이 프레임에서 중단
		이 코드를 삽입하는 프레임에서 타임라인이 중단/일시 정지됩니다.
		동영상 클립의 타임라인을 중단/일시 정지하는 데 사용할 수도 있습니다.
		*/
		
		this.stop();
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_80.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_80()
		{
			this.gotoAndStop(330);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_81.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_81()
		{
			this.gotoAndStop(21);
		}
	}
	this.frame_330 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_103.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_103()
		{
			this.gotoAndStop(329);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.anss.addEventListener("click", fl_ClickToGoToAndStopAtFrame_135.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_135()
		{
			this.gotoAndStop(331);
		}
	}
	this.frame_331 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.bettt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_136.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_136()
		{
			this.gotoAndStop(332);
		}
	}
	this.frame_332 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_85.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_85()
		{
			this.gotoAndStop(333);
		}
	}
	this.frame_333 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_86.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_86()
		{
			this.gotoAndStop(334);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_95.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_95()
		{
			this.gotoAndStop(332);
		}
	}
	this.frame_334 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_87.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_87()
		{
			this.gotoAndStop(335);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_94.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_94()
		{
			this.gotoAndStop(335);
		}
	}
	this.frame_335 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_88.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_88()
		{
			this.gotoAndStop(336);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_93.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_93()
		{
			this.gotoAndStop(334);
		}
	}
	this.frame_336 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_89.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_89()
		{
			this.gotoAndStop(337);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_92.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_92()
		{
			this.gotoAndStop(335);
		}
	}
	this.frame_337 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_91.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_91()
		{
			this.gotoAndStop(336);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 재생
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 해당 프레임에서 계속 재생됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		this.mus2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(338);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_97.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_97()
		{
			this.gotoAndStop(647);
		}
	}
	this.frame_338 = function() {
		var soundInstance = playSound("Bumper_Tag",0);
		this.InsertIntoSoundStreamData(soundInstance,338,646,1);
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_96.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_96()
		{
			this.gotoAndStop(647);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_100.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_100()
		{
			this.gotoAndStop(336);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.musno.addEventListener("click", fl_ClickToGoToAndStopAtFrame_122.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_122()
		{
			this.gotoAndStop(337);
		}
	}
	this.frame_646 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_101.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_101()
		{
			this.gotoAndStop(647);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_102.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_102()
		{
			this.gotoAndStop(336);
		}
		
		
		/* 이 프레임에서 중단
		이 코드를 삽입하는 프레임에서 타임라인이 중단/일시 정지됩니다.
		동영상 클립의 타임라인을 중단/일시 정지하는 데 사용할 수도 있습니다.
		*/
		
		this.stop();
	}
	this.frame_647 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.but4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_104.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_104()
		{
			this.gotoAndStop(646);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.annn4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_137.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_137()
		{
			this.gotoAndStop(648);
		}
	}
	this.frame_648 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.ingrr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_139.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_139()
		{
			this.gotoAndStop(649);
		}
	}
	this.frame_649 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.memoo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_141.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_141()
		{
			this.gotoAndStop(650);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_142.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_142()
		{
			this.gotoAndStop(651);
		}
	}
	this.frame_651 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.memoo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_143.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_143()
		{
			this.gotoAndStop(652);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_144.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_144()
		{
			this.gotoAndStop(653);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_145.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_145()
		{
			this.gotoAndStop(649);
		}
	}
	this.frame_653 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.memoo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_146.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_146()
		{
			this.gotoAndStop(654);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_147.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_147()
		{
			this.gotoAndStop(655);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnnnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_148.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_148()
		{
			this.gotoAndStop(651);
		}
	}
	this.frame_655 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.memoo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_150.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_150()
		{
			this.gotoAndStop(656);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_151.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_151()
		{
			this.gotoAndStop(653);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_152.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_152()
		{
			this.gotoAndStop(657);
		}
	}
	this.frame_657 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_153.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_153()
		{
			this.gotoAndStop(655);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.memoo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_154.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_154()
		{
			this.gotoAndStop(658);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_155.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_155()
		{
			this.gotoAndStop(659);
		}
	}
	this.frame_659 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnnnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_156.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_156()
		{
			this.gotoAndStop(657);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 재생
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 해당 프레임에서 계속 재생됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		this.musicc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(660);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_164.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_164()
		{
			this.gotoAndStop(1021);
		}
	}
	this.frame_660 = function() {
		var soundInstance = playSound("Serenity",0,1235);
		this.InsertIntoSoundStreamData(soundInstance,660,1020,1,1235);
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.nmusicc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_158.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_158()
		{
			this.gotoAndStop(659);
		}
	}
	this.frame_1020 = function() {
		/* 이 프레임에서 중단
		이 코드를 삽입하는 프레임에서 타임라인이 중단/일시 정지됩니다.
		동영상 클립의 타임라인을 중단/일시 정지하는 데 사용할 수도 있습니다.
		*/
		
		this.stop();
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnnnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_159.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_159()
		{
			this.gotoAndStop(657);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_163.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_163()
		{
			this.gotoAndStop(1021);
		}
	}
	this.frame_1021 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.buttennnnnnnnnnnnnn2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_161.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_161()
		{
			this.gotoAndStop(659);
		}
		
		
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.ansss3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_162.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_162()
		{
			this.gotoAndStop(1022);
		}
	}
	this.frame_1022 = function() {
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.clebutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_167.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_167()
		{
			this.gotoAndStop(1023);
		}
	}
	this.frame_1023 = function() {
		/* 클릭하여 프레임으로 이동 및 재생
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 해당 프레임에서 계속 재생됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		this.fibutten.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(1024);
		}
	}
	this.frame_1024 = function() {
		var soundInstance = playSound("_028_예YEAH",0);
		this.InsertIntoSoundStreamData(soundInstance,1024,1092,1);
		/* 클릭하여 프레임으로 이동 및 중단
		지정한 심볼 인스턴스를 클릭하면 재생 헤드가 타임라인의 지정한 프레임으로 이동되고 동영상이 중단됩니다.
		기본 타임라인 또는 동영상 클립 타임라인에서 사용할 수 있습니다.
		
		지침:
		1. 아래 코드에서 숫자 5를 심볼 인스턴스를 클릭했을 때 재생 헤드를 이동하려는 프레임 번호로 바꿉니다.
		2. EaselJS의 프레임 번호는 1이 아니라 0에서 시작합니다.
		*/
		
		
		this.replay.addEventListener("click", fl_ClickToGoToAndStopAtFrame_170.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_170()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_1092 = function() {
		/* 이 프레임에서 중단
		이 코드를 삽입하는 프레임에서 타임라인이 중단/일시 정지됩니다.
		동영상 클립의 타임라인을 중단/일시 정지하는 데 사용할 수도 있습니다.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(11).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(306).call(this.frame_329).wait(1).call(this.frame_330).wait(1).call(this.frame_331).wait(1).call(this.frame_332).wait(1).call(this.frame_333).wait(1).call(this.frame_334).wait(1).call(this.frame_335).wait(1).call(this.frame_336).wait(1).call(this.frame_337).wait(1).call(this.frame_338).wait(308).call(this.frame_646).wait(1).call(this.frame_647).wait(1).call(this.frame_648).wait(1).call(this.frame_649).wait(2).call(this.frame_651).wait(2).call(this.frame_653).wait(2).call(this.frame_655).wait(2).call(this.frame_657).wait(2).call(this.frame_659).wait(1).call(this.frame_660).wait(360).call(this.frame_1020).wait(1).call(this.frame_1021).wait(1).call(this.frame_1022).wait(1).call(this.frame_1023).wait(1).call(this.frame_1024).wait(68).call(this.frame_1092).wait(1));

	// a
	this.instance = new lib.ans3();
	this.instance.setTransform(498.25,720.25);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ans3(), 3);

	this.anss = new lib.ans2();
	this.anss.name = "anss";
	this.anss.setTransform(498.25,620.6);
	new cjs.ButtonHelper(this.anss, 0, 1, 2, false, new lib.ans2(), 3);

	this.instance_1 = new lib.ans1();
	this.instance_1.setTransform(563.55,542.8,1,1,0,0,0,65.3,19.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.ans1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.anss},{t:this.instance}]},330).to({state:[]},1).wait(762));

	// q
	this.instance_2 = new lib.memory7th();
	this.instance_2.setTransform(1022,148,0.1923,0.1923);

	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(157.95,341.35,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(165.95,237.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},330).to({state:[]},1).wait(762));

	// mus
	this.mus1 = new lib.mus1_1();
	this.mus1.name = "mus1";
	this.mus1.setTransform(1467.4,56.65);
	new cjs.ButtonHelper(this.mus1, 0, 1, 2, false, new lib.mus1_1(), 3);

	this.musn = new lib.mus_n();
	this.musn.name = "musn";
	this.musn.setTransform(1437.15,81.65,1,1,0,0,0,24.7,24.4);
	new cjs.ButtonHelper(this.musn, 0, 1, 2, false, new lib.mus_n(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mus1}]},22).to({state:[{t:this.mus1},{t:this.musn}]},1).to({state:[{t:this.mus1},{t:this.musn}]},306).to({state:[]},1).wait(763));

	// 레이어_2
	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(1035.95,389.05,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_3();
	this.instance_6.setTransform(1035.95,427.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_6();
	this.instance_7.setTransform(1035.95,389.05,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_5();
	this.instance_8.setTransform(1035.95,427.8,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_8();
	this.instance_9.setTransform(1035.95,389.05,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_7();
	this.instance_10.setTransform(1035.95,427.8,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_10();
	this.instance_11.setTransform(1035.95,389.05,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_9();
	this.instance_12.setTransform(1035.95,427.8,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_12();
	this.instance_13.setTransform(1035.95,389.05,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_11();
	this.instance_14.setTransform(1035.95,427.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},16).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[]},1).to({state:[]},971).wait(100));

	// fimg
	this.instance_15 = new lib.YSH_07642();
	this.instance_15.setTransform(177,187,0.0916,0.0916);

	this.instance_16 = new lib.memory7th();
	this.instance_16.setTransform(264,195,0.1624,0.1624);

	this.instance_17 = new lib.YSH_07683();
	this.instance_17.setTransform(248,193,0.0696,0.0696);

	this.instance_18 = new lib.memory8th();
	this.instance_18.setTransform(183,267,0.207,0.207);

	this.instance_19 = new lib.YSH_0837();
	this.instance_19.setTransform(120,264,0.0814,0.0814);

	this.instance_20 = new lib.CachedBmp_16();
	this.instance_20.setTransform(908.7,460.2,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_15();
	this.instance_21.setTransform(127.5,251,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_14();
	this.instance_22.setTransform(142.1,145.95,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_13();
	this.instance_23.setTransform(123.35,202.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_20();
	this.instance_24.setTransform(908.7,460.2,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_19();
	this.instance_25.setTransform(127.5,251,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_18();
	this.instance_26.setTransform(142.1,145.95,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_17();
	this.instance_27.setTransform(123.35,202.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},16).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]},1).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]},307).to({state:[]},1).wait(763));

	// frbut
	this.but2 = new lib.but2();
	this.but2.name = "but2";
	this.but2.setTransform(128.45,799.7,1,1,0,0,0,45.3,40.7);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.but2(), 3);

	this.but1 = new lib.but1();
	this.but1.name = "but1";
	this.but1.setTransform(1487.4,798.6,1,1,0,0,0,37.4,39.6);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.but1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.but1},{t:this.but2}]},16).to({state:[{t:this.but1},{t:this.but2}]},2).to({state:[{t:this.but1},{t:this.but2}]},1).to({state:[{t:this.but1},{t:this.but2}]},1).to({state:[{t:this.but1},{t:this.but2}]},1).to({state:[{t:this.but1},{t:this.but2}]},1).to({state:[{t:this.but1},{t:this.but2}]},307).to({state:[{t:this.but2}]},1).to({state:[]},1).wait(762));

	// a2
	this.annn4 = new lib.ann4();
	this.annn4.name = "annn4";
	this.annn4.setTransform(574.35,693.9,1,1,0,0,0,52.6,15.9);
	new cjs.ButtonHelper(this.annn4, 0, 1, 2, false, new lib.ann4(), 3);

	this.instance_28 = new lib.ann3();
	this.instance_28.setTransform(268.05,689.4,1,1,0,0,0,118.9,15.9);
	new cjs.ButtonHelper(this.instance_28, 0, 1, 2, false, new lib.ann3(), 3);

	this.instance_29 = new lib.ann2();
	this.instance_29.setTransform(574.35,586,1,1,0,0,0,52.6,15.9);
	new cjs.ButtonHelper(this.instance_29, 0, 1, 2, false, new lib.ann2(), 3);

	this.instance_30 = new lib.ann1();
	this.instance_30.setTransform(198.25,593.85,1,1,0,0,0,52.6,15.9);
	new cjs.ButtonHelper(this.instance_30, 0, 1, 2, false, new lib.ann1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.annn4}]},647).to({state:[]},1).wait(445));

	// q2
	this.instance_31 = new lib.CachedBmp_22();
	this.instance_31.setTransform(145.65,194.1,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_21();
	this.instance_32.setTransform(145.65,309.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32},{t:this.instance_31}]},647).to({state:[]},1).wait(445));

	// butttt
	this.but4 = new lib.but4();
	this.but4.name = "but4";
	this.but4.setTransform(80.75,761);
	new cjs.ButtonHelper(this.but4, 0, 1, 2, false, new lib.but4(), 3);

	this.but3 = new lib.but3();
	this.but3.name = "but3";
	this.but3.setTransform(1498.1,800,1,1,0,0,0,39.1,39);
	new cjs.ButtonHelper(this.but3, 0, 1, 2, false, new lib.but3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.but3},{t:this.but4}]},332).to({state:[{t:this.but3},{t:this.but4}]},1).to({state:[{t:this.but3},{t:this.but4}]},1).to({state:[{t:this.but3},{t:this.but4}]},1).to({state:[{t:this.but3},{t:this.but4}]},1).to({state:[{t:this.but3},{t:this.but4}]},1).to({state:[{t:this.but3},{t:this.but4}]},1).to({state:[{t:this.but3},{t:this.but4}]},308).to({state:[{t:this.but4}]},1).to({state:[]},1).wait(445));

	// scimg
	this.instance_33 = new lib.YSH_96821();
	this.instance_33.setTransform(159,219,0.3568,0.3568);

	this.instance_34 = new lib.YSH_3598();
	this.instance_34.setTransform(136,218,0.3745,0.3745);

	this.instance_35 = new lib.parking();
	this.instance_35.setTransform(137,236,0.1629,0.1629);

	this.instance_36 = new lib.YSH_2800();
	this.instance_36.setTransform(144,223,0.4994,0.4994);

	this.instance_37 = new lib.road();
	this.instance_37.setTransform(190,227,0.2728,0.2729);

	this.instance_38 = new lib.CachedBmp_26();
	this.instance_38.setTransform(886.25,260.8,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_25();
	this.instance_39.setTransform(153.3,338.85,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_24();
	this.instance_40.setTransform(159.05,183.65,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_23();
	this.instance_41.setTransform(137.75,241.1,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_30();
	this.instance_42.setTransform(886.25,260.8,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_29();
	this.instance_43.setTransform(153.3,338.85,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_28();
	this.instance_44.setTransform(159.05,183.65,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_27();
	this.instance_45.setTransform(137.75,241.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},332).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36,p:{scaleX:0.4994,x:144,y:223}}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]},1).to({state:[{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42}]},309).to({state:[{t:this.instance_36,p:{scaleX:0.4996,x:884,y:257}}]},1).to({state:[]},1).wait(445));

	// writ
	this.instance_46 = new lib.CachedBmp_32();
	this.instance_46.setTransform(1078.8,438.8,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_31();
	this.instance_47.setTransform(1078.8,393.6,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_34();
	this.instance_48.setTransform(1078.8,438.8,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_33();
	this.instance_49.setTransform(1078.8,393.6,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_36();
	this.instance_50.setTransform(1078.8,438.8,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_35();
	this.instance_51.setTransform(1078.8,393.6,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_38();
	this.instance_52.setTransform(1078.8,438.8,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_37();
	this.instance_53.setTransform(1078.8,393.6,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_40();
	this.instance_54.setTransform(1078.8,438.8,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_39();
	this.instance_55.setTransform(1078.8,393.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_47},{t:this.instance_46}]},332).to({state:[{t:this.instance_49},{t:this.instance_48}]},1).to({state:[{t:this.instance_51},{t:this.instance_50}]},1).to({state:[{t:this.instance_53},{t:this.instance_52}]},1).to({state:[{t:this.instance_55},{t:this.instance_54}]},1).to({state:[]},1).wait(756));

	// mus2
	this.mus2 = new lib.mus1_1();
	this.mus2.name = "mus2";
	this.mus2.setTransform(1459,51.45);
	new cjs.ButtonHelper(this.mus2, 0, 1, 2, false, new lib.mus1_1(), 3);

	this.musno = new lib.mus_n();
	this.musno.name = "musno";
	this.musno.setTransform(1402.6,53.8);
	new cjs.ButtonHelper(this.musno, 0, 1, 2, false, new lib.mus_n(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mus2}]},337).to({state:[{t:this.mus2},{t:this.musno}]},1).to({state:[{t:this.mus2},{t:this.musno}]},308).to({state:[]},1).wait(446));

	// a3
	this.instance_56 = new lib.anss4();
	this.instance_56.setTransform(661.4,671.9,1,1,0,0,0,46,17.9);
	new cjs.ButtonHelper(this.instance_56, 0, 1, 2, false, new lib.anss4(), 3);

	this.ansss3 = new lib.anss3();
	this.ansss3.name = "ansss3";
	this.ansss3.setTransform(497.55,671.9,1,1,0,0,0,46,17.9);
	new cjs.ButtonHelper(this.ansss3, 0, 1, 2, false, new lib.anss3(), 3);

	this.instance_57 = new lib.anss2();
	this.instance_57.setTransform(338.75,671.9,1,1,0,0,0,46,17.9);
	new cjs.ButtonHelper(this.instance_57, 0, 1, 2, false, new lib.anss2(), 3);

	this.instance_58 = new lib.anss1();
	this.instance_58.setTransform(178.15,671.9,1,1,0,0,0,46,17.9);
	new cjs.ButtonHelper(this.instance_58, 0, 1, 2, false, new lib.anss1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.ansss3},{t:this.instance_56}]},1021).to({state:[]},1).wait(71));

	// q3
	this.instance_59 = new lib.CachedBmp_42();
	this.instance_59.setTransform(175.6,280.2,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_41();
	this.instance_60.setTransform(177.3,211.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_60},{t:this.instance_59}]},1021).to({state:[]},1).wait(71));

	// rdimg
	this.memoo = new lib.memoo();
	this.memoo.name = "memoo";
	this.memoo.setTransform(992.1,302.55);
	new cjs.ButtonHelper(this.memoo, 0, 1, 2, false, new lib.memoo(), 3);

	this.instance_61 = new lib.YSH_31051();
	this.instance_61.setTransform(153,249,0.125,0.125);

	this.instance_62 = new lib.YSH_32162();
	this.instance_62.setTransform(247,204,0.1522,0.1522);

	this.instance_63 = new lib.hp();
	this.instance_63.setTransform(151,276,0.1331,0.1331);

	this.instance_64 = new lib.shp();
	this.instance_64.setTransform(158,286,0.1062,0.1062);

	this.instance_65 = new lib.YSH_32611();
	this.instance_65.setTransform(127,283,0.1409,0.1409);

	this.instance_66 = new lib.CachedBmp_47();
	this.instance_66.setTransform(1368.8,715.25,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_46();
	this.instance_67.setTransform(892.85,440.35,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_45();
	this.instance_68.setTransform(96.25,294.35,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_44();
	this.instance_69.setTransform(154.35,155.7,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_43();
	this.instance_70.setTransform(139.15,209.2,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_52();
	this.instance_71.setTransform(1368.8,715.25,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_51();
	this.instance_72.setTransform(892.85,440.35,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_50();
	this.instance_73.setTransform(96.25,294.35,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_49();
	this.instance_74.setTransform(154.35,155.7,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_48();
	this.instance_75.setTransform(139.15,209.2,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_53();
	this.instance_76.setTransform(224.1,421.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_61,p:{x:153,y:249}},{t:this.memoo}]},649).to({state:[{t:this.instance_61,p:{x:153,y:249}}]},1).to({state:[{t:this.instance_62},{t:this.memoo}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63},{t:this.memoo}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64},{t:this.memoo}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65},{t:this.memoo}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66}]},1).to({state:[{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71}]},361).to({state:[{t:this.instance_61,p:{x:914,y:238}},{t:this.instance_76}]},1).to({state:[]},1).wait(71));

	// wri
	this.instance_77 = new lib.CachedBmp_54();
	this.instance_77.setTransform(1112.15,399.95,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_55();
	this.instance_78.setTransform(1112.15,399.95,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_56();
	this.instance_79.setTransform(1112.15,399.95,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_57();
	this.instance_80.setTransform(1112.15,399.95,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_58();
	this.instance_81.setTransform(1112.15,399.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_77}]},650).to({state:[]},1).to({state:[{t:this.instance_78}]},1).to({state:[]},1).to({state:[{t:this.instance_79}]},1).to({state:[]},1).to({state:[{t:this.instance_80}]},1).to({state:[]},1).to({state:[{t:this.instance_81}]},1).to({state:[]},1).to({state:[]},2).wait(432));

	// musicc
	this.musicc = new lib.mus1_1();
	this.musicc.name = "musicc";
	this.musicc.setTransform(1473.55,57.7);
	new cjs.ButtonHelper(this.musicc, 0, 1, 2, false, new lib.mus1_1(), 3);

	this.nmusicc = new lib.mus_n();
	this.nmusicc.name = "nmusicc";
	this.nmusicc.setTransform(1410.85,59.45);
	new cjs.ButtonHelper(this.nmusicc, 0, 1, 2, false, new lib.mus_n(), 3);

	this.instance_82 = new lib.mus_n();
	this.instance_82.setTransform(1410.85,59.45);
	new cjs.ButtonHelper(this.instance_82, 0, 1, 2, false, new lib.mus_n(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.musicc}]},659).to({state:[{t:this.musicc},{t:this.nmusicc}]},1).to({state:[{t:this.musicc},{t:this.instance_82}]},360).to({state:[]},1).wait(72));

	// butttttt
	this.buttennnn2 = new lib.buttennnnnnn2();
	this.buttennnn2.name = "buttennnn2";
	this.buttennnn2.setTransform(58.2,766.15,0.5378,0.5377);
	new cjs.ButtonHelper(this.buttennnn2, 0, 1, 2, false, new lib.buttennnnnnn2(), 3);

	this.buttennnn1 = new lib.buttennnnnnn();
	this.buttennnn1.name = "buttennnn1";
	this.buttennnn1.setTransform(1503.1,798.75,0.5392,0.5392,0,0,0,64.1,60.8);
	new cjs.ButtonHelper(this.buttennnn1, 0, 1, 2, false, new lib.buttennnnnnn(), 3);

	this.buttennnnnn2 = new lib.buttennnnnnn2();
	this.buttennnnnn2.name = "buttennnnnn2";
	this.buttennnnnn2.setTransform(58.2,766.15,0.5378,0.5377);
	new cjs.ButtonHelper(this.buttennnnnn2, 0, 1, 2, false, new lib.buttennnnnnn2(), 3);

	this.buttennnnnn1 = new lib.buttennnnnnn();
	this.buttennnnnn1.name = "buttennnnnn1";
	this.buttennnnnn1.setTransform(1503.1,798.75,0.5392,0.5392,0,0,0,64.1,60.8);
	new cjs.ButtonHelper(this.buttennnnnn1, 0, 1, 2, false, new lib.buttennnnnnn(), 3);

	this.buttennnnnnnnnnnnnn2 = new lib.buttennnnnnn2();
	this.buttennnnnnnnnnnnnn2.name = "buttennnnnnnnnnnnnn2";
	this.buttennnnnnnnnnnnnn2.setTransform(58.2,766.15,0.5378,0.5377);
	new cjs.ButtonHelper(this.buttennnnnnnnnnnnnn2, 0, 1, 2, false, new lib.buttennnnnnn2(), 3);

	this.buttennnnnnnnn1 = new lib.buttennnnnnn();
	this.buttennnnnnnnn1.name = "buttennnnnnnnn1";
	this.buttennnnnnnnn1.setTransform(1503.1,798.75,0.5392,0.5392,0,0,0,64.1,60.8);
	new cjs.ButtonHelper(this.buttennnnnnnnn1, 0, 1, 2, false, new lib.buttennnnnnn(), 3);

	this.buttennnnnnnnnnnnn2 = new lib.buttennnnnnn2();
	this.buttennnnnnnnnnnnn2.name = "buttennnnnnnnnnnnn2";
	this.buttennnnnnnnnnnnn2.setTransform(58.2,766.15,0.5378,0.5377);
	new cjs.ButtonHelper(this.buttennnnnnnnnnnnn2, 0, 1, 2, false, new lib.buttennnnnnn2(), 3);

	this.buttennnnnnnnnn1 = new lib.buttennnnnnn();
	this.buttennnnnnnnnn1.name = "buttennnnnnnnnn1";
	this.buttennnnnnnnnn1.setTransform(1503.1,798.75,0.5392,0.5392,0,0,0,64.1,60.8);
	new cjs.ButtonHelper(this.buttennnnnnnnnn1, 0, 1, 2, false, new lib.buttennnnnnn(), 3);

	this.buttennnnnnnnnnn2 = new lib.buttennnnnnn2();
	this.buttennnnnnnnnnn2.name = "buttennnnnnnnnnn2";
	this.buttennnnnnnnnnn2.setTransform(58.2,766.15,0.5378,0.5377);
	new cjs.ButtonHelper(this.buttennnnnnnnnnn2, 0, 1, 2, false, new lib.buttennnnnnn2(), 3);

	this.buttennnnnnnn1 = new lib.buttennnnnnn();
	this.buttennnnnnnn1.name = "buttennnnnnnn1";
	this.buttennnnnnnn1.setTransform(1503.1,798.75,0.5392,0.5392,0,0,0,64.1,60.8);
	new cjs.ButtonHelper(this.buttennnnnnnn1, 0, 1, 2, false, new lib.buttennnnnnn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buttennnn1},{t:this.buttennnn2}]},649).to({state:[{t:this.buttennnnnn1},{t:this.buttennnnnn2}]},2).to({state:[{t:this.buttennnnnnnnn1},{t:this.buttennnnnnnnnnnnnn2}]},2).to({state:[{t:this.buttennnnnnnnnn1},{t:this.buttennnnnnnnnnnnn2}]},2).to({state:[{t:this.buttennnnnnnn1,p:{x:1503.1,y:798.75}},{t:this.buttennnnnnnnnnn2}]},2).to({state:[{t:this.buttennnnnnnnnnnnnn2},{t:this.buttennnnnnnn1,p:{x:1496.35,y:798.95}}]},2).to({state:[{t:this.buttennnnnnnnnnnnnn2},{t:this.buttennnnnnnn1,p:{x:1496.35,y:798.95}}]},361).to({state:[{t:this.buttennnnnnnnnnnnnn2}]},1).to({state:[]},1).wait(71));

	// ingr
	this.ingrr = new lib.ingr();
	this.ingrr.name = "ingrr";
	this.ingrr.setTransform(1213.7,89.75,1.2676,1.2676,9.188);
	this.ingrr._off = true;
	new cjs.ButtonHelper(this.ingrr, 0, 1, 2, false, new lib.ingr(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ingrr).wait(648).to({_off:false},0).to({_off:true},1).wait(444));

	// hand
	this.cong = new lib.cong2_1();
	this.cong.name = "cong";
	this.cong.setTransform(389.5,500.8,1,1,0,0,0,208.5,211.8);
	this.cong._off = true;
	new cjs.ButtonHelper(this.cong, 0, 1, 2, false, new lib.cong2_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cong).wait(1024).to({_off:false},0).wait(69));

	// firefl
	this.instance_83 = new lib.cong3();
	this.instance_83.setTransform(-25,651);

	this.instance_84 = new lib.cong1();
	this.instance_84.setTransform(43,89,0.8363,0.958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_84},{t:this.instance_83}]},1024).to({state:[{t:this.instance_84},{t:this.instance_83}]},68).wait(1));

	// finallll
	this.instance_85 = new lib.CachedBmp_59();
	this.instance_85.setTransform(224.8,200.8,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_60();
	this.instance_86.setTransform(224.8,200.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_85}]},1024).to({state:[{t:this.instance_86}]},68).wait(1));

	// finbutt
	this.fibutten = new lib.fibutten();
	this.fibutten.name = "fibutten";
	this.fibutten.setTransform(1436.1,790.4,1,1,0,0,0,45.1,36.4);
	this.fibutten._off = true;
	new cjs.ButtonHelper(this.fibutten, 0, 1, 2, false, new lib.fibutten(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fibutten).wait(1023).to({_off:false},0).to({_off:true},1).wait(69));

	// cl
	this.clebutt = new lib.clear();
	this.clebutt.name = "clebutt";
	this.clebutt.setTransform(308.8,679,1,1,0,0,0,188.8,155);
	new cjs.ButtonHelper(this.clebutt, 0, 1, 2, false, new lib.clear(), 3);

	this.instance_87 = new lib.clear2();
	this.instance_87.setTransform(145,416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.clebutt}]},1022).to({state:[{t:this.clebutt},{t:this.instance_87}]},1).to({state:[]},1).wait(69));

	// map
	this.graam = new lib.grandmamama();
	this.graam.name = "graam";
	this.graam.setTransform(613.6,183.35,1.4445,1.4445,0,0,0,84,84);
	new cjs.ButtonHelper(this.graam, 0, 1, 2, false, new lib.grandmamama(), 3);

	this.instance_88 = new lib.map();
	this.instance_88.setTransform(801.45,435.7,1,1,0,0,0,767.6,386.2);

	this.bettt = new lib.betweenn();
	this.bettt.name = "bettt";
	this.bettt.setTransform(1028.5,688.75,1.4029,1.4029,0,0,0,87.7,87.9);
	new cjs.ButtonHelper(this.bettt, 0, 1, 2, false, new lib.betweenn(), 3);

	this.instance_89 = new lib.map22();
	this.instance_89.setTransform(798.7,436.1,1,1,0,0,0,767.6,386.2);

	this.instance_90 = new lib.map33();
	this.instance_90.setTransform(801.45,435.7,1,1,0,0,0,767.6,386.2);

	this.instance_91 = new lib.map44();
	this.instance_91.setTransform(801.45,435.7,1,1,0,0,0,767.6,386.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_88},{t:this.graam}]},15).to({state:[]},1).to({state:[{t:this.instance_89},{t:this.bettt}]},315).to({state:[]},1).to({state:[{t:this.instance_90}]},316).to({state:[]},1).to({state:[{t:this.instance_91}]},373).to({state:[{t:this.instance_91}]},1).to({state:[]},1).wait(69));

	// n1
	this.nex = new lib.ne();
	this.nex.name = "nex";
	this.nex.setTransform(1335.45,729.25,1.2046,1.2046);
	this.nex._off = true;
	new cjs.ButtonHelper(this.nex, 0, 1, 2, false, new lib.ne(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nex).wait(3).to({_off:false},0).wait(11).to({_off:true},1).wait(1078));

	// menu2
	this.instance_92 = new lib.CachedBmp_63();
	this.instance_92.setTransform(1177.4,651.7,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_62();
	this.instance_93.setTransform(1178.95,508.4,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_61();
	this.instance_94.setTransform(1177.4,365.9,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_66();
	this.instance_95.setTransform(1177.4,651.7,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_65();
	this.instance_96.setTransform(1178.95,508.4,0.5,0.5);

	this.instance_97 = new lib.CachedBmp_64();
	this.instance_97.setTransform(1177.4,365.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_94},{t:this.instance_93},{t:this.instance_92}]},3).to({state:[{t:this.instance_97},{t:this.instance_96},{t:this.instance_95}]},11).to({state:[]},1).to({state:[]},979).wait(99));

	// menu
	this.instance_98 = new lib.list2();
	this.instance_98.setTransform(1109.65,489.8,1,1,0,0,0,104.4,167.2);

	this.instance_99 = new lib.menual2();
	this.instance_99.setTransform(463,521.1,1,1,0,0,0,258.7,198.5);

	this.instance_100 = new lib.menual();
	this.instance_100.setTransform(422,174.3,1,1,0,0,0,126,43.6);

	this.instance_101 = new lib.CachedBmp_67();
	this.instance_101.setTransform(1152.4,148.35,0.5,0.5);

	this.instance_102 = new lib.CachedBmp_68();
	this.instance_102.setTransform(1152.4,148.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98}]},3).to({state:[{t:this.instance_102},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98}]},11).to({state:[]},1).wait(1078));

	// bookmark
	this.instance_103 = new lib.bookmakr();
	this.instance_103.setTransform(136,97.2,1,1,0,0,0,122,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(2).to({_off:true},1).wait(1090));

	// ex
	this.instance_104 = new lib.memory8th();
	this.instance_104.setTransform(154,241,0.2083,0.2083);

	this.instance_105 = new lib.YSH_96821();
	this.instance_105.setTransform(158,255,0.3122,0.3122);

	this.instance_106 = new lib.YSH_32611();
	this.instance_106.setTransform(175,277,0.1113,0.1113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_104}]}).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[]},1).wait(1090));

	// fram
	this.instance_107 = new lib.borderg5e3090fe8_1280();
	this.instance_107.setTransform(138,222,0.4164,0.5668);

	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(1).to({scaleX:0.4141,scaleY:0.5414,y:235},0).wait(1).to({scaleX:0.3867,scaleY:0.4667,x:155,y:259},0).to({_off:true},1).wait(1090));

	// fo
	this.instance_108 = new lib.fo2();
	this.instance_108.setTransform(1196.95,284.15,1,1,0,0,0,170.1,50.6);

	this.instance_109 = new lib.fo();
	this.instance_109.setTransform(1197,242.75,1,1,0,0,0,210,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_109},{t:this.instance_108}]}).to({state:[{t:this.instance_109},{t:this.instance_108}]},2).to({state:[]},1).to({state:[]},1).wait(1089));

	// start
	this.fst = new lib.finst();
	this.fst.name = "fst";
	this.fst.setTransform(1196.2,711.7,1,1,0,0,0,106.2,34.7);
	new cjs.ButtonHelper(this.fst, 0, 1, 2, false, new lib.finst(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fst).wait(2).to({_off:true},1).wait(1090));

	// bu
	this.ar2 = new lib.arrow2();
	this.ar2.name = "ar2";
	this.ar2.setTransform(300.55,721.4,0.5155,0.5154,0,0,0,33.1,44.6);
	new cjs.ButtonHelper(this.ar2, 0, 1, 2, false, new lib.arrow2(), 3);

	this.ar1 = new lib.arrow();
	this.ar1.name = "ar1";
	this.ar1.setTransform(462.1,700.3,0.5162,0.5162);
	new cjs.ButtonHelper(this.ar1, 0, 1, 2, false, new lib.arrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar1},{t:this.ar2}]}).to({state:[{t:this.ar1},{t:this.ar2}]},1).to({state:[{t:this.ar1},{t:this.ar2}]},1).to({state:[]},1).wait(1090));

	// finwrit
	this.instance_110 = new lib.CachedBmp_69();
	this.instance_110.setTransform(920.9,299.5,0.5,0.5);

	this.instance_111 = new lib.CachedBmp_70();
	this.instance_111.setTransform(920.9,299.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_110}]},1024).to({state:[{t:this.instance_111}]},68).wait(1));

	// home
	this.hm = new lib.home();
	this.hm.name = "hm";
	this.hm.setTransform(69.6,66.8,1,1,0,0,0,26.6,23.8);
	new cjs.ButtonHelper(this.hm, 0, 1, 2, false, new lib.home(), 3);

	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(1427.4,736.1,0.3288,0.3288,0,0,0,154.1,67);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.replay(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hm}]},3).to({state:[{t:this.hm}]},1020).to({state:[{t:this.replay}]},1).to({state:[{t:this.replay}]},68).wait(1));

	// backg
	this.instance_112 = new lib.book();
	this.instance_112.setTransform(800.05,450.15,1,1,0,0,0,766.2,412.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_112).wait(1093));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(775,464.1,809,460.9);
// library properties:
lib.properties = {
	id: '67CBF35BAF69774291CCE955D1EEBC26',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_127.png", id:"CachedBmp_127"},
		{src:"images/hp.jpg", id:"hp"},
		{src:"images/memory7th.jpg", id:"memory7th"},
		{src:"images/memory8th.jpg", id:"memory8th"},
		{src:"images/parking.jpg", id:"parking"},
		{src:"images/shp.jpg", id:"shp"},
		{src:"images/YSH_07642.jpg", id:"YSH_07642"},
		{src:"images/YSH_07683.jpg", id:"YSH_07683"},
		{src:"images/YSH_0837.jpg", id:"YSH_0837"},
		{src:"images/YSH_31051.jpg", id:"YSH_31051"},
		{src:"images/YSH_32162.jpg", id:"YSH_32162"},
		{src:"images/YSH_32611.jpg", id:"YSH_32611"},
		{src:"images/stamp_tour_f_atlas_1.png", id:"stamp_tour_f_atlas_1"},
		{src:"images/stamp_tour_f_atlas_2.png", id:"stamp_tour_f_atlas_2"},
		{src:"images/stamp_tour_f_atlas_3.png", id:"stamp_tour_f_atlas_3"},
		{src:"images/stamp_tour_f_atlas_4.png", id:"stamp_tour_f_atlas_4"},
		{src:"images/stamp_tour_f_atlas_5.png", id:"stamp_tour_f_atlas_5"},
		{src:"images/stamp_tour_f_atlas_6.png", id:"stamp_tour_f_atlas_6"},
		{src:"images/stamp_tour_f_atlas_7.png", id:"stamp_tour_f_atlas_7"},
		{src:"images/stamp_tour_f_atlas_8.png", id:"stamp_tour_f_atlas_8"},
		{src:"images/stamp_tour_f_atlas_9.png", id:"stamp_tour_f_atlas_9"},
		{src:"images/stamp_tour_f_atlas_10.png", id:"stamp_tour_f_atlas_10"},
		{src:"images/stamp_tour_f_atlas_11.png", id:"stamp_tour_f_atlas_11"},
		{src:"sounds/_028_예YEAH.mp3", id:"_028_예YEAH"},
		{src:"sounds/_038_뿅.mp3", id:"_038_뿅"},
		{src:"sounds/Bumper_Tag.mp3", id:"Bumper_Tag"},
		{src:"sounds/Old_Vienna.mp3", id:"Old_Vienna"},
		{src:"sounds/Serenity.mp3", id:"Serenity"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['67CBF35BAF69774291CCE955D1EEBC26'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;