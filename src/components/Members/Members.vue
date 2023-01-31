<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Member id</th>
                <th scope="col">Edavaka register no</th>
                <th scope="col">Name</th>
                <th scope="col">Prayer Group</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.memberId}}</th>
                <td>{{item.edavaka_register_no}}</td>
                <td>{{item.member_name}}</td>
                <td>{{item.prayer_group.prayerGroupName}}</td>
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
                          <h4 class="modal-title">Member</h4>
                        </div>
                        <div class="modal-body">
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Member is priest :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.member_is_priest"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.member_is_priest" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.member_is_priest" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.member_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Pet Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.pet_name">
                            </div>
                          </div>

                          <!-- <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Password :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="password" v-model="dataToUpdate.password">
                            </div>
                          </div> -->

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Gender :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.gender">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Membership Status :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.membership_status"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.membership_status" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.membership_status" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">House Name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.house_name">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Address 1 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.address1">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Address 2 :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.address2">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Postoffice :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.postoffice">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Pincode :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.pincode">
                            </div>
                          </div>

                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Voting Right :</h5>
                            </div>
                            <div class="inputbox">
                              <!-- <input class="fillbox" type="text" v-model="dataToUpdate.voting_right"> -->
                              <div class="checkSec">
                                <div>
                                  <input type="radio" v-model="dataToUpdate.voting_right" value="true"> Yes
                                </div>
                                <div>
                                  <input type="radio" v-model="dataToUpdate.voting_right" value="false"> No
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Prayer Group :</h5>
                            </div>
                            <div class="inputbox">
                              <div class="selectSec">
                                <select class="form-control fillbox" v-model="dataToUpdate.prayer_group._id" >
                                  <option v-for="item in pralist" :key="item._id" :value="item._id">{{item.prayerGroupName}}</option>
                                </select>
                              </div>
                            </div>
                          </div> 
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Designation :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.designation">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Organisation :</h5>
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
                              <h5 class="card-title">Landline :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.landline">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Mobile Phone :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.mobile_phone">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Phone Office :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.phone_office">
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
                              <h5 class="card-title">Blood Group :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.blood_group">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Birthday :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.birthday">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Marriage Date :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.marriage_date">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Home parish house name :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.home_parish_house_name">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Home parish :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.home_parish">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Native place :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.native_place">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Latitude :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.latitude">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">Longitude :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.longitude">
                            </div>
                          </div>
                          
                          <div class="inputField">
                            <div class="titleName">
                              <h5 class="card-title">General remarks :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.general_remarks">
                            </div>
                          </div>



                            
                          <button  @click="editData(item)" type="button" class="bttn" data-toggle="modal" data-target="#myModal">Reset Password
                            <!-- <i class="fas fa-edit"></i> -->
                          </button>  

                          
              
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
                              <h5 class="card-title">Home parish :</h5>
                            </div>
                            <div class="inputbox">
                              <input class="fillbox" type="text" v-model="dataToUpdate.home_parish">
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
    data(){
      return{
        list: [],
        pralist: [],
        orglist: [],
        // poslist: [],
        dataToUpdate: '',
        dialog: false,
        // value: ''
      }
    },
    
    async mounted() {
       this.getMemberList()
       this.getPrayerGroupList()
       this.getOrgansiationList()
    },
    methods: {
      async getMemberList() {
        const response = await axios.get(`/member/getAllMember`)
        console.log(response)
        console.warn(response.data.member)
        this.list=response.data.member
      },

      
      async getPrayerGroupList() {
        const response = await axios.get(`/prayer-group/list-prayer-group`)
        console.log(response)
        console.warn(response.data.listOfPrayerGroup)
        this.pralist=response.data.listOfPrayerGroup
      },
      
      async getOrgansiationList() {
        const response = await axios.get(`/organisation/list`)
        console.log(response)
        console.warn(response.data.organisation)
        this.orglist=response.data.organisation
      },


      editData(item){
        this.dialog = true
        this.dataToUpdate={...item}
        // console.log(this.dataToUpdate.organisation.organisationId)
        // console.log(this.dataToUpdate.position.positionId)
      },

      async updateData() {
        try{
          const payload = {
            member_is_priest: this.dataToUpdate.member_is_priest,
            // edavaka_register_no: this.dataToUpdate.edavaka_register_no,
            member_name: this.dataToUpdate.member_name,
            pet_name: this.dataToUpdate.pet_name,
            // password: this.dataToUpdate.password,
            gender: this.dataToUpdate.gender,
            // Date_of_joining: this.dataToUpdate.Date_of_joining,
            membership_status: this.dataToUpdate.membership_status,
            house_name: this.dataToUpdate.house_name,
            address1: this.dataToUpdate.address1,
            address2: this.dataToUpdate.address2,
            postoffice: this.dataToUpdate.postoffice,
            pincode: this.dataToUpdate.pincode,
            voting_right: this.dataToUpdate.voting_right,
            prayer_group: this.dataToUpdate.prayer_group._id,
            designation: this.dataToUpdate.designation,
            organisation: this.dataToUpdate.organisation._id,
            landline: this.dataToUpdate.landline,
            mobile_phone: this.dataToUpdate.mobile_phone,
            phone_office: this.dataToUpdate.phone_office,
            email: this.dataToUpdate.email,
            blood_group: this.dataToUpdate.blood_group,
            birthday: this.dataToUpdate.birthday,
            marriage_date: this.dataToUpdate.marriage_date,
            home_parish_house_name: this.dataToUpdate.home_parish_house_name,
            home_parish: this.dataToUpdate.home_parish,
            native_place: this.dataToUpdate.native_place,
            latitude: this.dataToUpdate.latitude,
            longitude: this.dataToUpdate.longitude,
            general_remarks: this.dataToUpdate.general_remarks,
          }
          const response = await axios.patch(`/member/updateMember/${this.dataToUpdate.memberId}`, {data: JSON.stringify(payload)})
          console.log(response.data)
          console.warn(response.data.member)
          this.member_is_priest=response.data.memberUpdate
          // this.edavaka_register_no=response.data.memberUpdate
          this.member_name=response.data.memberUpdate
          this.pet_name=response.data.memberUpdate
          // this.password=response.data.memberUpdate
          this.gender=response.data.memberUpdate
          // this.Date_of_joining=response.data.memberUpdate
          this.membership_status=response.data.memberUpdate
          this.house_name=response.data.memberUpdate
          this.address1=response.data.memberUpdate
          this.address2=response.data.memberUpdate
          this.postoffice=response.data.memberUpdate
          this.pincode=response.data.memberUpdate
          this.voting_right=response.data.memberUpdate
          this.prayer_group=response.data.memberUpdate
          this.designation=response.data.memberUpdate
          this.organisation=response.data.memberUpdate
          this.landline=response.data.memberUpdate
          this.mobile_phone=response.data.memberUpdate
          this.phone_office=response.data.memberUpdate
          this.email=response.data.memberUpdate
          this.blood_group=response.data.memberUpdate
          this.birthday=response.data.memberUpdate
          this.marriage_date=response.data.memberUpdate
          this.home_parish_house_name=response.data.memberUpdate
          this.home_parish=response.data.memberUpdate
          this.native_place=response.data.memberUpdate
          this.latitude=response.data.memberUpdate
          this.longitude=response.data.memberUpdate
          this.general_remarks=response.data.memberUpdate
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
  display: flex;
  align-items: center;
}

.inputField{
  display: flex;
  width: 75%;
  margin-bottom: 10px;
}

.selectSec{
  width: 100%;
}

.checkSec{
  display: flex;
  column-gap: 10px;
}


</style>