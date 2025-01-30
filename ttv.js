let speech = new SpeechSynthesisUtterance()
let convert = document.getElementById("convert")
let text = document.getElementById("text")

let voices =[]
let voiceSelect = document.getElementById("voice")
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name , i)))
}
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})

convert.addEventListener("click",()=>{
    speech.text = text.value
    window.speechSynthesis.speak(speech)
})
