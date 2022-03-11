import { App } from "vue";
import myForm from "./src/myForm.vue";

export default {
  install(app: App) {
    app.component("my-form", myForm);
  },
};
