import { IMAGES } from "./images.js";
import { state, steps } from "./state.js";

export function render() {
  renderLeft();
  renderRight();
}

function renderLeft() {
  const leftTitle = document.getElementById("leftStage");

  if (leftTitle) {
    leftTitle.textContent = steps[state.step].stage;
  }

  let imgs = [];

  if (state.step === 1) {
    imgs = [
      [IMAGES.red, "Rojo"],
      [IMAGES.blue, "Azul"],
      [IMAGES.toy, "Con llavero"]
    ];
  }

  if (state.step === 2 || state.step === 4) {
    imgs = [[IMAGES.black, "Prueba"]];
  }

  if (state.step === 3) {
    imgs = [
      [IMAGES.red, "Rojo"],
      [IMAGES.blue, "Azul"],
      [IMAGES.toy, "Con llavero"],
      [IMAGES.black, "Negro"],
      [IMAGES.sport, "Deportivo"],
      [IMAGES.kid, "Niños"]
    ];
  }

  if (state.step === 5) {
    imgs = [[IMAGES.bag, "Bolsa"]];
  }

  const grid = document.getElementById("imageGrid");

  if (!grid) return; // evita error

  grid.innerHTML = `
    ${imgs.map(([src, label]) => `
      <div class="img-card">
        <img src="${src}">
        <div>${label}</div>
      </div>
    `).join("")}
  `;
}

function renderRight() {
  const r = document.getElementById("right");
  const s = steps[state.step];

  if (!r || !s) return; // evita error

  r.innerHTML = `
    <div class="chat-block">

      <div class="msg bitik">
        <div class="avatar">🤖</div>
        <div class="bubble">${s.bitik}</div>
      </div>

      <div class="msg ai">
        <div class="avatar ai-avatar">🧠</div>
        <div class="bubble ai-bubble">
          <div id="aiText">${s.ai}</div>
          <div id="aiStatus" class="ai-status">${s.aiStatus}</div>
        </div>
      </div>

    </div>

    <div class="controls">
      <button class="btn btn-main" id="btnTrain">✨ Acción</button>
      <button class="btn btn-next" id="btnNext" style="display:none;">Siguiente ▶</button>
    </div>
  `;
}
