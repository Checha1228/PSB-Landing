"use strict";

jQuery(document).ready(function ($) {
	$("#FormPSB").validate({
		errorElement: "i",
		rules: {
			nombre: "required",
			email: {
				required: true,
				email: true
			},
			numeroContacto: "required",
			ciudad: "required",
			programa: "required"
		},
		messages: {
			nombre: "Ingresa tu Nombre y Apellido",
			email: "Ingresa tu Correo electrónico",
			numeroContacto: "Ingresa tu número de contacto",
			ciudad: "Selecciona tu ciudad",
			programa: "Selecciona el programa que estas interesado"
		}
	});

	$("#FormPSB").submit(function (e) {
		e.preventDefault();
		if ($("#FormPSB").valid()) {
			$.ajax({
				url: '',
				data: $("#FormPSB").serialize(),
				success: function success(data) {
					jQuery('.cont-modal-form').fadeIn();
				},
				type: 'POST'
			});
		}
	});
	$('#Aceptar').click(function (e) {
		e.preventDefault();
		jQuery('.cont-modal-form').fadeOut();
	});
});
//# sourceMappingURL=../maps/Formulario.js.map
