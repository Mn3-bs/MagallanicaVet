//1. Preparar el disparador
$(document).ready(function() {/* Garantiza que el dom esté completamente cargado */

    //-------------------------------------AGREGAR A FAVORITOS-------------------------------------
    // 2. Escuchar el clic en cualquier botón que tenga la clase .btn-fav
    $('.btn-fav').click(function() {
        //this es el botón (cualquiera que se seleccionara) y cada producto tiene un data-name=Producto n
        // 3. Obtener el nombre del producto
        const nombreProducto = $(this).data('name');//dataname lee el número de producto para ver cuál se seleccionó y se guarda en nombreProducto
        //dataname busca cualquier atributo que empiece con data, es una función de JQuery
        // 4. Revisar si el producto ya es favorito o no y altera el estado visual
        // .toggleClass añade la clase si no existe, y la quita si ya existe
        $(this).toggleClass('active');//toggleClass función de JQuery para agregar clase active o quitarla
        //toggleClass sirve por si quiero pintar de rojo un corazón en bootstrap, sería lindo
        // 5. Crear el mensaje si el botón tiene la clase 'active'
        let mensaje = "";//mensaje debe ser let pq cambia según ifelse
        if ($(this).hasClass('active')) {//hasClass devuelve true si el elemento tiene clase active
            //mostrar aviso
            mensaje = "¡" + nombreProducto + " añadido a favoritos!";
            $(this).siblings('span').text('¡En tus favoritos!');//siblings pq span está al lado del corazón
        } else {
            mensaje = nombreProducto + " eliminado de favoritos.";
            $(this).siblings('span').text('¡Agregar a Favoritos!');
        }
        //para el botón que se acaba de presionar, se busca la etiqueta del corazón i, el toogle le pone o no la etiqueta active
        $(this).find('i').toggleClass('bi-heart bi-heart-fill');//bi-heart son propidades de bootstrap, vacío o lloeno
        // 6. Buscar el div del cuerpo del toast y cambiar el texto
        //es div class="toast-body"
        $('.toast-body').text(mensaje);

        //PONER LA HORA Y MIN ACTUALES
        let ahora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });//limpia el formato tolocaletimestring
        $('.toast-header small').text(ahora);//escrirlo en la etiqueta

        // 7. Activar el toast de Bootstrap para que aparezca
        //hay que buscar el elemento html del toast por su ID, es el que está despues del div del botón en el toast
        const toastElement = document.getElementById('liveToast');
        //le dice al toast que cobre vida con la animación de bootstrap usando la librería de bootstrap getOrCreateInstance
        let toast = bootstrap.Toast.getOrCreateInstance(toastElement);//bootstrap le dice al navegador que mustre el mensaje
        toast.show();//ordena a la animación que se muestre en pantalla
    });

});