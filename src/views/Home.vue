<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="imgClick">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    imgClick(){
      this.$MsgAlert('嘻嘻');
    }
  },
  mounted(){
    let url = `project/findAllProject`;
    let post_data = {'userId': 10};
    this.$Axios.post(url,post_data).then(res=>{
        if(res.code == 0){
            console.log(res);
        }
    });
  }
}
</script>
