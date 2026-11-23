const additionalVocabulary = [
    {
        word: "Access",
        category: "Society",
        pronunciation: "/ˈækses/",
        partOfSpeech: "Noun/verb",
        definition: "The opportunity or right to use, reach, or obtain something.",
        example: "Reliable public transport gives residents better access to employment."
    },
    {
        word: "Allocate",
        category: "Economy",
        pronunciation: "/ˈæləkeɪt/",
        partOfSpeech: "Verb",
        definition: "To distribute something for a particular purpose or among different people.",
        example: "The city allocated more funding to improve its public libraries."
    },
    {
        word: "Assess",
        category: "Education",
        pronunciation: "/əˈses/",
        partOfSpeech: "Verb",
        definition: "To judge or measure the quality, importance, or value of something.",
        example: "Researchers assessed how the new course affected student progress."
    },
    {
        word: "Attain",
        category: "Education",
        pronunciation: "/əˈteɪn/",
        partOfSpeech: "Verb",
        definition: "To succeed in achieving a goal or reaching a particular level.",
        example: "With regular practice, learners can attain a high level of fluency."
    },
    {
        word: "Biodiversity",
        category: "Environment",
        pronunciation: "/ˌbaɪəʊdaɪˈvɜːsəti/",
        partOfSpeech: "Noun",
        definition: "The variety of plant and animal life found in a particular place or on Earth.",
        example: "Protecting wetlands helps maintain biodiversity."
    },
    {
        word: "Coherent",
        category: "Academic",
        pronunciation: "/kəʊˈhɪərənt/",
        partOfSpeech: "Adjective",
        definition: "Logical, clear, and organised in a way that is easy to understand.",
        example: "A coherent argument connects each claim to relevant evidence."
    },
    {
        word: "Contribute",
        category: "Society",
        pronunciation: "/kənˈtrɪbjuːt/",
        partOfSpeech: "Verb",
        definition: "To help cause or achieve something, or to give something to a shared effort.",
        example: "Community gardens can contribute to better health and social connection."
    },
    {
        word: "Crucial",
        category: "Academic",
        pronunciation: "/ˈkruːʃəl/",
        partOfSpeech: "Adjective",
        definition: "Extremely important to the success or outcome of something.",
        example: "Early access to education is crucial for children's development."
    },
    {
        word: "Decline",
        category: "Society",
        pronunciation: "/dɪˈklaɪn/",
        partOfSpeech: "Noun/verb",
        definition: "A decrease in amount, quality, or importance; to become smaller or weaker.",
        example: "The town recorded a decline in car use after bus services improved."
    },
    {
        word: "Demonstrate",
        category: "Academic",
        pronunciation: "/ˈdemənstreɪt/",
        partOfSpeech: "Verb",
        definition: "To show clearly that something is true, or to explain how something works.",
        example: "The survey demonstrates a link between exercise and improved wellbeing."
    },
    {
        word: "Diverse",
        category: "Society",
        pronunciation: "/daɪˈvɜːs/",
        partOfSpeech: "Adjective",
        definition: "Including people or things that are different from one another.",
        example: "A diverse workplace can bring a wider range of ideas."
    },
    {
        word: "Emission",
        category: "Environment",
        pronunciation: "/ɪˈmɪʃən/",
        partOfSpeech: "Noun",
        definition: "A substance, especially a gas, released into the air.",
        example: "Cleaner buses can reduce harmful emissions in city centres."
    },
    {
        word: "Enhance",
        category: "Academic",
        pronunciation: "/ɪnˈhɑːns/",
        partOfSpeech: "Verb",
        definition: "To improve the quality, value, or effectiveness of something.",
        example: "Group projects can enhance students' communication skills."
    },
    {
        word: "Evaluate",
        category: "Education",
        pronunciation: "/ɪˈvæljueɪt/",
        partOfSpeech: "Verb",
        definition: "To examine evidence and decide how useful, successful, or valuable something is.",
        example: "The council will evaluate the pilot scheme before expanding it."
    },
    {
        word: "Evidence",
        category: "Research",
        pronunciation: "/ˈevɪdəns/",
        partOfSpeech: "Noun",
        definition: "Information or facts that help show whether a claim or idea is true.",
        example: "There is growing evidence that green spaces benefit mental health."
    },
    {
        word: "Fluctuate",
        category: "Economy",
        pronunciation: "/ˈflʌktʃueɪt/",
        partOfSpeech: "Verb",
        definition: "To rise and fall irregularly in amount, level, or strength.",
        example: "The cost of fresh produce can fluctuate throughout the year."
    },
    {
        word: "Implement",
        category: "Policy",
        pronunciation: "/ˈɪmplɪment/",
        partOfSpeech: "Verb",
        definition: "To put a plan, decision, or system into action.",
        example: "Schools implemented a new programme to support reading."
    },
    {
        word: "Incentive",
        category: "Economy",
        pronunciation: "/ɪnˈsentɪv/",
        partOfSpeech: "Noun",
        definition: "Something that encourages a person or group to act in a particular way.",
        example: "A tax incentive may encourage firms to invest in renewable energy."
    },
    {
        word: "Inequality",
        category: "Society",
        pronunciation: "/ˌɪnɪˈkwɒləti/",
        partOfSpeech: "Noun",
        definition: "An unfair difference in opportunities, resources, or treatment.",
        example: "Affordable childcare can help reduce inequality in the workplace."
    },
    {
        word: "Infrastructure",
        category: "Society",
        pronunciation: "/ˈɪnfrəstrʌktʃə/",
        partOfSpeech: "Noun",
        definition: "The basic systems and facilities needed for a community or economy to function.",
        example: "Investment in transport infrastructure can connect remote communities."
    },
    {
        word: "Interpret",
        category: "Research",
        pronunciation: "/ɪnˈtɜːprɪt/",
        partOfSpeech: "Verb",
        definition: "To explain the meaning of information, results, or behaviour.",
        example: "Readers should interpret the statistics in their wider context."
    },
    {
        word: "Inevitable",
        category: "Academic",
        pronunciation: "/ɪnˈevɪtəbl/",
        partOfSpeech: "Adjective",
        definition: "Certain to happen and impossible to avoid.",
        example: "Some change is inevitable as technology continues to develop."
    },
    {
        word: "Maintain",
        category: "Environment",
        pronunciation: "/meɪnˈteɪn/",
        partOfSpeech: "Verb",
        definition: "To keep something at the same level or in good condition.",
        example: "Careful water management helps maintain a reliable supply."
    },
    {
        word: "Outcome",
        category: "Education",
        pronunciation: "/ˈaʊtkʌm/",
        partOfSpeech: "Noun",
        definition: "The result or effect of an action, event, or process.",
        example: "The study compared the outcomes of online and classroom learning."
    },
    {
        word: "Participate",
        category: "Society",
        pronunciation: "/pɑːˈtɪsɪpeɪt/",
        partOfSpeech: "Verb",
        definition: "To take part in an activity or event.",
        example: "Flexible schedules allow more adults to participate in training."
    },
    {
        word: "Perceive",
        category: "Society",
        pronunciation: "/pəˈsiːv/",
        partOfSpeech: "Verb",
        definition: "To notice or understand something in a particular way.",
        example: "Some residents perceive the new development as a threat to local character."
    },
    {
        word: "Policy",
        category: "Policy",
        pronunciation: "/ˈpɒləsi/",
        partOfSpeech: "Noun",
        definition: "A plan or set of principles used by an organisation or government.",
        example: "The policy aims to make housing more affordable for young families."
    },
    {
        word: "Potential",
        category: "Academic",
        pronunciation: "/pəˈtenʃəl/",
        partOfSpeech: "Noun/adjective",
        definition: "The ability to develop or become successful; possible but not yet realised.",
        example: "Solar power has the potential to supply remote villages."
    },
    {
        word: "Prevalent",
        category: "Health",
        pronunciation: "/ˈprevələnt/",
        partOfSpeech: "Adjective",
        definition: "Common or widespread in a particular place or among a group.",
        example: "Sleep problems are prevalent among people who work night shifts."
    },
    {
        word: "Promote",
        category: "Health",
        pronunciation: "/prəˈməʊt/",
        partOfSpeech: "Verb",
        definition: "To encourage or support the development of something.",
        example: "Public campaigns can promote healthier eating habits."
    },
    {
        word: "Renewable",
        category: "Environment",
        pronunciation: "/rɪˈnjuːəbl/",
        partOfSpeech: "Adjective",
        definition: "Replaced naturally, so it can be used without being permanently depleted.",
        example: "Several regions now generate a large share of electricity from renewable sources."
    },
    {
        word: "Reliable",
        category: "Research",
        pronunciation: "/rɪˈlaɪəbl/",
        partOfSpeech: "Adjective",
        definition: "Able to be trusted to work well or provide accurate information.",
        example: "Reliable data is essential when comparing public health programmes."
    },
    {
        word: "Significant",
        category: "Academic",
        pronunciation: "/sɪɡˈnɪfɪkənt/",
        partOfSpeech: "Adjective",
        definition: "Large or important enough to have a noticeable effect or meaning.",
        example: "The reforms led to a significant improvement in attendance."
    },
    {
        word: "Substantial",
        category: "Economy",
        pronunciation: "/səbˈstænʃəl/",
        partOfSpeech: "Adjective",
        definition: "Large in amount, value, or importance.",
        example: "The project requires substantial investment over several years."
    },
    {
        word: "Transition",
        category: "Environment",
        pronunciation: "/trænˈzɪʃən/",
        partOfSpeech: "Noun",
        definition: "The process of changing from one state, system, or stage to another.",
        example: "A gradual transition to electric transport can reduce urban pollution."
    },
    {
        word: "Urbanisation",
        category: "Society",
        pronunciation: "/ˌɜːbənaɪˈzeɪʃən/",
        partOfSpeech: "Noun",
        definition: "The growth of towns and cities as more people move into urban areas.",
        example: "Rapid urbanisation has increased the demand for affordable housing."
    }
];

