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
    activeC:""
  },
  computed: {
    activePName() {
      return this.activeP ? this.activeP.lastName + ", " + this.activeP.firstName : ""
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
