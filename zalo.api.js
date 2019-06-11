Zalo.init({
    version: '2.0',
    appId: '3998092944035386293',
    redirectUrl: 'https://hitface.github.io/'
  }
);

Zalo.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      Zalo.api('/me',
        'GET',
        {
          fields: 'id,name'
        },
        function (response) {
          console.log(response);
        }
      );
    } else {
       	
Zalo.login(curentState, "get_profile,get_friends,send_message,post_feed");
    }
  });