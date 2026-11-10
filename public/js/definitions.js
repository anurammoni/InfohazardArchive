const definitions = {
 "competitiveness-hazard": {
        "name": "Competitiveness Hazard",
        "definition": "There is a risk that, by obtaining information, some competitor of ours will become stronger, thereby weakening our competitive position."
    },

  "norm-hazard": {
    "name": "Norm Hazard",
    "definition": "Some social norms depend on a coordination of beliefs or expectations among many subjects; and a risk is posed by information that could disrupt these expectations for the worse."
  },

  "ideological-hazard": {
    "name": "Ideological Hazard",
    "definition": "An idea might, by entering into an ecology populated by other ideas, interact in ways which, in the context of extant institutional and social structures, produce a harmful outcome, even in the absence of any intention to harm."
  },

  "distraction-and-temptation-hazards": {
    "name": "Distraction and Temptation Hazards",
    "definition": "Information can harm us by distracting us or presenting us with temptation."
  },

  "role-model-hazard": {
    "name": "Role Model Hazard",
    "definition": "We can be corrupted and deformed by exposure to bad role models."
  },

  "biasing-hazard": {
    "name": "Biasing Hazard",
    "definition": "When we are biased, we can be led further away from the truth by exposure to information that triggers or amplifies our biases."
  },

  "de-biasing-hazard": {
    "name": "De-biasing Hazard",
    "definition": "When our biases have individual or social benefits, harm could result from information that erodes these biases."
  },

  "neuropsychological-hazard": {
    "name": "Neuropsychological Hazard",
    "definition": "Information might have negative effects on our psyches because of the particular ways in which our brains are structured, effects that would not arise in more idealized cognitive architectures."
  },

  "information-burying-hazard": {
    "name": "Information-Burying Hazard",
    "definition": "Irrelevant information can make relevant information harder to find, thereby increasing search costs for agents with limited computational resources."
  },

  "psychological-reaction-hazard": {
    "name": "Psychological Reaction Hazard",
    "definition": "Information can reduce well-being by causing sadness, disappointment, or some other psychological effect in the receiver."
  },

  "belief-constituted-value-hazard": {
    "name": "Belief-Constituted Value Hazard",
    "definition": "If some component of well-being depends constitutively on epistemic or attentional states, then information that alters those states might thereby directly impact well-being."
  },
};

const subDefinitions = {
  "enemy-hazard": {
    "name": "Enemy Hazard",
    "definition": "By obtaining information our enemy or potential enemy becomes stronger and this increases the threat he poses to us."
  },
  "intellectual-property-hazard": {
    "name": "Intellectual Property Hazard",
    "definition": "A faces the risk that some other firm B will obtain A's intellectual property, thereby weakening A's competitive position."
  },
  "commitment-hazard": {
    "name": "Commitment Hazard",
    "definition": "There is a risk that the obtainment of some information will weaken one's ability credibly to commit to some course of action."
  },
  "knowing-too-much-hazard": {
    "name": "Knowing-too-much Hazard",
    "definition": "Our possessing some information makes us a potential target or object of dislike."
  },

  "information-asymmetry-hazard": {
    "name": "Information Asymmetry Hazard",
    "definition": "When one party to a transaction has the potential to gain information that the others lack, a market failure can result."
  },

  "unveiling-hazard": {
    "name": "Unveiling Hazard",
    "definition": "The functioning of some markets, and the support for some social policies, depends on the existence of a shared 'veil of ignorance'; and the lifting of which veil can undermine those markets and policies."
  },

  "recognition-hazard": {
    "name": "Recognition Hazard",
    "definition": "Some social fiction depends on some shared knowledge not becoming common knowledge or not being publicly acknowledged; but public release of information could ruin the pretense."
  },

  "disappointment-hazard": {
    "name": "Disappointment Hazard",
    "definition": "Our emotional well-being can be adversely affected by the receipt of bad news."
  },

  "spoiler-hazard": {
    "name": "Spoiler Hazard",
    "definition": "Fun that depends on ignorance and suspense is at risk of being destroyed by premature disclosure of truth."
  },

  "mindset-hazard": {
    "name": "Mindset Hazard",
    "definition": "Our basic attitude or mindset might change in undesirable ways as a consequence of exposure to information of certain kinds."
  },
};



document.addEventListener("DOMContentLoaded", function () {
 
function filltext (q) {
    for (let i = 0; i < Object.keys(q).length; i++) {
   
    if (document.getElementById(Object.keys(q)[i]) != null) {
        document.getElementById(Object.keys(q)[i]).innerHTML = q[Object.keys(q)[i]].name + '<div class="def">' + q[Object.keys(q)[i]].definition + '</div>';
    }
}
};

filltext(definitions);
filltext(subDefinitions);

//     for (let i = 0; i < Object.keys(definitions).length; i++) {
//     document.getElementById(Object.keys(definitions)[i]).innerHTML = definitions[Object.keys(definitions)[i]].name + '<div class="def">' + definitions[Object.keys(definitions)[i]].definition + '</div>';
// }

// for (let i = 0; i < Object.keys(subDefinitions).length; i++) {
//     console.log(Object.keys(subDefinitions)[i]);
//     document.getElementById(Object.keys(subDefinitions)[i]).innerHTML = subDefinitions[Object.keys(subDefinitions)[i]].name + '<div class="def">' + subDefinitions[Object.keys(subDefinitions)[i]].definition + '</div>';
// }

   // document.getElementsByClassName("type")[0].innerHTML = definitions["competitiveness-hazard"].name + '<div class="def">' + definitions["competitiveness-hazard"].definition + '</div>';
    // document.getElementById("enemy-hazard").innerHTML = subDefinitions["enemy-hazard"].name + '<div class="def">' + subDefinitions["enemy-hazard"].definition + '</div>';
    // document.getElementById("intellectual-property-hazard").innerHTML = subDefinitions["intellectual-property-hazard"].name + '<div class="def">' + subDefinitions["intellectual-property-hazard"].definition + '</div>';
    // document.getElementById("commitment-hazard").innerHTML = subDefinitions["commitment-hazard"].name + '<div class="def">' + subDefinitions["commitment-hazard"].definition + '</div>';
    // document.getElementById("knowing-too-much-hazard").innerHTML = subDefinitions["knowing-too-much-hazard"].name + '<div class="def">' + subDefinitions["knowing-too-much-hazard"].definition + '</div>';

});

