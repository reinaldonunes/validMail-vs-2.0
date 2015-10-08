<!DOCTYPE html>
<html lang="pt-br" class="no-js">
<head>
	<title> ValidMail 2.0 </title>
		<meta charset="utf-8">
        <link rel="stylesheet" href="css/default.css" type="text/css" media="screen">
	</head>
	<body>
		<h1>validMail.js 2.0</h1>
		<form action="javascript:;" method="post">
			<input type="text" name="name" placeholder="Name:" class="input_field" />
			<input type="text" name="email" id="email" placeholder="E-mail:" class="input_field" />
			<input type="password" name="password" id="password" placeholder="Password:" class="input_field small_input left" />
			<input type="password" name="confirm_pass" id="confirm_pass" placeholder="Confirm password:" class="input_field small_input right" />
			<input type="text" name="city" placeholder="City:" class="input_field small_input left" />
			<select id="state" name="state" class="input_field small_input right" placeholder="State:">
				<option value="">State:</option>
				<option value="State">State Option</option>
				<option value="State">State Option</option>
				<option value="State">State Option</option>
			</select>
			<input type="text" name="cpf" placeholder="CPF:" class="input_field small_input left" />
			<input type="file" name="files" id="files" placeholder="Select Files" class="input_field small_input right" />
			<textarea name="message" class="input_field msg" placeholder="Mesage:"></textarea>
			<span class="left">
				<input type="checkbox" name="confirm" id="confirm" value="" />
				I agree to the terms
			</span>
			<input type="submit" class="right btn_send" value="SEND MESSAGE" />
			<p class="box_answer"></p>
		</form>
	<?php
		require_once("includes/js_custom.php"); // include JQuery 
	?>
	<script src="js/validMail.js"></script>
	<script>
		$(".btn_send").validMail({
			action : 'contact.php',	
			display : '.box_answer',
			check : '#confirm',
			checkMessage : 'To continue you must agree to the terms.',
			fileType : 'pdf'
		});
	</script>
	</body>
</html>