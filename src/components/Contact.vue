<template>
  <section id="contact" class="row">

    <div class="col-12 headline">
      <mdc-icon class="accent" icon="mail"></mdc-icon>
      <h2 class="accent">Contact</h2>
    </div>
    <div class="col-12 col-lg-3 contact-left">
      <div class="description">
        Love is the only mind, the only guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly
        with sour triple sec.All of those processors evacuate strange, modern vogons.Love is the only mind, the only
        guarantee of attitude.Place the sauerkraut in a pan, and flavor thoroughly with sour triple sec.All of those
        processors evacuate strange, modern vogons.
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

      <mdc-button id="contact-send" class="col-12 col-md-3 float-right" @click="send" :disabled="buttonDisabled"
                  :raised="true">Send
      </mdc-button>
    </div>

    <mdc-snackbar v-model="snack"></mdc-snackbar>
  </section>
</template>

<script>

  // import MdcIcon from "vue-mdc-adapter/dist/icon";
  // import MdcTextfield from "vue-mdc-adapter/dist/textfield";

  export default {
    name: 'Contact',
    components: {
      // MdcTextfield,
      // MdcIcon
    },


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
          success: "Yay, message successfully sent.",
          error: "Sorry, the message failed to send."
        }
      }
    },

    methods: {
      send() {
        // TODO send message

        var success = false;


        this.snack = {
          message: success ? this.messages.success : this.messages.error,
          actionText: 'action',
          actionHandler() {/* do action */
          },
        };
      },
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
    /*margin-top: 66px;*/
  }

  #contact-send {
    margin: 0 15px;
  }
</style>
