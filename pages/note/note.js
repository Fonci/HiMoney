// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDate: '',//选择年月日
    popDate: false,
    year: '',
    month: '',
    date: '',
    detailTime: '',//具体花费时间


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  closePop() {
    this.setData({
      popDate: false
    })
  },
  checkDate() {
    this.setData({
      popDate: true
    })
  },
  confirmPop(val) {
    console.log(new Date(val.detail))
    this.setData({
      popDate: false,
      year: new Date(val.detail).getFullYear(),//年
      month: new Date(val.detail).getMonth() + 1 < 10 ? '0' + (new Date(val.detail).getMonth() + 1) : new Date(val.detail).getMonth() + 1,//月
      popMonth: false
    })
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