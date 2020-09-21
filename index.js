/**
 * TextAlive App API script tag example
 * https://github.com/TextAliveJp/textalive-app-script-tag
 *
 * 発声中の歌詞をフレーズ単位で表示します。
 * また、このアプリが TextAlive ホストと接続されていなければ再生コントロールを表示します。
 * 
 * `script` タグで TextAlive App API を読み込んでいること以外は https://github.com/TextAliveJp/textalive-app-phrase と同内容です。
 */

import P5 from "p5";

const { Player, Ease } = TextAliveApp;

//プレイヤーの初期化
const player = new Player({
  app: {
    appAuthor: "Amayuki",
    appName: "Basic example"
  },
  mediaElement: document.querySelector("#media")
});

//
player.addListener({
  onAppReady,
  onTimerReady,
  onTimeUpdate,
  onThrottledTimeUpdate
});

const playBtn = document.querySelector("#play");
const jumpBtn = document.querySelector("#jump");
const pauseBtn = document.querySelector("#pause");
const rewindBtn = document.querySelector("#rewind");
const positionEl = document.querySelector("#position strong");

const artistSpan = document.querySelector("#artist span");
const songSpan = document.querySelector("#song span");
const phraseEl = document.querySelector("#container p");
const beatbarEl = document.querySelector("#beatbar");

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(31, 127, 255);
}

function draw(){
  noStroke();
  fill(255, 255, 0);
  ellipse(width/2, height/2, height/2);
}

function onAppReady(app) {
  //ホストが存在するかどうか
  if (!app.managed) {
    document.querySelector("#control").style.display = "block";
    playBtn.addEventListener("click", () => player.video && player.requestPlay());
    jumpBtn.addEventListener("click", () => player.video && player.requestMediaSeek(player.video.firstPhrase.startTime));
    pauseBtn.addEventListener("click", () => player.video && player.requestPause());
    rewindBtn.addEventListener("click", () => player.video && player.requestMediaSeek(0));
  }
  if (!app.songUrl) {
    player.createFromSongUrl("http://www.youtube.com/watch?v=ygY2qObZv24");
  }
}

//onVideoReadyイベントに続いて音源の再生準備が整うと発行されるイベント
function onTimerReady() {
  artistSpan.textContent = player.data.song.artist.name;
  songSpan.textContent = player.data.song.name;

  document
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));

  let p = player.video.firstPhrase;
  jumpBtn.disabled = !p;

  // set `animate` method
  while (p && p.next) {
    p.animate = animatePhrase;
    p = p.next;
  }
}

function onTimeUpdate(position) {

  // show beatbar
  const beat = player.findBeat(position);
  if (!beat) {
    return;
  }
  beatbarEl.style.width = `${Math.ceil(Ease.circIn(beat.progress(position)) * 100)}%`;
}

function onThrottledTimeUpdate(position) {
  positionEl.textContent = String(Math.floor(position));
}

function animatePhrase(now, unit) {

  // show current phrase
  if (unit.contains(now)) {
    phraseEl.textContent = unit.text;
  }
};