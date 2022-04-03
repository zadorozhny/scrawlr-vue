import Button from '@/kit/controls/Button.vue';
import Checkbox from '@/kit/inputs/Checkbox.vue';
import Icon from '@/kit/views/Icon.vue';

export default {
  install(Vue) {
    Vue.component(Button.name, Button);

    Vue.component(Checkbox.name, Checkbox);

    Vue.component(Icon.name, Icon);
  }
};
