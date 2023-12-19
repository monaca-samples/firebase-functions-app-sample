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

デフォルトではローカルのエミュレータに接続するようになっています。
接続先であるエミュレータのIPアドレス, ポートを適切なものに修正して下さい。

```
    connectFunctionsEmulator(window.functions, 'localhost', 5001);
```

なお、MonacaのIDE上でも、ローカルのエミュレータに接続することが出来ます。
アプリをビルドして動作検証する場合、接続先は`localhost`ではなくなりますのでご注意ください。


# 本番接続

本番のFirebaseに接続するためには、以下のように、import文を本番用のものに変更して下さい

```
    // Firebaseにアクセス (本番用)
    import { getFunctions, httpsCallable  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js";

    // Firebaseにアクセス（エミュレータ利用）
    // import { getFunctions, httpsCallable, connectFunctionsEmulator  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js";
```

また、次のエミュレータへの接続先を指定している次の文を次のようにコメントアウトして下さい。

```
    // connectFunctionsEmulator(window.functions, 'localhost', 5001);
```
