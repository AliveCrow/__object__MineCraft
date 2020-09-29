
const string =
	`
	

.head-top {
    width: 80px;
    background-position: -80px 0;
    transform-origin: top center;
    transform: rotateX(90deg)
}
.head-front {
    width: 80px;
    background-position: -80px -80px;
    transform: translateZ(80px);
}
.head-left {
    width: 80px;
    background-position: 0 -80px;
    transform-origin: bottom left;
    transform: rotateY(-90deg)
}
.head-right {
    width: 80px;
    background-position: -160px -80px;
    transform-origin: bottom right;
    transform: rotateY(90deg)
}
.head-back {
    width: 80px;
    background-position: -240px -80px;
}
.head-bottom {
    width: 80px;
    background-position: -160px 0;
    transform-origin: bottom center;
    transform: rotateX(-90deg)
}

.body-top {
    height: 40px !important;
    width: 80px;
    background-position: -200px -160px;
    transform-origin: top center;
    transform: rotateX(90deg);
}
.body-front {
    width: 80px;
    background-position: -200px -200px;
    transform: translateZ(40px);
}
.body-left {
    width: 40px !important;
    background-position: -160px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(-80px);
}
.body-right {
    width: 40px !important;
    background-position: -280px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg);
}
.body-back {
    width: 80px;
    background-position: -320px -200px;
}
.body-bottom {
    height: 40px !important;
    width: 80px;
    background-position: -280px -160px;
    transform-origin: top center;
    transform: rotateX(90deg) translateZ(-120px);
}

.leftArm-top {
    height: 40px !important;
    width: 40px;
    background-position: -440px -160px;
    transform-origin: top center;
    transform: rotateX(90deg);
}
.leftArm-front {
    width: 40px;
    background-position: -440px -200px;
    transform: translateZ(40px);
}
.leftArm-left {
    width: 40px;
    background-position: -400px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(0px);
}
.leftArm-right {
    width: 40px;
    background-position: -480px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(-40px);
}
.leftArm-back {
    width: 40px;
    background-position: -520px -200px;
}
.leftArm-bottom {
    width: 40px;
    height: 40px !important;
    background-position: -480px -160px;
    transform-origin: top center;
    transform: rotateX(90deg) translateZ(-120px);
}

.rightArm-top {
    width: 40px;
    height: 40px !important;
    background-position: -440px -160px;
    transform-origin: top center;
    transform: rotateX(90deg);
}
.rightArm-front {
    width: 40px;
    background-position: -440px -200px;
    transform: translateZ(40px);
}
.rightArm-right {
    width: 40px;
    background-position: -400px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(0px);
}
.rightArm-left {
    width: 40px;
    background-position: -480px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(-40px);
}
.rightArm-back {
    width: 40px;
    background-position: -520px -200px;

}
.rightArm-bottom {
    width: 40px;
    height: 40px !important;
    background-position: -480px -160px;
    transform-origin: top center;
    transform: rotateX(90deg) translateZ(-120px);
}

.leftLeg-top {
    height: 40px !important;
    width: 40px;
    background-position: -40px -160px;
    transform-origin: top center;
    transform: rotateX(90deg);
}
.leftLeg-front {
    width: 40px;
    background-position: -40px -200px;
    transform: translateZ(40px);
}
.leftLeg-right {
    width: 40px;
    background-position: -80px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(0px);
}
.leftLeg-left {
    width: 40px;
    background-position: 0 -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(-40px);
}
.leftLeg-back {
    width: 40px;
    background-position: -120px -200px;

}
.leftLeg-bottom {
    width: 40px;
    height: 40px !important;
    background-position: -80px -160px;
    transform-origin: top center;
    transform: rotateX(90deg) translateZ(-120px);
}

.rightLeg-top {
    height: 40px !important;
    width: 40px;
    background-position: -40px -160px;
    transform-origin: top center;
    transform: rotateX(90deg);
}
.rightLeg-front {
    width: 40px;
    background-position: -40px -200px;
    transform: translateZ(40px);
}
.rightLeg-left {
    width: 40px;
    background-position: -80px -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(0px);
}
.rightLeg-right{
    width: 40px;
    background-position: 0 -200px;
    transform-origin: 0 center;
    transform: rotateY(-90deg) translateZ(-40px);
}
.rightLeg-back {
    width: 40px;
    background-position: -120px -200px;

}
.rightLeg-bottom {
    width: 40px;
    height: 40px !important;
    background-position: -80px -160px;
    transform-origin: top center;
    transform: rotateX(90deg) translateZ(-120px);
}


.minecraft-body{
    top:-80px
}
.minecraft-rightArm,
.minecraft-leftArm{
    top:-80px;
}
.minecraft-leftArm{
    left: 120px;
}
.minecraft-rightArm{
    right: 120px;
}
.minecraft-rightLeg,
.minecraft-leftLeg{
    top: -100px;
}
.minecraft-leftLeg{
    left: 120px;
}
.minecraft-rightLeg{
    right: 120px
}

	`

const player = {
	n: 1,
	playStatus: true,
	time: 100,
	id: undefined,
	el: {
		"#showCode": $('#showCode'),
		"#codeCss": $('#codeCss'),
		// ".group1": 'group',
		"#speed-slow": 'slow',
		"#speed-up": 'up',
		"#ani-on": 'aniOn',
		"#pause": 'pause',
		"a1": document.querySelector('#showCode')
	},
	init: () => {
		console.log('init');
		clearInterval(player.id)
		player.id = setInterval(player.run, player.time);
		player.bindEvents();
		player.el['#codeCss'].html(string.substr(0, player.n));
		player.el['a1'].innerText = string.substr(0, player.n);
		player.el['a1'].scrollTop = player.el['a1'].scrollHeight
	},
	run: () => {
		player.playStatus = true
		player.n += 1
		if (player.n > string.length) {
			clearInterval(player.id)
			player.playStatus = false
			return
		}
		player.el['#codeCss'].html(string.substr(0, player.n))
		player.el['a1'].innerText = string.substr(0, player.n)
		player.el['a1'].scrollTop = player.el['a1'].scrollHeight
	},

	pause: () => {
		if (player.playStatus) {
			clearInterval(player.id)
			player.playStatus = false
		} else {
			player.id = setInterval(player.run, player.time)
			player.playStatus = true
		}
	},
	slow: () => {
		clearInterval(player.id)
		player.time += 40;
		player.id = setInterval(player.run, player.time)
	},
	up: () => {
		clearInterval(player.id)
		player.time -= 40;
		player.time = player.time < 0 ? 0 : player.time
		player.id = setInterval(player.run, player.time)
	},
	aniOn: () => {
		console.log($('#aniBtn').html() === "");
		if ($('#aniBtn').html() === "") {
			$('#aniBtn').html(ani)
			$('#ani-on').text('关闭动画')
		} else {
			$('#aniBtn').html('')
			$('#ani-on').text('开启动画')

		}
	},
	bindEvents: () => {
		for (let key in player.el) {
			if (player.el.hasOwnProperty(key)) {//hasOwnProperty判断el的自身属性,不判断继承的属性
				if (key !== '#showCode') {
					const ele = player.el[key]
					$(`${key}`).click(() => { player[ele](); })
				}
			}
		}
	}
}
player.init()