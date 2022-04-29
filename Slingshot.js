// a) Cambiar nombre de Chain a Sligshot (cambiar index.js)
class SlingShot{    

    // b) En lugar de bodyB, ponemos point de anclaje  
    constructor(bodyA, pointB){     
        var options = {
            bodyA: bodyA,

            // c) Cambiar bodyB por pointB        
            pointB: pointB,   

            stiffness: 0.04,
            length: 10

        } // d) Agregamos el argumento que trae PointB
        this.pointB = pointB;    

        // e) En lugar de chain es sling
        

        // f)  Agregamos al mundo el sling 
               
    }

    fly(){
         // i) Hace que el resorte se quede sin el bodyA (Bird)
        this.sling.bodyA = null;            
    }

    display(){ 
       
        if(this.sling.bodyA){                   
            //g) Cambiamos chain por sling
            

            //h) Y el pointB es la posición del cuerpo pointB
           
                             
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}