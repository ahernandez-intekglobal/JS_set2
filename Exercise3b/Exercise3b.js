'use strict'
// From a reasonably sized text, have a user defined string be replaced by that same string with a hashtag. That hashtag should be a link for a twitter search as well. 
// example
//  String: yolo
//      … should never use #yolo for any reason... 
let originalText = `Winston's diaphragm was constricted. He could never
see the face of Goldstein without a painful mixture of emotions. It was a lean Jewish face, with a great fuzzy
aureole of
white hair and a small goatee beard—a clever face, and yet
somehow inherently despicable, with a kind of senile silliness in the long thin nose, near the end of which a
pair
of spectacles was perched. It resembled the face of a sheep,
and the voice, too, had a sheep-like quality. Goldstein was
delivering his usual venomous attack upon the doctrines
of the Party—an attack so exaggerated and perverse that a
child should have been able to see through it, and yet just
plausible enough to fill one with an alarmed feeling that
other people, less level-headed than oneself, might be taken
in by it. He was abusing Big Brother, he was denouncing
the dictatorship of the Party, he was demanding the immediate conclusion of peace with Eurasia, he was
advocating
freedom of speech, freedom of the Press, freedom of assembly, freedom of thought, he was crying hysterically
that
the revolution had been betrayed—and all this in rapid
polysyllabic speech which was a sort of parody of the habitual style of the orators of the Party, and even
contained
Newspeak words: more Newspeak words, indeed, than any
Party member would normally use in real life. And all the
while, lest one should be in any doubt as to the reality which
Goldstein's specious claptrap covered, behind his head on
the telescreen there marched the endless columns of the
Eurasian army—row after row of solid-looking men with
expressionless Asiatic faces, who swam up to the surface
of the screen and vanished, to be replaced by others exactly similar. The dull rhythmic tramp of the soldiers'
boots
formed the background to Goldstein's bleating voice.`

function replaceWord(event){
    let inputElem = document.getElementById("replaceInput");
    let paragElem = document.getElementById("paragraph");
    let word = inputElem.value;
    console.log(word);

    if(/^[A-Za-z]+$/.test(word))
        paragElem.innerHTML = originalText.replace(word, `<a href="https://twitter.com/search?q=%23${word}" target="_blank">#${word}</a>`);
    else
        alert("not valid word")
}