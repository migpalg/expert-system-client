// @packages
import axios from "axios";

// @scripts
import { config } from "../../../core/config";

const uris = config.uris.service;

export class QuestionsService {
  /**
   * questions service constructor with all dependencies
   * @param {Object} props class properties
   * @param {import('axios').AxiosInstance} props.client
   */
  constructor({ client }) {
    this._client = client;
  }

  getAll() {
    return this._client
      .get(uris.questions.all)
      .then((response) => response.data);
  }
}

export const questionsService = new QuestionsService({
  client: axios.create({
    baseURL: uris.base + uris.questions.base,
  }),
});
