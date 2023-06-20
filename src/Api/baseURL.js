import axios from 'axios'

// دا ال url الاساسي وهنستخدمه في كل الصفحات
// const baseURL = axios.create({ baseURL: "https://api.lepgo.online" });
const baseURL = axios.create({
    baseURL: 'https://api.lepgo.online',
    headers: {
      'Authorization': 'Bearer 1276|b6S1GwIln9Vha9VoOd1Yi1zT2u57ozNXHGyb8M61',
    },
  });
  

export default baseURL;