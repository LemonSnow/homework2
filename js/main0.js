
  
function theHat(hat) {
  console.log('这个曾经是'+hat.color1+'的帽子现在已经变成了'+hat.color2)
}
let myHat = {
  color1: '黑色' , 
}
myHat.color2 = '灰色'
// console.log(myHat)
theHat(myHat)

function aRoom(room) {
  console.log('我们住在东' + room.theNumber + '宿舍')
  for (let j = 0; j <= 2; j++){
    if (j == 0) {
      console.log(room.myRoommate[j]+'是睡在B床的帅哥')
    } else if (j == 1) {
      console.log('C床的' + room.myRoommate[j] + '找了一个'+room.spouse.college+'的女朋友')
    } else {
      console.log('自称生活健康的'+room.myRoommate[j]+'却从不早睡。')
    }
  }
}
let myDormitory = {
  theNumber:'2-119' ,
  myClass: '电838',
  myRoommate: ['葳蕤', '贾拓', '韩宇琪']
}
myDormitory.spouse= {
  college: '北京交通大学'
}
aRoom(myDormitory)

function theDay(day){
  console.log('今天的天气是' + day.weather + '阳光很好，平均温度是'+day.temperature1)
  for (let i = 0; i <= day.temperature.length; i++){
    if (i == 0) {
      console.log('今天上午的温度是'+day.temperature[i]+'很舒适')
    } else if (i == 1) {
      console.log('但是今天下午的温度是'+day.temperature[i]+'有点热。。')
    }
  }     
}
let theFriday = {
  weather: 'sunny',
  temperature:['9℃','11℃',]
}
temperature1='10℃'
theDay(theFriday)


// let myCup = {
//     maxWater: 100,
//     currentWater: 50
//   }
//   function showCup(cup) {
//     console.log('这个杯子最多装' + cup.maxWater + '毫升水')
//     console.log('现在已经装了' + cup.currentWater + '毫升水')
//   }
//   showCup(myCup)
//   myCup.currentWater = 20
//   showCup(myCup)
  
// function showPen(pen) {
//     console.log('这支颜色为' + pen.color + '的笔已经陪伴我' + pen.age + '个月了')
//   }
//   let myPen = {
//     color: 'black',
//     age: 3
//   }
//   showPen(myPen)
//   myPen.age = 6
// showPen(myPen)
// function showTable(table) {
//   console.log('这张桌子宽' + table.width + '米，长' + table.length + '米')
//   for (let i = 0; i < table.things.length; i++) {
//     console.log('桌子上有一个' + table.things[i])
// }
// }
// let myTable = {
//   width: 1.2,
//   height: 2.5,
//   things: ['杯子', '榨汁机', '键盘', '鼠标']
// }
// showTable(myTable)
// myTable.things[4] = '大物实验报告册'
// showTable(myTable)