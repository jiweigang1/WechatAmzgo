const cloud = require('wx-server-sdk')
  cloud.init()
const request = require('sync-request');
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var url  = event.url;
  var data =  event.data?event.data:{};
  var method = event.method? event.method:"POST"
  var res = request(method, url, data);
  var body = res.getBody();
  return JSON.parse(res.getBody().toString());
};