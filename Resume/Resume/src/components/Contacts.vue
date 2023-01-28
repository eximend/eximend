<template>
    <div class="Contacts">
       <h2>Contacts</h2> 
       <p>Name: {{ contacts.name }}</p>
       <address>Adress: {{ contacts.adress }}</address>
       <h5>Phone Number: {{ contacts.phoneNumber }}</h5>
       <h5>Email: {{ contacts.email }}</h5>
       <div class="messagers">
            <a v-for="messager in messagers" :key="messager" :href="messager.link"><img class="contactIcons" :src="messager.messager" alt="name"></a> 
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contacts: {name:'Viktor Chebotarev', phoneNumber:87055777716,email:'lastnight1999@gmail.com',adress:'Kazakhstan, Astana'},
            messagers:[{link:'https://www.instagram.com/chebotarev_viktor/',messager:'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'},{link:'https://vk.com/eximend',messager:'https://cdn-icons-png.flaticon.com/512/5968/5968835.png'},
                {link:'https://t.me/eximend',messager:'https://cdn-icons-png.flaticon.com/512/2111/2111646.png'}]
        }
    }
}
</script>
<style>
    
</style>