Page({
  data: {
    //默认值
    value: '2'
  },
  onLoad(){
    var self = this;
    /*
    wx.request({
      url: 'https://zmsqt.com:8443/user/order/getPackageTrace/C02-4264660-0308009',
      dataType:'application/json',
      success: function(res) {
        //  在控制台中直接输出返回的数据
        console.log(res.data)
      }
    })
    */
    /*调用云函数*/
    wx.cloud.callFunction({
      name: 'httpProxy',
      data: {
        url: "http://bjhome.apptalking.com:8880/user/order/getPackageTrace/C02-4264660-0308009",
      }
    }).then((data)=>{
      console.log("ok");
      console.log(data);
      console.log(data.result);
      self.setData({value:data.result.message});
    })
   
  }
})