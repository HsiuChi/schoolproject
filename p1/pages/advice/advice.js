// pages/advice/advice.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
import {cos} from '../../store/cos'
import {getBaseUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'', //基本请求路径
    adviceText:'',
    adviceImg:'/images/xiangji.png',
    _adviceImg:''
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
// 获取相册照片按钮处理事件
getImage(){
  wx.chooseMedia({
    count: 1,
    mediaType: ['image'],
    sourceType: ['album', 'camera'],
    camera: 'back',
    success:(res)=>{
      this.setData({
        adviceImg:res.tempFiles[0].tempFilePath
      })
    }
  })
},
  //发送反馈意见按钮处理事件
  sendAdvice(){
    if(this.data.adviceText==''){
      wx.showToast({
        title: '宝，反馈信息不能为空哦',
        icon:'none'
      })
    }
    else if(this.data.customers.hasUserInfo==false){
      return wx.showModal({
        title: '友情提示',
        content: '宝，还未登录哦，进入“我的”页面进行登录',
        showCancel:false
      })
    }
    else if(this.data.customers.vip==1){
      wx.showModal({
        title: '友情提示',
        content: '您是VIP用户，发布一条消息将扣除3金币',
        complete: (res) => {
          if (res.cancel) {
            return ;
          }
      
          if (res.confirm) {
            wx.request({
              url: `${this.data.baseUrl}/customers/send/three/${this.data.customers.openid}`,
              method:'PUT',
            })
            this.sendAdviceRequest()
          
          }
        }
      })
    }
    else if(this.data.customers.goldcoin>=5){
      wx.showModal({
        title: '友情提示',
        content: '您不是VIP用户，发布一条消息将扣除5金币',
        complete: (res) => {
          if (res.cancel) {
            return ;
          }
      
          if (res.confirm) {
            wx.request({
              url: `${this.data.baseUrl}/customers/send/five/${this.data.customers.openid}`,
              method:'PUT',
            })
            this.sendAdviceRequest()
          
          }
        }
      })
    }
    else{
      wx.showToast({
        title: '金币不足',
        icon:'error'
      })
    }
   
  },

  //发送按钮请求处理方法
  sendAdviceRequest(){
    var filePath = this.data.adviceImg;
    var fileName = "/advices/"+filePath.substr(filePath.lastIndexOf('/') + 1);
    this.handleFileInUploading(fileName, filePath);
    var urlAdviceImg="https://"+this.data.tenCentCos.Bucket+"."+"cos"+"."+this.data.tenCentCos.Region+'.'+"myqcloud.com"+fileName;
    this.setData({
      '_adviceImg': urlAdviceImg
    })
    wx.request({
      url: this.data.baseUrl+'/advices',
      method:'POST',
      data:{
        openid:this.data.customers.openid,
        advicetext:this.data.adviceText,
        adviceimg:this.data._adviceImg
      },
      success:(re)=>{
          //发布完成后必须更新用户金币数
          wx.request({
            url: `${this.data.baseUrl}/customers/getGoldcoin/${this.data.customers.openid}`,
            method:'GET',
            success:(r1)=>{
            this.setData({
              'customers.goldcoin':r1.data.data
            })
          }
        })
      }
    })
    wx.showToast({
      title: '发送成功',
      icon:'success'
    })
    this.setData({
      adviceText:'',
      adviceImg:'/images/xiangji.png'
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
      fields:['customers','tenCentCos'],
      actions:['alertLogin']
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})