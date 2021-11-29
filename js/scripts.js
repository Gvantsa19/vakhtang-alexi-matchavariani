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
			// conditions:"1) The competition is open to any composer under the age of 40 by the application deadline. 2) The competition will be held online. 3) Competition works should not have been published, nor published on a compact disc,shown on television, radio, Internet or performed in public.4) The date of creation of a work for the competition should not exceed two (2) years beforethe start of the competition, as Alexi Matchavariani’s International Composers'Competition will be held every two (2) years. 5) The composition created for the competition must be submitted no later than two (2) months before the start of the competition. a) Applications for the competition will not be accepted earlier than two months before the start of the competition. b) The competition dates will be announced online on the website of the Alexi and Vakhtang Matchavariani Charity Foundation. www.matchavarianifoundation.ge c) Information about the announcement of the competition will be provided in: Georgian,English, French, German and Russian languages.",
			//team member biography
			teammemberbiography: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality"

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
			// conditions: "1) კონკურსში მონაწილეობა შეუძლია ნებისმიერ კომპოზიტორს ორმოცი წლის ასაკამდე, განაცხადების მიღების ბოლო ვადის თარიღის მომენტში. 2) კონკურსი ჩატარდება ონლაინ რეჟიმში, 3) საკონკურსო ნაწარმოებები არ უნდა იყოს  გამოცემული: არ უნდა იყოს გამოცემული კომპაქტ დისკზე ან ნაჩვენები ტელევიზიით, რადიოს საშუალებით ან ინტერნეტით, ამასთანავე არ უნდა იყოს შესრულებული საჯაროდ. 4) კონკურსისთვის შექმნილი ნაწარმოების შექმნის ვადა არ უნდა აღემატებიდეს ორ (2) წელიწადს კონკურსის დაწყებამდე, რადგან ალექსი მაჭავარიანის სახელობის საერთაშორისო კომპოზიტორების კონკურსი ჩატარდება ყოველ ორ (2)  წელიწადში ერთხელ. 5) საკონკურსოდ შექმნილი კომპოზიცია მოწოდებულ უნდა იქნას კონკურსის დაწყებამდე უგვიანესი ორი (2) თვით ადრე. a) ორი თვით ადრე კონკურსის აპლიკაციები არ იქნება მიღებული. b) კონკურსის ვადები გამოცხადებული იქნება ონლაინ ალექსი და ვახტანგ მაჭავარიანის სახელობის საქველმოქმედო ფონდის ვებგვერდზე. www.matchavarianifoundation.ge. c) ინფორმაცია კონკურსის გამოცხადების შესახებ მოცემული იქნება: ქართულ, ინგლისურ, ფრანგულ, გერმანულ და რუსულ ენებზე.",
			//team member biography
			teammemberbiography: " ადამიანის ცხოვრების აღწერა. ბიოგრაფია ლიტერატურისა და ზოგიერთი მედიის (მაგ. კინოს) ერთ-ერთი ჟანრია, რომელსაც ინდივიდუალური ცხოვრების წერილობითი აღწერა უდევს საფუძვლად. ბიოგრაფია ძირითადად დოკუმენტურ წყაროებს ეყრდნობა და გამოგონილი არ არის. კურიკულიმ-ვიტას ან პროფილისგან განსხვავებით ბიოგრაფია კომპლექსურად აღწერს ადამიანის პერსონალურ მახასიათებლებს, რომელიც მისი გამოცდილების ინტიმურ დეტალებსაც ეყრდნობა."
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
	

