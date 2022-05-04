import axios from 'axios';

export function getStatistics() {
  axios.get(`https://eu-api.catchthatrabbit.com/v2/api/stats`)
    .then(res => {
      console.log(res.data);
      return res.data
    })
}
