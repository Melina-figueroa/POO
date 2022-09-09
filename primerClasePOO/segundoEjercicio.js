"use strict";
export const __esModule = true;
import supports_color_1 from "supports-color";
if (supports_color_1["default"].stdout) {
    console.log('Terminal stdout supports color');
}
if (supports_color_1["default"].stdout.has256) {
    console.log('Terminal stdout supports 256 colors');
}
if (supports_color_1["default"].stderr.has16m) {
    console.log('Terminal stderr supports 16 million colors (truecolor)');
}
