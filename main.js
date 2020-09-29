const string =
  `

.Head-top {
  background-position: -80px 0px;
  transform: rotateX(90deg) translateZ(40px);
}
.Head-front {
  background-position: -80px -80px;
  transform: rotateY(0deg) translateZ(40px) translateY(-80px)
}
.Head-left {
  background-position: 0px -80px;
  transform: rotateY(-90deg) translateZ(40px) translateY(-160px)
}
.Head-right {
  background-position: -160px -80px;
  transform: rotateY(90deg) translateZ(40px) translateY(-240px)
}
.Head-back {
  background-position: -240px -80px;
  transform: rotateX(180deg) translateZ(40px) scaleY(-1) translateY(-320px)
}
.Head-bottom {
  background-position: -160px 0px;
  transform: rotateX(-90deg) translateZ(-360px)
}
.Torso {
  left: 120px;
  top: 80px;
}
.Torso>div {
  height: 120px;
  width: 80px;
}
.Torso-top {
  height: 40px !important;
  background-position: -200px -160px;
  transform: rotateX(90deg) translateZ(20px)
}
.Torso-front {
  background-position: -200px -200px;
  transform: rotateY(0deg) translateZ(20px) translate(0px, -40px)
}
.Torso-left {
  background-position: -160px -200px;
  width: 40px !important;
  transform: rotateY(-90deg) translateZ(20px) translate(0px, -160px)
}
.Torso-right {
  width: 40px !important;
  background-position: -280px -200px;
  transform: rotateY(90deg) translateZ(60px) translate(0px, -280px)
}
.Torso-back {
  background-position: -320px -200px;
  transform: rotateX(180deg) translateZ(20px) scaleY(-1) translate(0px, -400px)
}
.Torso-bottom {
  height: 40px !important;
  background-position: -280px 160px;
  transform: rotateX(-90deg) translateZ(-420px)
}
.LeftLeg>div,
.RightLeg>div,
.RightArm>div,
.LeftArm>div {
  height: 120px;
  width: 40px;
}
.LeftArm {
  left: 80px;
}
.LeftArm-top {
  height: 40px !important;
  background-position: -440px -160px;
  transform: rotateX(90deg) translateZ(20px)
}
.LeftArm-front {
  background-position: -440px -200px;
  transform: rotateY(0deg) translateZ(20px) translate(0px, -40px)
}
.LeftArm-left {
  background-position: -400px -200px;
  transform: rotateY(-90deg) translateZ(20px) translate(0px, -160px)
}
.LeftArm-right {
  width: 40px !important;
  background-position: -480px -200px;
  transform: rotateY(90deg) translateZ(20px) translate(0px, -280px)
}
.LeftArm-back {
  background-position: -520px -200px;
  transform: rotateX(180deg) translateZ(20px) scaleY(-1) translate(0px, -400px)
}
.LeftArm-bottom {
  height: 40px !important;
  background-position: -480px -160px;
  transform: rotateX(-90deg) translateZ(-420px)
}

.RightArm {
  left: 200px;
}
.RightArm-top {
  height: 40px !important;
  background-position: -440px -160px;
  transform: rotateX(90deg) translateZ(20px)
}
.RightArm-front {
  background-position: -440px -200px;
  transform: rotateY(0deg) translateZ(20px) translate(0px, -40px)
}
.RightArm-left {
  background-position: -480px -200px;
  transform: rotateY(-90deg) translateZ(20px) translate(0px, -160px)
}
.RightArm-right {
  /* width: 40px !important; */
  background-position: -400px -200px;
  transform: rotateY(90deg) translateZ(20px) translate(0px, -280px)
}
.RightArm-back {
  background-position: -520px -200px;
  transform: rotateX(180deg) translateZ(20px) scaleY(-1) translate(0px, -400px)
}
.RightArm-bottom {
  height: 40px !important;
  background-position: -480px -160px;
  transform: rotateX(-90deg) translateZ(-420px)
}
.LeftLeg {
  top: 0;
  left: 0;
}
.LeftLeg-top {
  height: 40px !important;
  background-position: -40px -160px;
  transform: rotateX(90deg) translateZ(20px)
}
.LeftLeg-front {
  background-position: -40px -200px;
  transform: rotateY(0deg) translateZ(20px) translate(0px, -40px)
}
.LeftLeg-left {
  background-position: -0 -200px;
  transform: rotateY(-90deg) translateZ(20px) translate(0px, -160px)
}
.LeftLeg-right {
  background-position: -80px -200px;
  transform: rotateY(90deg) translateZ(20px) translate(0px, -280px)
}
.LeftLeg-back {
  background-position: -120px -200px;
  transform: rotateX(180deg) translateZ(20px) scaleY(-1) translate(0px, -400px)
}
.LeftLeg-bottom {
  height: 40px !important;
  background-position: -80px -160px;
  transform: rotateX(-90deg) translateZ(-420px)
}
.RightLeg {
  top: 0;
  left: 40px;
}
.RightLeg-top {
  height: 40px !important;
  background-position: -40px -160px;
  transform: rotateX(90deg) translateZ(20px)
}
.RightLeg-front {
  background-position: -40px -200px;
  transform: rotateY(0deg) translateZ(20px) translate(0px, -40px)
}
.RightLeg-left {
  background-position: -80px -200px;
  transform: rotateY(-90deg) translateZ(20px) translate(0px, -160px)
}
.RightLeg-right {
  background-position: -0 -200px;
  transform: rotateY(90deg) translateZ(20px) translate(0px, -280px)
}
.RightLeg-back {
  background-position: -120px -200px;
  transform: rotateX(180deg) translateZ(20px) scaleY(-1) translate(0px, -400px)
}
.RightLeg-bottom {
  height: 40px !important;
  background-position: -80px -160px;
  transform: rotateX(-90deg) translateZ(-420px)
}
.base {
  background-image: radial-gradient(rgba(0, 0, 0, 0.25) 5%, transparent 65%);
  height: 320px;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  position: absolute;
  top: 80%;
  transform: rotateX(90deg) translateZ(90px);
  width: 320px;
}
// 添加动画
.Godo-header {animation: HeadAnimation 1s infinite;}
.LeftArm,.LeftLeg{animation: ArmLeft 1s infinite;}
.RightArm,.RightLeg{animation: ArmRight 1s infinite;}

 `

let ani =
  `
  @keyframes rotatD {
    0% {
      transform: scale(1) rotate3d(0, 1, 0, 0deg);
    }
  
    100% {
      transform: scale(1) rotate3d(0, 1, 0, 360deg);
    }
  }

@keyframes ArmLeft {
  0% {
    transform: rotateX(-30deg)
  }

  50% {
    transform: rotateX(30deg)
  }

  100% {
    transform: rotateX(-30deg)
  }
}

@keyframes ArmRight {
  0% {
    transform: rotateX(30deg)
  }

  50% {
    transform: rotateX(-30deg)
  }

  100% {
    transform: rotateX(30deg)
  }
}
`
let group1 = $('.group1')
group1.on('click', () => {
  group1.css('left') === '400px' ? group1.animate({ left: '0px' }, 'slow') : group1.animate({ left: '400px' }, 'slow')
  console.log('233');
  $('#showCode').css('left') === '-400px' ? $('#showCode').animate({ left: '0px' }, 'slow') : $('#showCode').animate({ left: '-400px' }, 'slow')
})

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







