function solveTriangle(angle1,angle2,side3,places, degreeInput, degreeOutput){
    Math.rounder = function(value, places) {
        return Math.round((value + Number.EPSILON) * (10 ** places)) / (10 ** places)
    }
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    }
    Math.degrees = function(radians) {
        return radians * 180 / Math.PI;
    }
    
    sideC = side3
    if(degreeInput){
        angleA = Math.radians(angle1)
        angleB = Math.radians(angle2)
    }else{
        angleA = angle1
        angleB = angle2
    }
    
    
}