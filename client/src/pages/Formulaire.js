import React, { useState, useEffect } from "react";
import StudentService from "../services/student.service";
import CertificateService from "../services/certificate.service";
import "./formulaire.css";

function Formulaire() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState("");
  const [studentId, setStudentId] = useState("");
  const [message, setMessage] = useState("");
  const [conventionName, setConventionName] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const getStudents = () => {
    StudentService.getAll()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getStudent = (id) => {
    StudentService.get(id)
      .then((response) => {
        setStudent(response.data);
        setMessage(
          `Bonjour ${response.data.lastname} ${response.data.firstname},\n\n\n\nVous avez suivi ${response.data.convention?.[0]?.nbHours} heures de formation chez FormationPlus.\n\nPouvez-vous nous retourner ce mail avec la pièce jointe signée.\n\n\n\nCordialement,\n\nFormationPlus`
        );
        setConventionName(response.data.convention?.[0]?.name);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleStudentChange = (e) => {
    setSubmittedMessage("");
    if (e.target.value === "none") {
      setMessage("");
      setConventionName("");
      setStudentId("");
    } else {
      setStudentId(e.target.value);
      getStudent(e.target.value);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const saveCertificate = () => {
    if (studentId === "") {
      setSubmittedMessage("Veuillez sélectionner un étudiant");
      return;
    }

    const data = {
      student: studentId,
      convention: student.convention?.[0]?._id,
      message: message,
    };
    CertificateService.create(data)
      .then((response) => {
        setSubmittedMessage("Le certificat a été envoyé avec succès !");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="container">
      <h1>FormationPlus</h1>
      <div className="form-container">
        <label htmlFor="student">Etudiant</label>
        <select
          className="form-control"
          required
          id="student"
          name="student"
          onChange={handleStudentChange}
        >
          <option value={"none"}>Selectionnez un étudiant</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.lastname} {student.firstname}
            </option>
          ))}
        </select>
      </div>
      <div className="form-container">
        <label htmlFor="convention">Convention</label>
        <input
          id="convetion"
          name="convetion"
          type="text"
          value={conventionName}
          readOnly
        />
      </div>
      <div className="form-container">
        <label htmlFor="message"> Message</label>
        <textarea
          name="message"
          id="message"
          rows="15"
          cols="100"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <button onClick={saveCertificate}>Envoyer</button>
      <div>
        <p>{submittedMessage}</p>
      </div>
    </div>
  );
}

export default Formulaire;
