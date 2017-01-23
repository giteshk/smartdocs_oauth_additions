<script type="text/javascript">
    var proxyUrl = '<?php print $proxy; ?>';
    var access_token = '<?php print $access_token; ?>';
    var accessTokenParamName = '<?php print $accessTokenParamName; ?>';
    var accessTokenType = '<?php print $accessTokenType; ?>';
    jQuery(function() {
        if(access_token!= 'error' && access_token != 'access_denied') {
            window.opener.setAccessTokenAndLocation("", "", access_token, accessTokenType, accessTokenParamName, proxyUrl);
        } else {
            var error = 'Access Token call has failed.';
            if(access_token == 'access_denied') {
                error = 'You have denied access to read and write all files and folders';
            }
            window.opener.setAccessTokenAndLocation(error, error,"","", "", "");
        }
        self.close();
    });
</script>