(function($, Drupal) {
    // put function into drupal commands:
    Drupal.ajax.prototype.commands.setAccessTokenAndLocation =
        function(ajax, response, status) {
            // response object as passed in our Ajax callback
            oAuthAccessTokenAndLocationListener(response);
        };
    // On hover of the oauth2 button copy the client credential processing form over from Drupal.settings
    Drupal.behaviors.replaceOAuthClientCredentialForm = {
        attach: function(){
            $('.link_open_oauth2:not(.replaceOAuthClientCredentialForm-processed)')
                .addClass('replaceOAuthClientCredentialForm-processed')
                .hover(function(){
                $modal = $('[data-role="oauth2_modal"] .modal-body');
                if(!$modal.hasClass('.replaceOAuthClientCredentialForm-processed')) {
                    $modal.html(Drupal.settings.apigee_oauth_additions_form);
                    Drupal.attachBehaviors($modal, Drupal.settings);
                }
            });
        }
    };
}(jQuery, Drupal));