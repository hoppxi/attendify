import 'dotenv/config';

export default {
  expo: {
    name: "Attendify",
    slug: "Attendify",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "dark",
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.erar111.Attendify"
    },
    web: {},
    extra: {
      SERVER: process.env.SERVER,
      eas: {
        projectId: "425d5084-2958-4e50-a9d3-413fe0dd2fbf"
      }
    }
  }
}
