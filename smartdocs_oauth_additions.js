/**
 * @file
 * SmartDocs OAuth additions JS.
 */

(function($) {
    // Put function into drupal commands.
    Drupal.ajax.prototype.commands.setAccessTokenAndLocation = function(ajax, response, status) {
        // Remove Error message if there was one set one before.
        var errorContainer = $('div[data-role="error_container"]');
        if (errorContainer.html() !== '') {
            errorContainer.removeAttr('style');
            errorContainer.html('');
        }

        // Response object as passed in our Ajax callback.
        oAuthAccessTokenAndLocationListener(response);
    };

    // On hover of the oauth2 button copy the client credential processing form over from Drupal.settings
    Drupal.behaviors.replaceOAuthClientCredentialForm = {
        attach: function() {
            $('.link_open_oauth2:not(.replaceOAuthClientCredentialForm-processed)')
                .addClass('replaceOAuthClientCredentialForm-processed')
                .hover(function() {
                    var $modal = $('[data-role="oauth2_modal"] .modal-body');
                    if(!$modal.hasClass('.replaceOAuthClientCredentialForm-processed')) {
                        $modal.html(Drupal.settings.apigee_oauth_additions_form);
                        Drupal.attachBehaviors($modal, Drupal.settings);
                    }
                });
        }
    };
}(jQuery));
