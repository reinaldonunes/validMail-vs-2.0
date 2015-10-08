# Simple JQuery Validation Form | ValidForm.js version 2.0

The Plugin ValidMail is in its second version, reworked and new features, such as: password validation and confirmation password and cpf validation.

Note: If you are looking for a simplified validation, download version 1.0

# Observation

As of version 1.0 of the plugin, you need to tailor your form for it to work correctly with the plugin.
The default settings are:
- Include a standard class in every field you want to validate (eg input_field);
- customize the PLACEHOLDER attribute fields;
- set an ID for the field email, 
- VOID or JAVASCRIPT:; to set in the action form.

# Customization
The valueMail 2.0 enables validation of various fields of the form:
- Checkbox confirmation;
- File format accepted by the input file;
- Password confirmation and password;
- CPF Validation (based on 11 digits);

Note: For fields such as telephone, cpf, zip, among others, may include mark fields for training. Field CPF, specifically, must use a 11-digit-based formatting mask.

# Get Started

Download the valueMail 2.0 and make a call on page:
```js
<script src="js/validMail.js"></script>
<script>
  $(".btn_send").validMail({
      // declaration settings
  });
```
After that, note which extra fields you want to validate and assign settings which are necessary:
```js
  action : 'result.php',
  attribute : 'placeholder',
  display : '.my_box_result', // NEW - Customize the object that shows the error (here you can set which the relevant class)
  input : '.input_field',
	fileType : 'pdf', // NEW - Set the file type supported by your form (PDF, .doc, .docx, .jpe, .png, etc ...) 
	check : '#confirm', //NEW - Use if you have a CheckBox or Radio to confirm the form
  checkMessage : 'My message confirm check', // Personalize the message to be displayed if the input check is not marked
```
Note: For file field, it can only be defined a format.

#STATEMENT
After configuring your form as above information, your form will be ready for validation.

Now that you have set up your form, download the files from this repository for any questions or flaws in the configuration query.

#LICENSE

Copyright © 2015 Reinaldo J. Nunes
Dual licensed under GPL and MIT
