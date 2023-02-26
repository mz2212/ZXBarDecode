# ZXBarDecode
A 1D/2D Barcoder decoder browser extension using zxing-js

## Usage
1. Right click image of barcode (most types supported, check [here](https://github.com/zxing-js/library) if unsure...)
2. Click "1D/2D Barcode Decode"
3. Paste decoded barcode

## Build guide
1. Clone
2. Run `yarn`
3. Run `yarn webpack`
4. Enter the `dist` folder and run `web-ext build`

You shouldn't ever need to build it because you can just get the addon from the Mozilla extension repo [here](https://addons.mozilla.org/firefox/addon/zxbardecode/).
