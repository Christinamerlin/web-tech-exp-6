var items=[];
function save(){
var data = document.getElementById('data1').value + " - " +
document.getElementById('data2').value;
for(var i=0; i<items.length; i++){
if (data === items[i]) {
alert("Contact Name Already Exists\n" + items[i]);
return;
}
}
items.push(data);
view();
}
function view(){
    var result = "<ol>";
    for(var i=0; i<items.length; i++){
    result += "<li>" + items[i] + "</li>";
    }
    result += "</ol>";
    document.getElementById('output').innerHTML = result;
    }
    function removefirst(){
    items.shift();
    view();
    }
    function removelast(){
    items.pop();
    view();
    }