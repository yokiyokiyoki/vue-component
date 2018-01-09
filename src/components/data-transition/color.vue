<style lang="less" scoped>
    .color-preview {
      display: inline-block;
      width: 50px;
      height: 50px;
    }
</style>

<template>
  <div class="color">
      <p>观测颜色的变化</p>
      <p>需要用到color-js的库类似的库来获取颜色</p>
      <input type="text" v-model='colorQuery' placeholder="输入颜色">
      <button @click='updateColor'>更新颜色</button>
      <span class="color-preview" :style="{backgroundColor:tweenenColorCss}"></span>
      <p>{{tweenenColorCss}}</p>
  </div>
</template>
<script>
    import Color from "color-js";
    import TWEEN from "@tweenjs/tween.js";
    export default {
      data() {
        return {
          colorQuery: "",
          color: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
          },
          tweenedColor: {}
        };
      },
      methods: {
        updateColor() {
          //将输入的转换成rgb
          this.color = new Color(this.colorQuery).toRGB();
        }
      },
      created() {
        //   先初始数据
        this.tweenedColor = Object.assign({}, this.color);
      },
      watch: {
        color: function() {
          function animate() {
            if (TWEEN.update()) {
              requestAnimationFrame(animate);
            }
          }
          //观察color变化，并把值赋给tweenedColor
          new TWEEN.Tween(this.tweenedColor).to(this.color, 750).start();
          animate();
        }
      },
      computed: {
        //计算真正展示在页面color的rgba
        tweenenColorCss: function() {
          return new Color({
            red: this.tweenedColor.red,
            green: this.tweenedColor.green,
            blue: this.tweenedColor.blue,
            alpha: this.tweenedColor.alpha
          }).toCSS();
        }
      },
      mounted() {
        console.log(Color);
      }
    };
</script>
