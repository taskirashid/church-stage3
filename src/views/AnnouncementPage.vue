<template>
  <div class="viewDiv announcement viewht scroll">
    <h3>Announcement</h3>
    <div class="bgann" v-for="item in list" :key="item.id">
      <div class="tit-date">
        <h5>{{item.title}}</h5>
        <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
          <i class="fas fa-edit"></i>
        </button>  
      </div>
      <Announcement :announcementData = 'item.body' />
      <div class="dateField">
        <h6 class="date">{{getCreateDate(item.updatedAt)}}</h6>
      </div>
    </div>
    
        

    <!-- Modal -->

    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" >
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Announcement</h4>
            </div>

            <div class="modal-body">

              <div>
                <h5>Title</h5>
                <input class="titleInput" type="text" v-model="dataToUpdate.title">
              </div>

              <div>
                <div class="titleName">
                  <h5 class="card-title">Announcement</h5>
                </div>
                <div class="inputbox">
                  <textarea class="fillbox" type="text" v-model="dataToUpdate.body"></textarea>
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



  </div>
</template>

<script>
import moment from 'moment'
import axios from '@/axios/axios'
import Announcement from '@/components/Announcement/Announcement.vue'

export default {
  name: 'AnnouncementPage-',
  components:{
    Announcement,
  },
  data(){
      return{
        list: [],
        dataToUpdate: ''
      }
    },

    async mounted() {
       this.getAnnouncementList()
    },
    methods: {
      async getAnnouncementList() {
        const response = await axios.get(`/announcement/get`)
        console.log(response)
        console.warn(response.data.announcements)
        this.list=response.data.announcements
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
            body: this.dataToUpdate.body,
            title: this.dataToUpdate.title
          }
          const response = await axios.patch(`/announcement/update-announcement/${this.dataToUpdate.announcementId}`, payload)
          console.log(response.data)
          console.warn(response.data.announcements)
          this.body=response.data.announcements
          this.title=response.data.announcements
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

.bgann{
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 15px;
  margin: 2rem 0rem 2rem 0rem;
}


.tit-date{
  display: flex;
  justify-content: space-between;
}

.date{
  color: #838383eb;
}

h5{
  color: var(--color-dark);
  font-size: 15px;
  font-weight: 500;
}

.dateField{
  display: flex;
  justify-content: flex-end;
}




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