function displayList()
{
    let element=document.getElementById('mySidebar');
    if (element.style.display==="none")
    {
        document.getElementById('mySidebar').style.width="30%";
        element.style.display="block";
        document.getElementById('search').style.paddingLeft="4%";
        document.getElementById('search').style.paddingRight="5px";
        document.getElementById('bar').style.display="block";
        document.getElementById('btn').style.height="80%";
        document.getElementById('btn').style.width="30%";
        document.getElementById('marg').style.marginRight="5%";
        //document.getElementById('chart').style.marginLeft="10%";
        document.getElementById('myChart').style.width="100%";
         document.getElementById('myChart').style.maxWidth="200%";
         document.getElementById('myChart').style.height="100%";
        document.getElementById('chart1').style.paddingLeft="-30%";
        //document.getElementById('chart').style.marginLeft="-2%";
        document.getElementById('heading').style.marginLeft="4%";
        document.getElementById('chart1').style.paddingLeft="-25%";
        //document.getElementById().width="50px";
        

        
    }
    else
    {
        if(document.getElementById('m').style.display==="block" || document.getElementById('bell').style.display==="block") 
        {
            element.style.display="block";
            document.getElementById('bar').style.display="block";
        //     document.getElementById('btn').style.height="80%";
        // document.getElementById('btn').style.width="30%";
        // document.getElementById('marg').style.marginRight="5%";
        }
        
        else
        {
            element.style.display="none";
            document.getElementById('bar').style.display="none";
            document.getElementById('search').style.paddingLeft="0px";
            document.getElementById('search').style.paddingRight="0px";
            document.getElementById('btn').style.height="70%";
            document.getElementById('btn').style.width="22%";
        document.getElementById('marg').style.marginRight="0%";
        document.getElementById('subsection1').width="400px";
        // document.getElementById('chart').style.marginLeft="0%";
        // document.getElementById('myChart').style.width="60%";
        // document.getElementById('myChart').style.marginLeft="60%";
        // document.getElementById('chart1').style.marginLeft="0%";
        // document.getElementById('heading').style.marginLeft="2%";
        }
        
        
    }
}
function displayProfile()
{
    let element=document.getElementById('mySidebar');
    if (document.getElementById('m').style.display==="none")
    {
        document.getElementById('mySidebar').style.width="30%";
        element.style.display="block";
        document.getElementById('bar').style.display="block";
        document.getElementById('m').style.display="block";
        document.getElementById('search').style.paddingLeft="5px";
        document.getElementById('search').style.paddingRight="10px";
        document.getElementById('m').style.width="17%";
        document.getElementById('m').style.marginRight="200px";
        
        
        
    }
    else
    {
        document.getElementById('m').style.display="none";
        document.getElementById('search').style.paddingLeft="0px";
        document.getElementById('search').style.paddingRight="0px";
        document.getElementById('btn').style.height="80%";
        document.getElementById('btn').style.width="30%";
        document.getElementById('marg').style.marginRight="5%";

        
        
    }
}
function displayBellIcon()
{
    let element=document.getElementById('mySidebar');
    if (document.getElementById('bell').style.display==="none")
    {
        document.getElementById('mySidebar').style.width="30%";
        element.style.display="block";
        document.getElementById('bar').style.display="block";
        document.getElementById('bell').style.display="block";
        document.getElementById('bell').style.marginTop="10%";
        document.getElementById('myChart').style.width="100%";
         document.getElementById('myChart').style.maxWidth="200%";
         document.getElementById('myChart').style.height="100%";
        // document.getElementById('chart1').style.paddingLeft="-30%";
        // document.getElementById('chart1').style.paddingLeft="-25%";
        
    }
    else{
       
        document.getElementById('bell').style.display="none";
        document.getElementById('btn').style.height="80%";
        document.getElementById('btn').style.width="30%";
        document.getElementById('marg').style.marginRight="5%";
    }
}