const mockVocabulary = [
    {
        word: "Ornamental",
        category: "Mock · History",
        pronunciation: "/ˌɔːnəˈmentl/",
        partOfSpeech: "Adjective",
        translation: "bezak uchun, manzarali",
        definition: "Grown or used mainly for decoration rather than for food or another practical purpose.",
        example: "For many years, the plant was grown as an ornamental feature in European gardens."
    },
    {
        word: "Domesticate",
        category: "Mock · Agriculture",
        pronunciation: "/dəˈmestɪkeɪt/",
        partOfSpeech: "Verb",
        translation: "xonakilashtirmoq; madaniylashtirmoq",
        definition: "To adapt a wild plant or animal for human use.",
        example: "Early farmers learned to domesticate crops that grew well in the local climate."
    },
    {
        word: "Leaching",
        category: "Mock · Chemistry",
        pronunciation: "/ˈliːtʃɪŋ/",
        partOfSpeech: "Noun",
        translation: "suyuqlikda erib yuvilib chiqish",
        definition: "The process by which a liquid removes substances from a solid material.",
        example: "Acidic water caused the leaching of metal from the old pipes."
    },
    {
        word: "Diapause",
        category: "Mock · Biology",
        pronunciation: "/ˈdaɪəpɔːz/",
        partOfSpeech: "Noun",
        translation: "diapauza; rivojlanishning vaqtincha to‘xtashi",
        definition: "A temporary pause in the development of an organism, often helping it survive harsh conditions.",
        example: "The insect enters diapause when temperatures begin to fall."
    },
    {
        word: "Herbicide",
        category: "Mock · Agriculture",
        pronunciation: "/ˈhɜːbɪsaɪd/",
        partOfSpeech: "Noun",
        translation: "gerbitsid; begona o‘tlarni yo‘qotuvchi vosita",
        definition: "A chemical used to kill unwanted plants.",
        example: "Excessive herbicide use can damage nearby wild plants."
    },
    {
        word: "Waystation",
        category: "Mock · Ecology",
        pronunciation: "/ˈweɪsteɪʃən/",
        partOfSpeech: "Noun",
        translation: "yo‘ldagi vaqtinchalik to‘xtash joyi",
        definition: "A place where travellers or migrating animals can rest during a journey.",
        example: "Small wetlands can serve as a waystation for migrating birds."
    },
    {
        word: "Hoarding",
        category: "Mock · Psychology",
        pronunciation: "/ˈhɔːdɪŋ/",
        partOfSpeech: "Noun",
        translation: "buyumlarni me’yoridan ortiq yig‘ib borish",
        definition: "The persistent collection of excessive possessions, often making it difficult to use living spaces.",
        example: "The study examined how hoarding can affect a person's home and relationships."
    },
    {
        word: "Acquisition",
        category: "Mock · Psychology",
        pronunciation: "/ˌækwɪˈzɪʃən/",
        partOfSpeech: "Noun",
        translation: "qo‘lga kiritish; sotib olish",
        definition: "The act of gaining, obtaining, or buying something.",
        example: "The acquisition of a rare item can be exciting for a collector."
    },
    {
        word: "Hydroponics",
        category: "Mock · Agriculture",
        pronunciation: "/ˌhaɪdrəˈpɒnɪks/",
        partOfSpeech: "Noun",
        translation: "gidroponika; o‘simliklarni tuproqsiz yetishtirish",
        definition: "A method of growing plants in nutrient-rich water instead of soil.",
        example: "Hydroponics allows vegetables to be grown inside urban buildings."
    },
    {
        word: "Vertical farming",
        category: "Mock · Agriculture",
        pronunciation: "/ˈvɜːtɪkəl ˈfɑːmɪŋ/",
        partOfSpeech: "Noun",
        translation: "vertikal dehqonchilik",
        definition: "The production of crops in stacked layers, often inside controlled buildings.",
        example: "Vertical farming can produce fresh food close to city consumers."
    },
    {
        word: "Barcode",
        category: "Mock · Technology",
        pronunciation: "/ˈbɑːkəʊd/",
        partOfSpeech: "Noun",
        translation: "shtrix-kod",
        definition: "A pattern of lines or shapes that stores information for electronic reading.",
        example: "A barcode helps a shop track a product as it moves through inventory."
    },
    {
        word: "Keystone species",
        category: "Mock · Ecology",
        pronunciation: "/ˈkiːstəʊn ˈspiːʃiːz/",
        partOfSpeech: "Noun",
        translation: "ekotizim muvozanati uchun muhim tur",
        definition: "A species whose effect on its ecosystem is much greater than its population might suggest.",
        example: "The sea otter is considered a keystone species in some coastal ecosystems."
    },
    {
        word: "Acoustics",
        category: "Mock · Engineering",
        pronunciation: "/əˈkuːstɪks/",
        partOfSpeech: "Noun",
        translation: "akustika; tovushning tarqalish xususiyatlari",
        definition: "The properties of sound and how it travels through a space.",
        example: "The hall's acoustics allow listeners to hear quiet instruments clearly."
    },
    {
        word: "Reverberation",
        category: "Mock · Engineering",
        pronunciation: "/rɪˌvɜːbəˈreɪʃən/",
        partOfSpeech: "Noun",
        translation: "aks-sadoning davom etishi",
        definition: "The persistence of sound in a space after the original sound has stopped.",
        example: "Soft wall panels reduced reverberation in the lecture room."
    },
    {
        word: "Resonance",
        category: "Mock · Physics",
        pronunciation: "/ˈrezənəns/",
        partOfSpeech: "Noun",
        translation: "rezonans; tebranishning kuchayishi",
        definition: "A strong vibration or response produced when frequencies match.",
        example: "The engineers tested the bridge for resonance in strong winds."
    },
    {
        word: "Memory consolidation",
        category: "Mock · Neuroscience",
        pronunciation: "/ˈmeməri kənˌsɒlɪˈdeɪʃən/",
        partOfSpeech: "Noun",
        translation: "xotiraning mustahkamlanishi",
        definition: "The process through which newly learned information becomes more stable in memory.",
        example: "Researchers investigated how sleep supports memory consolidation."
    },
    {
        word: "Hippocampus",
        category: "Mock · Neuroscience",
        pronunciation: "/ˌhɪpəˈkæmpəs/",
        partOfSpeech: "Noun",
        translation: "gippokamp; xotira bilan bog‘liq miya qismi",
        definition: "A brain region involved in learning and the formation of memories.",
        example: "The hippocampus plays an important role in recalling new experiences."
    },
    {
        word: "Antikythera mechanism",
        category: "Mock · Archaeology",
        pronunciation: "/ˌæntɪˈkɪθərə ˈmekənɪzəm/",
        partOfSpeech: "Noun",
        translation: "Antikifera mexanizmi; qadimiy astronomik qurilma",
        definition: "An ancient Greek geared device used to calculate and display astronomical cycles.",
        example: "The Antikythera mechanism revealed the sophistication of ancient engineering."
    },
    {
        word: "Microbiome",
        category: "Mock · Biology",
        pronunciation: "/ˌmaɪkrəʊˈbaɪəʊm/",
        partOfSpeech: "Noun",
        translation: "mikrobiom; muayyan muhitdagi mikroorganizmlar majmui",
        definition: "The community of microorganisms living in a particular environment.",
        example: "A healthy soil microbiome can support plant growth."
    },
    {
        word: "Rhizosphere",
        category: "Mock · Agriculture",
        pronunciation: "/ˈraɪzəsfɪə/",
        partOfSpeech: "Noun",
        translation: "rizosfera; ildiz atrofidagi tuproq hududi",
        definition: "The area of soil around plant roots where roots and microorganisms interact.",
        example: "Bacteria in the rhizosphere can help plants absorb nutrients."
    },
    {
        word: "Geopolitics",
        category: "Mock · Society",
        pronunciation: "/ˌdʒiːəʊpəˈlɪtɪks/",
        partOfSpeech: "Noun",
        translation: "geosiyosat",
        definition: "The way geography and resources influence relations between countries.",
        example: "Access to rare minerals can shape regional geopolitics."
    },
    {
        word: "Psycholinguistics",
        category: "Mock · Linguistics",
        pronunciation: "/ˌsaɪkəʊlɪŋˈɡwɪstɪks/",
        partOfSpeech: "Noun",
        translation: "psixolingvistika; til va tafakkur munosabatini o‘rganuvchi soha",
        definition: "The study of how people understand, produce, and learn language.",
        example: "Psycholinguistics explores how listeners interpret unfamiliar sentences."
    },
    {
        word: "Syntactic ambiguity",
        category: "Mock · Linguistics",
        pronunciation: "/sɪnˈtæktɪk ˌæmbɪˈɡjuːəti/",
        partOfSpeech: "Noun",
        translation: "sintaktik noaniqlik",
        definition: "A situation in which a sentence can be understood in more than one way because of its structure.",
        example: "Punctuation can help resolve syntactic ambiguity in a long sentence."
    },
    {
        word: "Epistemology",
        category: "Mock · Philosophy",
        pronunciation: "/ɪˌpɪstəˈmɒlədʒi/",
        partOfSpeech: "Noun",
        translation: "epistemologiya; bilish va bilim haqidagi ta’limot",
        definition: "The branch of philosophy concerned with knowledge and how it is acquired.",
        example: "The lecture introduced epistemology through questions about reliable evidence."
    },
    {
        word: "Epistemic",
        category: "Mock · Philosophy",
        pronunciation: "/ˌepɪˈstiːmɪk/",
        partOfSpeech: "Adjective",
        translation: "bilim va uni asoslashga oid",
        definition: "Relating to knowledge, its limits, or the reasons for believing something.",
        example: "The researchers discussed the epistemic limits of the available data."
    },
    {
        word: "Epigraphy",
        category: "Mock · History",
        pronunciation: "/ɪˈpɪɡrəfi/",
        partOfSpeech: "Noun",
        translation: "epigrafika; qadimiy bitiklarni o‘rganuvchi soha",
        definition: "The study and interpretation of inscriptions written on durable materials.",
        example: "Epigraphy helped historians identify the purpose of the stone monument."
    },
    {
        word: "Decipherment",
        category: "Mock · History",
        pronunciation: "/dɪˈsaɪfəmənt/",
        partOfSpeech: "Noun",
        translation: "yozuv yoki shifrni o‘qib yechish",
        definition: "The process of discovering the meaning of writing that was previously unreadable.",
        example: "The decipherment of the inscription opened a new source of historical evidence."
    },
    {
        word: "Hieroglyph",
        category: "Mock · History",
        pronunciation: "/ˈhaɪərəɡlɪf/",
        partOfSpeech: "Noun",
        translation: "ieroglif; rasmga o‘xshash qadimiy belgi",
        definition: "A picture or symbol used as a character in an ancient writing system.",
        example: "Each hieroglyph could represent a sound, an object, or an idea."
    },
    {
        word: "Astrobiology",
        category: "Mock · Space science",
        pronunciation: "/ˌæstrəʊbaɪˈɒlədʒi/",
        partOfSpeech: "Noun",
        translation: "astrobiologiya; koinotdagi hayotni o‘rganuvchi fan",
        definition: "The study of the possibility, origin, and development of life beyond Earth.",
        example: "Astrobiology examines whether life could exist beneath the surface of another planet."
    },
    {
        word: "Extremophile",
        category: "Mock · Biology",
        pronunciation: "/ɪkˈstriːməfaɪl/",
        partOfSpeech: "Noun",
        translation: "ekstremofil; og‘ir sharoitda yashay oladigan organizm",
        definition: "An organism able to survive in conditions that are extreme for most forms of life.",
        example: "An extremophile may live in very hot, salty, or acidic environments."
    },
    {
        word: "Metrology",
        category: "Mock · Physics",
        pronunciation: "/mɪˈtrɒlədʒi/",
        partOfSpeech: "Noun",
        translation: "metrologiya; o‘lchashlar haqidagi fan",
        definition: "The science of measurement and the standards used to make measurements reliable.",
        example: "Modern metrology allows laboratories to compare measurements precisely."
    },
    {
        word: "Ontology",
        category: "Mock · Philosophy",
        pronunciation: "/ɒnˈtɒlədʒi/",
        partOfSpeech: "Noun",
        translation: "ontologiya; borliq va mavjudlik haqidagi ta’limot",
        definition: "The branch of philosophy that studies the nature of being and existence.",
        example: "The debate raises an ontological question about what counts as a living being."
    },
    {
        word: "Subatomic",
        category: "Mock · Physics",
        pronunciation: "/ˌsʌbəˈtɒmɪk/",
        partOfSpeech: "Adjective",
        translation: "atomdan kichik zarrachalarga oid",
        definition: "Relating to particles or processes smaller than an atom.",
        example: "The experiment measured changes in subatomic particles."
    },
    {
        word: "Anthropocene",
        category: "Mock · Environment",
        pronunciation: "/ˈænθrəpəsiːn/",
        partOfSpeech: "Noun",
        translation: "Antropotsen; inson faoliyati kuchli ta’sir qilgan geologik davr",
        definition: "A proposed geological period marked by the significant influence of human activity on Earth.",
        example: "Some researchers use the term Anthropocene to describe human-driven environmental change."
    },
    {
        word: "Nostalgia",
        category: "Mock · Psychology",
        pronunciation: "/nɒˈstældʒə/",
        partOfSpeech: "Noun",
        translation: "o‘tmishni sog‘inish; nostalgiya",
        definition: "A warm or sad feeling when remembering the past.",
        example: "Old photographs can bring on nostalgia for childhood."
    },
    {
        word: "Pneumatic",
        category: "Mock · Engineering",
        pronunciation: "/njuːˈmætɪk/",
        partOfSpeech: "Adjective",
        translation: "siqilgan havo yordamida ishlaydigan",
        definition: "Operating by means of air or gas under pressure.",
        example: "The workshop used a pneumatic tool to assemble the equipment."
    },
    {
        word: "Rare earth element",
        category: "Mock · Geopolitics",
        pronunciation: "/ˌreər ˈɜːθ ˈelɪmənt/",
        partOfSpeech: "Noun",
        translation: "noyob yer elementi",
        definition: "One of a group of metallic elements used in many advanced technologies.",
        example: "A small amount of a rare earth element can be essential to an electronic device."
    },
    {
        word: "Geothermal",
        category: "Mock · Energy",
        pronunciation: "/ˌdʒiːəʊˈθɜːməl/",
        partOfSpeech: "Adjective",
        translation: "geotermal; Yer ichki issiqligiga oid",
        definition: "Relating to heat that comes from inside the Earth.",
        example: "Geothermal energy can provide heating in regions with suitable underground conditions."
    },
    {
        word: "Cognitive delegation",
        category: "Mock · Technology",
        pronunciation: "/ˈkɒɡnətɪv ˌdelɪˈɡeɪʃən/",
        partOfSpeech: "Noun",
        translation: "fikrlash vazifalarini vositalarga topshirish",
        definition: "The practice of relying on tools or other people to perform some thinking or memory tasks.",
        example: "Using a navigation app is a common example of cognitive delegation."
    },
    {
        word: "Expenditure",
        category: "Mock · Economics",
        pronunciation: "/ɪkˈspendɪtʃə/",
        partOfSpeech: "Noun",
        translation: "xarajat; sarflangan mablag‘",
        definition: "The amount of money spent by a person, organisation, or government.",
        example: "The report compared public expenditure on transport and education."
    },
    {
        word: "Enrollment",
        category: "Mock · Education",
        pronunciation: "/ɪnˈrəʊlmənt/",
        partOfSpeech: "Noun",
        translation: "o‘qishga qabul qilinish; ro‘yxatdan o‘tish",
        definition: "The act of officially joining a course, school, or programme.",
        example: "Online enrollment made it easier for students to choose their courses."
    },
    {
        word: "Consumption",
        category: "Mock · Environment",
        pronunciation: "/kənˈsʌmpʃən/",
        partOfSpeech: "Noun",
        translation: "iste’mol; sarflash",
        definition: "The use of goods, services, energy, or resources.",
        example: "Household water consumption tends to rise during hot weather."
    },
    {
        word: "Urban heat island",
        category: "Mock · Climate",
        pronunciation: "/ˈɜːbən hiːt ˌaɪlənd/",
        partOfSpeech: "Noun",
        translation: "shahardagi issiqlik oroli hodisasi",
        definition: "An urban area that is warmer than nearby rural areas because buildings and roads retain heat.",
        example: "Trees and shaded streets can reduce the urban heat island effect."
    },
    {
        word: "Bio-concrete",
        category: "Mock · Engineering",
        pronunciation: "/ˌbaɪəʊˈkɒŋkriːt/",
        partOfSpeech: "Noun",
        translation: "biobeton; yoriqlarini o‘zi tiklay oladigan beton",
        definition: "Concrete designed to use biological processes to repair small cracks.",
        example: "Bio-concrete may help extend the life of bridges and buildings."
    },
    {
        word: "LiDAR",
        category: "Mock · Technology",
        pronunciation: "/ˈlaɪdɑː/",
        partOfSpeech: "Noun",
        translation: "lazer yordamida masofani o‘lchash va xaritalash texnologiyasi",
        definition: "A remote-sensing method that uses laser pulses to measure distances and map surfaces.",
        example: "Archaeologists used LiDAR to map structures beneath dense forest."
    },
    {
        word: "Geoengineering",
        category: "Mock · Climate",
        pronunciation: "/ˌdʒiːəʊendʒɪˈnɪərɪŋ/",
        partOfSpeech: "Noun",
        translation: "iqlimga katta miqyosda ta’sir ko‘rsatishga qaratilgan muhandislik",
        definition: "The deliberate use of large-scale technology to alter Earth's climate system.",
        example: "The proposal for geoengineering raised questions about possible unintended effects."
    },
    {
        word: "Telegraph",
        category: "Mock · Communication",
        pronunciation: "/ˈtelɪɡrɑːf/",
        partOfSpeech: "Noun",
        translation: "telegraf",
        definition: "A system that sends messages over long distances using electrical signals.",
        example: "The telegraph made communication across the ocean much faster."
    },
    {
        word: "Mitigation",
        category: "Mock · Climate",
        pronunciation: "/ˌmɪtɪˈɡeɪʃən/",
        partOfSpeech: "Noun",
        translation: "salbiy ta’sirni kamaytirish, yumshatish",
        definition: "An action or process that makes a harmful effect less severe.",
        example: "Flood mitigation includes restoring wetlands and improving drainage."
    },
    {
        word: "Yield",
        category: "Mock · Agriculture",
        pronunciation: "/jiːld/",
        partOfSpeech: "Noun/verb",
        translation: "hosildorlik; hosil bermoq",
        definition: "The amount produced by a crop, investment, or process.",
        example: "Farmers tested whether the new method could increase crop yield."
    },
    {
        word: "Remote work",
        category: "Mock · Employment",
        pronunciation: "/rɪˈməʊt wɜːk/",
        partOfSpeech: "Noun",
        translation: "masofadan ishlash",
        definition: "Work carried out away from a central workplace, often from home.",
        example: "Remote work can reduce commuting but requires reliable communication."
    }
];

