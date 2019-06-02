<template>
    <div class="messages scroll" ref="messages">
        <pacman-loader
            :loading="loading">
        </pacman-loader>

        <message
            v-for="message in messages"
            :key="message.id"
            :message="message">
        </message>
    </div>
</template>

<script>
    import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

    export default {
        created(){
            this.loadMessages()
        },

       data(){
           return{
               loading: false,
           }
       },

        computed: {
            messages() {
                //return this.$store.state.chat.messages
                return this.$store.getters.messages
            }
        },

        methods:{
            loadMessages(){
                this.loading = true
                this.$store.dispatch('loadMessages')
                    .finally(()=>{
                        this.loading = false
                        this.scrollMessages()
                    })
            },

            scrollMessages(){
                setTimeout(() => {
                    // this.$refs.messages.scrollTo(0, this.$refs.messages.scrollHeight)
                    this.$refs.messages.scroll({
                        top: this.$refs.messages.scrollHeight,
                        let: 0,
                        behavior: "smooth"
                    })
                }, 100)
            }
        },

        watch: {
            messages(){
                this.scrollMessages()
            }
        },

        components: {
            PacmanLoader
        }
    }
</script>

<style scoped>
    .messages{
        height: 400px;
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .scroll::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }
    .scroll::-webkit-scrollbar
    {
        width: 12px;
        background-color: #F5F5F5;
    }
    .scroll::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: rgb(79, 194, 115);
    }
</style>
