//check script working or not
    function msg(){  
     alert("Hello Javatpoint");  
    }  


/*
//function calling it will print just left to because you do not target any component
var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}  
function b(){  
document.writeln(data+5);  
//alert(data);
}  
a();//calling JavaScript function
b();
*/

function changecontent()
{
    //alert("hello");

    document.getElementById("demo1").innerHTML = "Changed txt using function!";

}

//-------------------------------------------------------------------------
function imageChange(click_id)
{
    //alert(click_id);

    if(click_id=='on')
        document.getElementById('myImagefn').src='images/pic_bulbon.gif';
    else
       document.getElementById('myImagefn').src='images/pic_bulboff.gif';

}


//------------------------------------------------------------------------

//if else input handling and function calling return valu to html



  