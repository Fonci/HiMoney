// pages/note/note.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    money: '',
    moneyFormatter: false,
    cata: "",
    showDate: '',//选择年月日
    // detailTime: '',//具体花费时间
    mark: '',//备注信息
    maxDate: new Date().getTime(),
    currentDate: new Date().getTime(),
    popDate: false,
    popCata: false,
    cataData: [
      {
        first: "餐饮",
        id: 103,
        children: [
          {
            second: '一日三餐',
            iconUrl: "../../images/cata_icon/meal.png",
            id: 104,
          },
          {
            second: '饮料',
            iconUrl: "../../images/cata_icon/drink.png",
            id: 105,
          },
          {
            second: '水果',
            iconUrl: "../../images/cata_icon/fruits.png",
            id: 106,
          },
          {
            second: '做饭食材',
            iconUrl: "../../images/cata_icon/vegetables.png",
            id: 107,
          },
          {
            second: '烟酒',
            iconUrl: "../../images/cata_icon/beer.png",
            id: 108,
          },
          {
            second: '超市购物',
            iconUrl: "../../images/cata_icon/superMarket.png",
            id: 109,
          },
        ]
      },
      {
        first: "交通出行",
        id: 110,
        children: [
          {
            second: '公交',
            iconUrl: "../../images/cata_icon/bus.png",
            id: 111,
          },
          {
            second: '地铁',
            iconUrl: "../../images/cata_icon/metro.png",
            id: 112,
          },
          {
            second: '打车',
            iconUrl: "../../images/cata_icon/taxi.png",
            id: 113,
          },
        ]
      }, {
        first: "休闲娱乐",
        id: 114,
        children: [
          {
            second: '周末游',
            iconUrl: "../../images/cata_icon/play.png",
            id: 115,
          },
          {
            second: '电影',
            iconUrl: "../../images/cata_icon/movie.png",
            id: 116,
          }
        ]
      }, {
        first: "服饰",
        id: 117,
        children: [
          {
            second: '衣帽',
            iconUrl: "../../images/cata_icon/wear.png",
            id: 118,
          },
          {
            second: '鞋子',
            iconUrl: "../../images/cata_icon/shoes.png",
            id: 119,
          },
          {
            second: '包包',
            iconUrl: "../../images/cata_icon/bag.png",
            id: 120,
          }
        ]
      }, {
        first: "网购",
        id: 121,
        children: [
          {
            second: '网购',
            iconUrl: "../../images/cata_icon/taobao.png",
            id: 122,
          },
          {
            second: '护肤品',
            iconUrl: "../../images/cata_icon/skinCream.png",
            id: 123,
          },
          {
            second: '化妆品',
            iconUrl: "../../images/cata_icon/makeup.png",
            id: 124,
          }
        ]
      }, {
        first: "通讯",
        id: 125,
        children: [
          {
            second: '话费',
            iconUrl: "../../images/cata_icon/phoneFee.png"
          }
        ]
      }, {
        first: "租房起居",
        id: 126,
        children: [
          {
            second: '房租',
            iconUrl: "../../images/cata_icon/rent.png",
            id: 127,
          },
          {
            second: '停车费',
            iconUrl: "../../images/cata_icon/park.png",
            id: 128,
          },
          {
            second: '生活日用',
            iconUrl: "../../images/cata_icon/dailyFee.png",
            id: 129,
          },
          {
            second: '洗车',
            iconUrl: "../../images/cata_icon/washCar.png",
            id: 130,
          },
          {
            second: '加油',
            iconUrl: "../../images/cata_icon/refuel.png",
            id: 131,
          },

        ]
      }
    ],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  clickCata(val) {
    if (val.currentTarget.dataset.second) {
      this.setData({
        cata: val.currentTarget.dataset.second
      })
      this.setData({
        popCata: false
      })
    }
  },
  // 关闭弹框
  closePop() {
    this.setData({
      popDate: false
    })
  },
  // 选择分类 弹框
  checkCata() {
    this.setData({
      popCata: true
    })
  },
  // 选择日期 弹框
  checkDate() {
    this.setData({
      popDate: true
    })
  },
  // 选择日期 确定
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

  // 获取金额
  getMoney(e) {


    if (e.detail.value) {
      this.setData({
        money: e.detail.value,
      })
    } else {
      this.setData({
        moneyFormatter: true
      })
      return;
    }
  },
  // 获取备注
  getMark(e) {
    if (e.detail.value) {
      this.setData({
        mark: e.detail.value,
      })
    }

  },
  // 保存
  takeNote() {
    let noteInfo = {};
    noteInfo = {
      money: this.data.money,
      cata: this.data.cata,
      showDate: this.data.showDate,
      mark: this.data.mark
    }
    console.log(noteInfo)
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
    // 离开页面之后清除缓存
    wx.removeStorageSync('cataName')
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