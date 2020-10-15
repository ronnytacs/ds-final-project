/*jshint esversion: 6 */

var app = new Vue({
  el: '#Member',
  data: {
    memberList: [],
    personID:'',
    certList: [],
    activeP: '',
    newMemberForm: {}
  },
  computed: {
    activePName() {
      return this.activeP ? this.activeP.lastName + ', ' + this.activeP.firstName : ''
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
    handlenewMemberForm( evt ) {
          // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

          // TODO: Validate the data!

          fetch('api/records/post.php', {
            method:'POST',
            body: JSON.stringify(this.newMemberForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.memberList.push(json[0]);
          });

          console.log("Creating (POSTing)...!");
          console.log(this.newMemberForm);

          this.newMemberForm = this.newPData();
        }
      },

created() {
  fetch("api/records/")
  .then( response => response.json() )
  .then( json => {
    this.memberList = json;

    console.log(json)}
  );

  this.newMemberForm = this.newPData();
}
})
