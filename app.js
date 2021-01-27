const app = Vue.createApp({

    data() {
        return {
            issue: "initial data",
            counter:0
        }
    },
    methods: {
        // setIssue(event) {
        //     this.issue = event.target.value
        // },
        Increase(){
            this.counter=this.counter+1;
        },
        outputIssue1(){
            if(this.issue===""){
                return ""
            }
            return `[!!!!]${this.issue}`
        },

        resetIssue() {
            this.issue = ""
        }
    },
    computed:{
        outputIssue(){
            if(this.issue===""){
                return ""
            }
            return `[!!!!]${this.issue}`
        }
    }
})

app.mount("#app")