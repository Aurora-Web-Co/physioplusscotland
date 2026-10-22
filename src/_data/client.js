module.exports = {
  name: "Physiotherapy Plus Scotland",
  email: "info@physioplusscotland.co.uk",
  phoneForTel: "01620 894 377",
  phoneFormatted: "01620 894 377",
  address: {
    lineOne: "7 Church Road",
    lineTwo: "",
    city: "North Berwick",
    state: "East Lothian",
    zip: "EH39 4AD",
    country: "",
    mapLink:
      "https://www.google.com/maps?ll=56.058495,-2.722187&z=14&t=m&hl=en&gl=GB&mapclient=embed&cid=14125919682485843622",
  },
  socials: {
    facebook: "https://www.facebook.com/physioplusscotland/",
    instagram: "",
  },
  bookingUrl: "https://physiotherapyplusscotland.connect.tm3app.com",
  //! Include the file protocol (https://) and NO trailing slash
  domain: "https://physioplusscotland.co.uk",
  isProduction: process.env.ELEVENTY_ENV === "PROD",
  // Netlify sets CONTEXT on every build; branch deploys and deploy previews
  // get a noindex tag so client previews never show up in search.
  noindex: Boolean(process.env.CONTEXT) && process.env.CONTEXT !== "production",
};
