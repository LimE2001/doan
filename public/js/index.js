const menu = document.querySelector('.menu')
const navbar = document.querySelector('.nav-bar')
const left = document.querySelector('.the-left')
const avt = document.querySelector('.ptm4')
const mg1 = document.querySelector('.mg1')
const mg2 = document.querySelector('.mg2')
const wt = document.querySelector('.water')
menu.onclick = function() {
    navbar.classList.toggle('active')
    left.classList.toggle('active')
    avt.classList.toggle('active')
    mg1.classList.toggle('active')
    mg2.classList.toggle('active')
    wt.classList.toggle('active')
}
const socket = io('http://localhost:8888');
///////////////////menu
var temp1 = 0;
var humi1 = 0;
var light1 = 0;
var temp2 = 0;
var humi2 = 0;
var light2 = 0;

socket.on("temp_1",function(data_received){
    temp1 = data_received;
    document.getElementById("temp-1").innerHTML = temp1 + "°C";
})
socket.on("humi_1",function(data_received){
    humi1 = data_received;
    document.getElementById("humi-1").innerHTML = humi1 + "%";
})
socket.on("light_1",function(data_received){
    light1 = data_received;
    document.getElementById("light-1").innerHTML = light1 +"lux";
})
socket.on("temp_2",function(data_received){
    temp1 = data_received;
    document.getElementById("temp-2").innerHTML = temp1 + "°C";
})
socket.on("humi_2",function(data_received){
    humi2 = data_received;
    document.getElementById("humi-2").innerHTML = humi2 + "%";
})
socket.on("light_2",function(data_received){
    light2 = data_received;
    document.getElementById("light-2").innerHTML = light2 +"lux";
})







////////////////////////////////////////////////////
var ttd1=0;
socket.on("relay_1",function(data_received){
    ttd1=data_received;
    if(data_received == 1){
        document.getElementById("check").checked =true
        document.getElementById('e3').classList.add('ic9');
        document.getElementById('e1').classList.add('ic9');
    }else{
        document.getElementById("check").checked = false
        document.getElementById('e1').classList.remove('ic9');
        document.getElementById('e3').classList.remove('ic9');
    };
})
let checkbox=document.getElementById('check');
checkbox.addEventListener('click', function(){
    if (checkbox.checked==true) {
        var result = confirm("Bật Đèn ʕ´•ᴥ•`ʔ")
        if(result){
            socket.emit("control_relay_1","1")
        } else {
        checkbox.checked=false
      }
    }else{
        socket.emit("control_relay_1","0")
    }}
);
//////////////////////////////////////nút 2
var ttd2=0;
socket.on("relay_2",function(data_received){
    ttd2=data_received;
    if(data_received == 1){
        document.getElementById("check1").checked =true
        document.getElementById('e4').classList.add('i2');
        document.getElementById('e2').classList.add('ic');
    }else{
        document.getElementById("check1").checked = false
        document.getElementById('e4').classList.remove('i2');
        document.getElementById('e2').classList.remove('ic');
    }
})
let checkbox1=document.getElementById('check1');
checkbox1.addEventListener('click', function(){
    if (checkbox1.checked==true) {
        var result = confirm("Bật Thiết Bị Làm Mát ʕ´•ᴥ•`ʔ")
        if(result){
            socket.emit("control_relay_2","1")
        } else {
            checkbox1.checked=false
      }
    }else{
        socket.emit("control_relay_2","0")
    }}  
);




