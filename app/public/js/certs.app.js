var commentApp = new Vue({
  el: '#certTable',
  data: {
    certs: [{
      certID:'',
      certName:'',
      certAgency:'',
      standardExpiry:''
    }],
    newCert:{
      certName:'',
      certAgency:'',
      standardExpiry:''
    }
  },
  methods: {
    fetchComment(){
      fetch('api/certifications/index.php')
      .then( response => response.json() )
      .then( json => {
        this.certs=json;
        console.log(this.certs);
      });
  },
    createComment(){
      fetch('api/certifications/create.php', {
        method: 'POST',
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.certs.push(json[0]);
        this.newUser = this.newCommentData();
      });
      console.log("Creating (POSTing)...!")
      console.log(this.newCert);
    },
    newCommentData() {
      return {
        certID:"",
        certName:"",
        certAgency:"",
        standardExpiry:""
      }
    }
  },
    created(){
      this.fetchComment();
      console.log("fetched");
    }
});
