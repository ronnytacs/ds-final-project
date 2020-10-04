/*jshint esversion: 6 */

var app = new Vue({
  el: '#DateFormat',
  data: {
      userName:'',
      userEmail:'',
      userImgLarge:'',
      userImgThumb:'',
      userOrigin:'',
      userDob: '',
      userAge:''
    },
  computed: {
    age() {
      return moment().diff(this.userDob, 'years');
    }
  },
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser: function() {
      fetch("https://randomuser.me/api/")
      .then( response => response.json() )
      .then( data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.userEmail = userData.email;
        this.userImgLarge = userData.picture.large;
        this.userImgThumb = userData.picture.thumbnail;
        this.userOrigin = userData.location.country;
        this.userAge = userData.dob.age;
        this.userDob = userData.dob.date;

        console.log('user country'+userData.location.country);
      });
    },
    formatDate(d) {
      return moment(d).format("MM/DD/YYYY");
    }


  }
});
