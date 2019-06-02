<template>
    <div>
        <scale-loader :loading="loading" >espere</scale-loader>
    </div>
</template>
<script>
    import ScaleLoader from 'vue-spinner/src/ScaleLoader'

    export default {
        created(){
            this.loadMessages()
        },

       data(){
           return{
               loading:false,
           }
       },

        methods:{
            loadMessages(){
                this.loading = true
                this.$store.dispatch('loadMessages')
                    .finally(()=>this.loading = false)
            },

        components: {
                ScaleLoader
            }
        }
    }
</script>
