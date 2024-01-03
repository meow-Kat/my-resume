import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import messagesEn from './messages/en.json'; // 英文訊息
import messagesZh from './messages/tw.json'; // 中文訊息

// 多語系
import { IntlProvider } from 'react-intl';

const messages = {
  en: messagesEn,
  tw: messagesZh,
};

const locale = 'tw'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
      <App />
    {/* </IntlProvider> */}
  </React.StrictMode>,
)
