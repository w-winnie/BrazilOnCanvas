//function to draw the canvas
var c; //context
function drawCanvas(obj)
{
    var canvas = document.getElementById("myCanvas");
    c = canvas.getContext("2d");
 
    createMap();
    createDescription();
   document.getElementById("myCanvas").onmousemove = function getCoordinates(e)
   {
    var pos = canvas.getBoundingClientRect();
    var tempX = e.clientX - pos.left;
    var tempY = e.clientY - pos.top;

    document.onmousein = mOver(mapData(tempX, tempY));
    }
}

//function to insert the map image
function createMap()
{
    var mapImage = new Image();
    mapImage.onload = function () {
        c.drawImage(mapImage, 600, 10);
        createMarker(c);
    };
    mapImage.src = 'Brasil.png';
}

//function to create red circles over the map image
function createMarker(c)
{
    c.globalAlpha = 0.3;
    c.fillStyle = "rgb(255,0,0)";
    c.lineWidth ="2px";
    
    c.beginPath();
    c.arc(795, 70, 30, 0, 2*Math.PI);
    c.fill();
    
    c.beginPath();
    c.arc(750, 240, 30, 0, 2*Math.PI);
    c.fill();
    
    c.beginPath();
    c.arc(975, 255, 30, 0, 2*Math.PI);
    c.fill();
    
    c.beginPath();
    c.arc(1030, 440, 30, 0, 2*Math.PI);
    c.fill();
    
    c.beginPath();
    c.arc(930, 540, 30, 0, 2*Math.PI);
    c.fill();
}

//function to create the text
function createDescription()
{
    c.font = "35px Arial";
    c.fillText("Brasil", 35, 40);
    c.font = "15px Arial";
    c.fillText("Mouse over the following cities to know their population:",35,60);
    c.font = "15px Arial";
    c.fillText("Boa vista",40,80);
    c.fillText("Porto velho",40,100);
    c.fillText("Palmas",40,120);
    c.fillText("Rio de Janeiro",40,140);
    c.fillText("Porto Alegre",40,160);
}

//function to allocate cities to the cursor area
function mapData(tempX, tempY)
{
    if (tempX > 950 && tempX < 1000 && tempY > 250 && tempY < 300)
    {
        var city = 1;
        return city;
    } else if (tempX > 1020 && tempX < 1060 && tempY > 430 && tempY < 470)
    {
        var city = 2;
        return city;
    }
    if (tempX > 780 && tempX < 820 && tempY > 60 && tempY < 90)
    {
        var city = 3;
        return city;
    }
    if (tempX > 920 && tempX < 950 && tempY > 530 && tempY < 570)
    {
        var city = 4;
        return city;
    }
    if (tempX > 740 && tempX < 770 && tempY > 230 && tempY < 270)
    {
        var city = 5;
        return city;
    }
}

//function to display the blurb
function mOver(city)
{
    c.clearRect(20, 200, 500, 500);
    c.fillStyle="black"
    c.globalAlpha = 1;
    if (city === 1)
    {
        createTextHead("Palmas");
        createTextContent("Population (2017): 272,980");
        createImage("Palmas");
    }
    if (city === 2)
    {
        createTextHead("Rio de Janeiro");
        createTextContent("Population (2017): 6,520,266");
        createImage("RiodeJanerio");
    }
    if (city === 3)
    {
        createTextHead("Boa Vista");
        createTextContent("Population (2017): 332,050");
        createImage("BoaVista");
    }
    if (city === 4)
    {
        createTextHead("Porto Alegre");
        createTextContent("Population (2017): 1,484,941");
        createImage("PortoAlegre");
    }
    if (city === 5)
    {
        createTextHead("Porto Velho");
        createTextContent("Population (2017): 519,436");
        createImage("PortoVelho");
    }
}

//function to create the head text in he blurb
function createTextHead(text)
{
    c.font = "30px Arial";
    c.fillText(text, 35, 320);
}

//function to create the text in the blurb
function createTextContent(text)
{
    c.font = "15px Arial";
    c.fillText(text, 35, 340);
}

//function to insert the city image
function createImage(text)
{
    var cityImage = new Image();
    cityImage.onload = function () {
        c.drawImage(cityImage, 35, 360);
    };
    var picture = text + ".jpg";
    cityImage.src = picture;
}