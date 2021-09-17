import { envVar } from "../utils";

export const uris = {
  service: {
    base: envVar("API_URI", "/api"),
    questions: {
      base: "/questions",
      all: "",
    },
  },
};
