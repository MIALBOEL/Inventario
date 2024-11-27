


let datos = [
    {codigo: '1', nombre: 'VACUNA ANTIRRABICA', stock: 15, ubicacion: 'V1001'},
    {codigo: '2', nombre: 'ALIMENTO PERRO ADULTO', stock: 50, ubicacion: 'V2002'},
    {codigo: '3', nombre: 'ANTIPULGAS GATOS', stock: 30, ubicacion: 'V3003'},
    {codigo: '4', nombre: 'JABON MEDICADO', stock: 40, ubicacion: 'V4004'},
    {codigo: '5', nombre: 'ALIMENTO GATO CACHORRO', stock: 25, ubicacion: 'V5005'},
    {codigo: '6', nombre: 'VITAMINAS PERROS', stock: 60, ubicacion: 'V6006'}
];

function inventario(datos){
    let opciones =[1,2,3,4,5];
    let menu = prompt('Ingrese una opción: \n1-Ingresar un nuevo producto\n2-Eliminar un producto existente\n3-Consultar stock\n4-Consultar ubicación\n5-Listar base de datos\n\nIngrese cualquier otro valor para SALIR');
    while(menu != opciones){
        if(menu == 1){ // AGREGAR UN PRODUCTO
            let nuevoCodigo = prompt('Ingrese el código del producto: ');
            if(nuevoCodigo == null) { inventario(datos) }
            let validarCodigo = datos.some(dato => dato.codigo == nuevoCodigo);
            while(validarCodigo == true || nuevoCodigo == '') {
                nuevoCodigo = prompt('El código ingresado es incorrecto o ya existe, ingrese otro: ')
                validarCodigo = datos.some(dato => dato.codigo == nuevoCodigo);
            }
    
            let nuevoNombre = prompt('Ingrese el nombre del producto: ').toUpperCase();
            let validarNombre = datos.some(dato => dato.nombre == nuevoNombre);
            while(validarNombre == true || nuevoNombre == ''){
                nuevoNombre = prompt('El nombre ingresado es incorrecto o ya existe, ingrese otro: ').toUpperCase();
                validarNombre = datos.some(dato => dato.nombre == nuevoNombre);
            }
   
            let stock = Number(prompt('Ingrese el stock: '))
            if(stock == null) { inventario(datos) }
            while(isNaN(stock) || stock == ''){
                stock = Number(prompt('El valor ingresado no es numérico: '))
            }
         
            let nuevaUbicacion = prompt('Ingrese la ubicación del producto: ').toUpperCase();
            let validarUbicacion = datos.some(dato => dato.ubicacion == nuevaUbicacion)
            while(validarUbicacion == true || nuevaUbicacion == ''){
                nuevaUbicacion = prompt('La ubicación ya está en uso o es incorrecta, ingrese otra: ').toUpperCase();
                validarUbicacion = datos.some(dato => dato.ubicacion == nuevaUbicacion)
            }
   
            let producto = {
                codigo: nuevoCodigo,
                nombre: nuevoNombre,
                stock: stock,
                ubicacion: nuevaUbicacion
            }
            datos.push(producto);
            console.log(datos)
            let otroProducto = confirm('¿Desea cargar otro producto a la lista?');
            if(!otroProducto){ inventario(datos) }

        } else if(menu == 2){ // ELIMINAR UN PRODUCTO
            let codigo = prompt("Ingrese el código o nombre del producto a eliminar: ")
            if(codigo == null) { inventario(datos) }
            let producto = datos.find(producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            let busqueda = datos.findIndex( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            if(producto != undefined){
                let respuesta = confirm(`Seguro desea eliminar el producto ${producto.nombre}, en el índice ${busqueda}?`)
                if(respuesta == true){
                    datos.splice(busqueda, 1)
                    alert("Producto eliminado!")
                    inventario(datos)
                } else { inventario(datos) }
            } else {
                alert("Producto no encontrado!")
            }
            
        } else if(menu == 3){ // CONSULTAR STOCK
            let codigo = prompt("Ingrese el código o nombre del producto buscado") 
            if(codigo == null) { inventario(datos) }
            let busqueda = datos.find( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            if(busqueda != undefined){
                let resultado = confirm(`El stock disponible del producto ${busqueda.nombre} es de ${busqueda.stock} unidades\n¿Desea realizar otra búsqueda?`)
                if(!resultado || resultado) { inventario(datos) }
            } else {
                alert('Producto no encontrado!')
            }
            
        } else if(menu == 4){ // CONSULTAR UBICACIÓN
            let codigo = prompt("Consultar Ubicación por código o nombre") 
            if(codigo == null) { inventario(datos) }
            let busqueda = datos.find( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()))
            if(busqueda != undefined){
                alert(`La ubicación del producto ${busqueda.nombre} es ${busqueda.ubicacion}`);
                inventario(datos);
            } else {
                alert('Producto no encontrado!')
            }
            
        } else if(menu == 5){ // LISTAR BASE DE DATOS
            let vista = 'Productos disponibles en la base de datos: \n\n';
            datos.forEach(item => {vista += item['codigo'] + ' ' + item['nombre'] + '\n'});
            alert(vista);
            inventario(datos);
        } else {
            let consulta = confirm('¿Desea terminar el programa?')
            if(!consulta){ inventario(datos) } else { break }
        } 
    }   
}

// Llamada a la función
inventario(datos);



        
 