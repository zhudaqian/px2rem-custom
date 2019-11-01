'use strict'

const postcss = require('postcss')
const Px2rem = require('px2rem')
module.exports = postcss.plugin('postcss-px2rem', function (options) {
  Object.prototype.toString.call(options) !== '[object Array]' && (options = [options])
  return function (css, result) {
    let cssText = css.toString()
    let flag = false
    for (var i=0; i< options.length;i++){
      var o = options[i]
      // 忽略时 不是忽略项进入  包含时 是包含项进入
      if ((o.exclude && css.source.input.file.match(o.exclude) === null) ||(o.include && css.source.input.file.match(o.include)!== null)) {
        flag = true
        const px2remIns = new Px2rem(o)
        cssText = px2remIns.generateRem(cssText);
        break
      }
    }
    if(flag){
      const cssObj = postcss.parse(cssText)
      result.root = cssObj
    } else {
      result.root = css
    }

  }
})
