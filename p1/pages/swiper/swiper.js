// pages/swiper/swiper.js
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
    swiperText:'',
    swiperImg:'/images/xiangji.png',
    _swiperImg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */

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
        swiperImg:res.tempFiles[0].tempFilePath
      })
    }
  })
},

//发送轮播图按钮处理事件
sendSwiper(){
  if(this.data.swiperText==''){
    wx.showToast({
      title: '宝，描述信息不能为空哦',
      icon:'none'
    })
  }
  else{
    var filePath = this.data.swiperImg;
    var fileName = "/swiper/"+filePath.substr(filePath.lastIndexOf('/') + 1);
    this.handleFileInUploading(fileName, filePath);
    var urlSwiperImg="https://"+this.data.tenCentCos.Bucket+"."+"cos"+"."+this.data.tenCentCos.Region+'.'+"myqcloud.com"+fileName;
    this.setData({
      '_swiperImg': urlSwiperImg
    })
    wx.request({
      url: this.data.baseUrl+'/swipers',
      method:'POST',
      data:{
        image:this.data._swiperImg,
        name:this.data.swiperText,
      },
      success:(res)=>{
        wx.showToast({
          title: '插入成功',
          icon:'success'
        })
        this.setData({
          swiperText:'',
          swiperImg:'/images/xiangji.png'
        })
        this.onPullDownRefresh()
      }
    })
  }
},

   //删除轮播图
   deleteSwiper(e){
    wx.showModal({
      title: '友情提示',
      content: '亲，确定删除吗',
      complete: (res) => {
        if (res.cancel) {
          return ;
        }
        if (res.confirm) {
          wx.request({
            url: `${this.data.baseUrl}/swipers/deleteSwiper/${e.target.dataset.id}`,
            method:'DELETE',
            success:()=>{
              this.onPullDownRefresh()
              wx.showToast({
                title: '删除成功',
                icon:'success'
              })
            }
          })
        }
      }
    })
   },
  onLoad(options) {
    const baseUrl=getBaseUrl();
    this.setData({
      baseUrl:baseUrl
    })
    this.storeBindings=createStoreBindings(this,{
      store,
      fields:['customers','tenCentCos','swiperList'],
      actions:['getSwiper']
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
    this.getSwiper(()=>{
      wx.stopPullDownRefresh()
    })
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