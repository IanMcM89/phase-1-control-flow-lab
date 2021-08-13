function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  const isNYC = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return isNYC;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case tip = 'generous':
      return 'Thank you so much.';
    case tip = 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}