const vocabularyTranslations = {
    Access: "kirish; foydalanish imkoniyati",
    Allocate: "ajratmoq, taqsimlamoq",
    Assess: "baholamoq",
    Attain: "erishmoq",
    Biodiversity: "biologik xilma-xillik",
    Coherent: "izchil, mantiqan bog‘langan",
    Contribute: "hissa qo‘shmoq",
    Crucial: "juda muhim, hal qiluvchi",
    Decline: "pasayish; pasaymoq",
    Demonstrate: "ko‘rsatmoq, namoyish etmoq",
    Diverse: "xilma-xil",
    Emission: "chiqindi gaz; ajralib chiqish",
    Enhance: "yaxshilamoq, kuchaytirmoq",
    Evaluate: "baholamoq, tahlil qilmoq",
    Evidence: "dalil, isbot",
    Fluctuate: "o‘zgarib turmoq",
    Implement: "amalga oshirmoq, joriy etmoq",
    Incentive: "rag‘bat, turtki",
    Inequality: "tengsizlik",
    Infrastructure: "infratuzilma",
    Interpret: "talqin qilmoq, izohlamoq",
    Inevitable: "muqarrar",
    Maintain: "saqlab turmoq",
    Outcome: "natija",
    Participate: "qatnashmoq, ishtirok etmoq",
    Perceive: "idrok etmoq, deb bilmoq",
    Policy: "siyosat; chora-tadbirlar rejasi",
    Potential: "salohiyat; ehtimoliy",
    Prevalent: "keng tarqalgan",
    Promote: "targ‘ib qilmoq, rivojlantirmoq",
    Renewable: "qayta tiklanadigan",
    Reliable: "ishonchli",
    Significant: "sezilarli, muhim",
    Substantial: "katta, salmoqli",
    Transition: "o‘tish jarayoni",
    Urbanisation: "shaharlashuv, urbanizatsiya"
};

