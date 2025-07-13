import React, { useState } from "react";

const questions = [
  { id: "interest", text: "מה הכי מעניין אותך?", options: ["טכנולוגיה", "עיצוב", "אנשים", "עסקים"] },
  { id: "style", text: "איך אתה מעדיף לעבוד?", options: ["עצמאית", "בצוות", "עם מחשב", "עם אנשים"] },
  { id: "impact", text: "מה הכי חשוב לך בקריירה?", options: ["השפעה", "שכר גבוה", "יציבות", "אתגר"] },
  { id: "learning", text: "איך אתה אוהב ללמוד?", options: ["קורס קצר", "לימודים ארוכים", "לבד", "בקבוצה"] },
  { id: "location", text: "איפה אתה מעדיף לפעול?", options: ["מרכז", "צפון", "דרום", "לא משנה"] },
  { id: "background", text: "האם יש לך בגרות או תואר?", options: ["תואר", "בגרות", "ללא", "בדרך"] },
  { id: "million", text: "מה היית עושה אם היית מקבל מיליון ש\"ח?", options: ["פותח עסק", "לומד", "נוסע בעולם", "משקיע"] }
];

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    const current = questions[step].id;
    setAnswers({ ...answers, [current]: value });
    setStep(step + 1);
  };

  const getResult = () => {
    if (answers.interest === "טכנולוגיה" && answers.style === "עם מחשב") {
      return {
        title: "פיתוח תוכנה או סייבר",
        text: "יש לך גישה טכנית וסבלנות, ולכן תחום הסייבר, בדיקות תוכנה או פיתוח – מאוד מתאים לך.",
        link: "https://www.johnbryce.co.il/catalog/cyber-security"
      };
    }
    if (answers.interest === "אנשים" && answers.impact === "השפעה") {
      return {
        title: "הוראה או טיפול רגשי",
        text: "אתה נמשך לעבודה עם אנשים ולשנות חיים. מסלולי הוראה, רפואה משלימה או אימון אישי יתאימו לך.",
        link: "https://campus.gov.il/"
      };
    }
    return {
      title: "ניהול, יזמות או שיווק",
      text: "אתה עצמאי ובעל חשיבה יצירתית. שיווק דיגיטלי, פתיחת עסק או ניהול פרויקטים זה הכיוון שלך.",
      link: "https://www.hackeru.co.il/"
    };
  };

  const result = getResult();

  return (
    <main style={{ padding: "2em", fontFamily: "Arial", textAlign: "center" }}>
      {step < questions.length ? (
        <>
          <h2>{questions[step].text}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em", marginTop: "1.5em" }}>
            {questions[step].options.map((opt) => (
              <button key={opt} onClick={() => handleAnswer(opt)}>{opt}</button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>{result.title}</h2>
          <p>{result.text}</p>
          <a href={result.link} target="_blank" rel="noreferrer">
            <button>למידע נוסף</button>
          </a>
        </>
      )}
    </main>
  );
}
