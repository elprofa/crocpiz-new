export const theme = {
    colors: {
      primary: "#868686",
      secondary: "#1392c0",
      bodyColor: "#000000",
      headingColor: "#333333",
      bordercolor: "#cccccc",
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      alto: "#ddd",
    },
    soicalColors: {
      facebook: "#3B5998",
      twitter: "#00ACEE",
      googlePlus: "#DD4B39",
      pinterest: "#C8232C",
      linkedin: "#0E76A8",
      flickr: "#FF0084",
      dribbble: "#EA4C89",
      google: "#DD4B39",
      skype: "#00AFF0",
      behance: "#0057ff",
      youtube: "#C4302B",
      vimeo: "#86C9EF",
      yahoo: "#720E9E",
      paypal: "#00588B",
      delicious: "#205CC0",
      flattr: "#F67C1A",
      android: "#A4C639",
      tumblr: "#34526F",
      wikipedia: "#333333",
      stumbleupon: "#F74425",
      foursquare: "#25A0CA",
      digg: "#191919",
      spotify: "#81B71A",
      reddit: "#C6C6C6",
      cc: "#688527",
      vk: "#2B587A",
      rss: "#EE802F",
      podcast: "#E4B21B",
      dropbox: "#3D9AE8",
      github: "#171515",
      soundcloud: "#FF7700",
      wordpress: "#1E8CBE",
      yelp: "#C41200",
      scribd: "#666666",
      ccStripe: "#008CDD",
      drupal: "#27537A",
      getPocket: "#EE4056",
      bitbucket: "#0E4984",
      stackOverflow: "#EF8236",
      hackerNews: "#FF6600",
      xing: "#126567",
      instagram: "#D82E86",
      quora: "#A82400",
      openid: "#E16309",
      steam: "#111111",
      amazon: "#E47911",
      slack: "#63C1A0",
      snapchat: "#FFFC00",
    },
    font: {
      bodyFont: "'Poppins', sans-serif",
      headingFont: "'Poppins', sans-serif",
      bodyFontSize: "14px",
      headingFontSizes: {
        h1: "42px",
        h2: "30px",
        h3: "26px",
        h4: "22px",
        h5: "18px",
        h6: "14px",
      },
    },
    lineHeights: {
      text: "26px",
      heading: "1.3",
    },
    baseTransition: "all 0.4s ease-in-out 0s",
  };
  
  const size = {
    xlarge: "1599px",
    large: "1199px",
    medium: "991px",
    small: "767px",
    xsmall: "575px",
    xxsmall: "480px",
    xxlargeOnly: "1700px",
    xlargeOnly: "1600px",
    largeOnly: "1200px",
    mediumOnly: "992px",
    smallOnly: "768px",
    xsmallOnly: "576px",
    xxsmallOnly: "481px",
  };
  
  export const device = {
    xlarge: `(max-width: ${size.xlarge})`,
    large: `(max-width: ${size.large})`,
    medium: `(max-width: ${size.medium})`,
    small: `(max-width: ${size.small})`,
    xsmall: `(max-width: ${size.xsmall})`,
    xxsmall: `(max-width: ${size.xxsmall})`,
    xxlargeOnly: `(min-width: ${size.xxlargeOnly})`,
    xlargeOnly: `(min-width: ${size.xlargeOnly})`,
    largeOnly: `(min-width: ${size.largeOnly})`,
    mediumOnly: `(min-width: ${size.mediumOnly})`,
    smallOnly: `(min-width: ${size.smallOnly})`,
    xsmallOnly: `(min-width: ${size.xsmallOnly})`,
    xxsmallOnly: `(min-width: ${size.xxsmallOnly})`,
  };