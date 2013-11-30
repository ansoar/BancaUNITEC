$(document).ready(function() {

	// Generar más cuentas para clientes a Crear
	var numeroId = 2;
	$("#agregar").click(function(){		
		$(this).after('<div id=cuenta_'+numeroId+'></div>');
		$("#cuenta_"+numeroId).append('<div class="page-header"><h2>Tipo de Cuenta</h2></div><p><div class="form-group"><div class="radio"><label><input type="radio" name="optionsTipo" id="optionsTipo1" value="optionTipo1" checked>Cheques</label></div><div class="radio"><label><input type="radio" name="optionsTipo" id="optionsTipo2" value="optionTipo2">Ahorros</label></div><div class="form-group"></p><!-- /Tipo de cuenta --><!-- Saldo Inicial --><div class="page-header"><h2>Saldo Inicial</h2></div><p><div class="input-group"><span class="input-group-addon">$</span><input type="text" class="form-control"><span class="input-group-addon">.00</span></div></p><!-- /Saldo Inicial --><!-- Protección --><div id="proteccion"><div class="page-header"><h2>Protección</h2></div><p><div class="form-group"><div class="radio"><label><input type="radio" name="optionProt" id="optionProt1" value="optionProt1" checked>Si</label></div><div class="radio"><label><input type="radio" name="optionProt" id="optionProt2" value="optionProt2">No</label></div></div></p></div>');
		numeroId++;	
		});



	//Ocultar y Mostrar los elementos de Protección para AGREGAR CUENTA
	$('#proteccion').hide();
	$('#optionsTipo1').click(function(){
		$('#proteccion').show('slow');
	});
	$('#optionsTipo2').click(function(){
		$('#proteccion').hide('slow');
	});

	//Ocultar y Mostrar elementos de Buscar Cliente
	$('#panelBuscar').hide();

	$('#buscar').click(function(){
		$('#panelBuscar').show('slow');
	});
	$('salirBuscar').click(function() {
		$('#panelBuscar').hide('slow');
	});

});