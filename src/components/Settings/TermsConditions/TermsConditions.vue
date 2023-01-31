<template>
    <div class="comp">
        <div class="card" v-for="item in list" :key="item.id">
          <h4>{{item.text}}</h4>
        </div>
    </div>
</template>

<script>
import axios from '@/axios/axios'

export default {
  name: 'TermsConditions-',
  data(){
      return{
        list: [],
      }
    },
    
    async mounted() {
       this.getTermsConditionsList()
    },
    methods: {
      async getTermsConditionsList() {
        const response = await axios.get(`/terms-and-condition/list`)
        console.log(response)
        console.warn(response.data.terms_and_conditions)
        this.list=response.data.terms_and_conditions
      }
    },
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
  /* display: flex; */
}

.card{
  width: 130rem;
}

h4{
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
}


</style>