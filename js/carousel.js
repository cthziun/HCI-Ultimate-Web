const groupedAssignments = {
  "Needfinding": [
    {
      title: "Needfinding",
      description: "We conducted interviews with players and coaches to uncover pain points in ultimate frisbee teams—specifically the imbalance in playtime between rookies and veterans. Key insights emphasized the importance of mentorship, mindset, and the need for better evaluation tools beyond just statistics.",
      url: "pdf/team1_01_Needfinding.pdf"
    }
  ],
  "POVs and HMWs": [
    {
      title: "POVs and HMWs",
      description: "Using empathy mapping and insights from interviews, we crafted point-of-view statements and “How Might We” questions to guide our design. We explored ways to support players emotionally, visualize improvement, and encourage discipline through gamified systems and team-building features.",
      url: "pdf/team1_02_POV_HMW.pdf"
    }
  ],
  "Low-Fi Prototyping": [
    {
      title: "Low-Fidelity Prototype",
      description: "Our initial interface sketches explored key tasks like progress tracking, player setup, and real-time game management. Usability testing helped us identify pain points, leading to early design decisions around layout, terminology, and user flow.",
      url: "pdf/team01_03_low_fi_prototype_slides.pdf"
    }
  ],
  "Medium-Fi Prototyping": [
    {
      title: "Medium-fi Prototype v1",
      description: "We built an interactive prototype in Figma, focusing on user flows for self-evaluation, team management, and game recording. Based on user testing, we refined visual hierarchies and introduced more intuitive interaction models, like tap-to-rate progress and simplified lineup setup.",
      url: "pdf/team01_04_medium_fi_prototype_slides.pdf"
    },
    {
      title: "Medium-fi Prototype v2",
      description: "Updated design based on heuristic feedback and user flow fixes.",
      url: "pdf/team01_08_medium_fi_prototype_v2_slides.pdf"
    },
    {
      title: "Group Heuristic Evaluation",
      description: "Evaluating usability issues using Nielsen’s heuristics.",
      url: "pdf/team01_08_medium_fi_prototype_v2_slides.pdf"
    }
  ],
  "High-Fi Prototyping": [
    {
      title: "Hi-fi Prototype",
      description: "Pixel-level mockups and partially implemented interactions.",
      url: "pdf/team01_09_hi_fi_prototype_v1_slides.pdf"
    },
    {
      title: "Demo Video",
      description: "Refined high-fidelity prototype and a demo walkthrough video.",
      url: "pdf/team01_11_hi_fi_prototype_v2_slides.pdf"
    }
  ],
  "Usability Testing": [
    {
      title: "Usability Testing",
      description: "Real users tested the flows and provided feedback on key tasks.",
      url: "pdf/team01_10_usability_testing_slides.pdf"
    }
  ],
  "Poster": [
    {
      title: "Poster",
      description: "Summarizes the UltiMate project for a public-facing presentation.",
      url: "pdf/team01_2025_poster.pdf"
    }
  ],
  "How AI Tools Were Used": [
    {
      title: "How AI Tools Were Used",
      description: "Describes how AI supported design, organization, and development.",
      url: ""
    }
  ]
};

const container = document.getElementById("assignmentSections");

Object.entries(groupedAssignments).forEach(([group, items]) => {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `<h3>${group}</h3><div class="carousel"></div>`;

  const cardContainer = section.querySelector(".carousel");

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <a href="${item.url}" target="_blank">
        <button class="cta-button">View</button>
      </a>
    `;
    cardContainer.appendChild(card);
  });

  container.appendChild(section);
});
