import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function check_speed() {
    sessionStorage.now = Date.now();
    setTimeout(check_speed, 25);
}
// Вешаем обработчик на полную загрузку страницы
window.onload = function() {
    var now = Date.now();
    if ( sessionStorage.now ) {
        var loaded_in = now - parseInt(sessionStorage.now);
        // отправляем значение loaded_in на сервер
        // значение в миллисекундах
      console.log(loaded_in);
    }
    check_speed();
};