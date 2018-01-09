<template>
  <div class="number">
      <p>观测数字的变化</p>
      <!-- 步长20 -->
      <input type="number" v-model.number="number" step='20'>
      <p>{{animateNum}}</p>
  </div>
</template>
<script>
    import TWEEN from "@tweenjs/tween.js";
    export default {
      data() {
        return {
          number: 0,
          animateNum: 0
        };
      },
      watch: {
        number(val, oldVal) {
          var vm = this;
          function animate() {
            if (TWEEN.update()) {
              requestAnimationFrame(animate);
            }
          }
          //这里和官网不一样
          let obj = { tweeningNumber: oldVal };
          new TWEEN.Tween(obj)
            .easing(TWEEN.Easing.Quadratic.Out)
            .to({ tweeningNumber: val }, 500)
            .onUpdate(function() {
              vm.animateNum = obj.tweeningNumber.toFixed(0);
            })
            .start();

          animate();
        }
      }
    };
</script>

