/**
 * Valid Mail - jQuery Plugin
 * Manages the validation of fields in forms
 * 
 * Copyright (c) 2015 Reinaldo "Ramon" José Nunes
 * 
 * Version: 2.0 (02/10/2015)
 * Requires: jQuery v1.11+
 * 
 * Dual licensed under GPL and MIT:
 *   http://www.gnu.org/licenses/gpl.html
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($){
	$.fn.validMail = function(options){
		// Definição dos valores padrões
        var defaults = {
          'action' : 'atendimento', // To send the form data
		  'attribute' : 'placeholder', // Attribute Validation
		  'check' : '', // Whether or not to validate checkbox
		  'checkMessage' : 'Mark the checkbox', // Checkbox default message.
		  'display' : '.answer', // Display default message
		  'fileType' : '', // type of File
		  'input' : '.input_field', // Field ID
        };
		
		// Plugin Settings
        var settings = $.extend({}, defaults, options);
		
		$(this).on("click",function(){
			var vazio = 0;
			var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

			//Analyzes each of the input received
			$(settings.input).each(function(){
				var idCampo = $(this).attr(settings.attribute);
				var valueCampo = $(this).val();
				
				if(valueCampo == ""){	//if the field is empty
					// Standart message field
					$(settings.display).html("The field <strong>"+idCampo+"</strong> is empty.");
					$(this).focus();
					vazio++;
					return false;
				}
				
				// se o campo for do tipo E-mail
				if(idCampo == 'E-mail:'){
					if(!filtro.test($("#email").val())){
						$(settings.display).html("The field <strong>"+idCampo+"</strong> is incorrect.");
						$("#email").focus();
						vazio++;
						return false;
					}
				}
				
				// if the field is of type File
				if(idCampo == 'Select Files'){ //Change the value of this field to match the placeholder of your form
					if(settings.fileType != ''){
						var arquivo = $("#files").val();
						if ((arquivo.split(".")[1].toLowerCase() != settings.fileType)) {
                        	$(settings.display).html("Annex only format files <strong>"+settings.fileType+"</strong>.");
                        	vazio++;
							return false;
                    	}	
					}
				}
				
				// If you have password field and Confirm Password
				if(idCampo == 'Confirm password:'){
					var campo_senha = $("#password").val();
					var campo_confirma = $("#confirm_pass").val();
					if(campo_confirma != campo_senha){
						console.info(campo_confirma+' - '+campo_senha);
						$(settings.display).html("The field <strong>"+idCampo+"</strong> is not equal to the fiedl <strong>Password</strong>.");
						$(this).focus();
						vazio++;
						return false;
					}
				}
				
				
				
				// CPF Validation
				$('input[placeholder="CPF:"]').blur(function(){
					alert("entrei no cpf");
                    var cpf = $(this).val();
					alert(cpf.length);
                    var numeros, digitos, soma, i, resultado, digitos_iguais;
                    digitos_iguais = 1;
                    if (cpf.length < 11) return false;
                    for (i = 0; i < cpf.length - 1; i++){
                        if (cpf.charAt(i) != cpf.charAt(i + 1)){
                            digitos_iguais = 0;
                            break;
                       }
                        
                        if (!digitos_iguais) {
                            numeros = cpf.substring(0,9);
                            digitos = cpf.substring(9);
                            soma = 0;
                            for (i = 10; i > 1; i--){
                                soma += numeros.charAt(10 - i) * i;
                                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                                
                                if (resultado != digitos.charAt(0)) return false;
                                numeros = cpf.substring(0,10);
                                soma = 0;
                                
                                for (i = 11; i > 1; i--){
                                    soma += numeros.charAt(11 - i) * i;
                                    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                                    if (resultado != digitos.charAt(1)){
                                        return false;
                                    }
                                    return true;
                               }
                            }
                        }else{
                            vazio++;
                            $(settings.display).html("the typed <strong>CPF</strong> not available");                                            
                            $(this).focus();
                            return true;
                       }
                    }
                    return true;
                	});
			});
			
			// If you have no errors in key fields, check if there are any checkbox to mark
			if(vazio == 0){
				if(settings.check != ""){
					var checkbox = settings.check;
					if($(checkbox).is(':checked')){
						vazio = 0;
					}else{
						$(settings.display).html(settings.checkMessage);
						vazio++;
						return false;
					}
				}
			}
			
			// if there is no error in the validation, run the submit form
			if(vazio == 0){		
				$('form').attr("action",settings.action).submit();
			}	
		});
	}
})(jQuery);