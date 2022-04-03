import { createApp } from 'vue'
import App from '@/App.vue'
import Common from '@/plugins/common'
import Store from '@/store';

import '@/assets/styles/reset.scss';

const app = createApp(App)

app.use(Common)
app.use(Store)

app.mount('#app')

