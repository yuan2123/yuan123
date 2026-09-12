// Homepage-only layered rendering. The brand's original image stays unchanged.
// Coordinates use the original 520px-wide logo, cropped above the lettering.
export const FLAME_PATHS = [
  "M78 462C128 393 171 319 211 245C202 312 188 383 176 462Z",
  "M191 462C218 352 240 237 256 129C264 238 250 287 253 339C256 387 272 428 288 462Z",
  "M319 462C272 378 266 296 283 219C297 154 290 85 277 37C318 101 316 171 300 242C285 326 332 412 430 462Z",
];

const flamePaths = FLAME_PATHS.map((d) => `<path d="${d}"/>`).join("");
// Trace the two original sweeping bands instead of erasing raster stars:
// stars overlap the bands in the source image, so erasing would leave holes.
const descendingBand = "M122 194C-78 176 -47 303 174 374C302 420 475 441 508 411C553 374 466 301 378 261C474 334 532 391 479 405C344 432 145 351 47 277C-8 230 -13 198 122 194Z";
const ascendingBand = "M398 188C570 164 562 257 382 350C244 420 68 454 9 413C-45 375 89 293 144 261C64 316 -29 379 29 400C111 442 349 350 463 268C543 198 481 180 398 188Z";
const bandGradient = `<linearGradient id="homeBandGold" x1="0" y1="185" x2="0" y2="428" gradientUnits="userSpaceOnUse"><stop stop-color="#eedc8d"/><stop offset=".7" stop-color="#f5df8d"/><stop offset="1" stop-color="#bd913f"/></linearGradient>`;

export const LOGO_JOURNEY_ART = `
<svg class="logo-bands" viewBox="0 0 520 465" aria-hidden="true">
 <defs>${bandGradient}</defs>
 <g fill="url(#homeBandGold)" stroke="#c6b983" stroke-width=".65"><path d="${descendingBand}"/><path d="${ascendingBand}"/></g>
</svg>
<svg class="logo-flame" viewBox="0 0 520 465" aria-hidden="true">
 <defs><linearGradient id="homeFlameGold" x1="0" y1="37" x2="0" y2="462" gradientUnits="userSpaceOnUse"><stop stop-color="#fff2b6"/><stop offset=".54" stop-color="#efcf69"/><stop offset="1" stop-color="#b48437"/></linearGradient></defs>
 <g fill="url(#homeFlameGold)" stroke="#c4b889" stroke-width=".7" stroke-linejoin="round">${flamePaths}</g>
</svg>
<svg class="logo-front-bands" viewBox="0 0 520 465" aria-hidden="true">
 <defs><clipPath id="homeFrontBands"><rect x="0" y="326" width="520" height="139"/></clipPath></defs>
 <g fill="url(#homeBandGold)" clip-path="url(#homeFrontBands)"><path d="${descendingBand}"/><path d="${ascendingBand}"/></g>
</svg>`;
