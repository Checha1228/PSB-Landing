"use strict";function functionMenu(){var e=document.getElementById("menu-psb-landing");"menu-landing-psb"===e.className?e.className+=" responsive-menu":e.className="menu-landing-psb",$(".icon-hamburger").toggleClass("active")}jQuery(document).ready(function(r){r("#FormPSB").validate({errorElement:"i",rules:{nombre:"required",email:{required:!0,email:!0},numeroContacto:"required",ciudad:"required",programa:"required"},messages:{nombre:"Ingresa tu Nombre y Apellido",email:"Ingresa tu Correo electrónico",numeroContacto:"Ingresa tu número de contacto",ciudad:"Selecciona tu ciudad",programa:"Selecciona el programa que estas interesado"}}),r("#FormPSB").submit(function(e){e.preventDefault(),r("#FormPSB").valid()&&r.ajax({url:"",data:r("#FormPSB").serialize(),success:function(e){jQuery(".cont-modal-form").fadeIn()},type:"POST"})}),r("#Aceptar").click(function(e){e.preventDefault(),jQuery(".cont-modal-form").fadeOut()})});