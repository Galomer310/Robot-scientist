const robots = [
  {
    id: 1,
    name: "Albert Einstein",
    username: "time is a relative thing",
    scientificContribution: "Theory of Relativity",
    shortBio:
      "Developed the theory of relativity, which revolutionized our understanding of space, time, and gravity.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Albert_Einstein",
  },
  {
    id: 2,
    name: "Marie Curie",
    username: "radioactive brilliance",
    scientificContribution: "Pioneering research on radioactivity",
    shortBio:
      "Pioneered research in radioactivity and became the first woman to win a Nobel Prize.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Marie_Curie",
  },
  {
    id: 3,
    name: "Isaac Newton",
    username: "gravity genius",
    scientificContribution: "Laws of Motion and Universal Gravitation",
    shortBio:
      "Formulated the laws of motion and universal gravitation, laying the foundations of classical mechanics.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Isaac_Newton",
  },
  {
    id: 4,
    name: "Charles Darwin",
    username: "evolution explorer",
    scientificContribution: "Theory of Evolution",
    shortBio:
      "Developed the theory of evolution by natural selection, transforming biology.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Charles_Darwin",
  },
  {
    id: 5,
    name: "Nikola Tesla",
    username: "electric visionary",
    scientificContribution: "Alternating Current (AC) Electrical Systems",
    shortBio:
      "Pioneered the development of AC electricity supply systems and numerous electrical inventions.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Nikola_Tesla",
  },
  {
    id: 6,
    name: "Galileo Galilei",
    username: "father of astronomy",
    scientificContribution: "Astronomical Observations",
    shortBio:
      "Played a crucial role in the scientific revolution with his telescopic observations and improvements to the scientific method.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Galileo_Galilei",
  },
  {
    id: 7,
    name: "Stephen Hawking",
    username: "black hole theorist",
    scientificContribution: "Black Hole Radiation and Cosmology",
    shortBio:
      "Made significant contributions to cosmology, general relativity, and quantum gravity despite physical challenges.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Stephen_Hawking",
  },
  {
    id: 8,
    name: "Ada Lovelace",
    username: "mother of computing",
    scientificContribution: "First Computer Programmer",
    shortBio:
      "Recognized as the first computer programmer for her work on Charles Babbage's early mechanical computer.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Ada_Lovelace",
  },
  {
    id: 9,
    name: "Rosalind Franklin",
    username: "DNA pioneer",
    scientificContribution: "DNA Structure Elucidation",
    shortBio:
      "Contributed crucial X-ray diffraction images that helped reveal the double helix structure of DNA.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Rosalind_Franklin",
  },
  {
    id: 10,
    name: "Carl Sagan",
    username: "cosmic communicator",
    scientificContribution: "Popularizing Science",
    shortBio:
      "Renowned astronomer and science communicator who brought the wonders of the cosmos to the public.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Carl_Sagan",
  },
  {
    id: 11,
    name: "Richard Feynman",
    username: "quantum joker",
    scientificContribution: "Quantum Electrodynamics",
    shortBio:
      "Made groundbreaking contributions to quantum mechanics and quantum electrodynamics.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Richard_Feynman",
  },
  {
    id: 12,
    name: "Johannes Kepler",
    username: "celestial mathematician",
    scientificContribution: "Laws of Planetary Motion",
    shortBio:
      "Formulated the laws describing planetary motion, transforming our understanding of the solar system.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Johannes_Kepler",
  },
  {
    id: 13,
    name: "Dmitri Mendeleev",
    username: "periodic planner",
    scientificContribution: "Periodic Table of Elements",
    shortBio:
      "Created the periodic table, organizing chemical elements by their properties and predicting undiscovered ones.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Dmitri_Mendeleev",
  },
  {
    id: 14,
    name: "Barbara McClintock",
    username: "genetic trailblazer",
    scientificContribution: "Discovery of Transposable Elements",
    shortBio:
      "Discovered mobile genetic elements (transposons), earning her a Nobel Prize in Physiology or Medicine.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Barbara_McClintock",
  },
  {
    id: 15,
    name: "Max Planck",
    username: "quantum pioneer",
    scientificContribution: "Quantum Theory",
    shortBio:
      "Originated quantum theory, which revolutionized the understanding of atomic and subatomic processes.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Max_Planck",
  },
  {
    id: 16,
    name: "Louis Pasteur",
    username: "microbial master",
    scientificContribution: "Germ Theory and Pasteurization",
    shortBio:
      "Developed the germ theory of disease and pioneered techniques such as pasteurization.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Louis_Pasteur",
  },
  {
    id: 17,
    name: "Gregor Mendel",
    username: "father of genetics",
    scientificContribution: "Foundations of Genetics",
    shortBio:
      "Established the laws of inheritance through meticulous experiments with pea plants.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gregor_Mendel",
  },
  {
    id: 18,
    name: "Niels Bohr",
    username: "atomic architect",
    scientificContribution: "Bohr Model of the Atom",
    shortBio:
      "Developed a model of the atom that introduced quantum theory concepts into atomic structure.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Niels_Bohr",
  },
  {
    id: 19,
    name: "James Clerk Maxwell",
    username: "electromagnetic mind",
    scientificContribution: "Electromagnetic Theory",
    shortBio:
      "Formulated the classical theory of electromagnetic radiation, unifying electricity, magnetism, and light.",
    wikipediaLink: "https://en.wikipedia.org/wiki/James_Clerk_Maxwell",
  },
  {
    id: 20,
    name: "Rachel Carson",
    username: "environmental advocate",
    scientificContribution: "Environmental Science",
    shortBio:
      "Her book 'Silent Spring' helped launch the modern environmental movement.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Rachel_Carson",
  },
  {
    id: 21,
    name: "Alan Turing",
    username: "codebreaker",
    scientificContribution: "Foundations of Computer Science",
    shortBio:
      "Laid the groundwork for modern computer science and artificial intelligence.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Alan_Turing",
  },
  {
    id: 22,
    name: "Erwin Schrödinger",
    username: "quantum cat lover",
    scientificContribution: "Wave Mechanics in Quantum Theory",
    shortBio:
      "Developed wave mechanics and made pivotal contributions to quantum theory.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger",
  },
  {
    id: 23,
    name: "Blaise Pascal",
    username: "mathematical philosopher",
    scientificContribution: "Contributions to Probability and Fluid Mechanics",
    shortBio:
      "Contributed significantly to mathematics, probability theory, and the study of fluids.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Blaise_Pascal",
  },
  {
    id: 24,
    name: "Michael Faraday",
    username: "electromagnetic wizard",
    scientificContribution: "Electromagnetism and Electrochemistry",
    shortBio:
      "Made foundational discoveries in electromagnetism and electrochemistry.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Michael_Faraday",
  },
  {
    id: 25,
    name: "Chien-Shiung Wu",
    username: "physics innovator",
    scientificContribution: "Experimental Nuclear Physics",
    shortBio:
      "Performed groundbreaking experiments that challenged established theories of parity conservation.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Chien-Shiung_Wu",
  },
  {
    id: 26,
    name: "Henry Cavendish",
    username: "hydrogen discoverer",
    scientificContribution: "Discovery of Hydrogen",
    shortBio:
      "Discovered hydrogen and contributed to the study of gases and chemical reactions.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Henry_Cavendish",
  },
  {
    id: 27,
    name: "Antoine Lavoisier",
    username: "father of chemistry",
    scientificContribution: "Foundations of Modern Chemistry",
    shortBio:
      "Pioneered the study of chemical reactions and helped establish chemical nomenclature.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Antoine_Lavoisier",
  },
  {
    id: 28,
    name: "Jane Goodall",
    username: "primate pioneer",
    scientificContribution: "Primatology",
    shortBio:
      "Renowned for her extensive studies on chimpanzee behavior and contributions to conservation.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jane_Goodall",
  },
  {
    id: 29,
    name: "Alfred Wegener",
    username: "continental drift theorist",
    scientificContribution: "Continental Drift Theory",
    shortBio:
      "Proposed the theory of continental drift, laying the groundwork for plate tectonics.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Alfred_Wegener",
  },
  {
    id: 30,
    name: "Gregor Mendel",
    username: "genetic father",
    scientificContribution: "Foundations of Genetics",
    shortBio:
      "Known as the father of genetics for his pioneering work with pea plants.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gregor_Mendel",
  },
  {
    id: 31,
    name: "Richard Dawkins",
    username: "evolutionary biologist",
    scientificContribution: "Gene-Centered Evolution Theory",
    shortBio:
      "Popularized evolutionary biology and the concept of the selfish gene.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Richard_Dawkins",
  },
  {
    id: 32,
    name: "Louis Leakey",
    username: "human origins expert",
    scientificContribution: "Paleoanthropology",
    shortBio:
      "Made significant discoveries regarding early human evolution in Africa.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Louis_Leakey",
  },
  {
    id: 33,
    name: "Srinivasa Ramanujan",
    username: "mathematical prodigy",
    scientificContribution: "Advanced Mathematical Analysis",
    shortBio:
      "Made remarkable contributions to mathematical analysis, number theory, and infinite series.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
  },
  {
    id: 34,
    name: "Maxwell Boden",
    username: "chemistry aficionado",
    scientificContribution: "Chemical Research",
    shortBio: "Noted for his contributions in the field of chemistry.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Chemistry",
  },
  {
    id: 35,
    name: "Mae Jemison",
    username: "space adventurer",
    scientificContribution: "Space Exploration",
    shortBio:
      "The first African-American woman to travel in space, inspiring future generations.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Mae_Jemison",
  },
  {
    id: 36,
    name: "John von Neumann",
    username: "mathematics genius",
    scientificContribution: "Foundations of Computer Science and Mathematics",
    shortBio:
      "Made seminal contributions to a wide range of fields including computer science, mathematics, and quantum mechanics.",
    wikipediaLink: "https://en.wikipedia.org/wiki/John_von_Neumann",
  },
  {
    id: 37,
    name: "Benjamin Franklin",
    username: "electrical inventor",
    scientificContribution: "Electricity and Civic Innovations",
    shortBio:
      "Not only a founding father but also an early pioneer in the study of electricity.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
  },
  {
    id: 38,
    name: "John Dalton",
    username: "atomic theorist",
    scientificContribution: "Atomic Theory",
    shortBio:
      "Proposed the modern atomic theory, changing the way we understand matter.",
    wikipediaLink: "https://en.wikipedia.org/wiki/John_Dalton",
  },
  {
    id: 39,
    name: "Francis Crick",
    username: "double helix discoverer",
    scientificContribution: "DNA Structure Discovery",
    shortBio:
      "Co-discovered the double helix structure of DNA, a breakthrough in molecular biology.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Francis_Crick",
  },
  {
    id: 40,
    name: "Maurice Wilkins",
    username: "X-ray expert",
    scientificContribution: "DNA Structural Studies",
    shortBio:
      "Contributed essential X-ray diffraction data that helped reveal the structure of DNA.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Maurice_Wilkins",
  },
  {
    id: 41,
    name: "Robert Hooke",
    username: "cell theory co-founder",
    scientificContribution: "Early Cell Theory",
    shortBio:
      "One of the first to study cells, Hooke’s work laid the groundwork for cell theory.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Robert_Hooke",
  },
  {
    id: 42,
    name: "Dorothy Crowfoot Hodgkin",
    username: "protein crystallographer",
    scientificContribution: "Protein Crystallography",
    shortBio:
      "Developed techniques in X-ray crystallography to determine the structures of vital biochemical substances.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Dorothy_Crowfoot_Hodgkin",
  },
  {
    id: 43,
    name: "James Watson",
    username: "DNA discoverer",
    scientificContribution: "DNA Structure Discovery",
    shortBio:
      "Co-discovered the double helix structure of DNA, profoundly impacting biology.",
    wikipediaLink: "https://en.wikipedia.org/wiki/James_Watson",
  },
  {
    id: 44,
    name: "Catherine Johnson",
    username: "space math genius",
    scientificContribution: "Space Mathematics",
    shortBio:
      "Her calculations were critical to the success of numerous NASA missions.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Katherine_Johnson",
  },
  {
    id: 45,
    name: "Hedy Lamarr",
    username: "technology innovator",
    scientificContribution: "Frequency Hopping Spread Spectrum",
    shortBio:
      "Co-invented technology that laid the foundation for modern wireless communications.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Hedy_Lamarr",
  },
  {
    id: 46,
    name: "Barbara McClintock",
    username: "genetics pioneer",
    scientificContribution: "Discovery of Transposable Elements",
    shortBio:
      "Her pioneering work in genetics led to the discovery of mobile genetic elements.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Barbara_McClintock",
  },
  {
    id: 47,
    name: "Neil deGrasse Tyson",
    username: "cosmic mentor",
    scientificContribution: "Astrophysics and Science Communication",
    shortBio:
      "Famous for his ability to communicate complex astronomical concepts to the public.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson",
  },
  {
    id: 48,
    name: "Murray Gell-Mann",
    username: "quantum physicist",
    scientificContribution: "Quark Model and Elementary Particles",
    shortBio:
      "Introduced the quark model which revolutionized the study of subatomic particles.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Murray_Gell-Mann",
  },
  {
    id: 49,
    name: "Craig Venter",
    username: "genomics guru",
    scientificContribution: "Human Genome Sequencing",
    shortBio:
      "Pioneered methods in genomic sequencing and contributed significantly to mapping the human genome.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Craig_Venter",
  },
  {
    id: 50,
    name: "Steven Pinker",
    username: "evolutionary psychologist",
    scientificContribution: "Cognitive Science and Linguistics",
    shortBio:
      "Researches the human mind, language, and evolution with a focus on cognitive science.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Steven_Pinker",
  },
  {
    id: 51,
    name: "Jane Goodall",
    username: "primate researcher",
    scientificContribution: "Primatology",
    shortBio:
      "Renowned for her groundbreaking studies of chimpanzee behavior in natural habitats.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jane_Goodall",
  },
  {
    id: 52,
    name: "Baruch S. Blumberg",
    username: "medical researcher",
    scientificContribution: "Vaccine Development and Virology",
    shortBio:
      "Discovered the hepatitis B virus and contributed to vaccine development, earning a Nobel Prize.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Baruch_S._Blumberg",
  },
  {
    id: 53,
    name: "Robert Boyle",
    username: "gas law discoverer",
    scientificContribution: "Boyle's Law and Chemical Principles",
    shortBio:
      "Famous for Boyle's law and his numerous contributions to early modern chemistry.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Robert_Boyle",
  },
  {
    id: 55,
    name: "Gerty Cori",
    username: "biochemist",
    scientificContribution: "Carbohydrate Metabolism",
    shortBio:
      "The first woman to win a Nobel Prize in Physiology or Medicine for her work on carbohydrate metabolism.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gerty_Cori",
  },
  {
    id: 56,
    name: "Rita Levi-Montalcini",
    username: "neuroscientist",
    scientificContribution: "Nerve Growth Factor Discovery",
    shortBio:
      "Discovered nerve growth factor and made major contributions to neurobiology.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Rita_Levi-Montalcini",
  },
  {
    id: 57,
    name: "Niels Bohr",
    username: "atomic model creator",
    scientificContribution: "Bohr Model of the Atom",
    shortBio:
      "Reaffirmed and expanded upon his earlier work in atomic structure with the Bohr model.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Niels_Bohr",
  },
  {
    id: 58,
    name: "Paul Dirac",
    username: "mathematical physicist",
    scientificContribution: "Quantum Mechanics and Field Theory",
    shortBio:
      "Made fundamental contributions to quantum mechanics and quantum field theory.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Paul_Dirac",
  },
  {
    id: 59,
    name: "Marie Maynard Daly",
    username: "biochemist",
    scientificContribution: "Cellular Biochemistry",
    shortBio:
      "Pioneered research into the chemical composition of cells and contributed to our understanding of human metabolism.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Marie_Maynard_Daly",
  },
  {
    id: 60,
    name: "Katherine Johnson",
    username: "space mathematician",
    scientificContribution: "Mathematics for Space Exploration",
    shortBio:
      "Her calculations were critical to the success of early space missions at NASA.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Katherine_Johnson",
  },
  {
    id: 61,
    name: "Clint Eastwood",
    username: "scientific sculptor",
    scientificContribution: "Not Applicable",
    shortBio:
      "Renowned actor and filmmaker; no major scientific contributions are recorded.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Clint_Eastwood",
  },
  {
    id: 62,
    name: "Caroline Herschel",
    username: "astronomy assistant",
    scientificContribution: "Astronomical Discoveries",
    shortBio:
      "Notable for her work in astronomy, including the discovery of several comets.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Caroline_Herschel",
  },
  {
    id: 63,
    name: "Lise Meitner",
    username: "atomic fission co-discoverer",
    scientificContribution: "Nuclear Physics",
    shortBio:
      "Co-discovered nuclear fission and made key contributions to our understanding of atomic structure.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Lise_Meitner",
  },
  {
    id: 64,
    name: "J.J. Thomson",
    username: "electron discoverer",
    scientificContribution: "Electron Discovery",
    shortBio:
      "Discovered the electron, laying the groundwork for modern atomic theory.",
    wikipediaLink: "https://en.wikipedia.org/wiki/J._J._Thomson",
  },
  {
    id: 65,
    name: "Thomas Edison",
    username: "light bulb inventor",
    scientificContribution: "Electrical Inventions",
    shortBio:
      "A prolific inventor whose innovations in electrical technology changed modern life.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Thomas_Edison",
  },
  {
    id: 66,
    name: "Emilie du Châtelet",
    username: "philosopher physicist",
    scientificContribution: "Mathematical Physics",
    shortBio:
      "Translated and expanded upon Newton’s work, significantly contributing to scientific thought in her era.",
    wikipediaLink: "https://en.wikipedia.org/wiki/%C3%89milie_du_Ch%C3%A2telet",
  },
  {
    id: 67,
    name: "Henrietta Swan Leavitt",
    username: "star distance pioneer",
    scientificContribution: "Cepheid Variable Stars",
    shortBio:
      "Discovered the period-luminosity relationship for Cepheid variable stars, which became a crucial tool in measuring cosmic distances.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Henrietta_Leavitt",
  },
  {
    id: 68,
    name: "James Clerk Maxwell",
    username: "electromagnetic genius",
    scientificContribution: "Electromagnetism",
    shortBio:
      "His equations unified electricity, magnetism, and optics into a single theoretical framework.",
    wikipediaLink: "https://en.wikipedia.org/wiki/James_Clerk_Maxwell",
  },
  {
    id: 69,
    name: "Gustave Eiffel",
    username: "structural engineer",
    scientificContribution: "Engineering and Architecture",
    shortBio:
      "Famed for designing the Eiffel Tower, he also contributed to structural engineering innovations.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gustave_Eiffel",
  },
  {
    id: 70,
    name: "Mendelian Geneticist",
    username: "genetic theory pioneer",
    scientificContribution: "Genetics",
    shortBio:
      "Represents the contributions made in the field of genetics and the study of heredity.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Genetics",
  },
  {
    id: 71,
    name: "Erwin Schrödinger",
    username: "quantum cat lover",
    scientificContribution: "Wave Mechanics",
    shortBio:
      "Reiterated his pivotal work in quantum theory and the development of wave mechanics.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger",
  },
  {
    id: 72,
    name: "Karl Popper",
    username: "science philosopher",
    scientificContribution: "Philosophy of Science",
    shortBio:
      "Known for his ideas on falsifiability and critical rationalism, reshaping how science is understood.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Karl_Popper",
  },
  {
    id: 73,
    name: "Henri Poincaré",
    username: "mathematician",
    scientificContribution: "Mathematics and Theoretical Physics",
    shortBio:
      "Made foundational contributions in mathematics and theoretical physics, influencing many modern theories.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9",
  },
  {
    id: 74,
    name: "Brennan Johnson",
    username: "cell biologist",
    scientificContribution: "Cell Biology",
    shortBio:
      "Engaged in research exploring the complexities of cellular mechanisms and functions.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Cell_biology",
  },
  {
    id: 75,
    name: "Charles Lyell",
    username: "geology expert",
    scientificContribution: "Uniformitarianism in Geology",
    shortBio:
      "Played a key role in establishing the principles of modern geology through uniformitarianism.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Charles_Lyell",
  },
  {
    id: 76,
    name: "Sir Michael Atiyah",
    username: "mathematician",
    scientificContribution: "Geometry and Topology",
    shortBio:
      "Renowned for his work in geometry and topology, recognized with the Fields Medal for his contributions.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Michael_Atiyah",
  },
  {
    id: 77,
    name: "André-Marie Ampère",
    username: "electromagnetic pioneer",
    scientificContribution: "Foundations of Electromagnetism",
    shortBio:
      "One of the founders of classical electromagnetism, his work gave rise to Ampère's law.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Amp%C3%A8re",
  },
  {
    id: 78,
    name: "Clyde Tombaugh",
    username: "Pluto discoverer",
    scientificContribution: "Astronomical Discovery",
    shortBio:
      "Discovered Pluto, expanding our understanding of the outer reaches of our solar system.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Clyde_Tombaugh",
  },
  {
    id: 79,
    name: "Richard Dawkins",
    username: "evolutionary biologist",
    scientificContribution: "Evolutionary Biology",
    shortBio:
      "Known for his influential works on evolution and the popularization of the gene-centered view of evolution.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Richard_Dawkins",
  },
  {
    id: 80,
    name: "Hans Albrecht Bethe",
    username: "nuclear physicist",
    scientificContribution: "Stellar Nucleosynthesis",
    shortBio:
      "Made significant contributions to nuclear physics and our understanding of how stars produce energy.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Hans_Bethe",
  },
  {
    id: 81,
    name: "Francois Barre-Sinoussi",
    username: "HIV researcher",
    scientificContribution: "Virology and HIV Discovery",
    shortBio:
      "Played a key role in the discovery of HIV, deepening our understanding of the virus and its treatment.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Fran%C3%A7ois_Barre-Sinoussi",
  },
  {
    id: 82,
    name: "Ernst Rutherford",
    username: "atomic scientist",
    scientificContribution: "Nuclear Structure",
    shortBio:
      "Known as the father of nuclear physics, his research on atomic structure set the stage for modern nuclear science.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Ernest_Rutherford",
  },
  {
    id: 83,
    name: "Sally Ride",
    username: "astronaut",
    scientificContribution: "Space Exploration",
    shortBio:
      "Became the first American woman in space and paved the way for future generations in space science.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Sally_Ride",
  },
  {
    id: 84,
    name: "Valentina Tereshkova",
    username: "first woman in space",
    scientificContribution: "Space Exploration",
    shortBio:
      "The first woman to fly in space, marking a historic milestone in human space travel.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Valentina_Tereshkova",
  },
  {
    id: 85,
    name: "Emil Fischer",
    username: "chemist",
    scientificContribution: "Stereochemistry and Organic Synthesis",
    shortBio:
      "Recognized for his work on the synthesis of sugars and purines, contributing greatly to organic chemistry.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Emil_Fischer",
  },
  {
    id: 86,
    name: "Rosalind Franklin",
    username: "DNA scientist",
    scientificContribution: "DNA Structural Analysis",
    shortBio:
      "Her work with X-ray diffraction was crucial in uncovering the double helix structure of DNA.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Rosalind_Franklin",
  },
  {
    id: 87,
    name: "Franklin Chang-Diaz",
    username: "NASA engineer",
    scientificContribution: "Space Engineering",
    shortBio:
      "A veteran of multiple space shuttle missions, contributing to advancements in space technology.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Franklin_Chang-Diaz",
  },
  {
    id: 88,
    name: "Margo Seltzer",
    username: "database expert",
    scientificContribution: "Computer Science Research",
    shortBio:
      "Works in the field of computer science with a focus on file systems, databases, and storage.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Computer_science",
  },
  {
    id: 89,
    name: "Gertrude Elion",
    username: "pharmacologist",
    scientificContribution: "Drug Development",
    shortBio:
      "Developed numerous life-saving drugs and was awarded a Nobel Prize for her contributions to medicine.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gertrude_Elion",
  },
  {
    id: 90,
    name: "Louis Armstrong",
    username: "space science",
    scientificContribution: "Not Applicable",
    shortBio:
      "Renowned primarily as a jazz musician; his inclusion here is not for scientific contribution.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Louis_Armstrong",
  },
  {
    id: 91,
    name: "Jane Goodall",
    username: "wildlife researcher",
    scientificContribution: "Primatology",
    shortBio:
      "Famous for her groundbreaking work studying chimpanzees and advocating for wildlife conservation.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jane_Goodall",
  },
  {
    id: 92,
    name: "Daniel Bernoulli",
    username: "fluid dynamics expert",
    scientificContribution: "Fluid Dynamics",
    shortBio:
      "Made influential contributions to fluid dynamics and probability theory, including Bernoulli’s principle.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Daniel_Bernoulli",
  },
  {
    id: 93,
    name: "Ferdinand von Zeppelin",
    username: "airship inventor",
    scientificContribution: "Aviation Engineering",
    shortBio:
      "Pioneered the design and construction of rigid airships, influencing early aviation.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin",
  },
  {
    id: 94,
    name: "Joseph Priestley",
    username: "discovery of oxygen",
    scientificContribution: "Chemical Discoveries",
    shortBio:
      "Discovered oxygen and made substantial contributions to early chemical science.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Joseph_Priestley",
  },
  {
    id: 95,
    name: "Fritz Haber",
    username: "chemical engineer",
    scientificContribution: "Haber Process",
    shortBio:
      "Developed the Haber process for synthesizing ammonia, revolutionizing agricultural fertilizer production.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Fritz_Haber",
  },
  {
    id: 96,
    name: "Gertrude B. Elion",
    username: "drug development",
    scientificContribution: "Pharmacology and Therapeutics",
    shortBio:
      "Her groundbreaking work in drug development earned her a Nobel Prize and changed modern medicine.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gertrude_Elion",
  },
  {
    id: 97,
    name: "Abraham Flexner",
    username: "medical reformer",
    scientificContribution: "Medical Education Reform",
    shortBio:
      "Influenced the reform of medical education in the early 20th century with his critical reports.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Abraham_Flexner",
  },
  {
    id: 98,
    name: "Diana Spencer",
    username: "family values",
    scientificContribution: "Not Applicable",
    shortBio:
      "Better known as Princess Diana, she is remembered for her humanitarian efforts rather than scientific work.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Diana,_Princess_of_Wales",
  },
  {
    id: 99,
    name: "Jules Verne",
    username: "visionary",
    scientificContribution: "Science Fiction Literature",
    shortBio:
      "Pioneered the science fiction genre with visionary novels that blended scientific ideas with imaginative storytelling.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jules_Verne",
  },
  {
    id: 100,
    name: "Robert Koch",
    username: "germ theory",
    scientificContribution: "Germ Theory of Disease",
    shortBio:
      "Pioneered research on infectious diseases and formulated Koch's postulates, laying the groundwork for modern microbiology.",
    wikipediaLink: "https://en.wikipedia.org/wiki/Robert_Koch",
  },
];

export default robots;
