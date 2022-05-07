import axios from 'axios';

const url = `https://eu-api.catchthatrabbit.com/v2/api/stats`

export function getStatistics() {
  axios.get(url)
    .then(res => {
      console.log(res.data);
      return res.data
    })
}
