import React from 'react';
import appCss from './app.module.css'

function App() {
  return (
    <div className={appCss.wrap}>
      <div className={appCss.panel}>
        <div className={appCss.panel_footer}>
          <button className={appCss.export_btn}>
            Export
          </button>
        </div>
      </div>
      <div className={appCss.line_preview}></div>
    </div>
  );
}

export default App;
