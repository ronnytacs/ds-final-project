var expApp = new Vue({
  el: '#expiredVue',
  data: {
    list: [{
      personID:'',
      firstName: '',
      lastName:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      workPhone:'',
      mobilePhone:'',
      homePhone:'',
      dateOfBirth:'',
      Gender:'',
      Position:'',
      radioNumber:'',
      stationNumber: '',
      isActive:'',
      email: '',
      startDate:'',
      department:'',
      recievedID: '',
      certID: '',
      dateRecieved: '',
      dateExpired: '',
      certName: '',
      certAgency: '',
      standardExpiry: ''
    }],
    choose: {
      certName:''
    }
  },
  methods: {
    fetchPerson(){
      fetch('api/reports/expcerts.php')
        .then( response => response.json() )
        .then( json => {
          this.list = json;
          console.log(this.list);
        });
    }
  },
  created(){
    this.fetchPerson();
    console.log("fetched");
  }
});
