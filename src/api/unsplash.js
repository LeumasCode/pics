import axios from 'axios'

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID rVExs2IPkH_O4JG1P6zTfU11Zu-WHDHPcf_6E0niPoI",
  },
});

