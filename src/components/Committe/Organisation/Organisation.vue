<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Organisation</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.organisationId">
                <th scope="row">#{{item.organisationId }}</th>
                <td>{{item.organisationName}}</td>
                <td>  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                </td>
              </tr>


                <!-- Modal -->

                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Organisation</h4>
                        </div>
                        <div class="modal-body">
                          <div class="titleName">
                              <h5 class="card-title">Organisation Name :</h5>
                          </div>
                          <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.organisationName">
                              <!-- value='youth ' -->
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button @click="updateData" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
                        </div>
                      </div>
                    </div>
                  </div>

                <!-- Modal -->


            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import axios from '@/axios/axios'

export default {
  name: 'Organisation-',
  data(){
      return{
        list: [],
        dataToUpdate: ''
      }
    },

    async mounted() {
       this.getOrgansiationList()
    },
    methods: {

      async getOrgansiationList() {
        const response = await axios.get(`/organisation/list`)
        console.log(response)
        console.warn(response.data.organisation)
        this.list=response.data.organisation
      },

      editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            organisationName: this.dataToUpdate.organisationName
          }
          const response = await axios.patch(`/organisation/update/${this.dataToUpdate.organisationId}`, payload)
          console.log(response.data)
          console.warn(response.data.organisation)
          this.organisationName=response.data.organisation
          window.location.reload();
        }
        catch(error){
          console.log(error)
        }
      },


    },
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
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

.bttn{
  border: none;
  background: none;
}

.modal-body{
  display: flex;
}

.modal{
  margin-top: 120px;
}

.fillbox{
  margin-left: 12px;
  height: 100%;
  width: 100%;
}
.inputbox{
  width: 75%;
}


/* hr{
  border: 1px solid #dd9a2f;
} */

</style>