# 使い方

```
public/index.html
```

の接続情報

```
    const firebaseConfig = {
      "apiKey":"%%API_KEY%%",
      "authDomain":"%%AUTH_DOMAIN%%",
      "projectId":"%%PROJECT_ID%%",
      "storageBucket":"%%STORAGE_BUCKET%%",
      "messagingSenderId":"%%MESSAGING_SENDER_ID%%",
      "appId":"%%APP_ID%%"
    };
```

を適切に修正して、ブラウザで開きます

# エミュレータ

エミュレータに接続して試したい場合、import文を以下のように修正します。

```
    // Firebaseにアクセス（エミュレータ利用）
    import { getFunctions, httpsCallable, connectFunctionsEmulator  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js";
```

また、`app`と`functions`の定義後に、次のコードを挿入して下さい。
接続先であるエミュレータのIPアドレス, ポートを適切なものに修正して下さい。

```
    connectFunctionsEmulator(functions, 'localhost', 5001);
```

MonacaのIDE上でも、ローカルのエミュレータに接続することが出来ます。
アプリをビルドして動作検証する場合、接続先は`localhost`ではなくなりますのでご注意ください。

なお、エミュレータに接続するためには、httpでの接続が可能で、かつ、Mixed Content Errorを
回避する必要があります。Androidであれば、config.xmlに

```
<preference name="scheme" value="http"/> 
```

