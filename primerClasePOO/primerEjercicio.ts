var  figlet  =  require ( 'figlet' ) ;

figlet ( '¡¡Hola esta es una prueba!!' ,  function ( err: any ,  datos: any )  { 
    if  ( err )  { 
        console . log ( 'Algo salió mal...' ) ; 
        console . dir ( err ) ; 
        return ; 
    } 
    console . log ( datos ) 
} ) ;
