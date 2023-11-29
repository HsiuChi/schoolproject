// pages/thingsList/thingsList.js
import {getBaseUrl} from '../../utils/request';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    baseUrl:'',
   //闲置商品分页信息
   kindGoodsList:[],
   good_currentPage:1,
   good_pageSize:8,
   good_total:0,
   good_isloading:false,
   isEmptyGoodInfo:false,
   //求购商品分页信息
   kindNeedGoodsList:[],
   needgood_currentPage:1,
   needgood_pageSize:8,
   needgood_total:0,
   needgood_isloading:false,
   isEmptyNeedGoodInfo:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const baseUrl=getBaseUrl();
    this.setData({
      query:options,
      baseUrl:baseUrl
    })
    this.getKindGoods()
    this.getKindNeedGoods()
  },

    //获取闲置商品数据的方法
    getKindGoods(cb){
      this.setData({good_isloading:true})
      //展示loading效果
      wx.showLoading({
        title: '数据加载中...',
      })
      wx.request({
        url:`${this.data.baseUrl}/goods/${this.data.good_currentPage}/${this.data.good_pageSize}/${this.data.query.title}` ,
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
            kindGoodsList:[...this.data.kindGoodsList, ...res.data.data.records],
            good_total:res.data.data.total,
          })
        },
        complete:()=>{
          //隐藏loading效果
          wx.hideLoading()
          this.setData({good_isloading:false})
          cb && cb()
        }
      })
    },
     //获取求购商品数据的方法
     getKindNeedGoods(cb){
      this.setData({needgood_isloading:true})
      //展示loading效果
      wx.showLoading({
        title: '数据加载中...',
      })
      wx.request({
        url:`${this.data.baseUrl}/needgoods/${this.data.needgood_currentPage}/${this.data.needgood_pageSize}/${this.data.query.title}` ,
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
            kindNeedGoodsList:[...this.data.kindNeedGoodsList, ...res.data.data.records],
            needgood_total:res.data.data.total,
          })
        },
        complete:()=>{
          //隐藏loading效果
          wx.hideLoading()
          this.setData({needgood_isloading:false})
          cb && cb()
        }
      })
    },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
     title:this.data.query.title
    })
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
    //下拉刷新需要重置关键数据
    this.setData({
     good_currentPage:1,
     kindGoodsList:[],
     good_total:0,
     needgood_currentPage:1,
     kindNeedGoodsList:[],
     needgood_total:0,
   })
   //重新发起数据请求
   this.getKindGoods(()=>{
     wx.stopPullDownRefresh()
   })
   this.getKindNeedGoods(()=>{
     wx.stopPullDownRefresh()
   })
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
    this.getKindGoods()

    if(this.data.needgood_currentPage * this.data.needgood_pageSize>=this.data.needgood_total){
      return ;
    }
    if(this.data.needgood_isloading) return
    this.setData({
      needgood_currentPage:this.data.needgood_currentPage+1
    })
    this.getKindNeedGoods()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})