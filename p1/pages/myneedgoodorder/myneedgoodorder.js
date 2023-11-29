// pages/myneedgoodorder/myneedgoodorder.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
import {getBaseUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'', //基本请求路径
    //我的求购商品信息
    myneedgoodsList:[],
    currentPage:1,
    pageSize:8,
    total:0,
    isloading:false,
    isEmptyGoodInfo:false,
  },


    //获取求购商品数据的方法
    getMyNeedGoods(cb){
      this.setData({isloading:true})
      //展示loading效果
      wx.showLoading({
        title: '数据加载中...',
      })
      wx.request({
        url:`${this.data.baseUrl}/needgoods/myneedgood/${this.data.currentPage}/${this.data.pageSize}/oQqOm5UyqmyryBqO50pVg3804tIc` ,  
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
            myneedgoodsList:[...this.data.myneedgoodsList, ...res.data.data.records],
            total:res.data.data.total,
          })
        },
        complete:()=>{
          //隐藏loading效果
          wx.hideLoading()
          this.setData({isloading:false})
          cb && cb()
        }
      })
    },

  //撤销按钮处理事件
  deleteMyNeedGood(e){
    wx.showModal({
      title: '友情提示',
      content: '亲，确定撤销吗',
      complete: (res) => {
        if (res.cancel) {
          return ;
        }
    
        if (res.confirm) {
          wx.request({
            url: `${this.data.baseUrl}/needgoods/myneedgooddelete/${e.target.dataset.id}`,
            method:'DELETE',
            success:(r)=>{
              this.onPullDownRefresh()
              wx.showToast({
                title: '撤销成功',
                icon:'success'
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const baseUrl=getBaseUrl();
    this.setData({
      baseUrl:baseUrl
    })
    this.storeBindings=createStoreBindings(this,{
      store,
      fields:['customers'],
      actions:[]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getMyNeedGoods()
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
  currentPage:1,
  myneedgoodsList:[],
  total:0,
})
    this.getMyNeedGoods(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.currentPage * this.data.pageSize>=this.data.total){
      return wx.showToast({
        title: '数据加载完毕',
        icon:'none'
      });
    }
    if(this.data.isloading) return
    this.setData({
      currentPage:this.data.currentPage+1
    })
    this.getMyNeedGoods()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})