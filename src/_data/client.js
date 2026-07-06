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
    mapLink: "",
  },
  socials: {
    facebook: "",
    instagram: "",
  },
  //! Include the file protocol (https://) and NO trailing slash
  domain: "",
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
