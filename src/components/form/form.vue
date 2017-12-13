<template>
  <div class="form">
    <!-- 文本 -->
    <input type="text" v-model="message" placeholder="单个文本">
    <!-- 多行文本绑定，中间输入11并不会生效 -->
    <textarea v-model="textareaMessage" cols="30" rows="10">11</textarea>
    
    <p>input文本输入:{{message}}</p>
    <p>textarea多行文本输入:{{textareaMessage}}</p>
    <input type="checkbox" v-model="singleCheckBox">
    <label for="checkbox">{{ singleCheckBox }}</label>
    <p>单个复选框的值是布尔值{{singleCheckBox}}</p>
    <!-- 多个复选框的话，就得绑定一个数组，存进的是他们的value -->
    <div>
      <input type="checkbox" v-model="checkboxValues" value="john">
      <label for="john">john</label>
      <input type="checkbox" v-model="checkboxValues" value="mike">
      <label for="mike">mike</label>
      <p>多个复选框的值是一个数组{{checkboxValues}}</p>
    </div>
    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <p>单选框选择的是他们value: {{ picked }}</p>
    </div>
    <div>
      <select v-model="singleSelect">
        <option>1</option>
        <option>2</option>
      </select>
      <p>单选列表是存一个基本值{{singleSelect}}</p>
    </div>
    <div>
      <select v-model="multipleSelect" multiple>
        <option>1</option>
        <option>2</option>
      </select>
      <p>多选列表是存一个数组{{multipleSelect}}</p>
    </div>
    <div>
      <p>v-model的修饰符</p>
      <input type="text" v-model="msg" @change="change" @input="input" placeholder="普通">
      <!-- 加了lazy修饰符，从input转变为change同步 -->
      <!-- change和input的区别是失去焦点之后才执行，后者是实时的 -->
      <input type="text" v-model.lazy="msg" @change="change" @input="input" placeholder="加了lazy修饰符，从input转变为change同步">
      <!-- 自动转为数字类型 -->
      <input type="text" v-model.number="num" placeholder="自动转为number类型" @input="inputNum">
      <!-- 自动去除两边的空格 -->
      <input type="text" v-model.trim="inputTrim" placeholder="自动去掉两边的空格" @change="changeTrim">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "",
        textareaMessage: "",
        singleCheckBox: false,
        checkboxValues: [],
        picked: "",
        singleSelect: "",
        multipleSelect: [],
        msg: "",
        num: "",
        inputTrim: ""
      };
    },
    methods: {
      change() {
        console.log("调用的是change" + this.msg);
      },
      input() {
        console.log("调用的是input" + this.msg);
      },
      inputNum() {
        console.log("调用的是input 类型为" + typeof this.num);
      },
      changeTrim() {
        console.log(this.inputTrim);
      }
    }
  };
</script>

