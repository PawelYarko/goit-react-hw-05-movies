import axios from 'axios';
// 38f8f0caa293ab4deac25df0604d8478
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
const axiosAPI = axios.create({
  baseURL:'https://api.themoviedb.org/trending/all/day?api_key=',
  method:'get',

  params:{
    key:'38f8f0caa293ab4deac25df0604d8478',
    // image_type:'photo',
    // per_page: '12'
  },
});

async function fetchRequest() {
  try{
    const {
      data:{hits},
    } = await axiosAPI();
    return hits;
  }catch (error) {
    Promise.reject(new Error(`Не правильный запрос`));
  }
}

export default fetchRequest;