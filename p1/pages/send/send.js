// pages/send/send.js
//导入公共数据
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
 //发布出售商品信息存于公共数据store中
    _goodimage:'',//用于goodimage暂存图片公网地址
    _needgoodimage:'',//用于needgoodimage暂存图片公网地址
    show:false,
    goodskind:[
      {name:"书籍",action:"choosebook"},
      {name:"资料",action:"choosedocument"},
      {name:"文具",action:"choosestationnery"},
      {name:"衣物",action:"chooseclothe"},
      {name:"护肤",action:"choosecosmetic"},
      {name:"运动",action:"choosesport"},
      {name:"电子产品",action:"choosecomputer"},
      {name:"美食",action:"choosefood"},
      {name:"其他",action:"chooseother"}
    ],
    needgoodskind:[
      {name:"书籍",action:"needchoosebook"},
      {name:"资料",action:"needchoosedocument"},
      {name:"文具",action:"needchoosestationnery"},
      {name:"衣物",action:"needchooseclothe"},
      {name:"护肤",action:"needchoosecosmetic"},
      {name:"运动",action:"needchoosesport"},
      {name:"电子产品",action:"needchoosecomputer"},
      {name:"美食",action:"needchoosefood"},
      {name:"其他",action:"needchooseother"}
    ],
  },
//选择分类按钮处理事件
  chooseKinds(){
    this.setData({
      show:true
    })
  },
  //选择分类按钮处理事件
  needchooseKinds(){
    this.setData({
      show:true
    })
  },
  //弹出层选择按钮处理事件群
    //出售商品
  choosebook(){
    this.setData({
      'goods.goodsort':"书籍",
      show: false
    })
  },
  choosedocument(){
    this.setData({
      'goods.goodsort':"资料",
      show: false
    })
  },
  choosestationnery(){
    this.setData({
      'goods.goodsort':"文具",
      show: false
    })
  },

  chooseclothe(){
    this.setData({
      'goods.goodsort':"衣物",
      show: false
    })
  },
  choosecosmetic(){
    this.setData({
      'goods.goodsort':"护肤",
      show: false
    })
  },
  choosesport(){
    this.setData({
      'goods.goodsort':"运动",
      show: false
    })
  },
  choosecomputer(){
    this.setData({
      'goods.goodsort':"电子产品",
      show: false
    })
  },
  choosefood(){
    this.setData({
      'goods.goodsort':"美食",
      show: false
    })
  },
  chooseother(){
    this.setData({
      'goods.goodsort':"其他",
      show: false
    })
  },
  //弹出层选择按钮处理事件群
    //求购商品
    needchoosebook(){
      this.setData({
        'needgoods.needgoodsort':"书籍",
        show: false
      })
    },
    needchoosedocument(){
      this.setData({
        'needgoods.needgoodsort':"资料",
        show: false
      })
    },
    needchoosestationnery(){
      this.setData({
        'needgoods.needgoodsort':"文具",
        show: false
      })
    },
  
    needchooseclothe(){
      this.setData({
        'needgoods.needgoodsort':"衣物",
        show: false
      })
    },
    needchoosecosmetic(){
      this.setData({
        'needgoods.needgoodsort':"护肤",
        show: false
      })
    },
    needchoosesport(){
      this.setData({
        'needgoods.needgoodsort':"运动",
        show: false
      })
    },
    needchoosecomputer(){
      this.setData({
        'needgoods.needgoodsort':"电子产品",
        show: false
      })
    },
    needchoosefood(){
      this.setData({
        'needgoods.needgoodsort':"美食",
        show: false
      })
    },
    needchooseother(){
      this.setData({
        'needgoods.needgoodsort':"其他",
        show: false
      })
    },

  //关闭弹出层处理事件
  onClose() {
    this.setData({ show: false });
  },
// 输入框处理事件群
  //出售商品模块
goodnameInput(e){
  this.setData({
    'goods.goodname': e.detail.value
  })
},
goodnewInput(event) {
  this.setData({
    'goods.goodnew': event.detail.value,
  });
},
goodpriceInput(e){
  this.setData({
    'goods.goodprice': e.detail.value
  })
},
goodphoneInput(e){
  this.setData({
    'goods.goodphone': e.detail.value
  })
},
goodwechatInput(e){
  this.setData({
    'goods.goodwechat': e.detail.value
  })
},
goodaddressInput(e){
  this.setData({
    'goods.goodaddress': e.detail.value
  })
},
 
// 输入框处理事件群
  //求购商品页面
needgoodnameInput(e){
  this.setData({
    'needgoods.needgoodname': e.detail.value
  })
},
needgoodphoneInput(e){
  this.setData({
    'needgoods.needgoodphone': e.detail.value
  })
},
needgoodwechatInput(e){
  this.setData({
    'needgoods.needgoodwechat': e.detail.value
  })
},
needgoodaddressInput(e){
  this.setData({
    'needgoods.needgoodaddress': e.detail.value
  })
},

// 获取相册照片按钮处理事件
  //出售商品
getImage(){
  wx.chooseMedia({
    count: 1,
    mediaType: ['image'],
    sourceType: ['album', 'camera'],
    camera: 'back',
    success:(res)=>{
      // console.log(res)
      this.setData({
        'goods.goodimage':res.tempFiles[0].tempFilePath
      })
    }
  })
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
  //发布商品
  needgetImage(){
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success:(res)=>{
        this.setData({
          'needgoods.needgoodimage':res.tempFiles[0].tempFilePath
        })
      }
    })
  },


