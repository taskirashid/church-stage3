<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Register No</th>
                <th scope="col">Sender</th>
                <th scope="col">Message</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.registerNo}}</th>
                <td>{{item.sender}}</td>
                <td>{{item.message}}</td>
                <td>{{getCreateDate(item.createdAt)}}</td>
                <!-- <td>{{item.createdAt}}</td> -->
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import axios from '@/axios/axios'

export default {
  name: 'Contact-',
    data(){
      return{
        list: [],
      }
    },
    
    async mounted() {
       this.getMemberList()
    },
    methods: {
      async getMemberList() {
        const response = await axios.get(`/contact/get-contact`)
        console.log(response)
        console.warn(response.data.contacts)
        this.list=response.data.contacts
      },
      getCreateDate(date){
        return moment(date).format('DD-MM-YYYY')
      },
    },
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
    width: 100%;

}

.flash{
    display: block;
    justify-content: space-between;
    /* padding: 2rem; */
    border-radius: 2px;
    color: var(--color-dark);
    /* margin-top: 5px; */
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
}


/* hr{
  border: 1px solid #dd9a2f;
} */

</style>