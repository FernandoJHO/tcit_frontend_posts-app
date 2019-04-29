function compare(v1,v2){

    v1 = String(v1);
    v2 = String(v2);

    if( v1 === v2 ){
        return "Números iguales";
    } else {
        if( v1 > v2 ){
            return v1;
        } else{
            return v2;
        }
    } 
    
}

console.log(compare(2.2,"2.3"));