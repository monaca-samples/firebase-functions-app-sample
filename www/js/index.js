// Firebaseの設定
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

// Firebaseにアクセス（本番用）
// import { getFunctions, httpsCallable  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js";

// Firebaseにアクセス（エミュレータ利用）
import { getFunctions, httpsCallable, connectFunctionsEmulator  } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js";

const firebaseConfig = {
  "apiKey":"%%API_KEY%%",
  "authDomain":"%%AUTH_DOMAIN%%",
  "projectId":"%%PROJECT_ID%%",
  "storageBucket":"%%STORAGE_BUCKET%%",
  "messagingSenderId":"%%MESSAGING_SENDER_ID%%",
  "appId":"%%APP_ID%%"
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
// エミュレータにアクセス
connectFunctionsEmulator(functions, 'localhost', 5001);

function log(message)  {
    const text = (typeof message === "string" || message instanceof String)  ? message : JSON.stringify(message);
    console.log(text);
    const prev = document.querySelector('#log').innerHTML; 
    document.querySelector('#log').innerHTML = prev + '\n' + text;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#getRandom').addEventListener('click', () => {
        const get_random = httpsCallable(functions, 'get_random');
        get_random().then((result) => {
            // 結果の表示
            log(result.data);
        }).catch((error) => {
            // エラーのハンドリング
            log('Error');
            log(error);
        });
    });

    document.querySelector('#postData').addEventListener('click', () => {
        const post_data = httpsCallable(functions, 'post_data');
        post_data({ 'header' : {
            'username': 'admin',
            'password': 'AA00XX11'
        },
        'body' : {
            'name': 'ぶどう'
        }
        }).then((result) => {
            log(result.data);
        }).catch((error) => {
            log(error);
        });
    });

    document.querySelector('#deleteData').addEventListener('click', () => {
      const deleteId = document.querySelector('#deleteId').value;
      log(`${deleteId}`);
      const delete_data = httpsCallable(functions, 'delete_data');
      delete_data({
        'body' : {
          'id': deleteId
        }
      }).then((result) => {
        log(result.data);
      }).catch((error) => {
        log(error);
      });
    });
});

