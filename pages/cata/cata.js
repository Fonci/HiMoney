// pages/cata/cata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickCata(val) {
    console.log(val.currentTarget.dataset.second)
    if (val.currentTarget.dataset.second) {
      window.sessionStorage.setItem('cataName', val.currentTarget.dataset.second)
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