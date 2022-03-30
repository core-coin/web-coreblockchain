import axios from 'axios';
const token = 'd2826a515af7932e1e7a98523b4dbf30049d54b2b99df8ee31b9dbf31de3c9e25f342ca654cfbc4b'

const projectId = 494079;
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export function getTaskList() {
  axios.get(`https://api.crowdin.com/api/v2/projects/${projectId}/translations/builds`, config)
    .then(res => {
      console.log(res.data);
      return res.data
    })
}
