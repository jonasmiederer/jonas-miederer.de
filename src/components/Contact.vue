<template>
  <section id="contact" class="row">

    <div class="col-12 headline">
      <mdc-icon class="accent" icon="mail"></mdc-icon>
      <h2 class="accent">Contact</h2>
    </div>
    <div class="col-12 col-lg-3 contact-left">
      <div class="description">
        Got any questions or remarks? Feel free to contact me! Use the form to drop me a message and I will try to reach
        back to you as soon as possible. Thank you!
      </div>
    </div>

    <div class="col-12 col-lg-9 row contact-right">
      <mdc-textfield v-model="contact.name" label="Your Name" class="col-12 col-md-6" required
                     type="text"></mdc-textfield>
      <mdc-textfield v-model="contact.email" label="Your email address" class="col-12 col-md-6" required
                     type="email"></mdc-textfield>
      <mdc-textfield v-model="contact.subject" label="Subject" class="col-12 " required type="text"></mdc-textfield>
      <mdc-textfield v-model="contact.message" label="Message" class="col-12" fullwidth multiline rows="5" required
                     type="text"></mdc-textfield>

      <mdc-button id="contact-send" class="col-12 col-md-3 float-right" @click="send"
                  :raised="true">Send
      </mdc-button>
    </div>

    <mdc-snackbar v-model="snack"></mdc-snackbar>
  </section>
</template>

<script>

  export default {
    name: 'Contact',
    components: {},


    data() {
      return {
        contact: {
          "name": "",
          "email": "",
          "subject": "",
          "message": ""
        },
        snack: null,
        buttonDisabled: true,
        messages: {
          success: "Yay, got your message!",
          error: "Sorry, something went wrong with your message",
          missing_information: "Please fill the required fields to send your message",
          invalid_email: "Please enter a valid mail address"
        }
      }
    },

    methods: {
      send(e) {
        e.preventDefault();
        var success = false;

        if (this.contact["name"] && this.contact["email"] && this.contact["subject"] && this.contact["message"]) {
          if (this.validEmail(this.contact["email"])) {
            this.$http.post('post.php', JSON.stringify(this.contact))
              .then(function (response) {
                success = response["body"]["success"];
              }, function (error) {
                console.log(error);
              });
            this.snack = {
              message: success ? this.messages.success : this.messages.error
            }
          } else {
            this.snack = {
              message: this.message.invalid_email
            };
          }
        } else {
          this.snack = {
            message: this.message.missing_information
          };
        }
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    },

  }
</script>

<style scoped>

  #contact {
    border-collapse: collapse;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);
  }

  .headline {
    text-align: left;
    padding: 20px;
  }

  .headline h2 {
    display: inline-block;
    padding-left: 10px;
  }

  .contact-left {
    text-align: left;
    padding: 20px;
  }

  .contact-right {
    padding: 0 20px 20px 20px;
  }

  #contact-send {
    margin: 0 15px;
  }
</style>
