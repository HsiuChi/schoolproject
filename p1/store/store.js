//在这个JS文件中，专门用来创建Store的实例对象
import {observable, action} from 'mobx-miniprogram'
export const store=observable({
  //以下为数据字段

  //轮播图数据
  swiperList:[],
  //用户相关信息
  customers:{
    openid:'',
    nickname:'',
    avatarurl:'/images/no.png',
    code:'',
    registerdate:'',
    goldcoin:'',
    registerdate:'',
    lastpunchdate:0,
    vip:0,
    administrator:0,
    hasUserInfo: false
  },
  //闲置商品信息
  goods:{
    goodname:'',
    goodsort:'书籍',
    goodnew:'50',
    goodprice:'',
    goodphone:'',
    goodwechat:'',
    goodaddress:'',
    goodimage:'/images/xiangji.png'
  },

  //求购商品信息
  needgoods:{
    needgoodname:'',
    needgoodsort:'书籍',
    needgoodphone:'',
    needgoodwechat:'',
    needgoodaddress:'',
    needgoodimage:'/images/xiangji.png'
  },

  //腾讯云对象存储COS信息
  tenCentCos:{
    SecretId: 'AKIDZx6zdz5uT0PZXbR8gAUXMwJVVIZdV9Zm',
    SecretKey: 'IOjrnW2L9oHXZLr77LPKCuZ4KPEnUv8D', 
    Bucket: 'mpcos-1316442702', 
    Region: 'ap-beijing'
  },
 //以上为数据字段

  //提醒用户登录方法
  alertLogin(){
    if(this.customers.hasUserInfo==false){
      wx.showToast({
        title: '宝，还未登录哦',
        icon:'error'
      })
    }
  },

  //获取轮播图的方法
  getSwiper(cb){
    wx.request({
      url: 'https://www.shiyoutongprogram.com/swipers',
      method:'GET',
      success:(res)=>{
        this.swiperList=res.data.data
        cb && cb()
      }
    })
  },
})