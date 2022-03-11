import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import progress from "./progress";
import chooseCity from "./chooseCity";
import form from "./form";
import myFrom from "./form/myFrom";
import modalForm from "./modalForm";
import myDialog from "./modalForm/myDialog";
import table from "./table";
import myTable from "./table/myTable";
import calendar from "./calendar";

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  chooseTime,
  chooseDate,
  chooseCity,
  progress,
  form,
  myFrom,
  modalForm,
  table,
  myTable,
  calendar,
  myDialog,
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
