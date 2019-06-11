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
    var a = '';
    const url = 'https://oauth.zaloapp.com/v3/auth?app_id=3998092944035386293&redirect_uri=https://hitface.github.io/'+a;
    Http.open("GET",url);
    Http.send();
    var code = '';
    Http.onreadystatechange=(e)=>{
        var url_string = window.location.href
        var url = new URL(url_string);
        code = url.searchParams.get("code");
        console.log(code);
    }
    const urlToken = 'https://oauth.zaloapp.com/v3/access_token?app_id=3998092944035386293&app_secret=YT75ZSNE7mUD3t1fD3dJ&code='+code;
    fetch(urlToken)
    .then(data=>{return data.json()})
    .then(res=>console.log(res));

}