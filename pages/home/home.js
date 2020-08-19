// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: '1000.00',//总支出
    popMonth: false,//年月弹出框是否显示
    currentDate: new Date().getTime(),
    maxDate: new Date().getTime(),
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
    ,
    showNote: []
  },
  // 显示年月弹出框
  showMonth() {
    this.setData({
      popMonth: true
    })
  },
  // 取消年月弹出框
  closePop() {
    this.setData({ popMonth: false });
  },
  // 选择年月 确定
  confirmPop(val) {
    this.setData({
      year: new Date(val.detail).getFullYear(),//年
      month: new Date(val.detail).getMonth() + 1 < 10 ? '0' + (new Date(val.detail).getMonth() + 1) : new Date(val.detail).getMonth() + 1,//月
      popMonth: false
    })
    // 请求后台数据显示相应的内容
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('noteInfo')) {
      this.setData({
        showNote: showNote.push(wx.getStorageSync('noteInfo'))
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})