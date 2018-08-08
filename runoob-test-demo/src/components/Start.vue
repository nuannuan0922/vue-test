
    <div id="start">
        <p>site: {{site}}</p>
        <p>url: {{url}}</p>
        <p>描述：{{detail()}}</p>
    </div>


<script>
new Vue({
    el: '#start',
    data: {
        site: 'vue-test',
        url: 'http://www.runoob.com/vue2/vue-start.html'
    },
    methods: {
        detail() {
            return this.site + '存储了vue的简单例子。'
        }
    }
})

export default {
    name: 'start'
}
</script>