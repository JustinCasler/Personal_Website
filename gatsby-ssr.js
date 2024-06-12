import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="nextsale-pixel-script"
      dangerouslySetInnerHTML={{
        __html: `(function (w,r){w['NextsaleObject']=r;w[r]=w[r]||function(){(w[r].q = w[r].q || []).push(arguments)};})(window, 'nsio');`,
      }}
    />,
    <script
      key="nextsale-pixel-src"
      src="https://sdk.nextsale.io/nextsale.min.js?key=pk_10001cd28e7d7607572bf9d865bcb6b6d482c943"
      async
    />,
  ]);
};
