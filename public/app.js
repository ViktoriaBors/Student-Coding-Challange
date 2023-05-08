const app = Vue.createApp({
    data(){
        return {
          organization: undefined,
          name: undefined,
          email: undefined,
          phone: undefined,
          result: '',
        }
    },
    methods: {
        submit(){
            if(this.emailError || this.phoneError || !this.name || !this.organization ){
                this.result = "Submit is not successful. Please check that you filled the form correct."
                return
            } else {
                const body = {
                    org: this.organization,
                    name: this.name,
                    email: this.email,
                    phone: this.phone

                }
                fetch('https://europe-west1-vocaire-main.cloudfunctions.net/student_test', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                  })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data)
                        if(data === 'OK'){
                            this.result = "Your information was sent successfully. "
                        }
                    })
                    .catch(error => console.error(error));
            }
        }
    },
    computed:{
        emailError(){
            if(this.email !== undefined){
                return !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email));
            } else return false;
        },
        phoneError(){
            if(this.phone !== undefined){
                return !/^\+?45\d{8}$/.test(this.phone);
            } else return false
        }        
    }
})

app.mount("#app")
