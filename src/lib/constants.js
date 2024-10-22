export const TEAM = [
  {
    name: "Alice Johnson",
    post: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Smith",
    post: "Product Manager",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Davis",
    post: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "John Lee",
    post: "DevOps Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sarah White",
    post: "Marketing Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Green",
    post: "Data Scientist",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Black",
    post: "Frontend Developer",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James Brown",
    post: "Backend Developer",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Mia Wilson",
    post: "Project Coordinator",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Henry Taylor",
    post: "HR Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export const NAV_LINKS = [
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Team",
    link: "/teams",
  },
  {
    label: "Careers",
    link: "/careers",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const ABOUT_ACCORDION_1 = [
  {
    title: "Architecture",
    content: (
      <>
        <ul className="list-decimal">
          {[
            "Full architectural design and documentation services",
            "Site testing",
            "Feasibility studies and business cases",
            "Due diligence",
            "Interior architecture including furniture and finishes specification",
            "Research and publications",
            "3D Modelling, fly-throughs + renders + visualisations",
            "Graphic design",
            "Corridor + land use strategies",
            "Graphic communication - illustrative, diagrammatic + urban sketch",
          ].map((li, index) => (
            <li key={index} className="">
              {li}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Urban Design",
    content: (
      <p>
        Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice
        and profound lyrics that resonate deeply with his audience. Born in the
        village of Khant Maanpur in Punjab, India, he has become a cultural icon
        in the Punjabi music industry. <br /> <br /> His songs often reflect the
        struggles and triumphs of everyday life, capturing the essence of
        Punjabi culture and traditions. With a career spanning over two decades,
        Babu Maan has released numerous hit albums and singles that have
        garnered him a massive fan following both in India and abroad.
      </p>
    ),
  },

  {
    title: "Landscape Architecture",
    content: (
      <p>
        Metallica, an iconic American heavy metal band, is renowned for their
        powerful sound and intense performances that resonate deeply with their
        audience. Formed in Los Angeles, California, they have become a cultural
        icon in the heavy metal music industry. <br /> <br /> Their songs often
        reflect themes of aggression, social issues, and personal struggles,
        capturing the essence of the heavy metal genre. With a career spanning
        over four decades, Metallica has released numerous hit albums and
        singles that have garnered them a massive fan following both in the
        United States and abroad.
      </p>
    ),
  },
];

export const ABOUT_ACCORDION_2 = [
  {
    title: "Strategic Planning + Communications",
    content: (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics. <br /> <br /> Her songs often
        explore themes of tragic romance, glamour, and melancholia, drawing
        inspiration from both contemporary and vintage pop culture. With a
        career that has seen numerous critically acclaimed albums, Lana Del Rey
        has established herself as a unique and influential figure in the music
        industry, earning a dedicated fan base and numerous accolades.
      </p>
    ),
  },
  {
    title: "Consultation + Engagement",

    content: (
      <p>
        Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice
        and profound lyrics that resonate deeply with his audience. Born in the
        village of Khant Maanpur in Punjab, India, he has become a cultural icon
        in the Punjabi music industry. <br /> <br /> His songs often reflect the
        struggles and triumphs of everyday life, capturing the essence of
        Punjabi culture and traditions. With a career spanning over two decades,
        Babu Maan has released numerous hit albums and singles that have
        garnered him a massive fan following both in India and abroad.
      </p>
    ),
  },

  {
    title: "Design Review",
    content: (
      <p>
        Metallica, an iconic American heavy metal band, is renowned for their
        powerful sound and intense performances that resonate deeply with their
        audience. Formed in Los Angeles, California, they have become a cultural
        icon in the heavy metal music industry. <br /> <br /> Their songs often
        reflect themes of aggression, social issues, and personal struggles,
        capturing the essence of the heavy metal genre. With a career spanning
        over four decades, Metallica has released numerous hit albums and
        singles that have garnered them a massive fan following both in the
        United States and abroad.
      </p>
    ),
  },
];

export const FRAMEWORK_IMAGES = [
  "https://cdn.prod.website-files.com/65249822a54c89915817034b/653641f56e334d11c63b64f6_archipelago-room.svg",
  "https://cdn.prod.website-files.com/65249822a54c89915817034b/653641f5f181ce66f663c589_archipelago-site.svg",
  "https://cdn.prod.website-files.com/65249822a54c89915817034b/653641f55ba2403cb38111f3_archipelago-neighbourhood.svg",
  "https://cdn.prod.website-files.com/65249822a54c89915817034b/653641f6d6ca1fc34347d66b_archipelago-city.svg",
  "https://cdn.prod.website-files.com/65249822a54c89915817034b/653641f591e3fde39e6a4911_archipelago-region.svg",
];

export const VALUES = [
  {
    title: "People",
    description:
      "People are central to our ethos. We infuse people-centric design into our entire process, from idea inception to stakeholder engagement and the ultimate user experience. We value good communication, diversity, inclusivity and authentic approaches to collaboration between clients, stakeholders, and consultants, fostering shared knowledge to achieve outstanding project outcomes.",
  },
  {
    title: "Cities",
    description:
      "Our expanding Australian cities yield vibrant hubs for people to live, work and play. Archipelago approach each project with best-for-city outcomes in mind. Regardless of scale, each project should prioritise human experience and enduring value. We harness the interconnectedness of urban spaces, looking beyond the boundary of the site to leverage a two-way value exchange and project uplift.",
  },
  {
    title: "Design",
    description:
      "The relationship between buildings, landscapes and the space between is intrinsic and essential. Working together across disciplines, Archipelago's ability to create integrated, responsive design strategies and compelling urban propositions is at the centre of our creative practice. We immerse ourselves in understanding context, Country, culture, and community, approaching each project with curiosity and a passion for fresh ideas.",
  },
  {
    title: "The AND Conversation",
    description:
      "At Archipelago, we embrace “the AND conversation“. We adopt a city-making mindset, facilitating positive, robust discussions and strategic design thinking. We don't settle on ideas; we forge new and exciting concepts, transforming site challenges into opportunities, while amplifying and exceeding your project's expectations.",
  },
  {
    title: "Collaboration",
    description: (
      <span>
        <span>
          rchipelago embodies the spirit of collaboration - our namesake is
          derived from a collection of islands united to form a single
          continent. Our team thrives on unexpected outcomes triggered through
          meaningful engagement with communities, stakeholders, and experts in
          their field.
        </span>
        <span>
          Our collaborative workshops ensure rapid stakeholder engagement,
          delivering results-driven solutions to complex design challenges.
          Peter Edwards and Peter Richards, our urban design leaders, are
          Queensland's most esteemed Enquiry by Design (EBD) workshop
          facilitators.
        </span>
      </span>
    ),
  },
  {
    title: "Provocation",
    description:
      "At Archipelago, we aren't afraid to challenge the status quo, ask the tough questions and explore unconventional hidden potential in every project. We believe good design is realised through rigorous investigation and collaboration, and we take great pride in our ability to unlock new and exciting opportunities through our curated design process.",
  },
];
