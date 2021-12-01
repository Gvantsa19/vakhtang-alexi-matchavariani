var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});







// multi language




//define language reload onclick illiteration
function clickedReload() {


	// define language reload anchors

	var dataReload = document.querySelectorAll("[data-reload]");
	var langChanged = document.querySelectorAll("[data-lang]");

	//language translations

	var language = {
		eng: {
			alexi: "Alexi",
			vakhtang: "Vakhtang",
			foundation: "Foundation",
			projects: "Projects",
			contact: "Contact",
			homeheadline: "Alexi And Vakhtang Matchavariani Charity Found",
			homeheadline2: "Alexi Matchavariani",
			homeheadline3: "Vakhtang Matchavariani",
			ourmissiontxt: "Our Mission",
			aboutus: "About Us",
			photos: "Photos",
			team: "Team",
			namelastname: "Name Lastname",
			socialmedia: "Social Media",
			location: "Location Street",
			videosamp:"Video Samples",
			
			learnmore: "Learn More",
			biography: "Biography",
			manuscripts: "Manuscripts",
			presse: "Presse",
			audiosamples: "Video & Audio Samples",
			information: "Information",
			manuscriptname: "Name #1",
			manuscriptdescription: "The Study Of The Writing In Surviving Manuscripts",
			concoursename: "Concourse Name",
			concoursemini: "Contemporary business and science",
			concoursedescription: "Tasks To Be Executed Over A Fixed Period",
			register: "apply",
			sendbtn: "send",
			competition: "Alexi Matchavariani International Composer’s Competition",
			Stephanede:"Photos by Stephane de Bourgies",
			OmerAvarkan:"Logo by Omer Avarkan",
			mission1:"Popularisation of Georgian Music in Georgia and Abroad.",
			mission2:"Organisation of professional musical events and their support.",
			mission3:"Support of young Composers and performers of exceptional talent.",
			mission4:"Establishment of the International Composers Competition of Alexi Matchavariani.",
			mission5:"Establishment of the International Youth Symphony Orchestra.",
			mission6:"Establishment of the musical Festival.",
			mission7:"Restoration of damaged musical Scores of Georgian Composers.",
			mission8:"Restoration of Audio & Video samples of old Georgian musical masterpieces.",
			mission9:"Revival of forgotten Georgian musical masterpieces.",
			mission10:"Presentation of unknown musical masterpieces in Georgia.",
			mission11:"Connection of Georgian and foreign young musicians via Music.",
			alexp1:"Aleksi Machavariani was born in Gori, Georgia. He graduated from the Tbilisi Conservatory in 1936 and remained there for postgraduate studies. He studied composition under Pyotr Ryazanov. Later he joined the faculty, becoming a professor in 1963. He began his artistic career in 1935.",
			alexp2:"Machavariani produced a number of critically acclaimed plays and ballets, including the ballet Othello (1957), the operas Mat i Sin (1945), Den moei Rodini (1954), the symphony Piat monologov (1971; it earned the Shota Rustaveli Prize). He also wrote the music to many theatrical productions, including Baratashvili and Legenda o liubvi. His output includes among other works also a violin concerto (1950), seven symphonies (1947–1992) and six string quartets (the last in 1993).[1]",
			alexp3:"He was the artistic director of the Georgian State Symphony Orchestra from 1956 till 1958 and directed the Composers' Union of Georgia from 1962 till 1968.[2]",
			alexp4:"His son, Vakhtang Machavariani, is likewise a composer, who also conducts his father's works.",
			alexpress1:"1.) Brilliant music, brilliant performance… it’s a great success… again I want to underline the music of Alexi Matchavariani, which is talented and perfectly orchestrated.",
			alexpress2:"2.) …”Othello” and Alexi Matchavariani’s score is a stunning dramatic pulse – sinuous, barbed, bombastic and tender in turn. …it’s Shakespeare with electricity.",
			alexpress3:"3.) A. Matchavariani’s violin concerto is beautiful – it contains all the passion, the poetry and deep spirituality… Added to the lyrical quality of the music there is a robust intellectual approach – all in all, a most memorable piece which any violinist would have great pleasure in interpreting.",
			alexpress4:"4.) Alexei Davidovich Matchavariani in a author of the excellent violin concerto.",
			// conditions:"1) The competition is open to any composer under the age of 40 by the application deadline. 2) The competition will be held online. 3) Competition works should not have been published, nor published on a compact disc,shown on television, radio, Internet or performed in public.4) The date of creation of a work for the competition should not exceed two (2) years beforethe start of the competition, as Alexi Matchavariani’s International Composers'Competition will be held every two (2) years. 5) The composition created for the competition must be submitted no later than two (2) months before the start of the competition. a) Applications for the competition will not be accepted earlier than two months before the start of the competition. b) The competition dates will be announced online on the website of the Alexi and Vakhtang Matchavariani Charity Foundation. www.matchavarianifoundation.ge c) Information about the announcement of the competition will be provided in: Georgian,English, French, German and Russian languages.",
			//team member biography
			teammemberbiography: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality",
			alexBiography:"The most eminent composer, People's Artist of the USSR, a winner of the USSR State Prize and Shota Rustaveli Prize of Georgia, Golden Medal winner of “Centro Cultural Braidense – Milano” for ballet Othello, Professor, winner of many Soviet and International Prizes, Cavalier of many Orders, chairman of the Georgian Union of composers: 1962-1973, since 1979 – member of the board of the Union of Soviet Composers until 1992, a Deputy of the USSR Supreme Council 1962-1970. A. Matchavariani was born in the town of Gori in Eastern Georgia in a noble family. The folk tunes of his homeland were the first sources of his musical education. Later, at the age of 6, he started his training on piano and violin. After graduating the Tbilisi Conservatory (composition) he completed his postgraduate training in the art of composition as a pupil of Prof. P.B. Ryazanov. Later (in 1961) he became the professor of the Tbilisi State Conservatory, the recommendation for his professorship was written by D. Shostakovich & T. Khrennikov.In twenty’s and in thirty’s he was many times arrested, but his fate and his music was saving him again and again. His first success he had with his piano composition “Chorumi” 1937. It was after “Chorumi” when the great Georgian conductor, GMD of the Tbilisi Opera and of the Georgian State Orchestra E. Mikeladze proposed him to write an opera. A. Matchavariani wrote his first opera “Mother and Son” in 1942. Matchavariani’s first big success was the piano concerto 1944, which was first performed in Tbilisi, few months later in Moscow, after in Leningrad, Germany and other places. After writing his first compositions for the orchestra: “Elegy” in 1936, “Scherzo” – 1936, “Mumli Mukhasa” – 1939. A. Matchavariani composes his First Symphony in 4 movements in 1947, which brought him a great success. The symphony was first performed in Tbilisi , Moscow and Leningrad , later in many other cities. The some time together with D. Shostakovich and S. Prokofiev he was accused in “formalism”. After Stalin’s death, the situation has started to change. The new dimension and sensational success had A. Matchavariani after writing his famous violin concerto in 1949, which was performed in many countries. First performers were M. Weiman ( Leningrad ) and D. Oistrach ( Moscow ). The concerto was recorded a number of times by ”Melodia”, as well by “Columbia Records” in USA . In 1952 he was again on the Red List to be deported together with his family.",
			alexbiography2:"In 1960 he started another big composition, it is “Hamlet”, an opera in two acts. This work continues until 1967. The opera was prohibited by Georgian authority’s. In 1964 A. Matchavariani has finished “5-Monolognes” for baritone and orchestra, for which he was rewarded with S. Rustaveli Prize. With “5-Momolognes” and with “Hamlet”, A. Matchavariani has started a new musical language and the much more modern way of expressing his musical ideas, together with a new way of designing his score. With symphony №2 he continues his new musical language.1972. The critics have baptized this symphony as a beginning of the PHILOSOPHICAL SYMPHONISM in Georgia . In 1977 A. Matchavariani wrote probably the most important composition for him. It is ballet “The Knight in the tiger skin”, the poem of the 12-th century of the greatest Georgian poet and philosopher S. Rustaveli, pride of Georgia . It’s first production was in Leningrad , at “Kirov”(Mariisky) theatre, choreographer O. Vinogradov. The “Knight” had a great success in Leningrad (during 7 years) Moscow , USA , Paris , Japan , Tbilisi and many other places. After writing a number of chamber, choral and vocal music, in 1979 he wrote a musical comedy “The Bug” after V. Mayakovsky. In 1983 Matchavariani has finished №3 and №4 symphonies. №3 Symphony is a composition of a huge power, deep and tender. The critic wrote about it: It is universal and human, cosmic and earthy. №4 symphony “The Youth’s” for strings, percussion, piano, celesta and harp is a sparkling, melodic, lyrical, motor composition with electric dynamism. After writing the ballet in two acts “The Taming of the shrew” after W. Shakespeare in 1984, he continues the line of the symphony №3 and in 1986 he writes a stunning №5 symphony “Ushba”. 46 minute symphony in two parts (without interval) is a huge universal power, like a philosophical treaty. Matchavariani is using 8:horns, 4:trumpets, 4:trombones, 2:tubas, 70:strings, a huge orchestra. He is using 8 horns and 4 trumpets already in №3 symphony, but in №5 symphony Matchavariani is using around 115 musicians. Immediacy after “Ushba” he writes his symphony №6 “Amirani”(Prometheus) 1987 which continues the line of №5 symphony and is a beginning of the third chapter of a new musical language. In 1987 he writes as well a cello concerto, for strings, harp and cello, in 3 movements. ",
			alexpress1:"1.) Brilliant music, brilliant performance… it’s a great success… again I want to underline the music of Alexi Matchavariani, which is talented and perfectly orchestrated. D. Shostakovich. “Zaria Vostoka”, 25-03-1958.",
			alexpress2:"2.) …”Othello” and Alexi Matchavariani’s score is a stunning dramatic pulse – sinuous, barbed, bombastic and tender in turn. …it’s Shakespeare with electricity. By Howard Thomson. The New York Times. Monday. May 4, 1964.",
			alexpress3:"3.) A. Matchavariani’s violin concerto is beautiful – it contains all the passion, the poetry and deep spirituality… Added to the lyrical quality of the music there is a robust intellectual approach – all in all, a most memorable piece which any violinist would have great pleasure in interpreting. Sir Yehudi Menuhin. London. 20-06-1985.",
			alexpress4:"4.) Alexei Davidovich Matchavariani in a author of the excellent violin concerto. David Oistrach. 27-02-1952. On the day of the performance of A. Matchavariani violin concerto by D. Oistrach.",
			alexpress5:"5.) Not any of compliments or fascination can describe the huge esthetic joy, which one has seeing and hearing ballet “Othello”. We can glorify people who have created this masterpiece. Maya Plisetskaia. 25-03-1958. “Komunist”.",
			alexpress6:"6.) “Othello” is one of the greatest choreographycal – Symphonic creations. It is one of the most remarkable events of the modern musical creations. V. Gorodinsky. “Theater” № 6, 1958.",
			alexpress7:"7.) No doubt, “Othello” is one of the greatest achievements of arts of music and theater. D. Kabalevsky. “Musical life”, Moscow , №6 , march 1958.",
			alexpress8:"8.) It is a real Shakespeare. Talking about the creative truth on the stage. I will give you one more example, it is “Othello” of A. Matchavariani. L. Danilevich. “Soviet Music”, № 12, 1960.",
			alexpress9:"9.) …Heute ist der name des Volkskuenstler der UdSSR und Staatspreistragers Alexi Matchavariani weit ueber die Grenzen Grusiens hinaus bekannt. Seine Klavier – und Violinkonzerte werden in vielen Laendern der Erde aufgefuehrt. Eine vorzuegliche Interpretin seiner Klavierstuecke ist die deutsche Pianistin Annerose Schmidt, Preistraeger des Schumann – und des Chopin – Wettbewerbs. Das Orchester der Berliner Philharmonie unter Leitung von Franz Konwitschny begleitete mehrfach sowjetische und auslaendische Interpreten Matchavarianis. “Sowjetunion heute” 16.01.1966. Deutschland.",
			alexpress10:"10.)    Matchavariani – “Othello” est a la fois une oeuvre georgienne et universelle, tres tendue, intensement dramatique. Journal Musical Francais, №152. Decembre, 1966. Page: 48.",
			alexpress11:"11.)    IL M Maciavariani si e voluto reincarnare spiritualmente nel dramma di “Otello” dando a questo personaggio e novita di incisivo interesse – un temperamento dolce ed aggressivo nello stesso tempo; il risultato di questa sintesi nella composizione musicale ha fatto nascere cosi'una delle piu belle pagine liriche di questo balletto. Maciavariani in “Otello” non vende l'africano arso dalla gelosia od influenzato dall animo diabolico di Jago per indurlo sino al delitto; il Maestro, pur senza alterare la figura del protagonista, transforma Otello in un eroe che innanzitutto e prima di tutto ama Desdemona di un amore puro e sincero; …Maciavariani riesce compositore altamente espressiro, perché egli segne ogni personaggio della trama shakespeariana, con la sua chiara luce che risalta in modo stupendo ed indimenticabille in questo maraviglioso balletto. Centro Culturale Braidense – Milano. 14-11-1973.  Alexi Matchavariani has received the Golden Medal of Centro Culturale Braidense for music of “Othello”.",
			alexpress12:"12.)   “Othello” is a craftsmanship of music writing is a rare talent, it is a characteristic fine for A. Matchavariani. M. Tzarev. “ Zaria Vostoka”, 1958.",
			alexpress13:"13.)    Tender, wise, courageous in the №1 symphony of A. Matchavariani, which has affinity with №5 symphony of Prokofiev and №5 of Shostakovich. T. Lebedeva. “Soviet Music” № 8, 1960.",
			alexpress14:"14.)    Listening this fresh and colorful music (“The day of my homeland”)… it proves that A. Matchavariani showed a real talent of innovation, a great taste and creativity. V. Kuharski. “Soviet Music” № 2, 1956.",
			alexpress15:"15.)    The most fascinating in ballet Othello’s music is the truth and sparkling character of the heroes, mighty strength, individuality of the characters and deep feelings together with a real theatrical brilliance. N. Shumskaia. “Soviet Music” № 6, 1958.",
			alexpress16:"16.)    №4 Symphony of A. Matchavariani is a perfect dramatic form, perfectly orchestrated, it is sparkling. V.Likht.Music Life, Moscow. №4, 1986.",
			alexpress17:"17.)   La musique d’Alexi Matchavariani est puissante, lyrique et pittoresque. Un fabuleux chevalier a la peau de tigre Gilberte Gournand – “Le Parisien”, 11-01-1998.",
			alexpress18:"18.)    …ballet conventionnel teinte, comme la musique d’Alexei Matchavariani, de quelques touches contemporaines et d’accents georgiens. Une grande machine neo-classique a couleur exotique, pavee de bons sentiments et comme il fant en faire de temps en temps en Union sovietique pour etre bien vu. Rene Sirvin. “Le Figaro”, 07-01-1988.",
			alexpress19:"19.)    Then there is the score to which the work is set (“The Knight in the Tiger Skin”). It is by Alexey Machavariani, and is as overwhelming to the ear as the setting are to the eye. By Jakob Siskind. “The citizen” – Ottawa. 14-06-1986.",
			alexpress20:"20.)    …the abrasive score of Alexei Machavariani, heavy on Stravinsky – like percussion and throbbing rhythms, is punctured by a few oases of lush and romantic melodies in stormy “Knight”.  Stephen Godfrey At. “The Globe & Mail”, 20-05-1986.",
			alexpress21:"21.)    “Le roi doit mourir” sur une tres belle musique concrete de Machavariani, est un spectacle d’une beaute grandiose comme une tragedie antique La Marseillaise Marseille. 10-08-1979.",
			alexpress22:"22.)    A. Matchavarianis Musik ist ein Kaleidoskop menschlicher Getriebenheit. Sie zeigt sich expressiv und dynamisch, sie ist klar, voller Poesie und Zugleich farbenpraechtig”. Sueddeutsche Zeitung. 27-04-1998.",	
			alexpress23:"23.)    “Othello” is a event in theater, it is a composition of Russian artistic perfection, in which is imprinted a mighty Shakespearean spirit, with heavy waves of life. A. Medvedev. “Soviet Culture” №15, 1958.",	
			alexpress24:"24.)    Ballet “Othello” is an event in our artistic life. “Othello” of Alexi Matchavariani is a apparition of a huge artistic scale. A. Matchavariani’s music is percolating us in to the world of Shakespearean feelings, following the great musical traditional of S. Prokofiev.  Asaf Messer. Folk Artist of the USSR. Moscow. “Zaria Vostoka”, 29-03-1958.",	
			alexpress25:"25.)    Music of A. Matchavariani is a jewel of Soviet music. Kara Karaev. Folk Artist of the USSR. Composer. 1-10-1963.",	
			alexpress26:"26.)    A. Matchavariani’s achievements in different styles of music bring him in the first row of Soviet artists. Already in his first symphony he presented himself as a master. “Othello” is are of the greatest achievements of soviet musical culture. Composer opened himself as a great talent, thinker, humanist. A. Khachaturian. Folk Artist of the USSR. Composer. “Izvestia”, 25-09-1963.",	
			alexpress27:"27.)    Music of “Othello” is a real event, meritorious to Shakespeare, it is a real triumph of composer, Matchavariani is not illustrating Shakespeare, he created a musical equivalent. M. Vershinin. “Soviet Culture”, 21-12-1973.",	
			alexpress28:"28.)    №2 Symphony of A. Matchavariani (1973) is a unique resolution of the problem of symphonic cycle. Matchavariani is generously rewarded with a restless mind and talent. This is a guaranty of ever youthfulness. D. Daragan. “Soviet Music” №3, 1974.",	
			alexpress29:"29.)    Dazzling – rich theatrical score of “The knight in the tiger skin” of A. Matchavariani is based on a dramatical action and meditation, incarnated in the law of epic tale’s. M. Aranovsky. “Soviet Music” №1, 1986.",	
			alexpress30:"30.)    №4 symphony of A. Matchavariani, ones again has reminded us about his great contribution… as it is characteristic in it’s perfection of dramatic forms, brilliance of instrumentation. №3 symphony is characteristic with it’s robust scale, depth of ideas, composer thinks in enormous forms, juxtaposition universal with earthy, cosmic with human, which creates the indestructible chain of contrasts… colors, timbres… Powers of darkness, universal chaos…  L. Izmailova. “Soviet Music” №3, 1986.",	

		},
		geo: {
			alexi: "ალექსი",
			vakhtang: "ვახტანგ",
			foundation: "ფონდი",
			projects: "პროექტები",
			contact: "კონტაქტი",
			homeheadline: "ალექსი და ვახტანგ მაჭავარიანის საქველმოქმედო ფონდი",
			homeheadline2: "ალექსი მაჭავარიანი",
			homeheadline3: "ვახტანგ მაჭავარიანი",
			ourmissiontxt: "ჩვენი მისია",
			aboutus: "ჩვენს შესახებ",
			photos: "ფოტოები",
			team: "გუნდი",
			namelastname: "სახელი გვარი",
			socialmedia: "სოციალური მედია",
			location: "ლოკაცია",
			competition: "ალექსი მაჭავარიანის სახელობის საერთაშორისო კომპოზიტორების კონკურსი",
			videosamp:"ვიდეო მაგალითები",
			
			learnmore: "გაიგეთ მეტი",
			biography: "ბიოგრაფია",
			manuscripts: "მანუსკრიპტები",
			presse: "პრესა",
			audiosamples: "ვიდეო და აუდიო ნამუშევრები",
			information: "ინფორმაცია",
			manuscriptname: "სახელი",
			manuscriptdescription: "ხელნაწერი, უმთავრესად ძველი",
			concoursename: "კონკურსის სახელი",
			concoursemini: "შეჯიბრება, რომელიც ტარდება",
			concoursedescription: "საუკეთესო მონაწილეების ან საუკეთესო ნამუშევრების გამოვლენის მიზნით",
			register: "რეგისტრაცია",
			sendbtn: "გაგზავნა",
			Stephanede:"ფოტოები Stephane de Bourgies",
			OmerAvarkan:"ლოგო Omer Avarkan",
			mission1:"ქართული მუსიკის პოპულარიზაცია საქართველოში და საზღვრებს გარეთ",
			mission2:"პროფესიონალური მუსიკალური ივენთების ორგანიზება და მხარდაჭერა",
			mission3:"ახალგაზრდა კომპოზიტორებისა და განსაკუთრებული ტალანტის მქონე შემსრულებელების მხარდაჭერა",
			mission4:"ალექსი მაჭავარიანის კომპოზიტორთა საერთაშორისო კონკურსის დაარსება",
			mission5:"საერთაშორისო ახალგაზრდული სიმფონიური ორკესტრის დაარსება ",
			mission6:"მუსიკალური ფესტივალის დაარსება ",
			mission7:"ქართველი კომპოზიტორების დაზიანებული მუსიკალური პარტიტურების აღდგენა",
			mission8:"ძველი ქართული მუსიკალური შედევრების აუდიო და ვიდეო ნიმუშების აღდგენა ",
			mission9:"მივიწყებული ქართული მუსიკალური შედევრების აღორძინება",
			mission10:"უცნობი მუსიკალური შედევრების პრეზენტაცია საქართველოში ",
			mission11:"ქართველი და უცხოელი ახალგაზრდა მუსიკოსების კავშირი მუსიკის საშუალებით ",
			alexp1:"ალექსი მაჭავარიანი საქართველოში, ქალაქ გორში დაიბადა. 1936 წელს დაამთავრა თბილისის კონსერვატორია და დარჩა იქ ასპირანტურაში. სწავლობდა კომპოზიციას პიოტრ რიაზანოვის ხელმძღვანელობით. მოგვიანებით იგი შეუერთდა ფაკულტეტს, გახდა პროფესორი 1963 წელს. მხატვრული კარიერა დაიწყო 1935 წელს. ",
			alexp2:"მაჭავარიანმა გამოუშვა კრიტიკოსების მიერ აღიარებული არაერთი პიესა და ბალეტი, მათ შორის ბალეტი „ოტელო“ (1957), ოპერები „მატ და სინ“ (1945), „დენ მოი როდინი“ (1954), სიმფონია „პიატ მონოლოგოვი“ (1971); დაიმსახურა შოთა რუსთაველის პრემია). მან ასევე დაწერა მუსიკა მრავალ თეატრალურ დადგმაზე, მათ შორის „ბარათაშვილი“ და „ლეგენდა ო ლიუბვი“. მისი ნამუშევრები სხვა ნამუშევრებთან ერთად მოიცავს ასევე ვიოლინოს კონცერტს (1950), შვიდ სიმფონიას (1947–1992) და ექვს სიმებიან კვარტეტს (ბოლო 1993 წელს). ",
			alexp3:"1956-1958 წლებში იყო საქართველოს სახელმწიფო სიმფონიური ორკესტრის სამხატვრო ხელმძღვანელი, 1962 წლიდან 1968 წლამდე ხელმძღვანელობდა საქართველოს კომპოზიტორთა კავშირს. ",
			alexp4:"კომპოზიტორია მისი ვაჟი ვახტანგ მაჭავარიანიც, რომელიც ასევე უძღვება მამის შემოქმედებას. ",
			alexpress1:"1.) ბრწყინვალე მუსიკა, ბრწყინვალე შესრულება... დიდი წარმატებაა... კიდევ ერთხელ მინდა ხაზი გავუსვა ალექსი მაჭავარიანის მუსიკას, რომელიც არის ნიჭიერი და შესანიშნავად ორკესტრირებული.",
			alexpress2:"2.)…“ოტელოს” და ალექსი მაჭავარიანის პარტიტურა განსაცვიფრებელად დრამატული პულსია – თავის მხრივ, მბზინავი, ეკლიანი და ნაზი. ...ეს შექსპირია ელექტროენერგიით.",
			alexpress3:"3.) ა. მაჭავარიანის სავიოლინო კონცერტი მშვენიერია – შეიცავს მთელ ვნებას, პოეზიას და ღრმა სულიერებას… მუსიკის ლირიკულ ხარისხს ემატება ძლიერი ინტელექტუალური მიდგომა – მთლიანობაში, ყველაზე დასამახსოვრებელი ნაწარმოებია, რომელსაც ნებისმიერი მევიოლინე მიიღებს დიდი სიამოვნებას.",
			alexpress4:"4.) ალექსეი დავიდოვიჩ მაჭავარიანი შესანიშნავი ვიოლინოს კონცერტის ავტორი.",
			// conditions: "1) კონკურსში მონაწილეობა შეუძლია ნებისმიერ კომპოზიტორს ორმოცი წლის ასაკამდე, განაცხადების მიღების ბოლო ვადის თარიღის მომენტში. 2) კონკურსი ჩატარდება ონლაინ რეჟიმში, 3) საკონკურსო ნაწარმოებები არ უნდა იყოს  გამოცემული: არ უნდა იყოს გამოცემული კომპაქტ დისკზე ან ნაჩვენები ტელევიზიით, რადიოს საშუალებით ან ინტერნეტით, ამასთანავე არ უნდა იყოს შესრულებული საჯაროდ. 4) კონკურსისთვის შექმნილი ნაწარმოების შექმნის ვადა არ უნდა აღემატებიდეს ორ (2) წელიწადს კონკურსის დაწყებამდე, რადგან ალექსი მაჭავარიანის სახელობის საერთაშორისო კომპოზიტორების კონკურსი ჩატარდება ყოველ ორ (2)  წელიწადში ერთხელ. 5) საკონკურსოდ შექმნილი კომპოზიცია მოწოდებულ უნდა იქნას კონკურსის დაწყებამდე უგვიანესი ორი (2) თვით ადრე. a) ორი თვით ადრე კონკურსის აპლიკაციები არ იქნება მიღებული. b) კონკურსის ვადები გამოცხადებული იქნება ონლაინ ალექსი და ვახტანგ მაჭავარიანის სახელობის საქველმოქმედო ფონდის ვებგვერდზე. www.matchavarianifoundation.ge. c) ინფორმაცია კონკურსის გამოცხადების შესახებ მოცემული იქნება: ქართულ, ინგლისურ, ფრანგულ, გერმანულ და რუსულ ენებზე.",
			//team member biography
			teammemberbiography: " ადამიანის ცხოვრების აღწერა. ბიოგრაფია ლიტერატურისა და ზოგიერთი მედიის (მაგ. კინოს) ერთ-ერთი ჟანრია, რომელსაც ინდივიდუალური ცხოვრების წერილობითი აღწერა უდევს საფუძვლად. ბიოგრაფია ძირითადად დოკუმენტურ წყაროებს ეყრდნობა და გამოგონილი არ არის. კურიკულიმ-ვიტას ან პროფილისგან განსხვავებით ბიოგრაფია კომპლექსურად აღწერს ადამიანის პერსონალურ მახასიათებლებს, რომელიც მისი გამოცდილების ინტიმურ დეტალებსაც ეყრდნობა.",
			alexBiography:"გამოჩენილი ქართველი კომპოზიტორი, საზოგადო მოღვაწე მწერალი და პოეტი ალექსი მაჭავარიანი; სსრკ სახალხო არტისტი, სსრკ სახელმწიფო პრემიების ლაურეატი, შოთა რუსთაველის პრემიის ლაურეატი, მილანის ლა სკალას თეატრთან არსებული «ბრაიდენზეს ხელოვნების გალერეის ოქროს მედლის მფლობელი ბალეტ «ოტელოს მუსიკისთვის, აშშ-ში პაბლო პიკასოს პრემიით დაჯილდოვებული ბალეტ «ვეფხისტყაოსნისთვის კირილეს და მეთოდეს ორდენის, ლენინის ორდენის კიდევ მრავალი ორდენის კავალერი, საქართველოს კომპოზიტორთა კავშირის თავჯდომარე 1962-1973 წლები, სსრკ კომპოზიტორთა კავშირის გამგეობის წევრი 1979-1992 წლები, სსრკ უმაღლესი საბჭოს დეპუტატი 1962-1966 და 1966-1970 წლები, უპარტიო, დაიბადა ქ. გორში 1913 წლის 23 სექტემბერს. პირველ მუსიკალურ განათლებას იგი ღებულობს გორში, ასევე ოჯახში მუზიცირების ტრადიციებზე. ალექსის მამა დავითი, შეძლებული აზნაური, იყო მოყვარული მუსიკოსი და როგორც რეგენტი ხელმძღვანელობდა გორის ოქონის ეკლესიის გუნდს. დედა მარიამი, ძმები ვახტანგი ირაკლი და ალექსი მშვენივრად მღეროდნენ რეგულარულ საოჯახო კონცერტებზე. ალექსი სწავლობდა ფორტეპიანოზე და ვიოლინოზე დაკვრას. დავით მაჭავარიანის ოჯახს ხშირად სტუმრობდნენ საქართველოს კულტურული ელიტის წარმომადგენლები. 1921 წლის გასაბჭოების შედეგად დავით მაჭავარიანი,მოგვიანებით კი მისი უფროსი ვაჟი ვახტანგი წავიდნენ ემიგრაციაში, ჯერ სტამბოლში, შემდეგ კი პარზიში, სადაც იმყოფებოდა ქართული ემიგრაციის ძირითადი ბირთვი. ამის გამო, ალექსი, მისი ძმა ირაკლი და დედა გამოაცხადეს სამშობლოს მტრებად, რაც ალექსისთვის არა მარტო სკოლიდან არა ერთხელ გაგდებით, არამედ დედასთან ერთად დაპატიმრებითაც გათავდა. დაპატიმრებები და კგბ-ს კედლებში წვალება მას არ ასცდა არც გასული საუკუნის 30-ნ და 40-ან წლებში.",
			alexbiography2:"1960 წ. ა.მაჭავარიანი იწყებს მუშაობას ოპერა «ჰამლეტზე შექსპირის მიხედვით და მისივე ლიბრეტოზე. 1967 წ. სრულდება ჰამლეტის კლავირი, ხოლო 1977 წ. პარტიტურა. ოპერა ჰამლეტი დღემდე არ არის დადგმული. გასული საუკუნის სამოციან წლებში, ა.მაჭავარიამის ინიციატივით და მისი ქმედების შედეგად თბილისში აშენდა სახელმწიფო ფილარმონიის დიდი და მცირე საკონცერტო დარბაზები. 2014 წ. ფილარმონიის დიდ დარბაზს მიენიჭა ალექსი მაჭავარიანის სახელი. მისივე ინიციატივით აშენდა ჯერ სოხუმში (სინოპში), შემდეგ კი ბორჯომში (პლატოზე) კომპოზიტორთა შემოქმედების და დასვენების სახლები. იგივე პერიოდში ალექსი მაჭავარიანის ინიციატივით დაფუძნდა ფესტივალი «კავკასიის გაზაფხული. 1964 წ. ა.მაჭავარიანმა შექმნა ნაწარმოები ვაჟა ფშაველას სიტყვებზე, სახელწოდებით «ხუთი მონოლოგი, რომელი ქმნილებისთვისაც იგი დაჯილდოვდა რუსთაველის პრემიით. პრემიერაზე ვოკალირი პარტია შეასრულა რევაზ კაკაბაძემ, ხოლო დირიჟორი იყო იური ტემირკანოვი. 1967 წ. მან შექმნა „ქართული საზეიმო უვერტიურა რომელსაც არა ნაკლები წარმატება ხვდა წილად, ვიდრე მის პირველ უვერტიურას. „ქართული საზეიმო შესრულდა იმავე წელს, ჯ.კახიძის დირიჟორობით. უკვე 2010 წ. გაზეთში „მესენჯერი, სათაურით: „ვახტანგ მაჭავარიანი რუსთაველის სახ. თეატრში“. ინგლისელი კრიტიკოსი რამვოლდ ლიი წერს: „კონცერტის დასკვნით ნაწილში შესრულდა ალექსი მაჭავარიანის „ქართული საზეიმო უვერტიურა..... ეს არის აბსტრაქტული ფორმის, გასული ყოველგვარი ათვლის წერტილის ფარგლებიდან ქმნილება. სავარაუდოდ ეს საზეიმო უვერტიურა არის „განკითხვის დღის გამოცხადება.",
			alexpress1:"1. ბალეტ ოტელოს შესახებ; „ბრწყინვალე მუსიკა, ბრწყინვალე წარმოდგენა. ეს ვახტანგ ჭაბუკიანის, სოლიკო ვირსალაძის და განსაკუთრებით ალექსი მაჭავარიანის დიდი წარმატებაა. ისევ მუსიკაზე მინდა ვთქვა,- ბრწყინვალედ გაორკესტრებული მუსიკა ნიჭიერების გამობრწყინებაა.“დიმიტრი შოსტაკოვიჩი. გაზეთი „ზარია ვოსტოკა 25/03/1958/.",
			alexpress2:"2. „ალექსი მაჭავარიანის ბალეტ ოტელოს პარტიტურას აქვს გამაოგნებელი დრამატიზმის პულსი. ეს არის დაელექტრიზებული შექსპირი. ჰოვარდ ტომპსონი, „ნიუ იორკ ტაიმს 04/05/1964/.",
			alexpress3:"3. „მაჭავარიანის ოტელოს მუსიკა არის კაცობრიობის გრძნობათა ვნებათაღელვის კალეიდოსკოპი. იგი გამოხატავს ექსპრესიას და დინამიკას, ის ნათელია და აღსავსეა პოეზიით, ამავე დროს გამოირჩევა ფერების ბრწყინვალებით.  „ზიუდდოიჩე ცაიტუნგ“ 27/04/1998/.",
			alexpress4:"4. მილანის ლა სკალას თეატრთან არსებული კულტურის საერთაშორისო ცენტრი „ბრაიდენზეს გალერეა ანიჭებს ალექსი მაჭავარიანს ოქროს მედალს ბალეტ ოტელოს მუსიკისთვის და აღნიშნავს; „ეს არის შექსპირის ინტერპრეტაციის ერთ-ერთი უბრწყინვალესი ნიმუში, მუსიკის და ცეკვის ჯადოსნური საშუალებით. „მილანი,ბრაიდენზეს კულტურის ცენტრი, 14/11/1973/.  ხოლო ჟურნალ სოვეტსკაია მუზიკა-ს Nr.3, 1975 წელს გაჟღერდა იგივე ინფორმაცია.",
			alexpress5:"5. „ვერავითარი მაღალი შექება, ვერავითარი ეპითეტები ვერ გამოხატავენ იმ კოლოსალურ ესთეტიკურ ნეტარების, რომელიც მაყურებელმა და მსმენელმა განიცადა ბალეტ „ოტელოსგან. შეიძლება ვადიდოთ ქართველები, რომელთაც შექმნეს ესოდენ კაშკაშა ნაწარმოები, რომელიც სამუდამოდ დარჩება ჩვენს მეხსიერებაში. მაია პლისეცკაია, სსრკ სახალხო არტისტი. გაზეთი „კომუნისტი 25/03/1958/.",
			alexpress6:"6. „ოტელო არაჩვეულებრივი ბალეტია, საინტერესო, მამაცი, მან აღაგზნო გონებანი. მაჭავარიანის მუსიკა გამომსახველია, მრავალგვარი ხასიათებით აღსავსე, ცეკვისთვის მოსახერხებელი. ეჭვი არ მეპარება „ოტელოს ხანგრძლივ და ბედნიერ სცენურ ცხოვრებაში, მან ჩვენ ესოდენ აგვაღელვა გალინა ულანოვა, სსრკ სახალხო არტისტი, გაზეთი „პრავდა 30/03/1958/",
			alexpress7:"7. „ბალეტმა ოტელომ გამოიწვია არნახული ინტერესი ლენინგრადში. წარმოდგენაზე მოვიდა მთელი ქალაქი. თავისი ატმოსფეროთი და დონით ეს იყო ჭეშმარიტად „შალიაპინისეული წარმოდგენაა. ისევე როგორც ჩვენ დღეს გვშურს მათი, ვინც ცოცხლად ისმენდა უკვდავ შალიაპინს, ასევე შეშურდებათ ჩვენი, ვინც გავხდით „ოტელოს მომსწრე.  ტატიანა ვეჩესლოვა, სსრკ სახალხო არტისტი. გაზეთი „ზარია ვოსტოკა 29/03/1960/. Nr.74.",
			alexpress8:"8. „ალექსი მაჭავარიანის ბალეტ ოტელოს მუსიკა- ცნობილი შედევრია. შექსპირის ღირსი, ეს კომპოზიტორის ტრიუმფია. მისი ოპერა „ჰამლეტი კი დასტურია იმისა, რომ კომპოზიტორის თანამშრომლობა შექსპირთან არ არის შემთხვევითი. მაჭავარიანი არ არის შექსპირის ილუსტრატორი, იგი მხატვრული ექვივალენტის შემქმნელია. მიხაილ ვერშინინი, მწერალი, „სოვეტსკაია კულტურა 21/11/1973/.",
			alexpress9:"9. „ალექსი მაჭავარიანის „ვეფხვისტყაოსანს იდეურად ბევრი აქვს საერთო „ტრისტან და იზოლდესთან. მსმენელი მხურვალედ შეხვდა ალექსი მაჭავარიანის მუსიკას. ანა კისელგოფი, „ნიუ იორკ ტაიმს 03/06/1986/.",
			alexpress10:"10. „მრავალფეროვანია ალექსი მაჭავარიანის „ვეფხვისტყაოსნის მუსიკა, თანამედროვე-ქართული აქცენტებით; ეს გიგანტური ნეოკლასიკური მანქანაა, ეგზოტიკური ფერებით.  რენე სირვინ, „ლე ფიგარო 07/01/1988/. პარიზი.",
			alexpress11:"11. „ბრწყინვალეა „ვეფხვისტყაოსანი კიროვის თეატრის დასის შესრულებით. ალექსი მაჭავარიანის მუსიკა ძლიერია, ლირიკული და ცეცხლოვანი. ჟილბერ გურნანდ, პარიზი, „ლე პარიზიენ 11/01/1988/.",
			alexpress12:"12. „გულმხურვალედ ვულოცავ დიდ შემიქმედებით გამარჯვებას ალექსი მაჭავარიანს, დირიჟორ ვახტანგ მაჭავარიანს, მხატვარ მურაზ მურვანიძეს. მათ და კიროვის თეატრის დასმა შექმნეს ამაღელვებელი წარმოდგენა რუსთაველის პოემის „ვეფხვისტყაოსანის მიხედვით.....“ გიორგი ტოვსტონოგოვი, სსრკ სახალხო არტისტი, „ზარია ვოსტოკა 18/04/1985/.",
			alexpress13:"13. „ვეფხვისტყაოსნის პარტიტურა, რომელზედაც დადგმულია ბალეტი .... გამაოგნებელია ყურისთვის, ისევე როგორც დადგმა თვალისთვის. იაკობ სისკინდ, „ციტეზენი ოტავა, 14/06/1986/. კანადა.",
			alexpress14:"14. „ყველაფრის წარმოდგენა შემეძლო, მაგრამ არა ასეთი ტრიუმფისა, რომელიც ბალეტ „ვეფხვისტყაოსანს ხვდა წილად. ეს არის ბრწყინვალებით აღსავსე წარმოდგენა. დიდი ხანია არ განმიცდია მუსიკალური აზროვნების ესოდენ დიდი ძალმოსილება. პარტიტურის სიღრმე აქანდაკებს სახეთა რელიეფებს. ბრწყინვალეა ალექსი მაჭავარიანის მუსიკა, დირიჟორ ვახტანგ მაჭავარიანის ოსტატობა, მხატვარ მურაზ მურვანიძის ფერწერა, ქორეოგრაფ ოლეგ ვინოგრადოვის დადგმა, თეატრის სოლისტების, დასის და ორკესტრის ბრწყინვალება“. კონსტანტინე სერგეევი, სსრკ სახალხო არტისტი, გაზეთი „კომუნისტი, 27/03/1985/.",
			alexpress15:"15. „მაჭავარიანის სავიოლინო კონცერტი მშვენიერია - იგი შეიცავს ემოციას, პოეტურობას, ღრმა შთაგონებას, დამახასიათებელს ქართველი ხალხის ბუნებისა, რამაც ძალზე დიდი შთაბეჭდილება მოახდინა ჩემზე. თავისი ლირიკული თვისებებით მუსიკა ახდენს ძლიერი ინტელექტუალური მიღწევის შთაბეჭდილებას მთლიანობაში. ეს მეტად მნიშვნელოვანი ქმნილებაა, რომელიც სასიამოვნო შეიძლება იყოს მევიოლინესთვის ინტერპრეტაციისთვის“ სერ იეჰუდი მენუჰინი. 1985.",
			alexpress16:"16. ალექსი მაჭავარიანის მეორე სიმფონიაზე ფრანგმა ქორეოგრაფმა ჟოზეფ რუსილიომ შექმნა ბალეტი: „მეფე უნდა მოკვდეს „მაჭავარიანის ულამაზეს მუსიკაზე დადგმული სპექტაკლი არის გრანდიოზული სილამაზის, ისეთი როგორც ანტიკური ტრაგედია.  „ლა მარსელიეზ“ (მარსელელი) 10/08/1979/.",
			alexpress17:"17. „ალექსი მაჭავარიანის მესამე სიმფონია გამორჩეულია მასშტაბების სიდიადით და იდეათა სიღრმით. კომპოზიტორი აზროვნებს გრანდიოზული წარმოსახვებით, ადარებს რა სამყაროს მიწიერთან, კოსმიურს ადამიანურთან. ავტორი გამოდის ფილოსოფიური მოსაზრებიდან, რომლითაც განმსჭვალულია რუსთაველის ი.ჭავჭავაძის და ვაჟა ფშაველას პოეზია.მოსკოვში კონცერტს შთამბეჭდავად უდირიჟორა ვახტანგ მაჭავარიანმა“. ლ.იზმაილოვა, ჟურნალი „სოვეტსკაია მუზიკა Nr.3, 1986.",
			alexpress18:"18. „ლენინგრადის თეატრალური ცხოვრების მოვლენად იქცა ბალეტ „ვეფხვისტყაოსნის“ პრემიერა კიროვის სახ.თეატრის სცენაზე. ა.დავიდოვა, „ლენინგრადსკაია პრავდა 26/03/1985/.",
			alexpress19:"19. „კიროვის თეატრი ბრწყინავს ბობოქარი „ვეფხვისტყაოსნით. ა.მაჭავარიანის გამომსახველი მუსიკა თავისი სიძლიერით, დასარტყამი ინსტრუმენტების ჟღერადობით და რიტმებით, რომელიც გადადის რომანტიული მელოდიკით მათრობელა ოაზისებში და რიტმულად გვაგონებს სტრავინსკის. სტივენ გოდფრი, „გლობ ენდ მაილ აშშ, 20/05/1986/.",
			alexpress20:"20. „ვეფხვისტყაოსანი“ კრემლის თეატრის სცენაზე. „გვანცვიფრებს შემქმნელის- ავტორის აზროვნების სიმდიდრე და სიფაქიზე, რასაც იგი აღწევს მდიდარი პარტიტურის მეშვეობით.... დაუვიწყარ წარმოდგენაში. იური კორევი, ჟურნალ „სოვეტსკაია მუზიკას მთავარი რედაქტორი. 21/12/1988/.",
			alexpress21:"21. „ბალეტი ოტელო, ეს არის ხელოვნების ზეიმი. მიხაილ ცარიოვი, გაზეთი „ზარია ვოსტოკა 1958.",
			alexpress22:"22. „მზად ვარ ბალეტი „ოტელო მივაკუთვნო მუსიკალურ-თეატრალური ხელოვნების მწვერვალს დიმიტრი კაბალევსკი, სსრკ სახალხო არტისტი, ჟურნალი „მუზიკალნაია ჟიზნ Nr.6, 1958.",	
			alexpress23:"23. „ბალეტი ოტელო არის მოვლენა ჩვენს სახელოვნებო ცხოვრებაში. მაჭავარიანის „ოტელო წარმოადგენს ჭეშმარიტად უდიდესი მასშტაბის მხატვრულ მოვლენას. ა.მაჭავარიანის მუსიკის მოსმენისას შევაღწევთ შექსპირის ტრაგედიის გრძნობათა სამყაროში. ასაფ მესერერი, სსრკ სახალხო არტისტი, გაზეთი „ზარია ვოსტოკა“ 29/03/1958/.",	
			alexpress24:"24. „პარიზის „გრანდ ოპერას მთავარი ბალეტმეისტერი ჟორჟ სკიბინი და საფრანგეთის მუსიკალური თეატრების გენერალური დირექტორი ფავრ ლებრე მოჯადოვებულმი დარჩნენ ა.მაჭავარიანის ბალეტ ოტელოს მუსიკით, რის შედეგად „გრანდ ოპერამ პრესით გამოაცხადა, რომ ბალეტი ოტელო შეტანილია სადადგმო გეგმაში. „სოვეტსკაია კულტურა 17/12/1962/.",	
			alexpress25:"25. „სენსაციური წარმატებით მიმდინარეობს ტოკიოში ალექსი მაჭავარიანის ბალეტ „ოტელოს წარმოდგენები. „სოვეტსკაია მუზიკა Nr.2, 1962.",	
			alexpress26:"26. „მოსკოვი აღაფრთოვანა და უდიდესი ინტერესი გამოიწვია ა.მაჭავარიანის ბალეტმა „ოტელომ. ე.სამოილოვი.სსრკ სახალხო არტისტი, „მოსკოვსკაია პრავდა 27/03/1958/.",	
			alexpress27:"27. „უდიდეს წარმატებას მიაღწია კომპოზიტორმა მაჭავარიანმა, იგი ბრწყინვალედ გრძნობს შექსპირს, მისი მუსიკა ბრწყინვალედ ასახავს ჩვენი გიგანტის რომანტიზმს. გამოჩენილი ინგლისელი ბალერინა ბერილ გრეი, გაზეთი „ზარია ვოსტოკა 27/12/1957/.",	
			alexpress28:"28. „თამამად შეიძლება ითქვას, რომ ბალეტი „ოტელო არის უდიდესი მოვლენა თანამედროვე თეატრალურ ხელოვნებაში. ეს არის უზადო გემოვნების და ოსტატობის წარმოდგენა, ყველა კომპონენტის ჰარმონიით, მუსიკა, ცეკვა, მხატვრობა, მთლიანობაში მიემართებიან მთავარისკენ - შექსპირისკენ. მაჭავარიანის მუსიკა ფერადოვანია, ემოციური და ყოველი სახე გაჯერებულია თავისი ზუსტი და ლაკონური თვისებებით. ეს საბჭოთა ხელოვნების გამარჯვებაა“. ს.გოლოვკინა, სსრკ სახალხო არტისტი, „მოსკოვსკაია პრავდა 29/03/1958/.",	
			alexpress29:"29. „ყოველგვარი გაზვიადების გარეშე ვამტკიცებთ, რომ ა.მაჭავარიანმა „ოტელოს სახით შექმნა საბალეტო-სიმფონიური მუსიკის ერთ-ერთი დიადი ნაწარმოები, შემოქმედებითად ერთ-ერთი უმნიშვნელოვანესი მოვლენა თანამედროვე მუსიკალურ დრამატურგიაში. მუსიკაში სახვითი ხელწერის ოსტატობა უიშვიათესი ნიჭია, რომელიც უმაღლეს განზომილებაშია დამახასიათებელი ა.მაჭავარიანისთვის“. ვ.გოროდინსკი, მუსიკათმცოდნე, მოსკოვის ფილარმონიის დირექტორი, ჟურნალი „თეატრი Nr.6, მოსკოვი, 1958.",	
			alexpress30:"30. „ოტელოს მუსიკა დაწერა საბჭოთა კავშირის ერთ-ერთმა უდიდესმა კომპოზიტორმა ა.მაჭავარიანმა. განსაკუთრებით შეიძლება საუბარი მისი მუსიკის დრამატურგიაზე, რომელიც ღრმად ემოციურია, აღსავსე დრამატიზმით. მაჭავარიანის მუსიკამ განაპირობა ამ დიდი ამოცანის ამოხსნა  ნ.ვოლკოვი, მუსიკატმცოდნე, მწერალი, დ.შოსტაკოვჩზე ცნობილი წიგნის ავტორი, გაზეთი „იზვესტია Nr.74. 27/03/1958//.",			
		}
	}


	// define language via window hash
	const langHash = window.location.hash;
	if (langHash) {
		dataReload.forEach(e => {
			if (langHash === '#geo') {
				e.textContent = language.geo[e.id];
				document.querySelector('.btn--geo').classList.add('btn--active');
				document.querySelector('.btn--eng').classList.remove('btn--active');
			} else {
				e.textContent = language.eng[e.id];
				document.querySelector('.btn--eng').classList.add('btn--active');
				document.querySelector('.btn--geo').classList.remove('btn--active');
			}
		});
	} else {
		window.location.hash = "#eng";
		window.location.reload();
	}
	langChanged.forEach(e => {
		e.onclick = () => {
			let newUrl = '';
			if (e.innerText === 'ENG') {
				newUrl = window.location.href.replace('#geo', '#eng');
			} else {
				newUrl = window.location.href.replace('#eng', '#geo');
			}
			window.location.href = newUrl;
			window.location.reload();
		}
	})

};

document.addEventListener("DOMContentLoaded", () => clickedReload());



// Scrolling



$('.js--scroll-to-biography').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-biography').offset().top}, 1000); 
	});	

$('.js--scroll-to-photos').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-photos').offset().top}, 1000); 
	});	
	

$('.js--scroll-to-manuscripts').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-manuscripts').offset().top}, 1000); 
	});	

$('.js--scroll-to-presse').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-presse').offset().top}, 1000); 
	});	
			
$('.js--scroll-to-audiosamples').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-audiosamples').offset().top}, 1000); 
	});	

$('.js--scroll-to-information').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-information').offset().top}, 1000); 
	});	

$('.js--scroll-to-team').click(function () {
	$('html, body').animate({scrollTop: $('.js--section-team').offset().top}, 1000); 
	});		



// Carousel

const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');

// number of images

const numberOfImages = document.querySelectorAll('.carousel__images img').length;

//tells us currently which image are we on
let imageIndex = 1;

let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'previous'){
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 248;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 248;
            }
        }

        carouselImages.style.transform = `translateX(${translateX}px)`;
    });
});
	

