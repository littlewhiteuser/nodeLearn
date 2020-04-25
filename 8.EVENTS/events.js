const dogSwitch = (breed) => ({
    "border": "Border Collies are good boys and girls.",
    "pitbull": "Pit Bulls are good boys and girls.",
    "german": "German Shepherds are good boys and girls.",
})[breed] || 'Im the default';


console.log(dogSwitch("pitbull"))