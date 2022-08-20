import React from "react";
import "../App.css";

export default function Experience() {
  const subject = "Interested in Resume";
  const body = `Hi Amanda,
	%0D%0A%0D%0A  I was on your personal website and I'm would love for you to send me your resume. Hope to connect!
	%0D%0A%0D%0A  Thank you!`;

  return (
    <div className="experience">
      <h1>Experience</h1>
      <p>
        I've worked at Shopify, RBC, and Year Zero Studios as a Product Manager
        and Software Developer. I've also led teams at nation wide non profits,
        started a worked on computer vision problems at Waterloo Aerial Robotics
        Team. If you'd like to see my resume, please&nbsp;
        <a
          href={`mailto:amanda.yu@uwaterloo.com?subject=${subject}&body=${body}`}
          target="_blank"
        >
          email
        </a>
        &nbsp;me.
      </p>
    </div>
  );
}
