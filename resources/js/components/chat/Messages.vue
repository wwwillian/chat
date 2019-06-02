<template>
    <div class="messagens">
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
                return this.$store.state.chat.messages
            }
        },

        methods:{
            loadMessages(){
                this.loading = true
                this.$store.dispatch('loadMessages')
                    .finally(()=>this.loading = false)
            },
        },

        components: {
            PacmanLoader
        }
    }
</script>
