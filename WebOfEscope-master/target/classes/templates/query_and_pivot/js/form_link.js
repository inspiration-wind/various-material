function submitData(){
    var xiao= document.getElementById("num1");
    var da= document.getElementById("num2");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4) {
            if ((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304) {
                console.log(XHR.responseText);
                var data1=XHR.responseText;
                console.log(JSON.parse(data1)['server']);
                console.log(JSON.parse(data1)['time']);
                console.log(JSON.parse(data1)['info']);
            }
            else{
                console.log("Request was unsuccessful: "+XHR.status);
            }
        }
    };
    XHR.open("get","http://127.0.0.1:8080/vescope/main/data/xiao/da",true);
    XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    XHR.send();
}