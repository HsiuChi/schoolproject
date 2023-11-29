// pages/search/search.js
import {getBaseUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'', //基本请求路径
    //闲置商品搜索分页信息
    searchGoodList:[],//闲置商品搜索结果
    good_currentPage:1,
    good_pageSize:8,
    good_total:0,
    good_isloading:false,
    goodInputValue:'',  //闲置商品搜索框输入内容
    isEmptyGoodInfo:false, //判断闲置商品搜索结果是否为空

    //求购商品分页搜索信息
    searchNeedGoodList:[],//求购商品搜索结果
    needgood_currentPage:1,
    needgood_pageSize:8,
    needgood_total:0,
    needgood_isloading:false,
    needgoodInputValue:'',  //求购商品搜索框输入内容
    isEmptyNeedGoodInfo:false, //判断求购商品搜索结果是否为空
  },
//请求搜索闲置商品数据事件
getSearchGoodList(){
    //展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
  wx.request({
    url: `${this.data.baseUrl}/goods/searchgood/${this.data.good_currentPage}/${this.data.good_pageSize}/${this.data.goodInputValue}`,
    method:'GET',
    success:(res)=>{
      if(res.data.data.records.length==0){
        this.setData({
          isEmptyGoodInfo:true
        })
      } else{
          this.setData({
            isEmptyGoodInfo:false
          })
        }
      this.setData({
        searchGoodList:[...this.data.searchGoodList,...res.data.data.records],
        good_total:res.data.data.total
      })
    },
    complete:()=>{
      //隐藏loading效果
      wx.hideLoading()
      this.setData({good_isloading:false})
    }
  })
},
//闲置商品输入确定按钮处理事件
goodHandleSure(){
  if(this.data.goodInputValue==''){
    return wx.showToast({
      title: '亲，请先输入内容',
      icon:'none'
    })
  }
    this.setData({
      good_isloading:true,
      searchGoodList:[],
      isEmptyGoodInfo:false,
    })
      this.getSearchGoodList()
  },

//请求搜索求购商品数据事件
getSearchNeedgoodList(){
    //展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
  wx.request({
    url: `${this.data.baseUrl}/needgoods/searchneedgood/${this.data.needgood_currentPage}/${this.data.needgood_pageSize}/${this.data.needgoodInputValue}`,
    method:'GET',
    success:(res)=>{
      if(res.data.data.records.length==0){
        this.setData({
          isEmptyNeedGoodInfo:true
        })
      } else{
        this.setData({
          isEmptyNeedGoodInfo:false
        })
      }
      this.setData({
        searchNeedGoodList:[...this.data.searchNeedGoodList,...res.data.data.records],
        needgood_total:res.data.data.total
      })
    },
    complete:()=>{
      //隐藏loading效果
      wx.hideLoading()
      this.setData({needgood_isloading:false})
    }
  })
},
//求购商品输入确定按钮处理事件
needgoodHandleSure(){
  if(this.data.needgoodInputValue==''){
    return wx.showToast({
      title: '亲，请先输入内容',
      icon:'none'
    })
  }
  this.setData({
    needgood_isloading:true,
    searchNeedGoodList:[],
    isEmptyNeedGoodInfo:false,
  })
      this.getSearchNeedgoodList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const baseUrl=getBaseUrl();
    this.setData({
      baseUrl:baseUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.good_currentPage * this.data.good_pageSize>=this.data.good_total){
      return ;
    }
    if(this.data.good_isloading) return
    this.setData({
      good_currentPage:this.data.good_currentPage+1
    })
    this.getSearchGoodList()

    if(this.data.needgood_currentPage * this.data.needgood_pageSize>=this.data.needgood_total){
      return ;
    }
    if(this.data.needgood_isloading) return
    this.setData({
      needgood_currentPage:this.data.needgood_currentPage+1
    })
    this.getSearchNeedgoodList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})