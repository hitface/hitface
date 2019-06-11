Zalo.init({
    version: '2.0',
    appId: '3998092944035386293',
    redirectUrl: 'https://hitface.github.io/'
}
);

function getToken() {
    Zalo.getLoginStatus(function (response) {
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
            Zalo.login();
        }
    });

    const Http = new XMLHttpRequest();
    const url = 'https://oauth.zaloapp.com/v3/auth?app_id=3998092944035386293&redirect_uri=https://hitface.github.io/';
    Http.open("GET",url);
    Http.send();

    Http.onreadystatechange=(e)=>{
        console.log(Http.response);
    }

}