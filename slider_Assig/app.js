
var imageArray =["./images/akloppenburg_hills.jpg","./images/akool_el_cap.jpg","./images/dcoffman_nature.jpg","./images/dcoffman_lake.jpg"];
var index=0;
slider();
setInterval(slider,2000);
function slider(){
    var image = document.getElementById("image");
    
        if(index==4){
            index=0;
        }
        image.setAttribute("src",imageArray[index]);
        index++;

       
    
    
}