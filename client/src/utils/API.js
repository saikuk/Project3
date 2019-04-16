import axios from "axios";

export default {
  // return the book from the googleapi
  getAllMenu: function() {
    return axios.get('/api/menu/')
  }
};
