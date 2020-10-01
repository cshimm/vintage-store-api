module.exports = ({ env }) => ({
  // ...

  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("dlvwflbqh"),
      api_key: env("342228839123628"),
      api_secret: env("AeytnmbPSp8gmUdgRa55pPTAJdw"),
    },
  },
  // ...
});
