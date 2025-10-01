const lesson1Cards = [
            // Elements of Culture
            { q: "What are SYMBOLS in culture?", a: "Objects, gestures, or images that carry particular meaning recognized by people. They help people understand the world as they are the foundations of culture.", cat: "elements" },
            { q: "What is LANGUAGE?", a: "A system of communication (spoken, written, or symbolic) that allows people to share ideas, thoughts, and feelings.", cat: "elements" },
            { q: "What are BELIEFS?", a: "The tenets or convictions that people hold to be true.", cat: "elements" },
            { q: "What are VALUES?", a: "Shared principles and standards of what is considered good, right, or desirable.", cat: "elements" },
            { q: "What is RELIGION?", a: "Organized systems of beliefs and practices often centered around spiritual ideas and moral codes.", cat: "elements" },
            { q: "What are NORMS?", a: "Rules or patterns of behavior collectively shared and belonging to a particular culture that guides behavior. Types include folkways, mores, taboos, and laws.", cat: "elements" },
            
            // Characteristics of Culture
            { q: "What does it mean that culture is SHARED?", a: "Collective meanings, understandings, and practices are generated when people share their culture among members of society.", cat: "characteristics" },
            { q: "What does it mean that culture is LEARNED?", a: "Culture is not biologically inherited but is ACQUIRED through learning and socialization.", cat: "characteristics" },
            { q: "What does it mean that culture is ADAPTIVE?", a: "Culture evolves and changes in response to the needs, challenges, and opportunities faced by a society or group. This adaptability allows cultures to survive and thrive in diverse environments.", cat: "characteristics" },
            { q: "What is the difference between Cultural Adaptation and Biological Adaptation?", a: "Cultural Adaptation: Our behavior and practices adapt. Biological Adaptation: Our genes and body adapt.", cat: "characteristics" },
            { q: "What does it mean that culture is SYMBOLIC?", a: "Culture encompasses a collection of symbolic knowledge that members of society share.", cat: "characteristics" },
            { q: "What does it mean that culture is INTEGRATED?", a: "Culture is a complex system that consists of many parts that are interconnected with each other.", cat: "characteristics" },
            { q: "What does it mean that culture is CHANGING?", a: "Culture is changing as time passes due to constant cultural interactions and exchanges.", cat: "characteristics" },
            
            // Cultural Concepts
            { q: "What is CULTURAL DIFFUSION?", a: "The process by which cultural elements—such as beliefs, practices, technologies, languages, and artifacts—spread from one society or cultural group to another.", cat: "concepts" },
            { q: "What is CULTURAL LAG?", a: "The tendency of material culture to evolve and change rapidly while non-material culture tends to resist change.", cat: "concepts" },
            { q: "What is CULTURAL LEVELLING?", a: "The process where different cultures become more similar to each other due to various forms of interaction and influence.", cat: "concepts" },
            { q: "What is ETHNOCENTRISM?", a: "The tendency to view one's own culture as superior and to judge other cultures by the standards of one's own culture.", cat: "concepts" },
            { q: "What is XENOCENTRISM?", a: "The preference for products, styles, or ideas from another culture rather than from one's own culture.", cat: "concepts" },
            { q: "What is CULTURAL RELATIVISM?", a: "The practice of assessing a culture by its own standards rather than viewing it through the lens of one's own culture.", cat: "concepts" },
            
            // Types of Culture
            { q: "What is MATERIAL CULTURE?", a: "Physical objects and belongings of members of a group of people.", cat: "types" },
            { q: "What is NONMATERIAL CULTURE?", a: "Includes ideas, beliefs, social roles, rules, ethics, and attitudes of a society. Also called Symbolic Culture.", cat: "types" },
            { q: "What is IDEAL CULTURE?", a: "Refers to the values, norms, and behaviors that a certain society claims and aspires to have.", cat: "types" },
            { q: "What is REAL CULTURE?", a: "Refers to the values, norms, and behaviors that the society has in reality (as opposed to what they claim).", cat: "types" },
            { q: "What is a SUBCULTURE?", a: "A cultural group within a larger culture, often having beliefs or interests at variance with those of the larger culture.", cat: "types" },
            { q: "What is COUNTERCULTURE?", a: "A type of subculture that strongly opposes the norms and values of the dominant culture.", cat: "types" },
            { q: "What is HIGH CULTURE?", a: "Associated with the elite or dominant classes and is often linked to the fine arts and sophisticated cultural expressions.", cat: "types" },
            { q: "What is POPULAR CULTURE?", a: "Refers to mainstream, widespread patterns among a society's population.", cat: "types" },
            
            // Definitions
            { q: "What is CULTURE according to Edward Tylor?", a: "That complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society.", cat: "concepts" },
            { q: "What is a simple definition of culture?", a: "The sum total lifestyle of a group. It's the way a group of people live.", cat: "concepts" }
        ];

        const lesson2Cards = [
            { q: "What does FRAGMENTED mean in Philippine culture?", a: "The Philippines is geographically divided into over 7,000 islands, creating regional distinctions and diverse cultural practices across different areas.", cat: "characteristics" },
            { q: "What does MULTILINGUAL mean in Philippine culture?", a: "The Philippines has more than 130 languages, with major languages including Tagalog, Cebuano, Ilocano, Hiligaynon, Bicolano, Waray, and others.", cat: "language" },
            { q: "What does PLURALISTIC mean in Philippine culture?", a: "Philippine culture is characterized by diversity in beliefs, practices, and traditions, blending indigenous, Spanish, American, and Asian influences.", cat: "characteristics" },
            { q: "What is the difference between Language and Dialect?", a: "A language is a system of communication with its own grammar, syntax, and vocabulary used by a large community. A dialect is a regional or social variation of a language with different vocabulary or pronunciation but generally mutually intelligible.", cat: "language" },
            { q: "How is Filipino language gender-neutral?", a: "Filipino uses gender-neutral pronouns like 'siya,' 'niya,' and 'kanya' instead of he/she. It also has gender-neutral terms like asawa, pulis, and kapatid.", cat: "language" },
            { q: "How does Filipino language reflect collective nature?", a: "Filipino uses inclusive pronouns like 'kita' and 'tayo' (we/us), honorifics like 'po' and 'opo' for respect, and familial terms like 'ate' and 'kuya' even for non-relatives, emphasizing community and unity.", cat: "language" },
            { q: "What is the Philippine National Flag sewn by?", a: "Marcela Marino de Agoncillo, Lorenza Agoncillo, and Delfina Herbosa de Natividad", cat: "symbols" },
            { q: "What is the Philippine National Motto?", a: "Maka-Diyos, Maka-Tao, Maka-Kalikasan, at Makabansa (For God, People, Nature, and Country)", cat: "symbols" },
            { q: "What are the three stars on the Philippine coat of arms?", a: "The three five-pointed stars represent the three major island groups: Luzon, Visayas, and Mindanao.", cat: "symbols" },
            { q: "What is the Philippine National Tree?", a: "Narra (Pterocarpus indicus), also known as rosewood. Cutting narra trees requires permission.", cat: "symbols" },
            { q: "What is the Philippine National Flower?", a: "Sampaguita (Jasminum sambac), also known as Arabian Jasmine. The white color represents purity, simplicity, humility, and strength.", cat: "symbols" },
            { q: "What is the Philippine National Bird?", a: "Philippine eagle (Pithecophaga jefferyi), commonly known as the monkey-eating eagle, one of the largest surviving eagles in the world.", cat: "symbols" },
            { q: "What is the Philippine National Sport?", a: "Arnis, also known as Kali and Eskrima. It's a martial art involving the use of two weapons and bare hands.", cat: "symbols" },
            { q: "What is BAPTISM in Philippine culture?", a: "A significant birth ritual influenced by Catholicism where infants are formally welcomed into the Christian faith, performed by a priest with holy water and accompanied by a large family gathering.", cat: "rituals" },
            { q: "What is a DEBUT?", a: "A lavish celebration of a young woman's 18th birthday marking her transition into adulthood, including traditional dances like Cotillion, 18 roses (dances), and 18 candles (messages).", cat: "rituals" },
            { q: "What is TULI?", a: "Circumcision for boys, usually around age 10-12, performed during summer. It is considered a rite of passage into manhood.", cat: "rituals" },
            { q: "What is PAMAMANHIKAN?", a: "A pre-wedding custom where the groom and his family formally visit the bride's family to ask for her hand in marriage, involving negotiation and wedding planning.", cat: "rituals" },
            { q: "What is LAMAY?", a: "A wake held over several nights where family and friends gather to mourn, pray, and celebrate the deceased's life, including nightly vigils and prayers.", cat: "rituals" },
            { q: "What is PASIYAM?", a: "Nine days of prayer and mourning after burial, followed by another commemoration on the 40th day, believed to help the soul's journey to the afterlife.", cat: "rituals" },
            { q: "What is SIMBANG GABI?", a: "A novena of Masses celebrated before Christmas Day, where Filipinos attend Mass early in the morning (4-5 AM) from December 16 to 24.", cat: "rituals" },
            { q: "What is FLORES DE MAYO?", a: "A festival dedicated to the Virgin Mary, celebrated with daily prayers, flower offerings, and a culminating parade known as the Santa Cruzan.", cat: "rituals" },
            { q: "What is ANITISM?", a: "An indigenous Filipino belief system (animism) where spirits are believed to reside in natural elements like trees, rivers, and mountains. It continues to influence cultural practices today.", cat: "beliefs" },
            { q: "What is Catholic Syncretism in the Philippines?", a: "Filipino Catholics blend indigenous practices with Catholic rituals, creating a unique syncretic form of worship that combines traditional folk beliefs with Christian practices.", cat: "beliefs" },
            { q: "What are Filipino superstitions?", a: "Irrational beliefs in supernatural causality, such as avoiding whistling at night (attracts spirits), not sweeping at night (sweeps away good luck), and believing in supernatural beings like aswang.", cat: "beliefs" }
        ];

        const lesson3Cards = [
            { q: "What is POPULAR CULTURE?", a: "A set of beliefs, practices, and objects that are dominant in society at a given time. It is widely favored by many people, often viewed as inferior work, deliberately made to win favor with people, and made by the people for themselves.", cat: "definitions" },
            { q: "What is MASS CULTURE theory?", a: "A theory that emerged in response to 20th century mass media, arguing that culture is created primarily for profit rather than artistic merit, leading to oversimplified, formulaic content designed to maximize consumption.", cat: "theories" },
            { q: "What is Commodification of Culture?", a: "The process where culture is created primarily for profit, with mass appeal leading to oversimplified content and standardization resulting in formulaic, repetitive entertainment that reduces creativity.", cat: "theories" },
            { q: "What is the Passive Audience Hypothesis?", a: "Mass culture theorists argue that audiences are passive consumers who uncritically accept mass-produced culture, making them susceptible to ideological manipulation and consumerism.", cat: "theories" },
            { q: "What is the FRANKFURT SCHOOL?", a: "A group of Marxist intellectuals who developed critical theory analyzing how ideology and culture reinforce capitalist power, focusing on the 'culture industry' that manufactures culture as a commodity.", cat: "theories" },
            { q: "What is the CULTURE INDUSTRY?", a: "A term by Adorno and Horkheimer referring to mass production of culture under capitalism. Culture is manufactured like any commodity to generate profit, producing standardized, repetitive entertainment that discourages critical thinking.", cat: "theories" },
            { q: "What was Theodor Adorno's critique of popular music?", a: "Adorno argued that popular music follows a rigid formula limiting creativity and emotional depth, creating the illusion of choice while being predictable and repetitive, unlike classical music which allows genuine artistic expression.", cat: "theories" },
            { q: "What was Walter Benjamin's view on mass media?", a: "In 'The Work of Art in the Age of Mechanical Reproduction,' Benjamin argued that technology (photography, film) could democratize culture, making art accessible to masses rather than just elites, though it could also be used for propaganda.", cat: "theories" },
            { q: "What is STRUCTURALISM in cultural analysis?", a: "A theoretical framework that analyzes culture through deep structures and patterns, such as binary oppositions (good vs. evil, rich vs. poor), to understand how cultural texts construct meaning.", cat: "theories" },
            { q: "What are binary oppositions in structuralism?", a: "Universal structures in human cultures such as good vs. evil, nature vs. culture, rich vs. poor, which shape meaning and narrative patterns in cultural texts.", cat: "theories" },
            { q: "What is MARXISM's view on popular culture?", a: "Marxism analyzes how the ruling class controls material and idea production. Popular culture perpetuates false consciousness, making inequalities seem natural and preventing the working class from recognizing oppression.", cat: "theories" },
            { q: "What is False Consciousness in Marxism?", a: "A concept where capitalist societies make inequalities seem natural, preventing the working class from recognizing its oppression through dominant ideology that reflects the ruling class's interests.", cat: "theories" },
            { q: "What is Political Economy in popular culture?", a: "Media ownership is concentrated in few powerful corporations, ensuring that mass culture supports the ruling class's ideology, based on Marx's base-superstructure model.", cat: "theories" },
            { q: "What is FEMINISM's critique of popular culture?", a: "Feminism critiques 'symbolic annihilation of women' in media - how women are ignored, marginalized, reduced to stereotypes emphasizing beauty/domesticity, and depicted as passive, reinforcing traditional gender roles.", cat: "theories" },
            { q: "What is Symbolic Annihilation of Women?", a: "A concept by Tuchman (1978) referring to how mass media ignores, excludes, marginalizes, or trivializes women by erasing them, reducing them to stereotypes, and depicting them as passive and submissive.", cat: "theories" },
            { q: "What is POSTMODERNISM in culture?", a: "A shift in cultural production where the distinction between high and mass culture collapses, emphasizing style over substance, blurring historical/spatial boundaries, and prioritizing aesthetic appearance and spectacle.", cat: "theories" },
            { q: "What are characteristics of Postmodern culture?", a: "Popular culture becomes central to society, shaping identity and reality. The distinction between high and mass culture collapses, with art borrowing from popular media and vice versa.", cat: "theories" },
            { q: "What is 'Style Over Substance' in Postmodernism?", a: "Postmodern culture prioritizes aesthetic style, surface appearance, and spectacle over deep meaning or content, seen in fashion, film, and advertising where image matters more than function.", cat: "theories" }
        ];

        let allFlashcards = [];
        let currentCards = [];
        let currentIndex = 0;
        let isFlipped = false;
        let currentLesson = 1;

        const categoryButtons = {
            1: [
                { name: 'All Cards', value: 'all' },
                { name: 'Elements', value: 'elements' },
                { name: 'Characteristics', value: 'characteristics' },
                { name: 'Types', value: 'types' },
                { name: 'Concepts', value: 'concepts' }
            ],
            2: [
                { name: 'All Cards', value: 'all' },
                { name: 'Characteristics', value: 'characteristics' },
                { name: 'Language', value: 'language' },
                { name: 'Symbols', value: 'symbols' },
                { name: 'Rituals', value: 'rituals' },
                { name: 'Beliefs', value: 'beliefs' }
            ],
            3: [
                { name: 'All Cards', value: 'all' },
                { name: 'Definitions', value: 'definitions' },
                { name: 'Theories', value: 'theories' }
            ]
        };

        function selectLesson(lessonNum) {
            currentLesson = lessonNum;
            
            // Update lesson buttons
            const lessonBtns = document.querySelectorAll('.lesson-btn');
            lessonBtns.forEach((btn, idx) => {
                btn.classList.toggle('active', idx + 1 === lessonNum);
            });

            // Set appropriate flashcards
            if (lessonNum === 1) {
                allFlashcards = [...lesson1Cards];
            } else if (lessonNum === 2) {
                allFlashcards = [...lesson2Cards];
            } else {
                allFlashcards = [...lesson3Cards];
            }

            // Update category buttons
            updateCategoryButtons();
            
            currentCards = [...allFlashcards];
            currentIndex = 0;
            displayCard();
        }

        function updateCategoryButtons() {
            const controlsDiv = document.getElementById('controls');
            const buttons = categoryButtons[currentLesson];
            
            controlsDiv.innerHTML = '';
            buttons.forEach((btn, idx) => {
                const button = document.createElement('button');
                button.className = 'category-btn' + (idx === 0 ? ' active' : '');
                button.textContent = btn.name;
                button.onclick = () => filterCategory(btn.value);
                controlsDiv.appendChild(button);
            });
        }

        function displayCard() {
            if (currentCards.length === 0) {
                document.getElementById('question').textContent = 'No cards available';
                document.getElementById('answer').textContent = 'Please select a different category';
                document.getElementById('counter').textContent = '0 / 0';
                document.getElementById('prevBtn').disabled = true;
                document.getElementById('nextBtn').disabled = true;
                return;
            }

            const card = currentCards[currentIndex];
            document.getElementById('question').textContent = card.q;
            document.getElementById('answer').textContent = card.a;
            document.getElementById('counter').textContent = `${currentIndex + 1} / ${currentCards.length}`;
            
            document.getElementById('prevBtn').disabled = currentIndex === 0;
            document.getElementById('nextBtn').disabled = currentIndex === currentCards.length - 1;
            
            if (isFlipped) {
                document.getElementById('flashcard').classList.remove('flipped');
                isFlipped = false;
            }
        }

        function flipCard() {
            document.getElementById('flashcard').classList.toggle('flipped');
            isFlipped = !isFlipped;
        }

        function nextCard() {
            if (currentIndex < currentCards.length - 1) {
                currentIndex++;
                displayCard();
            }
        }

        function prevCard() {
            if (currentIndex > 0) {
                currentIndex--;
                displayCard();
            }
        }

        function filterCategory(category) {
            const buttons = document.querySelectorAll('.category-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            if (category === 'all') {
                currentCards = [...allFlashcards];
            } else {
                currentCards = allFlashcards.filter(card => card.cat === category);
            }
            
            currentIndex = 0;
            displayCard();
        }

        function shuffleCards() {
            for (let i = currentCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
            }
            currentIndex = 0;
            displayCard();
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevCard();
            if (e.key === 'ArrowRight') nextCard();
            if (e.key === ' ') {
                e.preventDefault();
                flipCard();
            }
        });

        // Initialize
        selectLesson(1);
