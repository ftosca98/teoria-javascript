const comprarEntrada = ( function(){

    //esta aparte la definen com privado.
    let evento = "Carnaval 2023";
    

    //aqui publico.
    return {
        mostrarEntrada: function() {
             console.log(evento);
        }
    }
})();

comprarEntrada.mostrarEntrada();
