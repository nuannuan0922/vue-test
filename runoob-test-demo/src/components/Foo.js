export default  Vue.component('Foo', {
    template: '<div>{{ date.toLocaleTimeString() }}</div>',
    data: () => {
        return {
            date: new Date()
        }
    },
    methods: {
        update() {
            this.date = new Date();
        }
    }
})