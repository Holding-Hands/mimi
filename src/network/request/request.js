import axios from 'axios';

export function request(config) {
  const instance=axios.create({
    baseURL:"/api",
  });

  return instance(config)
}

// export function addres() {
//   axios({
//     url:'http://ip.taobao.com/service/getIpInfo.php?ip=119.139.196.127'
//     // url:'http://pv.sohu.com/cityjson'
//   })
// }

export function address(config) {
  const instance2=axios.create({
    baseURL:"/zhang",
  });
  return instance2(config)
}
