import React from 'react';
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="custom-config"
      dangerouslySetInnerHTML={{
        __html: `
          console.log('Custom Config script loaded');
          (function(w, r) {
            w[r] = w[r] || function() {
              (w[r].q = w[r].q || []).push(arguments);
            };
          })(window, 'customConfig');

          customConfig({
            siteId: '66eb8a8120c20baed38d8182'
          });
        `,
      }}
    />,
    <script key="main-script" src="https://justincasler.github.io/Script/script.js" async />,
  ]);
};
