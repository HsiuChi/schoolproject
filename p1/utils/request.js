//wx.login封装
const baseUrl="https://www.shiyoutongprogram.com";
export const getBaseUrl=()=>{
  return baseUrl;
}

export const getWxLogin=()=>{
  return new Promise((resolve,reject)=>{
    wx.login({
      success: (res) => {
        resolve(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}

//wx.getUserProfile封装
export const getUserProfile=()=>{
  return new Promise((resolve,reject)=>{
   wx.getUserProfile({
     desc: '获取用户信息',
     success:(res)=>{
      resolve(res)
     },
     fail:(err)=>{
       reject(err)
     }
   })
  })
}