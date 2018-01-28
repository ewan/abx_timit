/* This software is licensed under a BSD license; see the LICENSE file for details. */

//
// Set configuration variables.
//

// Variables common to all experiments.
var conf_sendingResultsMessage = " Envoi de résultats au serveur...";
var conf_completionMessage = "Les résultats ont été transmis au serveur avec succès. Merci !";
var conf_completionErrorMessage = "Une erreur s'est produite pendant l'envoi du résultats au serveur.";
var conf_pageTitle = "Expérience";
var conf_shuffleSequence = seq(equalTo0, rshuffle(lessThan0, greaterThan0));
var conf_showProgressBar = true;
var conf_progressBarText = "Progrès";
var conf_practiceItemTypes = [];
var conf_practiceMessage = "Entraînement sur la tâche";
var conf_showOverview = false;
var conf_centerItems = true;
var conf_equalGroupSizes = false;
var conf_manualSendResults = false;
var conf_modifyRunningOrder = null;
var conf_loadingMessage = "Chargement d'expérience...";
var conf_loadingFatalErrorMessage = "Une erreur s'est lors du chargement de l'expérience.";
var conf_loadingNonfatalErrorMessage = "Une erreur s'est lors du chargement de l'expérience. Veuillez essayer de recharger la page.";

if (typeof(sendingResultsMessage) != "undefined")
    conf_sendingResultsMessage = sendingResultsMessage;
if (typeof(serverURI) != "undefined")
    conf_serverURI = serverURI;
if (typeof(completionMessage) != "undefined")
    conf_completionMessage = completionMessage;
if (typeof(completionErrorMessage) != "undefined")
    conf_completionErrorMessage = completionErrorMessage;
if (typeof(pageTitle) != "undefined")
    conf_pageTitle = pageTitle;
if (typeof(shuffleSequence) != "undefined")
    conf_shuffleSequence = shuffleSequence;
if (typeof(showProgressBar) != "undefined")
    conf_showProgressBar = showProgressBar;
if (typeof(progressBarText) != "undefined")
    conf_progressBarText = progressBarText;
if (typeof(practiceItemTypes) != "undefined")
    conf_practiceItemTypes = practiceItemTypes;
if (typeof(practiceMessage) != "undefined")
    conf_practiceMessage = practiceMessage;
if (typeof(showOverview) != "undefined")
    conf_showOverview = showOverview;
if (typeof(centerItems) != "undefined")
    conf_centerItems = centerItems;
if (typeof(equalGroupSizes) != "undefined")
    conf_equalGroupSizes = equalGroupSizes;
if (typeof(manualSendResults) != "undefined")
    conf_manualSendResults = manualSendResults;
if (typeof(modifyRunningOrder) != "undefined")
    conf_modifyRunningOrder = modifyRunningOrder;
if (typeof(loadingFatalErrorMessage) != "undefined")
    conf_loadingFatalErrorMessage = loadingFatalErrorMessage;
if (typeof(loadingNonfatalErrorMessage) != "undefined")
    conf_loadingNonfatalErrorMessage = loadingNonfatalErrorMessage;

// Undocumented. By default, counters set using ?withsquare=XXXX are forgotten
// as soon as experiment.html is loaded again. Using this option you can modify
// this behavior so that the counter is remembered for the whole session.
var conf_withsquareCounterStoreForWholeSession = false;
if (typeof(withsquareCounterStoreForWholeSession) != "undefined")
    conf_withsquareCounterStoreForWholeSession = withsquareCounterStoreForWholeSession;

var CONFIG_VARS = [
    "sendingResultsMessage", "serverURI", "completionMessage", "completionErrorMessage",
    "pageTitle", "shuffleSequence", "showProgressBar", "progressBarText",
    "practiceItemTypes", "practiceMessage", "showOverview", "centerItems",
    "equalGroupSizes", "manualSendResults", "withsquareCounterStoreForWholeSession",
    "modifyRunningOrder", "loadingFatalErrorMessage", "loadingNonfatalErrorMessage"
];
