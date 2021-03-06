var reportApp = new Vue({
  el: '#stationNumberVue',
  data: {
    person: [{
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
    }],
    choose: {
      stationNumber:''
    },
    stationNumberFilter: [{
      filter: ''
    }]
  },
  methods: {
    fetchPerson(){
      fetch('api/reports/index.php')
        .then( response => response.json() )
        .then( json => {
          this.person = json;
          console.log(this.person);
        });
    }
  },
  created(){
    this.fetchPerson();
    console.log("fetched");
  }
});
