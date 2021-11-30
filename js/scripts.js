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
			alexBiography:"1960 წ. ა.მაჭავარიანი იწყებს მუშაობას ოპერა «ჰამლეტზე შექსპირის მიხედვით და მისივე ლიბრეტოზე. 1967 წ. სრულდება ჰამლეტის კლავირი, ხოლო 1977 წ. პარტიტურა. ოპერა ჰამლეტი დღემდე არ არის დადგმული. გასული საუკუნის სამოციან წლებში, ა.მაჭავარიამის ინიციატივით და მისი ქმედების შედეგად თბილისში აშენდა სახელმწიფო ფილარმონიის დიდი და მცირე საკონცერტო დარბაზები. 2014 წ. ფილარმონიის დიდ  დარბაზს მიენიჭა ალექსი მაჭავარიანის სახელი. მისივე ინიციატივით აშენდა ჯერ სოხუმში (სინოპში), შემდეგ კი ბორჯომში (პლატოზე) კომპოზიტორთა შემოქმედების და დასვენების სახლები. იგივე პერიოდში ალექსი მაჭავარიანის ინიციატივით დაფუძნდა ფესტივალი «კავკასიის გაზაფხული. 1964 წ. ა.მაჭავარიანმა შექმნა ნაწარმოები ვაჟა ფშაველას სიტყვებზე, სახელწოდებით «ხუთი მონოლოგი&quot;, რომელი ქმნილებისთვისაც იგი დაჯილდოვდა რუსთაველის პრემიით. პრემიერაზე ვოკალირი პარტია შეასრულა რევაზ კაკაბაძემ, ხოლო დირიჟორი იყო იური ტემირკანოვი.",
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
	

