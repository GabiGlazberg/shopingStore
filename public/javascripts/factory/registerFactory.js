import App from '../app';

App.factory('registerFactory',  function () {
    var value = {};
    return {
      returnValue: function (formData) {
      this.formData = formData;
      if (!formData.username) return false;
      if (!formData.password) return false;
      if (!formData.city) return false;
      if (!formData.address) return false;
      return formData;
      }
  }
});