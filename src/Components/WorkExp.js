import React from 'react';
import '../Styles/WorkExp.css';

function WorkExp() {

  const WorkExpCards = (props) => {
    return (
      <div className="custom-card">
        <div className="upper-box">
          <h3 className="company-name">{props.company}</h3>
        </div>
        <div className="logo-container">
          <img src={props.logo} alt="Company Logo" className="logo" />
        </div>
        <div className="lower-box">
          <h4>{props.title}</h4>
          <h6>{props.duration}</h6>
          <p>{props.description}</p>
          <ul className="highlights">
            {props.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // const workExpMap = [
  //   { title: "Dy Manager | Software Development Engineer", duration: "Dec 2023 - Present" },
  //   { title: "Asst Manager | Software Development Engineer", duration: "Sept 2020 - Nov 2023" },
  //   { title: "Graduate Engineer Trainee", duration: "Aug 2019 - Aug 2020" }
  // ];


  const workExpMap = [
    {
      // company: "Facebook",
      logo: "/reliance_jio_logo.svg",
      title: "Software Development Engineer II",
      duration: "Dec 2023 - Present",
      // description: "Mid-level Software Engineer",
      highlights: [
        "Lead UI/UX and feature development initiatives.",
        "Identify and resolve critical bugs/issues.",
        "Collaborate with Product Managers and UI/UX teams.",
        "Conduct PR reviews and assist juniors with work-related issues.",
        "Manage code merging, build queueing, and deployment to production"
      ]
    },
    {
      // company: "Facebook",
      logo: "/reliance_jio_logo.svg",
      title: "Software Development Engineer I",
      duration: "Sept 2020 - Nov 2023",
      // description: "Mid-level Software Engineer",
      highlights: [
        "Developed user interfaces based on Figma design files.",
        "Collaborated with cross-functional teams to develop new features.",
        "Ensured seamless deployment of applications and maintained high code quality."
      ]
    },
    {
      // company: "Facebook",
      logo: "/reliance_jio_logo.svg",
      title: "Graduate Engineer Trainee",
      duration: "Aug 2019 - Aug 2020",
      // description: "Mid-level Software Engineer",
      highlights: [
        "Assisted in front-end development projects and gained experience with JavaScript frameworks.",
        "Was part of an E-commerce project as Quality Assurance, identifying more than 4 blocker and over 20 critical level issues successfully in less than 4 months."
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <div className="cards-container">
      {workExpMap.map((item, idx) => (
        <WorkExpCards
          key={idx}
          company={item.company}
          logo={item.logo}
          title={item.title}
          duration={item.duration}
          description={item.description}
          highlights={item.highlights}
        />
      ))}
    </div>
  );
}

export default WorkExp;