function renderAdditionalVocabulary() {
    const grid = document.getElementById('vocabGrid');
    if (!grid) return;

    const cards = [...additionalVocabulary, ...mockVocabulary].map(item => {
        const card = document.createElement('article');
        card.className = 'vocab-card';

        const category = document.createElement('span');
        category.className = 'badge badge-primary';
        category.textContent = item.category;

        const word = document.createElement('div');
        word.className = 'vocab-word';
        word.textContent = item.word;

        const pronunciation = document.createElement('div');
        pronunciation.className = 'vocab-pronunciation';
        pronunciation.textContent = item.pronunciation;

        const translation = document.createElement('div');
        translation.className = 'vocab-translation';
        const translationLabel = document.createElement('strong');
        translationLabel.textContent = 'O‘zbekcha: ';
        translation.append(translationLabel, document.createTextNode(item.translation || vocabularyTranslations[item.word]));

        const definition = document.createElement('div');
        definition.className = 'vocab-definition';
        const partOfSpeech = document.createElement('strong');
        partOfSpeech.textContent = `${item.partOfSpeech}: `;
        definition.append(partOfSpeech, document.createTextNode(item.definition));

        const example = document.createElement('div');
        example.className = 'vocab-example';
        example.textContent = `"${item.example}"`;

        card.append(category, word, pronunciation, translation, definition, example);
        return card;
    });

    grid.append(...cards);
}

renderAdditionalVocabulary();

const vocabularySearchForm = document.getElementById('vocabSearchForm');
const vocabularySearchInput = document.getElementById('vocabSearch');
const vocabularyResultsCount = document.getElementById('vocabResultsCount');
const vocabularyNoResults = document.getElementById('vocabNoResults');

function filterVocabulary() {
    const query = vocabularySearchInput.value.trim().toLocaleLowerCase();
    const cards = [...document.querySelectorAll('#vocabGrid .vocab-card')];
    let visibleCount = 0;

    cards.forEach(card => {
        const matches = card.textContent.toLocaleLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visibleCount++;
    });

    vocabularyResultsCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'word' : 'words'}`;
    vocabularyNoResults.hidden = visibleCount !== 0;
}

vocabularySearchForm.addEventListener('submit', event => {
    event.preventDefault();
    filterVocabulary();
});
vocabularySearchInput.addEventListener('input', filterVocabulary);
filterVocabulary();
