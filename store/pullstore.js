import { Store as PullStateStore } from 'pullstate';

//import { lists, homeItems, notifications } from '../mock';



const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  settings: {
    enableNotifications: true,
  },
});

export default Store;