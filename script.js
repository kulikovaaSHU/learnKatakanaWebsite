// Set variables
let settingsText = document.getElementById('settings-text'),
	turnOnHiraganaButton = document.getElementById('turn-on-hiragana-button'),
	card1Button = document.getElementById('card1-button'),
	card2Button = document.getElementById('card2-button'),
	card3Button = document.getElementById('card3-button'),
	card4Button = document.getElementById('card4-button'),
	card5Button = document.getElementById('card5-button'),
	card6Button = document.getElementById('card6-button'),
	refreshFlashcardsButton = document.getElementById('refresh-flashcards-button');

// Katakana array
let katakana = ["ア", "イ", "ウ", "エ", "オ",
				"カ", "キ", "ク", "ケ","コ", 
				"ガ", "ギ", "グ", "ゲ", "ゴ", 
				"サ", "シ", "ス", "セ", "ソ", 
 				"ザ", "ジ", "ズ", "ゼ", "ゾ", 
 				"タ", "チ", "ツ", "テ", "ト", 
 				"ダ", "ヂ", "ヅ", "デ", "ド", 
 				"ナ", "ニ", "ヌ", "ネ","ノ", 
 				"ハ", "ヒ", "フ", "ヘ", "ホ", 
 				"バ", "ビ", "ブ", "ベ", "ボ", 
 				"パ", "ピ", "プ", "ペ", "ポ", 
 				"マ", "ミ", "ム", "メ", "モ", 
 				"ヤ", "ユ", "ヨ", 
 				"ラ", "リ", "ル", "レ", "ロ", 
 				"ワ", "ヲ", "ン"];

// Roomaji array
let roomaji = ["a","i","u","e","o",
			"ka","ki","ku","ke","ko",
			"ga","gi","gu","ge","go",
			"sa","shi","su","se","so",
			"za","ji","zu","ze","zo",
			"ta","chi","tsu","te","to",
			"da","ji","du","de","do",
			"na","ni","nu","ne","no",
			"ha","hi","fu","he","ho",
			"ba","bi","bu","be","bo",
			"pa","pi","pu","pe","po",
			"ma","mi","mu","me","mo",
			"yo","yu","yo",
			"ra","ri","ru","re","ro",
			"wa","wo","n"];

let hiragana = ["あ","い","う","え","お",
			"か","き","く","け","こ",
			"が","ぎ","ぐ","げ","ご",
			"さ","し","す","せ","そ",
			"ざ","じ","ず","ぜ","ぞ",
			"た","ち","つ","て","と",
			"だ","ぢ","づ","で","ど",
			"な","に","ぬ","ね","の",
			"は","ひ","ふ","へ","ほ",
			"ば","び","ぶ","べ","ぼ",
			"ぱ","ぴ","ぷ","ぺ","ぽ",
			"ま","み","む","め","も",
			"や","ゆ","よ",
			"ら","り","る","れ","ろ",
			"わ","を","ん"];

// Declare card holders
let card1Katakana = "-",
	card2Katakana = "-",
	card3Katakana = "-",
	card4Katakana = "-",
	card5Katakana = "-",
	card6Katakana = "-",
	card1Roomaji = "-",
	card2Roomaji = "-",
	card3Roomaji = "-",
	card4Roomaji = "-",
	card5Roomaji = "-",
	card6Roomaji = "-",
	card1Hiragana = "-",
	card2Hiragana = "-",
	card3Hiragana = "-",
	card4Hiragana = "-",
	card5Hiragana = "-",
	card6Hiragana = "-";

let hiraganaMode = false;

