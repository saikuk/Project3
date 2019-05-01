import axios from "axios";

export default {

  getAllMenu: function() {
    return axios.get('/api/menu/')
  },

  getAllOrder: function() {
    return axios.get('/api/order/')
  },

  addOrder: function(price, item){

    return axios.post("/api/addorder",{
      price,
      item
    })
  },

  removeOrder: function(id){
    return axios.delete("/api/order/" + id);
  }

};
