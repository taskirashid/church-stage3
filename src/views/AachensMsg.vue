<template>
  <div class="viewDiv msg viewht scroll">
    <msg-tab-nav :tabs="['Vicar', 'Assi-vicar']" :selected="selected" @selected="setSelected">

      <msg-tab :isSelected="selected === 'Vicar'" >
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">

          <div class="action">

            <button  @click="editData(vicarDetails)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
              <i class="fas fa-edit"></i>
            </button>  
          
          </div>

          <MsgCard :vicarDetails = 'vicarDetails'  />
        </div>
      </msg-tab>

      <msg-tab :isSelected="selected === 'Assi-vicar'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">

          <div class="action">

            <button  @click="editData(vicarDetails)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
              <i class="fas fa-edit"></i>
            </button>  

          </div> 

          <MsgCard :vicarDetails = 'vicarDetails' />
        </div>

      </msg-tab>
    </msg-tab-nav>


      <!-- Modal -->

      <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content" >
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Aachen's Messages</h4>
              </div>
              
              <div class="modal-body">

                <div>
                  <h5>Vicar Name</h5>
                  <input class="titleInput" type="text" v-model="dataToUpdate.name">
                </div>

                <div>
                  <div class="titleName">
                    <h5 class="card-title">Vicar Messages:</h5>
                  </div>
                  <div class="inputbox">
                    <textarea class="fillbox" type="text" v-model="dataToUpdate.message"></textarea>
                  </div>

                </div>

              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button @click="updateData(vicarDetails.type)" type="submit" class="btn btn-default" data-dismiss="modal">Update</button>
              </div>
            </div>
          </div>
        </div>

      <!-- Modal -->

    
    



  </div>
  
</template>

<script>
import axios from '@/axios/axios'
import MsgTab from '@/components/Aachens/MsgTab.vue'
import MsgTabNav from '@/components/Aachens/MsgTabNav.vue'
import MsgCard from '@/components/Aachens/MsgCard.vue'

export default{
  components: { 
    MsgTabNav, 
    MsgTab,
    MsgCard
  },
  data() {
    return {
      selected: 'Vicar',
        vicarDetails: '',
        dataToUpdate: ''
    }
  },
    async mounted() {
      await this.getvicarList()
    },
  methods: {
    setSelected(tab) {
      this.selected = tab;
      console.log(tab)
      if(this.selected === 'Vicar') {
        this.getvicarList()
      } else {
        this.getAssivicarList()
      }
    },
    async getvicarList() {
        const response = await axios.get(`/achens-message/vicar-message`)
        console.log(response)
        console.warn(response.data.getMessage)
        this.vicarDetails=response.data.getMessage
      },
    async getAssivicarList() {
        const response = await axios.get(`/achens-message/asst-vicar-message`)
        console.log(response)
        console.warn(response.data.getMessage)
        this.vicarDetails=response.data.getMessage
      },


      
    editData(item){
      this.dataToUpdate={...item}
    },
    // editDataAssi(item){
    //   this.dataToUpdate={...item}
    // },

    async updateData(data) {
      console.log(data)
      let url = ''
      if(data === 'vicar') {
          url = `/achens-message/vicar-message/update-vicar-message/${this.dataToUpdate.vicarId}`
      }else{
        url = `/achens-message/asst-vicar-message/update-asst-vicar-message/${this.dataToUpdate.asstVicarId}`
      }
      try{
        const payload = {
          name: this.dataToUpdate.name,
          message: this.dataToUpdate.message
        }
        const response = await axios.patch(url, payload)
        console.log(response.data)
        console.warn(response.data.getMessage)
        this.name=response.data.getMessage
        this.message=response.data.getMessage
        if(this.selected === 'Vicar') {
          await this.getvicarList()
        } else {
          await this.getAssivicarList()
        }
      }
      catch(error){
        console.log(error)
      }
    },

  }

}

</script>

<style>

.main{
  background: var(--off-white)!important;
}



/* .msg{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
} */



.bttn{
  border: none;
  background: none;
}

.editField{
  display: flex;
  justify-content: flex-end;
}

.action{
  display: flex;
  justify-content: flex-end;
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


