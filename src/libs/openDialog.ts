import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  let { title, content,confirm,cancel } = options;
  console.log(content)
  const template = document.createElement("template");
  document.body.appendChild(template);
  createApp(Dialog).mount(template);
  //创建一个dialog
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          title,
          visible: true,
          "onUpdate:visible": (newVal) => {
            if (newVal === false) {
              app.unmount();
              template.remove()
            }
          },
          confirm,
          cancel
        },
        {
            //在h函数里面创建插槽
            content:props => h("span", null, content),
        }
      );
    },
  });
  app.mount(template);
};
