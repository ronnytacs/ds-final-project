var commentApp2 = new Vue({
  el: '#cert2Table',
  data: {
    peoples:[{
      personID:'',
      firstName:'',
      lastName:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      workPhone:'',
      mobilePhone:'',
      dateOfBirth:'',
      gender:'',
      position:'',
      radioNumber:'',
      stationNumber:'',
      isActive:'',
      email:'',
      startDate:'',
      department:''
    }],
    selectedPersonID:'',
    certz: [{
      certID:'',
      certName:'',
      certAgency:'',
      standardExpiry:''
    }]
  },


  //this.members=json fetch(ap/cert/memfind.php?certID='+this.selectedCertID)
  methods: {
    fetchPeople(){
      fetch('api/certifications/peoples.php')
      .then( response => response.json() )
      .then( json => {
        this.peoples=json;
        console.log(this.peoples);
      });
    },
    fetchCerts(){
      fetch('api/certifications/certFind.php?personID='+this.selectedPersonID)
        .then( response => response.json() )
        .then( json => {
          this.certz=json;
          console.log(this.certz);
        });
    }
  },
    created(){
      this.fetchPeople();
      console.log("fetcheddddddd");
    }
});
