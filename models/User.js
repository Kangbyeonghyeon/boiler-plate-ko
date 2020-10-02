const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    // space써진곳 붙여주기
    unique: 1
    // email은 중복되어 지면 안되니까 유니크해지도록 설정
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  // 관리자, 유저 구별
  role: {
    // number값이 1이면 관리자, number값이 0이면 유저로 설정하기
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  // 토큰 유효기간
  toeknExp: {
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

// 다른 파일에서도 쓸수 있게 export해준다.
module.exports = { User }