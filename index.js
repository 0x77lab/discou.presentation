let synth = new Tone.MembraneSynth().toMaster();
window.app = new fullpage('.app', {
  sectionsColor: ['black', 'black'],
  controlArrows: true,
  scrollBar: true,
  scrollHorizontally: true,
  navigation: true,
  v2compatible: true,
  slidesNavigation: true,
  controlArrows: true,
  
  onLeave: () => {
    synth.triggerAttackRelease('C2', '4n');
  }
});


document.onload = () => {
  document.documentElement.requestFullscreen();
}