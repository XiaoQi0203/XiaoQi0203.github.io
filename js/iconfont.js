"use strict";

function iconFont(args) {
  args = args.join(" ").split(",");
  let p0 = args[0];
  let p1 = args[1] ? args[1] : 1;
  return `<svg class="icon" style="width:${p1}em; height:${p1}em" aria-hidden="true"><use xlink:href="#${p0}"></use></svg>`;
}
//ali图标使用示例
// hexo.extend.tag.register("icon", iconFont);

// <svg class="icon" style="width:1em; height:1em" aria-hidden="true"><use xlink:href="#icon-rat_zi"></use></svg><svg class="icon" style="width:2em; height:2em" aria-hidden="true"><use xlink:href="#icon-rat"></use></svg>

// <svg class="icon" style="width:3em; height:3em" aria-hidden="true"><use xlink:href="#icon-ox_chou"></use></svg><svg class="icon" style="width:4em; height:4em" aria-hidden="true"><use xlink:href="#icon-ox"></use></svg>

// <svg class="icon" style="width:5em; height:5em" aria-hidden="true"><use xlink:href="#icon-tiger_yin"></use></svg><svg class="icon" style="width:6em; height:6em" aria-hidden="true"><use xlink:href="#icon-tiger"></use></svg>

// <svg class="icon" style="width:1em; height:1em" aria-hidden="true"><use xlink:href="#icon-rabbit_mao"></use></svg><svg class="icon" style="width:2em; height:2em" aria-hidden="true"><use xlink:href="#icon-rabbit"></use></svg>

// <svg class="icon" style="width:3em; height:3em" aria-hidden="true"><use xlink:href="#icon-dragon_chen"></use></svg><svg class="icon" style="width:4em; height:4em" aria-hidden="true"><use xlink:href="#icon-dragon"></use></svg>

// <svg class="icon" style="width:5em; height:5em" aria-hidden="true"><use xlink:href="#icon-snake_si"></use></svg><svg class="icon" style="width:6em; height:6em" aria-hidden="true"><use xlink:href="#icon-snake"></use></svg>

// <svg class="icon" style="width:1em; height:1em" aria-hidden="true"><use xlink:href="#icon-horse_wu"></use></svg><svg class="icon" style="width:2em; height:2em" aria-hidden="true"><use xlink:href="#icon-horse"></use></svg>

// <svg class="icon" style="width:3em; height:3em" aria-hidden="true"><use xlink:href="#icon-goat_wei"></use></svg><svg class="icon" style="width:4em; height:4em" aria-hidden="true"><use xlink:href="#icon-goat"></use></svg>

// <svg class="icon" style="width:5em; height:5em" aria-hidden="true"><use xlink:href="#icon-monkey_shen"></use></svg><svg class="icon" style="width:6em; height:6em" aria-hidden="true"><use xlink:href="#icon-monkey"></use></svg>

// <svg class="icon" style="width:1em; height:1em" aria-hidden="true"><use xlink:href="#icon-rooster_you"></use></svg><svg class="icon" style="width:2em; height:2em" aria-hidden="true"><use xlink:href="#icon-rooster"></use></svg>

// <svg class="icon" style="width:3em; height:3em" aria-hidden="true"><use xlink:href="#icon-dog_xu"></use></svg><svg class="icon" style="width:4em; height:4em" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg>

// <svg class="icon" style="width:5em; height:5em" aria-hidden="true"><use xlink:href="#icon-boar_hai"></use></svg><svg class="icon" style="width:6em; height:6em" aria-hidden="true"><use xlink:href="#icon-boar"></use></svg>