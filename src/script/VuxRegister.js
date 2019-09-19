import {
    Flexbox,
    FlexboxItem,
    AlertPlugin,
    ConfirmPlugin,
    LoadingPlugin,
    WechatPlugin,
    ToastPlugin,
    ViewBox,
    Checklist,
    Cell,
    CellBox,
    CellFormPreview,
    Group,
    XButton,
    Box,
    Icon,
    PopupPicker,
    XInput,
    XTextarea,
    Selector,
    Range,
    XSwitch,
    XTable,
    Datetime,
    Tabbar,TabbarItem,
    Tab,TabItem,
    ButtonTab, ButtonTabItem,
  } from 'vux'
  export default class{
      constructor(){}
      install(Vue, options){
        Vue.use(AlertPlugin);
        Vue.use(ConfirmPlugin);
        Vue.use(ToastPlugin);
        Vue.use(WechatPlugin);
        Vue.use(LoadingPlugin);

        Vue.component("Flexbox", Flexbox);
        Vue.component("ButtonTab", ButtonTab);
        Vue.component("ButtonTabItem", ButtonTabItem);
        Vue.component("FlexboxItem", FlexboxItem);
        Vue.component('ViewBox', ViewBox);
        Vue.component('Checklist', Checklist);
        Vue.component('Cell', Cell);
        Vue.component('CellBox', CellBox);
        Vue.component('CellFormPreview', CellFormPreview);
        Vue.component('Group', Group);
        Vue.component('XButton', XButton);
        Vue.component('Box', Box);
        Vue.component('Icon', Icon);
        Vue.component('PopupPicker', PopupPicker);
        Vue.component('XInput', XInput);
        Vue.component('XTextarea', XTextarea);
        Vue.component('Selector',Selector);
        Vue.component('Range', Range);
        Vue.component('XSwitch',XSwitch);
        Vue.component('XTable',XTable);
        Vue.component('Tabbar',Tabbar);
        Vue.component('TabbarItem',TabbarItem);
        Vue.component('Tab',Tab);
        Vue.component('TabItem',TabItem);
        Vue.component('Datetime',Datetime);
      }
  }