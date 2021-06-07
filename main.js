var arr1 = [];

function getParagraph1()
{
    for(var i=1;i<=6;i++)
    {
        arr1.push(document.getElementById("name_of_friend_"+i).value); 
    }
    document.getElementById("para1").innerHTML=arr1.join(". ");
}


var arr2 =[];

function getParagraph2()
{
    for(var i=7;i<=12;i++)
    {
        arr2.push(document.getElementById("name_of_friend_"+i).value); 
    }
    document.getElementById("para2").innerHTML=arr2.join(". ");
}