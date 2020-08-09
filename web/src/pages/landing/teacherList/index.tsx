/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, FormEvent } from "react";
import "./style.css";
import PageHeader from "../../../components/pageHeader";
import TeacherItem, { Teacher } from "../../../components/teacherItem";
import Input from "../../../components/input";
import Select from "../../../components/select";
import api from "services/api";

function teacherList() {
  const [teachers, seatTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_Day] = useState("");
  const [time, setWeekDay] = useState("");

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();

    const responses = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    seatTeachers(responses.data);
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeacher}>
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
          <Select
            name="week_day"
            label="dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeek_Day(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sabado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="hora"
            value={time}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
          />
          <button type="submit">buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default teacherList;
