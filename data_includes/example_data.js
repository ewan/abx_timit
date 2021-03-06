/*
Simple Ibex ABX experiment
*/

function modifyRunningOrder(ro) {
    ro[97].push(new DynamicElement(
                           "Message",
                            { html: "<p>Vous pouvez prendre une pause.</p>", 
                             hideProgressBar: 'true',
                             continueMessage: "Veuillez cliquer ici pour continuer."},
                             true
                             ));
    ro[153].push(new DynamicElement(
                           "Message",
                            { html: "<p>Vous pouvez prendre une pause.</p>", 
                             hideProgressBar: 'true',
                             continueMessage: "Veuillez cliquer ici pour continuer."},
                             true
                             ));
    ro[213].push(new DynamicElement(
                           "Message",
                            { html: "<p>Vous pouvez prendre une pause.</p>", 
                             hideProgressBar: 'true',
                             continueMessage: "Veuillez cliquer ici pour continuer."},
                             true
                             ));

    return ro;
}

var shuffleSequence = seq("intro", "explanation", "start_practice", 

"practice_t00000027525", "practice_t00000018860", "practice_t00000019593", "practice_t00000008895", "practice_t00000103879", "practice_t00000008454", "practice_t00000009033", "practice_t00000074757",
                           "end_practice",
                          sepWith("sep", seq(   randomize(startsWith("t")))));
var practiceItemTypes = ["practice_t00000027525", "practice_t00000018860", "practice_t00000019593", "practice_t00000008895", "practice_t00000103879", "practice_t00000008454", "practice_t00000009033", "practice_t00000074757"];
var practiceMessage = "Phase d'entraînement";
var centerItems = true;

var defaults = [
  "AcceptabilityJudgment", {
    q: 'Le troisième son était plutôt comme le premier ou le deuxième ?',
    as: [["f", "1er"], ["j", "2e"]],
    presentAsScale: true,
    hasCorrect: false,
    randomOrder: false,
    timeout: 4000,
    instructions: "Appuyez sur F pour indiquer le premier et sur J pour indiquer le deuxième." //,
    // leftComment: "(Bad)",
    // rightComment: "(Good)",
    //only two audio options available so far
    //audioMessage: { html: "<u>Click here to play audio</u>" },
    //audioTrigger: "click"
  } //do not change this
  //click, we do have another option at this point of time
];

