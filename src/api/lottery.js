export default {
  getPrizeList () {
    return {
      returncode: 0,
      message: '',
      result: [{
        id: 1,
        name: '小米电视',
        img: 'https://i1.mifile.cn/f/i/g/2015/TV4A-43QC.png'
      },
      {
        id: 2,
        name: '小米手机',
        img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/m8-140.png'
      },
      {
        id: 3,
        name: '小米平衡车',
        img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/scooter-140!140x140.jpg'
      },
      {
        id: 4,
        name: '小米耳机',
        img: 'https://c1.mifile.cn/f/i/g/2015/video/pinpai140!140x140.jpg'
      }
      ]
    }
  },
  lottery () {
    return {
      returncode: 0,
      message: '',
      result: {
        id: 3,
        name: '小米平衡车',
        img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/scooter-140!140x140.jpg'
      }
    }
  }
}
