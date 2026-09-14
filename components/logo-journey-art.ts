// Homepage-only layered rendering. The brand's original image stays unchanged.
// Coordinates use the original 520px-wide logo, cropped above the lettering.
export const FLAME_PATHS = [
  "M78 462C128 393 171 319 211 245C202 312 188 383 176 462Z",
  "M191 462C218 352 240 237 256 129C264 238 250 287 253 339C256 387 272 428 288 462Z",
  "M319 462C272 378 266 296 283 219C297 154 290 85 277 37C318 101 316 171 300 242C285 326 332 412 430 462Z",
];

const flamePaths = FLAME_PATHS.map((d) => `<path d="${d}"/>`).join("");
const rearOrbit = "M38 350C0 245 438 177 482 282";
const frontOrbit = "M482 282C520 387 76 455 38 350";

export const LOGO_JOURNEY_ART = `
<svg class="logo-bands" viewBox="0 0 520 465" aria-hidden="true">
 <path d="${rearOrbit}" fill="none" stroke="#c9ac69" stroke-opacity=".45" stroke-width="1.6"/>
</svg>
<svg class="logo-flame" viewBox="0 0 520 465" aria-hidden="true">
 <defs><linearGradient id="homeFlameGold" x1="0" y1="37" x2="0" y2="462" gradientUnits="userSpaceOnUse"><stop stop-color="#fff2b6"/><stop offset=".54" stop-color="#efcf69"/><stop offset="1" stop-color="#b48437"/></linearGradient></defs>
 <g fill="url(#homeFlameGold)" stroke="#c4b889" stroke-width=".7" stroke-linejoin="round">${flamePaths}</g>
</svg>
<svg class="logo-front-bands" viewBox="0 0 520 465" aria-hidden="true">
 <path d="${frontOrbit}" fill="none" stroke="#c69a43" stroke-opacity=".8" stroke-width="2.2"/>
</svg>`;