// Function to Generate Flashcards
function generateFlashcards(){
	if(!hiraganaMode){
		let currentPick = randomPick();
		card1Button.innerText = katakana[currentPick];
		card1Katakana = katakana[currentPick];
		card1Roomaji = roomaji[currentPick];
		currentPick = randomPick();
		card2Button.innerText = katakana[currentPick];
		card2Katakana = katakana[currentPick];
		card2Roomaji = roomaji[currentPick];
		currentPick = randomPick();
		card3Button.innerText = katakana[currentPick];
		card3Katakana = katakana[currentPick];
		card3Roomaji = roomaji[currentPick];
		currentPick = randomPick();
		card4Button.innerText = katakana[currentPick];
		card4Katakana = katakana[currentPick];
		card4Roomaji = roomaji[currentPick];
		currentPick = randomPick();
		card5Button.innerText = katakana[currentPick];
		card5Katakana = katakana[currentPick];
		card5Roomaji = roomaji[currentPick];
		currentPick = randomPick();
		card6Button.innerText = katakana[currentPick];
		card6Katakana = katakana[currentPick];
		card6Roomaji = roomaji[currentPick];
	}
	else {
		let currentPick = randomPick();
		card1Button.innerText = katakana[currentPick];
		card1Katakana = katakana[currentPick];
		card1Hiragana = hiragana[currentPick];
		currentPick = randomPick();
		card2Button.innerText = katakana[currentPick];
		card2Katakana = katakana[currentPick];
		card2Hiragana = hiragana[currentPick];
		currentPick = randomPick();
		card3Button.innerText = katakana[currentPick];
		card3Katakana = katakana[currentPick];
		card3Hiragana = hiragana[currentPick];
		currentPick = randomPick();
		card4Button.innerText = katakana[currentPick];
		card4Katakana = katakana[currentPick];
		card4Hiragana = hiragana[currentPick];
		currentPick = randomPick();
		card5Button.innerText = katakana[currentPick];
		card5Katakana = katakana[currentPick];
		card5Hiragana = hiragana[currentPick];
		currentPick = randomPick();
		card6Button.innerText = katakana[currentPick];
		card6Katakana = katakana[currentPick];
		card6Hiragana = hiragana[currentPick];
	}
}

// Event Listeners for Flashcards
card1Button.addEventListener('mouseover', function(){
	if(hiraganaMode)
		card1Button.innerText = card1Hiragana;
	else
		card1Button.innerText = card1Roomaji;
});
card1Button.addEventListener('mouseout', function(){
	card1Button.innerText = card1Katakana;
});

card2Button.addEventListener('mouseover', function(){
	if(hiraganaMode)
		card2Button.innerText = card2Hiragana;
	else
		card2Button.innerText = card2Roomaji;
});
card2Button.addEventListener('mouseout', function(){
	card2Button.innerText = card2Katakana;
});

card3Button.addEventListener('mouseover', function(){
	if(hiraganaMode)
		card3Button.innerText = card3Hiragana;
	else
		card3Button.innerText = card3Roomaji;
});
card3Button.addEventListener('mouseout', function(){
	card3Button.innerText = card3Katakana;
});

card4Button.addEventListener('mouseover', function(){
	if(hiraganaMode)
		card4Button.innerText = card4Hiragana;
	else
		card4Button.innerText = card4Roomaji;
});
card4Button.addEventListener('mouseout', function(){
	card4Button.innerText = card4Katakana;
});

card5Button.addEventListener('mouseover', function(){
	if(hiraganaMode)
		card5Button.innerText = card5Hiragana;
	else
		card5Button.innerText = card5Roomaji;
});
card5Button.addEventListener('mouseout', function(){
	card5Button.innerText = card5Katakana;
});

card6Button.addEventListener('mouseover', function(){
	if(hiraganaMode)
		card6Button.innerText = card6Hiragana;
	else
		card6Button.innerText = card6Roomaji;
});
card6Button.addEventListener('mouseout', function(){
	card6Button.innerText = card6Katakana;
});

refreshFlashcardsButton.onclick = generateFlashcards;

turnOnHiraganaButton.onclick = switchToHiragana;

// Random Katakana
function randomPick(){
	return Math.floor(Math.random() * (katakana.length -1));
}

function switchToHiragana(){
	if(!hiraganaMode){
		hiraganaMode = true;
		settingsText.innerText = "Settings: Set to Katakana and Hiragana.";
		turnOnHiraganaButton.innerText = "Use Roomaji";
	}
	else{
		hiraganaMode = false;
		settingsText.innerText = "Settings: Set to Katakana and Roomaji.";
		turnOnHiraganaButton.innerText = "Use Hiragana";
	}
	generateFlashcards();
}

// Runs generateFlashcards function
generateFlashcards();