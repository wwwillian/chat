<template>
    <div>
        <pacman-loader :loading="loading"></pacman-loader>
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
