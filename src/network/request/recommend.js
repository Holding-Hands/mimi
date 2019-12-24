import {request} from "./request";

export function getCityList() {
  return request({
    url:'/cityList'
  })
}
export function locationInit(){
  return request({
    url:'/cityList'
  })
  // $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
  //   if (remote_ip_info.ret == '1') {
  //     cityName = remote_ip_info.province;
  //     //		console.log(cityName)
  //     $("#cityName").html(cityName);
  //   }
  // });
}