// 发布商品按钮处理事件
  //出售商品
sendMessage(){
  //先判断手机号输入是否正确
  const regex = /^(((1[35789][0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
  const rex = /^[0-9]+$/ //正则表达式
  if(this.data.customers.hasUserInfo==false){
    wx.showToast({
      title: '亲，还未登录哦',
      icon:'error'
    })
  }
    else if (this.data.goods.goodphone.length !== 11) {
      wx.showToast({
        title: '亲，手机号不是11位',
        icon:'none'
      })
    }  
    else if(!regex.test(this.data.goods.goodphone)){
      wx.showToast({
        title: '亲，手机号输入有误',
        icon:'none'
      })
    }
    else if(!rex.test(this.data.goods.goodprice)){
      wx.showToast({
        title: '亲，预售价输入有误',
        icon:'none'
      })
    }
//判断信息是否完整
      else if(this.data.goods.goodname==''||this.data.goods.price==''||this.data.goods.goodphone==''||this.data.goods.goodwechat==''||this.data.goods.goodaddress==''){
        console.log(this.data.goods.goodphone.length)
        wx.showToast({
          title: '亲，商品信息不完整哦~',
          icon:'none'
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
                this.sendMessageRequest()
                
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
                this.sendMessageRequest()
                
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
//闲置商品模块发布请求处理方法
  sendMessageRequest(){
    var filePath = this.data.goods.goodimage;
          var fileName = "/goods/"+filePath.substr(filePath.lastIndexOf('/') + 1);
          this.handleFileInUploading(fileName, filePath);
          var urlGoodImg="https://"+this.data.tenCentCos.Bucket+"."+"cos"+"."+this.data.tenCentCos.Region+'.'+"myqcloud.com"+fileName;
          this.setData({
            '_goodimage': urlGoodImg
          })
          wx.request({
            url: this.data.baseUrl+'/goods',
            method:'POST',
            data:{
              goodname:this.data.goods.goodname,
              goodsort:this.data.goods.goodsort,
              goodnew:this.data.goods.goodnew,
              goodprice:this.data.goods.goodprice,
              goodphone:this.data.goods.goodphone,
              goodwechat:this.data.goods.goodwechat,
              goodaddress:this.data.goods.goodaddress,
              goodimage:this.data._goodimage,
              openid:this.data.customers.openid
            },
            success:(rr)=>{
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
          }),
          wx.showToast({
            title: '发布成功',
            icon:'success'
          }),
          this.setData({
            'goods.goodname':'',
            'goods.goodsort':"书籍",
            'goods.goodnew':50,
            'goods.goodprice':'',
            'goods.goodphone':'',
            'goods.goodwechat':'',
            'goods.goodaddress':'',
            'goods.goodimage':'/images/xiangji.png'
          })
          
  },

// 发布商品按钮处理事件
  //求购商品
  needsendMessage(){
    //先判断手机号输入是否正确
  const regex = /^(((1[35789][0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
  if(this.data.customers.hasUserInfo==false){
    wx.showToast({
      title: '亲，还未登录哦',
      icon:'error'
    })
  }
  else if (this.data.needgoods.needgoodphone.length !== 11) {
      wx.showToast({
        title: '亲，手机号不是11位',
        icon:'none'
      })
    }  
    else if(!regex.test(this.data.needgoods.needgoodphone)){
        wx.showToast({
          title: '亲，手机号输入有误',
          icon:'none'
        })
      }
    else if(this.data.needgoods.needgoodname==''||this.data.needgoods.needgoodphone==''||this.data.needgoods.needgoodwechat==''||this.data.needgoods.needgoodaddress==''){
          wx.showToast({
            title: '亲，商品信息不完整哦~',
            icon:'none'
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
                this.needsendMessageRequest()
             
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
                this.needsendMessageRequest()
             
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

  //求购商品模块发布请求处理方法
  needsendMessageRequest(){
    var filePath = this.data.needgoods.needgoodimage;
            var fileName = "/needgoods/"+filePath.substr(filePath.lastIndexOf('/') + 1);
            this.handleFileInUploading(fileName, filePath);
            var urlNeedGoodImg="https://"+this.data.tenCentCos.Bucket+"."+"cos"+"."+this.data.tenCentCos.Region+'.'+"myqcloud.com"+fileName;
            this.setData({
              '_needgoodimage': urlNeedGoodImg
            })
            wx.request({
              url: this.data.baseUrl+'/needgoods',
              method:'POST',
              data:{
                needgoodname:this.data.needgoods.needgoodname,
                needgoodsort:this.data.needgoods.needgoodsort,
                needgoodphone:this.data.needgoods.needgoodphone,
                needgoodwechat:this.data.needgoods.needgoodwechat,
                needgoodaddress:this.data.needgoods.needgoodaddress,
                needgoodimage:this.data._needgoodimage,
                openid:this.data.customers.openid
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
            }),
            wx.showToast({
              title: '发布成功',
              icon:'success'
            }),
            this.setData({
              'needgoods.needgoodname':'',
              'needgoods.needgoodsort':"书籍",
              'needgoods.needgoodphone':'',
              'needgoods.needgoodwechat':'',
              'needgoods.needgoodaddress':'',
              'needgoods.needgoodimage':'/images/xiangji.png'
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
      fields:['goods','needgoods','tenCentCos','customers'],
      actions:['alertLogin']
    })
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