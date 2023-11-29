// pages/home/home.js
//导入公共数据
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
import {getBaseUrl} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:'', //基本网络请求路径
    //九宫格信息
    gridList:[
      {id:1, name:'书籍', image:'/images/books.png'},
      {id:2, name:'资料', image:'/images/documents.png'},
      {id:3, name:'文具', image:'/images/stationeries.png'},
      {id:4, name:'衣物', image:'/images/clothes.png'},
      {id:5, name:'护肤', image:'/images/cosmetics.png'},
      {id:6, name:'运动', image:'/images/sports.png'},
      {id:7, name:'电子产品', image:'/images/computers.png'},
      {id:8, name:'美食', image:'/images/foods.png'},
      {id:9, name:'其他', image:'/images/others.png'},
    ],
    //好物推荐和每日签到信息
    link:[
      'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/%E5%A5%BD%E7%89%A9%E6%8E%A8%E8%8D%90and%E6%AF%8F%E6%97%A5%E7%AD%BE%E5%88%B0/linkLeft%282%29.jpg',
      'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/%E5%A5%BD%E7%89%A9%E6%8E%A8%E8%8D%90and%E6%AF%8F%E6%97%A5%E7%AD%BE%E5%88%B0/linkRight%281%29.jpg'
    ],
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


  //获取全部闲置商品数据的方法
  getKindGoods(cb){
    this.setData({good_isloading:true})
    //展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url:`${this.data.baseUrl}/goods/${this.data.good_currentPage}/${this.data.good_pageSize}` ,
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
   //获取全部求购商品数据的方法
   getKindNeedGoods(cb){
    this.setData({needgood_isloading:true})
    //展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url:`${this.data.baseUrl}/needgoods/${this.data.needgood_currentPage}/${this.data.needgood_pageSize}` ,
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

 //跳转至Advice页面处理事件
 beVip(){
    if(this.data.customers.hasUserInfo==false){
      return wx.showModal({
        title: '友情提示',
        content: '宝，还未登录哦，进入“我的”页面进行登录',
        complete: (res) => {
          if (res.cancel) {
          }
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/my/my',
            })
          }
        }
      })
   }
   else{
     wx.showModal({
       title: '荣耀会员',
       content: '宝，使用60金币可成为荣耀会员，想好了吗？',
       complete: (res) => {
         if (res.cancel) {
           return ;
         }
     
         if (res.confirm) {
           if(this.data.customers.vip==1){
             wx.showToast({
               title: '您已是荣耀会员，无需再次充值',
               icon:'none'
             })
           }
           else if(this.data.customers.goldcoin<60){
               wx.showToast({
                 title: '金币不足',
                 icon:'error'
               })
             }
             else {
                wx.request({
                  url: `${this.data.baseUrl}/customers/beVip/${this.data.customers.openid}`,
                  method:'PUT',
                  success:(res)=>{
                    wx.request({
                      url: `${this.data.baseUrl}/customers/allInfo/${this.data.customers.openid}`,
                      method:'GET',
                      success:(r1)=>{
                        this.setData({
                          'customers.vip':r1.data.data.vip,
                          'customers.goldcoin':r1.data.data.goldcoin
                        })
                      }
                    })
                    wx.showToast({
                      title: '恭喜您成为荣耀会员',
                      icon:'none'
                    })
                  }
                })
             }
         }
       }
     })
   }
 },

 //每日签到按钮处理事件
 punchCard(){
  if(this.data.customers.hasUserInfo==false){
    return wx.showModal({
      title: '友情提示',
      content: '宝，还未登录哦，进入“我的”页面进行登录',
      complete:(res)=>{
        if(res.cancel){

        }
        if(res.confirm){
          wx.switchTab({
            url: '/pages/my/my',
          })
        }
      }
    })
 }
 wx.showModal({
   title: '打卡提示',
   content: '宝，每天只能打一次卡，每次金币加2',
   complete: (res) => {
     if (res.cancel) {
       return ;
     }
     if (res.confirm) {
       wx.request({
         url: `${this.data.baseUrl}/customers/punch`,
         method:'PUT',
         data:{
           openid:this.data.customers.openid,
           lastpunchdate:this.data.customers.lastpunchdate,
           goldcoin:this.data.customers.goldcoin
         },
         success:(r)=>{
           if(this.data.customers.goldcoin==r.data.data.goldcoin){
             wx.showToast({
               title: '宝，今天打过卡了哟~',
               icon:'none'
             })
           }else{
            this.setData({
              'customers.goldcoin':r.data.data.goldcoin,
              'customers.lastpunchdate':r.data.data.lastpunchdate
            })
            wx.showToast({
              title: '打卡成功',
              icon:'success'
            })
           }
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
      fields:['customers','swiperList'],
      actions:['alertLogin','getSwiper']
    })
    this.getSwiper()
    this.getKindGoods()
    this.getKindNeedGoods()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.alertLogin()
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
     //需要重置关键数据
     this.setData({
      good_currentPage:1,
      kindGoodsList:[],
      good_total:0,
      isAllGoodInfo:false,
      needgood_currentPage:1,
      kindNeedGoodsList:[],
      needgood_total:0,
      isAllNeedgoodInfo:false
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