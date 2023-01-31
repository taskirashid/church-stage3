<template>
    <div class="comp">
        <div class="flash scroll-x" >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Organisation</th>
                <th scope="col">Position</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone No.</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">#</th>
                <td>{{item.organisation.organisationName}}</td>
                <td>{{item.position.positionName}}</td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phoneNo}}</td>
                <td>  
                  <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">
                    <i class="fas fa-edit"></i>
                  </button>  
                </td>
              </tr>


              
                <!-- Modal -->

                <div class="modal fade" id="myModal" role="dialog" v-if="dialog">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" >
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Committee Member</h4>
                        </div>
                        <div class="modal-body">
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">organisation :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="dataToUpdate.organisation._id" >
                                  <option v-for="item in orglist" :key="item._id" :value="item._id">{{item.organisationName}}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Position :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="dataToUpdate.position._id" >
                                  <option v-for="item in poslist" :key="item._id" :value="item._id">{{item.positionName}}</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Email :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.email">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Phone No :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.phoneNo">
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
import axios from '@/axios/axios'

export default {
  name: 'Members-',
  props: {
    msg: String
  },
  data(){
      return{
        list: [],
        orglist: [],
        poslist: [],
        dataToUpdate: '',
        dialog: false,
      }
    },
    
    async mounted() {
       this.getMemberList()
       this.getOrgansiationList()
       this.getPositionList()
    },
    methods: {
      async getMemberList() {
        const response = await axios.get(`/committe-member/list`)
        console.log(response)
        console.warn(response.data.member)
        this.list=response.data.member
        // this.dataToUpdate = this.list[0]
      },
      
      async getOrgansiationList() {
        const response = await axios.get(`/organisation/list`)
        console.log(response)
        console.warn(response.data.organisation)
        this.orglist=response.data.organisation
      },

      async getPositionList() {
        const response = await axios.get(`/position/list-position`)
        console.log(response)
        console.warn(response.data.OrganizationPositions)
        this.poslist=response.data.OrganizationPositions
      },

      editData(item){
        this.dialog = true
        this.dataToUpdate={...item}
        console.log(this.dataToUpdate.organisation.organisationId)
        console.log(this.dataToUpdate.position.positionId)
      },

      async updateData() {
        try{
          const payload = {
            organisation: this.dataToUpdate.organisation._id,
            position: this.dataToUpdate.position._id,
            name: this.dataToUpdate.name,
            email: this.dataToUpdate.email,
            phoneNo: this.dataToUpdate.phoneNo
          }
          const response = await axios.patch(`/committe-member/update/${this.dataToUpdate.committeMemberId}`, payload)
          console.log(response.data)
          console.warn(response.data.member)
          this.organisation=response.data.member
          this.position=response.data.member
          this.name=response.data.member
          this.email=response.data.member
          this.phoneNo=response.data.member
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

.scroll-x{
  overflow-y: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-right: 1.5rem;
  margin-left: 300px;
}

.comp{
  padding-top: 8px;
    overflow: scroll;
}

.flash{
    display: block;
    justify-content: space-between;
    /* padding: 2rem; */
    border-radius: 2px;
    color: var(--color-dark);
    /* margin-top: 5px; */

    
    /* width: fit-content; */
    margin: 0px;
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
}

.viewDiv{
  
  padding-left: 15px;
    padding-right: 15px;
}
.table{
  margin-bottom: 0px;
}

/* hr{
  border: 1px solid #dd9a2f;
} */


.bttn{
  border: none;
  background: none;
}

.modal{
  margin-top: 120px;
}

.titleName{
  width: 156px;
  display: flex;
  justify-content: flex-end;
}

.form-control{
  /* width: 75%; */
}

.fillbox{
  height: 100%;
    border: 2px solid #c7c7c7;
    border-radius: 3px;
    padding: 5px;
}

.inputbox{
  width: 75%;
  margin-left: 10px;
}

.inputField{
  display: flex;
  width: 75%;
  margin-bottom: 10px;
}

.selectSec{
  /* margin-left: 10px; */
}

</style>