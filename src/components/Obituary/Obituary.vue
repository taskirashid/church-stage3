<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th>{{getCreateDate(item.date)}}</th>
                <td>{{item.member}}</td>
                <td>{{item.description}}</td>
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
                          <h4 class="modal-title">Obituary</h4>
                        </div>
                        <div class="modal-body">
                          
                          <div>
                            <h5>Date</h5>
                            <input class="titleInput" type="text" v-model="dataToUpdate.date">
                          </div>
                          <div>
                            <h5>Name</h5>
                            <input class="titleInput" type="text" v-model="dataToUpdate.member">
                          </div>
                          <div class="titleName">
                              <h5 class="card-title">Description</h5>
                          </div>
                          <div class="inputbox">
                              <textarea class="fillbox" type="text" v-model="dataToUpdate.description"></textarea>
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
import moment from 'moment'

export default {
  name: 'Obituary-',
  data(){
      return{
        list: [],
        dataToUpdate: ''
      }
    },
    
    async mounted() {
       this.getObituaryList()
    },
    methods: {
      async getObituaryList() {
        const response = await axios.get(`/obituary/list`)
        console.log(response)
        console.warn(response.data.obituary)
        this.list=response.data.obituary
      },
      getCreateDate(date){
        return moment(date).format('DD-MM-YYYY')
      },


      
      editData(item){
        this.dataToUpdate={...item}
      },

      async updateData() {
        try{
          const payload = {
            date: this.dataToUpdate.date,
            member: this.dataToUpdate.member,
            description: this.dataToUpdate.description,
          }
          const response = await axios.patch(`/obituary/update/${this.dataToUpdate.obituaryId}`, payload)
          console.log(response.data)
          console.warn(response.data.obituary)
          this.date=response.data.obituary
          this.member=response.data.obituary
          this.description=response.data.obituary
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
  /* display: flex; */
}

.modal{
  margin-top: 120px;
}

.titleInput{
  /* width: 250px; */ 
  height: 34px;
  /* height: 100%;  */
  width: 75%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}


.fillbox{
  /* margin-left: 12px; */
  height: 150px;
  width: 100%;
}

.inputbox{
  width: 75%;
}

.inputbox textarea{
  width: 100%;
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 5px;
}



</style>