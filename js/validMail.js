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
				if(idCampo == 'CPF:'){ 
					var cpf = $(this).val();
					cpf = cpf.replace(/[^\d]+/g,'');    
					   
					if (cpf.length != 11 ||	cpf == "00000000000" ||	cpf == "11111111111" ||	cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" ||	cpf == "66666666666" ||	cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
						alert("cpf não válido");
						vazio++;
						return false;
					}       
					var i;
					var add; 
					for (i=0;i < 9; i ++){       
						add += parseInt(cpf.charAt(i)) * (10 - i);  
						rev = 11 - (add % 11);  
						if (rev == 10 || rev == 11) rev = 0;    
						if (rev != parseInt(cpf.charAt(9))) return false;
					
						add = 0;    
						for (i = 0; i < 10; i ++){      
							add += parseInt(cpf.charAt(i)) * (11 - i);  
							var rev = 11 - (add % 11);  
							if (rev == 10 || rev == 11) rev = 0;    
							if (rev != parseInt(cpf.charAt(10))) return false;      
							
							vazio = 0;
							alert("cpf correto");
							return true;   
						}
					}
				} // end cpf validation
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