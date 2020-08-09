/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "components/pageHeader";
import "./styles.css";
import Input from "../../../components/input";
import warningIcon from "../../../assets/images/icons/warning.svg";
import Textarea from "../../../components/textarea";
import Select from "../../../components/select";
import api from "../../../services/api";
import swal from "sweetalert";

function teacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewsscheduleItems() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }
  function handleCreatClasses(e: FormEvent) {
    e.preventDefault();
    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        swal(" Bom trabalho! ", " seu cadastro  foi realizado ", "success");

        history.push("/");
      })
      .catch(() => {
        swal("algo arrado", "Erro no seu cadastro", "error");
      });
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que voce quer dar aula"
        description="o primeiro passa e preencher o formulario de inscriçao"
      />

      <main>
        <form onSubmit={handleCreatClasses}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Materia"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "artes", label: "artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "ciencias", label: "ciencias" },
                { value: "Matematica", label: "Matematica" },
                { value: "Portugues", label: "Portugues" },
                { value: "Educaçao fisica", label: "Educaçao fisica" },
                { value: "historia", label: "historia" },
              ]}
            />
            <Input
              name="cost"
              label="custo da sua hora por aula"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponiveis
              <button type="button" onClick={addNewsscheduleItems}>
                + Novo horario
              </button>
            </legend>
          </fieldset>
          {scheduleItems.map((scheduleItem, index) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, "week_day", e.target.value)
                  }
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda-feira" },
                    { value: "2", label: "Terça-feira" },
                    { value: "3", label: "Quarta-feira" },
                    { value: "4", label: "Quinta-feira" },
                    { value: "5", label: "Sexta -feira" },
                    { value: "6", label: "Sabado" },
                  ]}
                />
                <Input
                  name="from"
                  label="das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, "from", e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Áte"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, "to", e.target.value)
                  }
                />
              </div>
            );
          })}
          <footer>
            <img src={warningIcon} alt="Aviso importante" />
            importante! <br />
            Preencha todos os dados
            <p>
              <button type="submit">Salvar dados</button>
            </p>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default teacherForm;
