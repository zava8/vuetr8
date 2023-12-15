// (अ)|(क)|(ज)|(ट)|(ड)|(त)|(द)|(न)|(प)|(ब)|(म)|(य)|(र)|(ल)|(व)|(स)|(ह)
//(?1অ)(?2ক)(?3জ)(?4ট)(?5ড)(?6ত)(?7দ)(?8ন)(?9প)(?10ব)(?11ম)(?12য)(?13র)(?14ল)(?15v)(?16স)(?17হ)

//(?1A)(?2k)(?3z)(?4t)(?5d)(?6T)(?7D)(?8n)(?9p)(?10b)
// (?11m)(?12y)(?13r)(?14l)(?15v)(?16s)(?17H)
//(?1)(?2)(?3)(?4)(?5)(?6)(?7)(?8)(?9)(?10)(?11)(?12)(?13)(?14)(?15)(?16)(?17)
// (?18)(?19)
// ()|()|()|()|()|()|()|()|()|
// (?20)(?21)(?22)(?23)(?24)(?25)(?26)(?27)(?28)(?29)

const i_to_u8hin_dict = { I : 'i', O : 'o', E : 'e', U : 'u',
	A : 'अ', 	k : 'क', K : 'क', z : 'ज', 	j : 'ज', 	Z : 'ज', 	J : 'ज',
	t : 'ट', 	d : 'ड', 	T : 'त', 	D : 'द', 	n : 'न', N : 'न', p : 'प', P : 'प',
	b : 'ब', B : 'ब', m : 'म', M : 'म',  y : 'य', 	Y : 'य', r : 'र', R : 'र',
 	l : 'ल', 	L : 'ल', 	v : 'व', 	V : 'व', w : 'व', 	W : 'व',	S : 'स', 	s : 'स', 	H : 'ह',	
};
var i_to_u8hin = function (input) {
  const inputLength = input.length; // alert(inputLength);
  let indeks = 0; let output = ''; let curr_char = ''; let nekst_char = '';
  curr_char = input[indeks];  
  while (indeks < inputLength) {	
	if(curr_char in i_to_u8hin_dict) {output += i_to_u8hin_dict[curr_char];}
	else {output += curr_char;}
    indeks++ ;
	curr_char = input[indeks];
  }
  return output;
}
module.exports = i_to_u8hin
