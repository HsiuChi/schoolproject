import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

//使用腾讯云COS
var COS = require('../miniprogram_npm/cos-wx-sdk-v5/index');
/* 初始化cos */
export const cos = new COS({
  SecretId: store.tenCentCos.SecretId,
  SecretKey: store.tenCentCos.SecretKey, 
  SimpleUploadMethod: 'putObject', // 强烈建议，高级上传、批量上传内部对小文件做简单上传时使用putObject
  })
  