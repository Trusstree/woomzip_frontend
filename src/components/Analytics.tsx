import Script from "next/script";

export function AnalyticsHead() {
  return (
    <>
      <Script id="google-tag-management">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KH5XN2WD');"${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");`}
      </Script>
    </>
  );
}

export function AnalyticsBody() {
  return (
    <>
      {/* <!-- Google Tag Manager (noscript) --> */}

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KH5XN2WD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* <!-- End Google Tag Manager (noscript) --> */}
      {/* <!-- Google Tag Manager --> */}
    </>
  );
}
