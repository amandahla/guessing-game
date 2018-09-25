Vue.use(VeeValidate);

var app = new Vue({
    el: '#guessing-form',
    data: {
        form: {
            guessnumber: ""
        },
        secretnumber: Math.floor((Math.random() * 100) + 1),
        result: ""
    },
    methods: {
        processForm: function () {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    if (this.secretnumber == this.form.guessnumber) {
                        this.result = "You win!";
                    }

                    if (this.form.guessnumber > this.secretnumber) {
                        this.result = "Too big!";
                    }

                    if (this.form.guessnumber < this.secretnumber) {
                        this.result = "Too small!";
                    }

                    console.log({ guessnumber: this.form.guessnumber, secretnumber: this.secretnumber });
                    return;
                } else {
                    console.log('error');
                }
            });
        }
    }
})