const eventLogger = (event) => {
  const {currentTarget, eventPhase} = event;
  // const currentTarget = event.currentTarget;
  // const eventPhase = event.eventPhase;
  const {tagName, id, className} = currentTarget;
  // const tagName = currentTarget.tagName;
  // const id = currentTarget.id;
  // const className = currentTarget.className;

  let eventPhaseText = '';
  switch (eventPhase) {
    case 0:
      eventPhaseText = 'None';
      break;
    case 1:
      eventPhaseText = 'Capture';
      break;
    case 2:
      eventPhaseText = 'At Target';
      break;
    case 3:
      eventPhaseText = 'Bubble';
      break;
  }
// eventPhase
    // 0. None
    // 1. Capture
    // 2. At Target
    // 3. Bubble
  
  if (currentTarget.matches('.doggo')) {
    event.stopPropagation();
  }

  if (currentTarget.matches('body')) {
    event.stopPropagation();
  }

  console.log(`Phase: ${eventPhase} - ${eventPhaseText} Node: ${tagName}.${className}`);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('*').forEach((node) => {
    node.addEventListener('click', eventLogger, true);
    // when the value is true, it starts "Capture"
    node.addEventListener('click', eventLogger);
    // when there is no value to the eventListener,
    // it starts "Bubble"
  })
})