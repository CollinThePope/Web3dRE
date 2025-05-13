const canvas = document.getElementById("MainCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 0.7;
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let MiddleX = innerWidth / 2;
let MiddleY = innerHeight / 2;

let PlayerPos = [
    {
    PlayerX: 0,
    PlayerY: 5,
    PlayerZ: 0
    }
]


//while (e.key === )

let FOV = 1;
//let PointArray = [Triangle1Array, Triangle2Array];
//this comment is specifically to push changes

let BoxObj = [
    //Position, rotation, information about cube (texture info later)
    {
        PosX: 0,
        PosY: 0,
        PosZ: 5,
        Rotation: 0
    },
    //BoxObjMesh
    {
        PointX: 0,
        PointY: 0,
        PointZ: 5
    },
    {
        PointX: 5,
        PointY: 0,
        PointZ: 5
    },
    {
        PointX: 5,
        PointY: 5,
        PointZ: 5
    },
    {
        PointX: 0,
        PointY: 5,
        PointZ: 5
    },
    {
        PointX: 0,
        PointY: 0,
        PointZ: 10
    },
    {
        PointX: 5,
        PointY: 0,
        PointZ: 10
    },
    {
        PointX: 5,
        PointY: 5,
        PointZ: 10
    },
    {
        PointX: 0,
        PointY: 5,
        PointZ: 5
    }
]




//there will be a block of code that detemines what objects to draw based on the camera's position and feeds that into ObjToDraw

//Does not work  right now

function DrawScreen(ObjToDraw) {
    ctx.beginPath();
    for (let index = 1; index < BoxObj.length; index++) {
        const element = ObjToDraw[index];
        //console.log(index)
        //every triangle drawn counter
        let EveryTriangleCounter = 0
        EveryTriangleCounter++
        ctx.lineTo(
            (element.PointX * element.PointZ * FOV) + MiddleX,
            MiddleY - (element.PointY * element.PointZ * FOV)
        )


        if (EveryTriangleCounter = 3) {
            EveryTriangleCounter = 0;
            let indexminustwo = index - 2;
            const triangleelement = ObjToDraw[indexminustwo];

            ctx.lineTo(
                (triangleelement.PointX * triangleelement.PointZ * FOV) + MiddleX,
                MiddleY - (triangleelement.PointY * triangleelement.PointZ * FOV)
            )
        }
        
        
        

        //console.log((element.PointX * element.PointZ * FOV) + MiddleX);
        //console.log(MiddleY - (element.PointY * element.PointZ * FOV));
    }
    ctx.stroke();
}

DrawScreen(BoxObj);


//ctx.beginPath();
//ctx.moveTo();
//ctx.lineTo();
//ctx.stroke();


