(function ($, Drupal) {
    Drupal.behaviors.applyMasks = {
      attach: function (context, settings) {
        // Aplica a máscara para o campo WhatsApp, apenas se o campo for encontrado.
        var whatsappField = $('#edit-field-whatsapp-0-value', context);
        if (whatsappField.length) {
            console.log('Campo WhatsApp encontrado:', whatsappField);
            // Aplica a máscara
            whatsappField.mask('(00) 00000-0000');
            console.log('Máscara de telefone aplicada ao campo WhatsApp.');
        }

        // Aplica a máscara para o campo CNPJ, apenas se o campo for encontrado.
        var cnpjField = $('#edit-field-cnpj-0-value', context);
        if (cnpjField.length) {
            console.log('Campo CNPJ encontrado:', cnpjField);
            // Aplica a máscara
            cnpjField.mask('00.000.000/0000-00');
            console.log('Máscara de CNPJ aplicada ao campo CNPJ.');
        }
      }
    };
  })(jQuery, Drupal);
  
  