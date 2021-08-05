import "../styles/globals.css";
import Cookies from "js-cookie";
import { useEffect } from "react";

const GA_TRACKING_ID = "UA-152720382-6";
const experimentID = "zF2wnhhySviIsi2xywPFwg";

function addAnalytics(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
}

function MyApp({ Component, pageProps }) {
  function getVariant(destination) {
    let variantMap = {
      default: 0, // variant codes are indexed from 0 and so on, 0 being for the original
      __layer0__env__preview: 1, // first variant
    };
    return variantMap[destination];
  }
  useEffect(() => {
    let variant = getVariant(Cookies.get("layer0_destination"));
    addAnalytics(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );
    ga("create", GA_TRACKING_ID, "auto");
    ga("set", "exp", `${experimentID}.${variant}`);
    ga("send", "pageview");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
