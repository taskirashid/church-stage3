<template>
  <div class="comp">
      <div class="flash">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Time</th>
              <th scope="col">Day</th>
              <th scope="col">Title</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.id">
              <th scope="row">#</th>
              <th>{{item.time}}</th>
              <td>{{item.day}}</td>
              <td>{{item.title}}</td>
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
                          <h4 class="modal-title">Workship Time</h4>
                        </div>
                        <div class="modal-body">


                          <div class="fillset">
                            <div class="titleName">
                              <h5 class="card-title">Time:</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.time">
                            </div>
                          </div>
                          <div class="fillset">
                            <div class="titleName">
                              <h5 class="card-title">Day:</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.day">
                            </div>
                          </div>
                          <div class="fillset">
                            <div class="titleName">
                              <h5 class="card-title">Title:</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.title">
                            </div>
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
// import Workship from "@/components/WorkshipTime/Workship.vue"
import axios from '@/axios/axios'

export default {
name: 'Members-',
    components:{
      // Workship
    },
  data(){
    return{
      list: [],
      dataToUpdate: ''
    }
  },
  
  async mounted() {
     this.getWorkshipList()
  },
  methods: {
    async getWorkshipList() {
      const response = await axios.get(`/worship-time/list`)
      console.log(response)
      console.warn(response.data.worshipTime)
      this.list=response.data.worshipTime
    },

    
    editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            time: this.dataToUpdate.time,
            day: this.dataToUpdate.day,
            title: this.dataToUpdate.title
          }
          const response = await axios.patch(`/worship-time/update/${this.dataToUpdate.worshipTimeId}`, payload)
          console.log(response.data)
          console.warn(response.data.worshipTime)
          this.time=response.data.worshipTime
          this.day=response.data.worshipTime
          this.title=response.data.worshipTime
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

