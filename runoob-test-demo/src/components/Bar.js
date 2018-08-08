export default Vue.component('Bar', {
    template: `<div>
        <button @click="clickHandler">点我</button>
        <p>已经点击了 {{counter}} 次。</p>
    </div>`,
    data: () => {
        return {
            counter: 0
        }
    },
    methods: {
        clickHandler() {
            this.counter += 1;
        }
    }
})