import api from "../config/api";

const getAll = () => {
  return api.get("/students");
};
const get = (id) => {
  return api.get(`/students/${id}`);
};

const StudentService = {
  getAll,
  get,
};

export default StudentService;