var items = [

  // Change the transfer to the number of milliseconds you want in between questions
  // and change your normalMessage according to what you want the client
  // to see while this break
  ["sep", "Separator", {
    transfer: 500,
    normalMessage: "Veuillez attendre le prochain item.",
    errorMessage: "Temps de réponse maximal dépassé."
  }],

  ["intro", "Form",
    {html: { include: "form.html" }, hideProgressBar: 'true',
      continueMessage: "Veuillez cliquer ici pour continuer."}
  ],
  

  ["explanation", "Message",
    {html: { include: "explanation.html" }, hideProgressBar: 'true',
      continueMessage: "Veuillez cliquer ici pour continuer."}
  ],
  
  ["start_practice", "Message",
    {html: { include: "practice_intro.html" }, hideProgressBar: 'true',
      continueMessage: "Veuillez cliquer ici pour continuer."}
  ],
["practice_t00000027525", "AcceptabilityJudgment", {s: {audio: "practice_t00000027525.mp3"}, hideProgressBar: 'true'}],
["practice_t00000018860", "AcceptabilityJudgment", {s: {audio: "practice_t00000018860.mp3"}, hideProgressBar: 'true'}],
["practice_t00000019593", "AcceptabilityJudgment", {s: {audio: "practice_t00000019593.mp3"}, hideProgressBar: 'true'}],
["practice_t00000008895", "AcceptabilityJudgment", {s: {audio: "practice_t00000008895.mp3"}, hideProgressBar: 'true'}],
["practice_t00000103879", "AcceptabilityJudgment", {s: {audio: "practice_t00000103879.mp3"}, hideProgressBar: 'true'}],
["practice_t00000008454", "AcceptabilityJudgment", {s: {audio: "practice_t00000008454.mp3"}, hideProgressBar: 'true'}],
["practice_t00000009033", "AcceptabilityJudgment", {s: {audio: "practice_t00000009033.mp3"}, hideProgressBar: 'true'}],
["practice_t00000074757", "AcceptabilityJudgment", {s: {audio: "practice_t00000074757.mp3"}, hideProgressBar: 'true'}],

  ["end_practice", "Message",
    {html: { include: "practice_outro.html" }, hideProgressBar: 'true',
      continueMessage: "Veuillez cliquer ici pour continuer."}
  ],

["t00000050941", "AcceptabilityJudgment", {s: {audio: "triplet_t00000050941.mp3"}}],
["t00000105620", "AcceptabilityJudgment", {s: {audio: "triplet_t00000105620.mp3"}}],
["t00000105963", "AcceptabilityJudgment", {s: {audio: "triplet_t00000105963.mp3"}}],
["t00000095760", "AcceptabilityJudgment", {s: {audio: "triplet_t00000095760.mp3"}}],
["t00000075973", "AcceptabilityJudgment", {s: {audio: "triplet_t00000075973.mp3"}}],
["t00000000425", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000425.mp3"}}],
["t00000017157", "AcceptabilityJudgment", {s: {audio: "triplet_t00000017157.mp3"}}],
["t00000098530", "AcceptabilityJudgment", {s: {audio: "triplet_t00000098530.mp3"}}],
["t00000012734", "AcceptabilityJudgment", {s: {audio: "triplet_t00000012734.mp3"}}],
["t00000007711", "AcceptabilityJudgment", {s: {audio: "triplet_t00000007711.mp3"}}],
["t00000051162", "AcceptabilityJudgment", {s: {audio: "triplet_t00000051162.mp3"}}],
["t00000100328", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100328.mp3"}}],
["t00000043753", "AcceptabilityJudgment", {s: {audio: "triplet_t00000043753.mp3"}}],
["t00000049930", "AcceptabilityJudgment", {s: {audio: "triplet_t00000049930.mp3"}}],
["t00000020635", "AcceptabilityJudgment", {s: {audio: "triplet_t00000020635.mp3"}}],
["t00000054803", "AcceptabilityJudgment", {s: {audio: "triplet_t00000054803.mp3"}}],
["t00000056359", "AcceptabilityJudgment", {s: {audio: "triplet_t00000056359.mp3"}}],
["t00000061634", "AcceptabilityJudgment", {s: {audio: "triplet_t00000061634.mp3"}}],
["t00000016458", "AcceptabilityJudgment", {s: {audio: "triplet_t00000016458.mp3"}}],
["t00000015559", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015559.mp3"}}],
["t00000015731", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015731.mp3"}}],
["t00000100193", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100193.mp3"}}],
["t00000015535", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015535.mp3"}}],
["t00000016526", "AcceptabilityJudgment", {s: {audio: "triplet_t00000016526.mp3"}}],
["t00000017958", "AcceptabilityJudgment", {s: {audio: "triplet_t00000017958.mp3"}}],
["t00000017994", "AcceptabilityJudgment", {s: {audio: "triplet_t00000017994.mp3"}}],
["t00000018167", "AcceptabilityJudgment", {s: {audio: "triplet_t00000018167.mp3"}}],
["t00000017936", "AcceptabilityJudgment", {s: {audio: "triplet_t00000017936.mp3"}}],
["t00000018118", "AcceptabilityJudgment", {s: {audio: "triplet_t00000018118.mp3"}}],
["t00000018285", "AcceptabilityJudgment", {s: {audio: "triplet_t00000018285.mp3"}}],
["t00000086662", "AcceptabilityJudgment", {s: {audio: "triplet_t00000086662.mp3"}}],
["t00000102551", "AcceptabilityJudgment", {s: {audio: "triplet_t00000102551.mp3"}}],
["t00000102457", "AcceptabilityJudgment", {s: {audio: "triplet_t00000102457.mp3"}}],
["t00000095506", "AcceptabilityJudgment", {s: {audio: "triplet_t00000095506.mp3"}}],
["t00000091237", "AcceptabilityJudgment", {s: {audio: "triplet_t00000091237.mp3"}}],
["t00000105479", "AcceptabilityJudgment", {s: {audio: "triplet_t00000105479.mp3"}}],
["t00000089910", "AcceptabilityJudgment", {s: {audio: "triplet_t00000089910.mp3"}}],
["t00000092931", "AcceptabilityJudgment", {s: {audio: "triplet_t00000092931.mp3"}}],
["t00000082910", "AcceptabilityJudgment", {s: {audio: "triplet_t00000082910.mp3"}}],
["t00000082998", "AcceptabilityJudgment", {s: {audio: "triplet_t00000082998.mp3"}}],
["t00000086372", "AcceptabilityJudgment", {s: {audio: "triplet_t00000086372.mp3"}}],
["t00000085583", "AcceptabilityJudgment", {s: {audio: "triplet_t00000085583.mp3"}}],
["t00000106709", "AcceptabilityJudgment", {s: {audio: "triplet_t00000106709.mp3"}}],
["t00000051357", "AcceptabilityJudgment", {s: {audio: "triplet_t00000051357.mp3"}}],
["t00000093723", "AcceptabilityJudgment", {s: {audio: "triplet_t00000093723.mp3"}}],
["t00000011609", "AcceptabilityJudgment", {s: {audio: "triplet_t00000011609.mp3"}}],
["t00000076985", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076985.mp3"}}],
["t00000011342", "AcceptabilityJudgment", {s: {audio: "triplet_t00000011342.mp3"}}],
["t00000074840", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074840.mp3"}}],
["t00000076117", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076117.mp3"}}],
["t00000075016", "AcceptabilityJudgment", {s: {audio: "triplet_t00000075016.mp3"}}],
["t00000074991", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074991.mp3"}}],
["t00000075034", "AcceptabilityJudgment", {s: {audio: "triplet_t00000075034.mp3"}}],
["t00000074962", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074962.mp3"}}],
["t00000089319", "AcceptabilityJudgment", {s: {audio: "triplet_t00000089319.mp3"}}],
["t00000104098", "AcceptabilityJudgment", {s: {audio: "triplet_t00000104098.mp3"}}],
["t00000089322", "AcceptabilityJudgment", {s: {audio: "triplet_t00000089322.mp3"}}],
["t00000089334", "AcceptabilityJudgment", {s: {audio: "triplet_t00000089334.mp3"}}],
["t00000089383", "AcceptabilityJudgment", {s: {audio: "triplet_t00000089383.mp3"}}],
["t00000089519", "AcceptabilityJudgment", {s: {audio: "triplet_t00000089519.mp3"}}],
["t00000099273", "AcceptabilityJudgment", {s: {audio: "triplet_t00000099273.mp3"}}],
["t00000097686", "AcceptabilityJudgment", {s: {audio: "triplet_t00000097686.mp3"}}],
["t00000103680", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103680.mp3"}}],
["t00000098246", "AcceptabilityJudgment", {s: {audio: "triplet_t00000098246.mp3"}}],
["t00000096875", "AcceptabilityJudgment", {s: {audio: "triplet_t00000096875.mp3"}}],
["t00000074657", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074657.mp3"}}],
["t00000001209", "AcceptabilityJudgment", {s: {audio: "triplet_t00000001209.mp3"}}],
["t00000094110", "AcceptabilityJudgment", {s: {audio: "triplet_t00000094110.mp3"}}],
["t00000014382", "AcceptabilityJudgment", {s: {audio: "triplet_t00000014382.mp3"}}],
["t00000094164", "AcceptabilityJudgment", {s: {audio: "triplet_t00000094164.mp3"}}],
["t00000013853", "AcceptabilityJudgment", {s: {audio: "triplet_t00000013853.mp3"}}],
["t00000087088", "AcceptabilityJudgment", {s: {audio: "triplet_t00000087088.mp3"}}],
["t00000050383", "AcceptabilityJudgment", {s: {audio: "triplet_t00000050383.mp3"}}],
["t00000022515", "AcceptabilityJudgment", {s: {audio: "triplet_t00000022515.mp3"}}],
["t00000015274", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015274.mp3"}}],
["t00000096470", "AcceptabilityJudgment", {s: {audio: "triplet_t00000096470.mp3"}}],
["t00000074468", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074468.mp3"}}],
["t00000050535", "AcceptabilityJudgment", {s: {audio: "triplet_t00000050535.mp3"}}],
["t00000074711", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074711.mp3"}}],
["t00000103066", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103066.mp3"}}],
["t00000101207", "AcceptabilityJudgment", {s: {audio: "triplet_t00000101207.mp3"}}],
["t00000103083", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103083.mp3"}}],
["t00000074700", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074700.mp3"}}],
["t00000100597", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100597.mp3"}}],
["t00000014662", "AcceptabilityJudgment", {s: {audio: "triplet_t00000014662.mp3"}}],
["t00000014280", "AcceptabilityJudgment", {s: {audio: "triplet_t00000014280.mp3"}}],
["t00000008436", "AcceptabilityJudgment", {s: {audio: "triplet_t00000008436.mp3"}}],
["t00000094079", "AcceptabilityJudgment", {s: {audio: "triplet_t00000094079.mp3"}}],
["t00000014306", "AcceptabilityJudgment", {s: {audio: "triplet_t00000014306.mp3"}}],
["t00000008447", "AcceptabilityJudgment", {s: {audio: "triplet_t00000008447.mp3"}}],
["t00000061434", "AcceptabilityJudgment", {s: {audio: "triplet_t00000061434.mp3"}}],
["t00000028598", "AcceptabilityJudgment", {s: {audio: "triplet_t00000028598.mp3"}}],
["t00000028948", "AcceptabilityJudgment", {s: {audio: "triplet_t00000028948.mp3"}}],
["t00000041801", "AcceptabilityJudgment", {s: {audio: "triplet_t00000041801.mp3"}}],
["t00000057265", "AcceptabilityJudgment", {s: {audio: "triplet_t00000057265.mp3"}}],
["t00000054226", "AcceptabilityJudgment", {s: {audio: "triplet_t00000054226.mp3"}}],
["t00000048033", "AcceptabilityJudgment", {s: {audio: "triplet_t00000048033.mp3"}}],
["t00000006333", "AcceptabilityJudgment", {s: {audio: "triplet_t00000006333.mp3"}}],
["t00000005507", "AcceptabilityJudgment", {s: {audio: "triplet_t00000005507.mp3"}}],
["t00000006108", "AcceptabilityJudgment", {s: {audio: "triplet_t00000006108.mp3"}}],
["t00000021644", "AcceptabilityJudgment", {s: {audio: "triplet_t00000021644.mp3"}}],
["t00000049742", "AcceptabilityJudgment", {s: {audio: "triplet_t00000049742.mp3"}}],
["t00000035729", "AcceptabilityJudgment", {s: {audio: "triplet_t00000035729.mp3"}}],
["t00000048324", "AcceptabilityJudgment", {s: {audio: "triplet_t00000048324.mp3"}}],
["t00000039293", "AcceptabilityJudgment", {s: {audio: "triplet_t00000039293.mp3"}}],
["t00000044330", "AcceptabilityJudgment", {s: {audio: "triplet_t00000044330.mp3"}}],
["t00000104574", "AcceptabilityJudgment", {s: {audio: "triplet_t00000104574.mp3"}}],
["t00000024724", "AcceptabilityJudgment", {s: {audio: "triplet_t00000024724.mp3"}}],
["t00000015136", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015136.mp3"}}],
["t00000025789", "AcceptabilityJudgment", {s: {audio: "triplet_t00000025789.mp3"}}],
["t00000104906", "AcceptabilityJudgment", {s: {audio: "triplet_t00000104906.mp3"}}],
["t00000025515", "AcceptabilityJudgment", {s: {audio: "triplet_t00000025515.mp3"}}],
["t00000104821", "AcceptabilityJudgment", {s: {audio: "triplet_t00000104821.mp3"}}],
["t00000015037", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015037.mp3"}}],
["t00000020237", "AcceptabilityJudgment", {s: {audio: "triplet_t00000020237.mp3"}}],
["t00000100654", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100654.mp3"}}],
["t00000100155", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100155.mp3"}}],
["t00000100662", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100662.mp3"}}],
["t00000100658", "AcceptabilityJudgment", {s: {audio: "triplet_t00000100658.mp3"}}],
["t00000105251", "AcceptabilityJudgment", {s: {audio: "triplet_t00000105251.mp3"}}],
["t00000103774", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103774.mp3"}}],
["t00000103866", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103866.mp3"}}],
["t00000103860", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103860.mp3"}}],
["t00000103871", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103871.mp3"}}],
["t00000103854", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103854.mp3"}}],
["t00000075965", "AcceptabilityJudgment", {s: {audio: "triplet_t00000075965.mp3"}}],
["t00000101594", "AcceptabilityJudgment", {s: {audio: "triplet_t00000101594.mp3"}}],
["t00000101603", "AcceptabilityJudgment", {s: {audio: "triplet_t00000101603.mp3"}}],
["t00000103030", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103030.mp3"}}],
["t00000101386", "AcceptabilityJudgment", {s: {audio: "triplet_t00000101386.mp3"}}],
["t00000103029", "AcceptabilityJudgment", {s: {audio: "triplet_t00000103029.mp3"}}],
["t00000074514", "AcceptabilityJudgment", {s: {audio: "triplet_t00000074514.mp3"}}],
["t00000099683", "AcceptabilityJudgment", {s: {audio: "triplet_t00000099683.mp3"}}],
["t00000020164", "AcceptabilityJudgment", {s: {audio: "triplet_t00000020164.mp3"}}],
["t00000015229", "AcceptabilityJudgment", {s: {audio: "triplet_t00000015229.mp3"}}],
["t00000099557", "AcceptabilityJudgment", {s: {audio: "triplet_t00000099557.mp3"}}],
["t00000099548", "AcceptabilityJudgment", {s: {audio: "triplet_t00000099548.mp3"}}],
["t00000099494", "AcceptabilityJudgment", {s: {audio: "triplet_t00000099494.mp3"}}],
["t00000000009", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000009.mp3"}}],
["t00000000005", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000005.mp3"}}],
["t00000000002", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000002.mp3"}}],
["t00000000006", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000006.mp3"}}],
["t00000000004", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000004.mp3"}}],
["t00000000007", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000007.mp3"}}],
["t00000076038", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076038.mp3"}}],
["t00000076213", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076213.mp3"}}],
["t00000076043", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076043.mp3"}}],
["t00000076246", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076246.mp3"}}],
["t00000076044", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076044.mp3"}}],
["t00000076042", "AcceptabilityJudgment", {s: {audio: "triplet_t00000076042.mp3"}}],
["t00000013296", "AcceptabilityJudgment", {s: {audio: "triplet_t00000013296.mp3"}}],
["t00000052670", "AcceptabilityJudgment", {s: {audio: "triplet_t00000052670.mp3"}}],
["t00000013294", "AcceptabilityJudgment", {s: {audio: "triplet_t00000013294.mp3"}}],
["t00000013293", "AcceptabilityJudgment", {s: {audio: "triplet_t00000013293.mp3"}}],
["t00000013295", "AcceptabilityJudgment", {s: {audio: "triplet_t00000013295.mp3"}}],
["t00000013297", "AcceptabilityJudgment", {s: {audio: "triplet_t00000013297.mp3"}}],
["t00000014247", "AcceptabilityJudgment", {s: {audio: "triplet_t00000014247.mp3"}}],
["t00000008306", "AcceptabilityJudgment", {s: {audio: "triplet_t00000008306.mp3"}}],
["t00000011709", "AcceptabilityJudgment", {s: {audio: "triplet_t00000011709.mp3"}}],
["t00000008314", "AcceptabilityJudgment", {s: {audio: "triplet_t00000008314.mp3"}}],
["t00000011712", "AcceptabilityJudgment", {s: {audio: "triplet_t00000011712.mp3"}}],
["t00000014562", "AcceptabilityJudgment", {s: {audio: "triplet_t00000014562.mp3"}}],
["t00000000011", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000011.mp3"}}],
["t00000000012", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000012.mp3"}}],
["t00000000015", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000015.mp3"}}],
["t00000000014", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000014.mp3"}}],
["t00000000013", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000013.mp3"}}],
["t00000000016", "AcceptabilityJudgment", {s: {audio: "triplet_t00000000016.mp3"}}]



];
