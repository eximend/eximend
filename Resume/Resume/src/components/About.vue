<template >
    <div class="main__About">
        <h2>About me</h2>
        <p v-for="txt in aboutInfo">{{ txt.text }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aboutInfo:[
                {text:"Hello, I'm Victor - Python and JavaScript Developer from Astana. Interested in programming and everything related to it"},
                {text:"I am studying Front-End Development courses at IT Step Academy."},
                {text:"In addition, I am fluent in three languages: Russian, English and Chinese. I will be glad to work in an international team!"},
                {text:'Ready to implement excellent projects with wonderful people.'}]
        }
    }
}
</script>
<style >
    
</style>