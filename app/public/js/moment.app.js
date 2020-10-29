/*jshint esversion: 6 */

var app = new Vue({
  el: "#Member",
  data: {
    person: [{
      personID:"",
      firstName:"",
      lastName:"",
      position:"",
      department:"",
      radioNumber:"",
      stationNumber:"",
      email:""
    }],
    newMemberForm:{
      personID:"",
      firstName:"",
      lastName:"",
      position:"",
      department:"",
      radioNumber:"",
      stationNumber:"",
      email:""
    },
    activeP: "",
    certifications: [{
      certName:"",
      certAgency:"",
      standardExpiry:""
    }]
  },
  computed: {
    activePName() {
      return this.activeP ? this.activeP.lastName + ", " + this.activeP.firstName : ""
    },
    activePID() {
      return this.activeP ? this.activeP.personID : ""
    }
  },
  methods: {
    newPData() {
      return {
        firstName: "",
        lastName: "",
        position: "",
        radioNumber: "",
        stationNumber:"",
        email:"",
        department:""
      }
    },
    createMember() {
          fetch("api/records/post.php", {
            method:"POST",
            body: JSON.stringify(this.newMemberForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.person = json;
            this.newMemberForm = this.newPData();
          });
          console.log("Creating (POSTing)...!");
          console.log(this.newMemberForm);
        },
        getCert(){
          fetch('api/records/getCert.php?personID='+this.activePID)
          .then( response => response.json() )
          .then( json => {
            this.certifications=json;
            console.log(this.certifications);
            });
          },
        deleteInfo(p) {
          fetch('api/records/delete.php', {
            method: 'POST',
            body: JSON.stringify(p),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          window.alert("Member was deleted");
          window.location.href = 'member.html';
        }
    },

created() {
  fetch("api/records/")
  .then( response => response.json() )
  .then( json => {
    this.person = json;
    console.log(json)}
  );
  this.newMemberForm = this.newPData();

}
})
