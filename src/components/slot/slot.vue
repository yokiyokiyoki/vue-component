<template>
  <div class="slot">
        <p>所谓插槽，就是插入父组件里的东西</p>
        <p>混合父组件的内容与子组件本身的模板，这个过程称之为内容分发</p>
        <p>为什么要这样做，可以想象占位符，骨架屏。如果没有插入子组件，那么我们给他一种类似的占位符</p>
        <p>在设计组合使用的组件，内容分发很有用</p>
        <layout>
            <p slot='header'>我是头部，有具体slot的名称，指向具名插槽所在的位置</p>
            <p>我是主要内容，因为没有传递slot名称，所以是匿名插槽的位置</p>
            <!-- 父组件里可以嵌套子组件 -->
            <child></child>
        </layout>
      <!-- 上面的都不可以组件内的数据进行复用 -->
      <!-- slot-scope作为一个接收从子组件传递过来的临时变量，是整个props对象喔,接收子组件传递过来的各种属性，全都挂载一个对象下 -->
        <scope>
            <template slot-scope="props">
                <p>{{props.msg}}</p>
            </template>
            <!-- vue2.5之后亦可以不用template -->
            <p slot-scope="props" slot='a'>{{props.text}}</p>
        </scope> 
  </div>
</template>
<script>
    import layout from "./layout.vue";
    import child from "./child.vue";
    import scope from "./scope.vue";
    export default {
      components: {
        layout,
        child,
        scope
      }
    };
</script>

