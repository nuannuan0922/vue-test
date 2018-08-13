# vue-test
vue test demo

# 初始化一个环境
- vue init webpack <my-project>
- 官网原句

```
请注意我们不推荐新手直接使用 vue-cli，尤其是在你还不熟悉基于 Node.js 的构建工具时。
```

# 学习过程及笔记
1. 菜鸟教程学语法：[菜鸟链接](http://www.runoob.com/vue2/vue-tutorial.html)
    - {{}} , 提供了完全的 JavaScript 表达式支持 
        - Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令
    - v-html
        - 会把子节点替换成html变量
    - v-bind
        - v-bind 缩写
        - 不会覆盖同属性
        - 我们也可以在对象中传入更多属性用来动态切换多个 class 

        ```
            <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
        ```
        - 值得看下例子
    - v-if 
        - 判断后边变量的true或者false
        - v-if 的值需要是个变量，不能是 {{}}
        - avoid using JavaScript keyword as property name: "if". Raw expression: v-if="if"
    - v-on
        - 修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。
        - v-on 缩写
        - .stop 
        - .prevent
        - .capture
        - .self
        - .once
        - .native : 监听一个原生事件
        - 按键时： @keyup.13() @keyup.enter()
            - .enter .tab .delete .esc .space .up .down .left .right .ctrl .alt .shift .meta
    - v-model
        - .number: 自动将用户的输入值转为 Number 类型
        - .lazy: 在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：
        - .trim
    - 过滤器
        - {{ message | filterA | filterB }}
        - {{ message | filterA('arg1', arg2) }} 这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。
    - v-else、v-else-if
        - v-if 后边的字符串中可以用表达式。如
            ```
                <p v-if="ifValue.toLocaleLowerCase() === 'a'">if值是a</p>
            ```
        - 不显示的部分不渲染到dom树
    - v-show
        - 通過修改元素的显示和隐藏
    - v-for
        - 可以遍历数组
        - 可以遍历对象 (value, key, index) in object
        - 可以遍历整数
    - computed 计算属性
        - 如果提供的是函数，则提供的函数将用作属性 的 getter 。
        - 如果提供的是对象，可包含 set 和 get 属性
        - 可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖 == 缓存 == ，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
        - 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch。通常更好的做法是使用计算属性而不是命令式的 watch 回调。

    - watch 
        - vm.$watch 是个实例方法

    - Component
        - 注册 component: Vue.component(tagName, options);
        - 注册后调用 <tagName></tagName>
        - 单个根节点

    - directives
        - 钩子函数：
            - bind inserted update componentUpdate unbind
            - 钩子函数的参数：el，binding，

2. 官网教程[链接](https://cn.vuejs.org/v2/guide/)
    - 基础部分：
        - 基础部分可以直接跳过，看完菜鸟教程，基础部分和菜鸟教程大多是一模一样的。没必要花太多时间在这块。
        - 只有当实例被创建时 data 中存在的属性才是响应式的。
        - 使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
        - 不要在选项属性或回调上使用箭头函数, 因为this。
        - 生命周期[图片链接](https://cn.vuejs.org/images/lifecycle.png)
        - v-once
        - 对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
        - 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。
        - ### slot 插槽
    - 深入了解组件
        - 建议组件命名规则：字母全小写且必须包含一个连字符
        - 


    
