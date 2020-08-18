// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: '',
    cata: '',
    popDate: false,
    showDate: '',//选择年月日
    detailTime: '',//具体花费时间
    mark: '',//备注信息
    maxDate: new Date().getTime(),
    currentDate: new Date().getTime(),

   
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
    let year = new Date(val.detail).getFullYear();//年
    let month = new Date(val.detail).getMonth() + 1 < 10 ? '0' + (new Date(val.detail).getMonth() + 1) : new Date(val.detail).getMonth() + 1;//月
    let date = new Date(val.detail).getDate() < 10 ? '0' + new Date(val.detail).getDate() : new Date(val.detail).getDate();//日
    this.setData({
      popDate: false,
      popMonth: false,
      showDate: year + '-' + month + '-' + date
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