// pages/my/my.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
import {cos} from '../../store/cos'
import {getBaseUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'' //基本请求路径
  },
//文件上传至腾讯云Cos的方法
handleFileInUploading(fileName, filePath) {
  cos.uploadFile({
      Bucket: this.data.tenCentCos.Bucket, 
      Region: this.data.tenCentCos.Region,     
      Key: fileName,             
      FilePath: filePath, 
      SliceSize: 1024 * 1024 * 5,    
  })
},
//点击登录按钮处理事件
wxLogin(){
  wx.login({
    success: (res) => {
      this.setData({
        'customers.code':res.code
      })
    },
  })
   wx.getUserProfile({
    desc: '用于获取用户信息',
    success:(res)=>{
      console.log(res)
      this.setData({
        'customers.nickname':res.userInfo.nickName,
        'customers.avatarurl':res.userInfo.avatarUrl
      })
      wx.request({
        url: this.data.baseUrl+'/customers/wxlogin',
        method:'POST',
        data:{
          nickname:this.data.customers.nickname,
          avatarurl:this.data.customers.avatarurl,
          code:this.data.customers.code,
          lastpunchdate:this.data.customers.lastpunchdate
        },
        success:(res)=>{
          this.setData({
           'customers.openid':res.data.data.openid,
           'customers.nickname':res.data.data.nickname,
           'customers.avatarurl':res.data.data.avatarurl,
           'customers.code':res.data.data.code,
           'customers.goldcoin':res.data.data.goldcoin,
           'customers.lastpunchdate':res.data.data.lastpunchdate,
           'customers.registerdate':res.data.data.registerdate,
           'customers.vip':res.data.data.vip,
           'customers.administrator':res.data.data.administrator,
           'customers.hasUserInfo':true
          })
          wx.showToast({
            title: '登录成功',
            icon:'success'
          })
        },
      })
    }
  })
},

//退出登录按钮处理事件
wxSignOut(){
  this.setData({
    'customers.openid':'',
    'customers.nickname':'',
    'customers.avatarurl':'/images/no.png',
    'customers.code':'',
    'customers.lastpunchdate':0,
    'customers.hasUserInfo':false
  })
  wx.showToast({
    title: '退出登录',
    icon:'success'
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
      fields:['needgoods','customers','tenCentCos'],
      actions:[]
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
    this.setData({
      'customers.goldcoin':this.data.customers.goldcoin,
      'customers.vip':this.data.customers.vip
    })
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})