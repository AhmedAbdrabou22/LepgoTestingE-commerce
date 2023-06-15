import axios from 'axios'

// دا ال url الاساسي وهنستخدمه في كل الصفحات
// const baseURL = axios.create({ baseURL: "https://api.lepgo.online" });
const baseURL = axios.create({
    baseURL: 'https://api.lepgo.online',
    headers: {
      'Authorization': 'Bearer 1241|ho3F3x3oP9nyI8cVERmt2nTE7TDGUvMgGJ25DW2N',
    },
  });
  

export default baseURL;