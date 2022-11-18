import api from "../config/api";

const create = (data) => {
  return api.post("/certificate", data);
};

const CertificateService = {
  create,
};

export default CertificateService;
