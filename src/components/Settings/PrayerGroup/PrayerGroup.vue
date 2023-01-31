<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Prayer Group</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">#</th>
                <td>{{item.prayerGroupName}}</td>
                <td>  
                  <button @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
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
                          <h4 class="modal-title">Prayer Group</h4>
                        </div>
                        <div class="modal-body">
                          <div class="titleName">
                              <h5 class="card-title">Group Name :</h5>
                          </div>
                          <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.prayerGroupName">
                           
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
  name: 'PrayerGroup-',
  data(){
      return{
        list: [],
        dataToUpdate: '',
      }
    },

    async mounted() {
       this.getPrayerGroupList()
    },
    methods: {
      async getPrayerGroupList() {
        const response = await axios.get(`/prayer-group/list-prayer-group`)
        console.log(response)
        console.warn(response.data.listOfPrayerGroup)
        this.list=response.data.listOfPrayerGroup
      },
      
      editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            prayerGroupName: this.dataToUpdate.prayerGroupName
          }
          const response = await axios.patch(`/prayer-group/update-prayer-group/${this.dataToUpdate.prayerGroupId}`, payload)
          console.log(response.data)
          console.warn(response.data.listOfPrayerGroup)
          this.prayerGroupName=response.data.listOfPrayerGroup
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


/* hr{
  border: 1px solid #dd9a2f;
} */


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



</style>