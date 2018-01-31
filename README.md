# Facebook Redirect Remover
Chrome extension to remove facebook redirection on urls opened from Facebook/Workplace.

This chrome extension intercepts facebook web requests and if it is a redirect url, the extension internally redirects to the original url. Hence, the facebook redirect url never hits the facebook server and it actaully improves speed since it is redirected internally (locally) instead of making a round trip to facebook and then redirecting.

Works on Facebook and other Facebook products like Workplace too.
