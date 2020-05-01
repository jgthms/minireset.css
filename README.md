# minireset.css

[![npm](https://img.shields.io/npm/v/minireset.css.svg)](https://www.npmjs.com/package/minireset.css)
[![npm](https://img.shields.io/npm/dm/minireset.css.svg)](https://www.npmjs.com/package/minireset.css)

A tiny modern CSS reset that covers the basics:

* **resets the font sizes**: so that using semantic markup doesn't affect the styling
* **resets the block margins**: so that the spacing is only applied when you need it
* **resets tables**: so that tabular data only takes the space it needs
* **preserves the inline paddings**: so that buttons and inputs keep their default layout
* **sets the border-box box sizing**: so that borders and paddings don't affect the set dimensions
* **sets responsive media elements**: so that images and embeds scale with the browser width

## Download/Install

[Download the latest version](https://raw.githubusercontent.com/jgthms/minireset.css/master/minireset.min.css)

```sh
npm install minireset.css
```

Or clone the repo.

## Options
It will be available in your modules directory in `/node_modules/minireset.css/`:
* `minireset.css`: CSS rules
* `minireset.min.css`: minified CSS rules (recommended for production sites)
* `minireet.sass`: CSS rules written in SASS (recommended for SCSS/SASS projects)
* `minireset.css.lit.js`: CSS rules exported as a `CSSResult` object for [LitElement](https://lit-element.polymer-project.org/) projects (recommended for Web Component projects based on LitElement)

## CDN

[GitHub CDN for minireset.min.css](https://cdn.rawgit.com/jgthms/minireset.css/master/minireset.min.css)

## Copyright and license

Code copyright 2019 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/minireset.css/blob/master/LICENSE).
