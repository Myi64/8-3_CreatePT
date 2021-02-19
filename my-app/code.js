var StoredR = 255;
var StoredG = 0;
var StoredB = 0;
onEvent("btnSettings", "click", function( ) {
  CallSettings();
});
onEvent("btnBasicAdv", "click", function( ) {
  if (getProperty("labColor1", "hidden") == false) {
    setProperty("sldColor1", "value", StoredR);
    setText("labColor7", "Red: " + getProperty("sldColor1", "value"));
    setProperty("sldColor2", "value", StoredG);
    setText("labColor8", "Green: " + getProperty("sldColor2", "value"));
    setProperty("sldColor3", "value", StoredB);
    setText("labColor9", "Blue:" + getProperty("sldColor3", "value"));
    HideBasicOptions();
    ShowAdvOptions();
    ClearRBs();
    setText("btnBasicAdv", "Adv.");
  } else {
    HideAdvOptions();
    ShowBasicOptions();
    ShowRBs();
    setText("btnBasicAdv", "Basic");
  }
});
onEvent("rbColor1", "click", function( ) {
  StoredR = 255;
  StoredG = 0;
  StoredB = 0;
  ChangeColor();
});
onEvent("rbColor2", "click", function( ) {
  StoredR = 255;
  StoredG = 165;
  StoredB = 0;
  ChangeColor();
});
onEvent("rbColor3", "click", function( ) {
  StoredR = 255;
  StoredG = 255;
  StoredB = 0;
  ChangeColor();
});
onEvent("rbColor4", "click", function( ) {
  StoredR = 0;
  StoredG = 255;
  StoredB = 0;
  ChangeColor();
});
onEvent("rbColor5", "click", function( ) {
  StoredR = 0;
  StoredG = 0;
  StoredB = 255;
  ChangeColor();
});
onEvent("rbColor6", "click", function( ) {
  StoredR = 128;
  StoredG = 0;
  StoredB = 128;
  ChangeColor();
});
onEvent("sldColor1", "change", function( ) {
  StoredR = getProperty("sldColor1", "value");
  setText("labColor7", "Red: " + getProperty("sldColor1", "value"));
  ChangeColor();
});
onEvent("sldColor2", "change", function( ) {
  StoredG = getProperty("sldColor2", "value");
  setText("labColor8", "Green: " + getProperty("sldColor2", "value"));
  ChangeColor();
});
onEvent("sldColor3", "change", function( ) {
  StoredB = getProperty("sldColor3", "value");
  setText("labColor9", "Blue:" + getProperty("sldColor3", "value"));
  ChangeColor();
});
onEvent("btnBack1", "click", function( ) {
  ClearSettings();
  HideAdvOptions();
  HideBasicOptions();
  ShowMainMenu();
});
function ChangeColor() {
  for (var i = 1; i < 21; i++) {
    setProperty("imgIcnSqr" + i, "border-color", rgb(StoredR, StoredG, StoredB, 1));
    setProperty("btnBasicAdv", "border-color", rgb(StoredR, StoredG, StoredB, 1));
  }
}
function CallSettings() {
  ClearMainMenu();
  ShowBasicOptions();
  ShowRBs();
  setProperty("btnBasicAdv", "hidden", false);
  setProperty("imgIcnSqr16", "hidden", false);
  setProperty("imgIcnSqr17", "hidden", false);
  setProperty("imgIcnSqr18", "hidden", false);
  setProperty("imgIcnSqr19", "hidden", false);
  setProperty("imgIcnSqr20", "hidden", false);
  setProperty("btnBack1", "hidden", false);
  setProperty("txtColorP", "hidden", false);
  setProperty("txtColorS", "hidden", false);
}
function ClearSettings() {
  setProperty("btnBasicAdv", "hidden", true);
  setProperty("imgIcnSqr16", "hidden", true);
  setProperty("imgIcnSqr17", "hidden", true);
  setProperty("imgIcnSqr18", "hidden", true);
  setProperty("imgIcnSqr19", "hidden", true);
  setProperty("imgIcnSqr20", "hidden", true);
  setProperty("btnBack1", "hidden", true);
  setProperty("txtColorP", "hidden", true);
  setProperty("txtColorS", "hidden", true);
}
function ClearMainMenu() {
  setProperty("btnSettings", "hidden", true);
  setProperty("imgMenu1", "hidden", true);
  setProperty("imgMenu2", "hidden", true);
  setProperty("imgMenu3", "hidden", true);
  setProperty("imgMenu4", "hidden", true);
  setProperty("imgMenu5", "hidden", true);
  setProperty("imgMenu6", "hidden", true);
  setProperty("txtMenu1", "hidden", true);
  setProperty("txtMenu2", "hidden", true);
  setProperty("txtMenu3", "hidden", true);
  setProperty("txtMenu4", "hidden", true);
  setProperty("txtMenu5", "hidden", true);
  setProperty("txtMenu6", "hidden", true);
  setProperty("imgIcnSqr9", "hidden", true);
  setProperty("imgIcnSqr10", "hidden", true);
  setProperty("imgIcnSqr11", "hidden", true);
  setProperty("imgIcnSqr12", "hidden", true);
  setProperty("imgIcnSqr13", "hidden", true);
  setProperty("imgIcnSqr14", "hidden", true);
}
function ShowMainMenu() {
  setProperty("btnSettings", "hidden", false);
  setProperty("imgMenu1", "hidden", false);
  setProperty("imgMenu2", "hidden", false);
  setProperty("imgMenu3", "hidden", false);
  setProperty("imgMenu4", "hidden", false);
  setProperty("imgMenu5", "hidden", false);
  setProperty("imgMenu6", "hidden", false);
  setProperty("txtMenu1", "hidden", false);
  setProperty("txtMenu2", "hidden", false);
  setProperty("txtMenu3", "hidden", false);
  setProperty("txtMenu4", "hidden", false);
  setProperty("txtMenu5", "hidden", false);
  setProperty("txtMenu6", "hidden", false);
  setProperty("imgIcnSqr9", "hidden", false);
  setProperty("imgIcnSqr10", "hidden", false);
  setProperty("imgIcnSqr11", "hidden", false);
  setProperty("imgIcnSqr12", "hidden", false);
  setProperty("imgIcnSqr13", "hidden", false);
  setProperty("imgIcnSqr14", "hidden", false);
}
function HideBasicOptions() {
  setProperty("rbColor1", "hidden", true);
  setProperty("rbColor2", "hidden", true);
  setProperty("rbColor3", "hidden", true);
  setProperty("rbColor4", "hidden", true);
  setProperty("rbColor5", "hidden", true);
  setProperty("rbColor6", "hidden", true);
  setProperty("labColor1", "hidden", true);
  setProperty("labColor2", "hidden", true);
  setProperty("labColor3", "hidden", true);
  setProperty("labColor4", "hidden", true);
  setProperty("labColor5", "hidden", true);
  setProperty("labColor6", "hidden", true);
}
function ShowBasicOptions() {
  setProperty("rbColor1", "hidden", false);
  setProperty("rbColor2", "hidden", false);
  setProperty("rbColor3", "hidden", false);
  setProperty("rbColor4", "hidden", false);
  setProperty("rbColor5", "hidden", false);
  setProperty("rbColor6", "hidden", false);
  setProperty("labColor1", "hidden", false);
  setProperty("labColor2", "hidden", false);
  setProperty("labColor3", "hidden", false);
  setProperty("labColor4", "hidden", false);
  setProperty("labColor5", "hidden", false);
  setProperty("labColor6", "hidden", false);
}
function HideAdvOptions() {
  setProperty("labColor7", "hidden", true);
  setProperty("labColor8", "hidden", true);
  setProperty("labColor9", "hidden", true);
  setProperty("sldColor1", "hidden", true);
  setProperty("sldColor2", "hidden", true);
  setProperty("sldColor3", "hidden", true);
}
function ShowAdvOptions() {
  setProperty("labColor7", "hidden", false);
  setProperty("labColor8", "hidden", false);
  setProperty("labColor9", "hidden", false);
  setProperty("sldColor1", "hidden", false);
  setProperty("sldColor2", "hidden", false);
  setProperty("sldColor3", "hidden", false);
}
function ClearRBs() {
  setProperty("rbColor1", "checked", false);
  setProperty("rbColor2", "checked", false);
  setProperty("rbColor3", "checked", false);
  setProperty("rbColor4", "checked", false);
  setProperty("rbColor5", "checked", false);
  setProperty("rbColor6", "checked", false);
}
function ShowRBs() {
  if (StoredR == 255 && (StoredG == 0 && StoredB == 0)) {
    setProperty("rbColor1", "checked", true);
  } else if (StoredR == 255 && (StoredG == 165 && StoredB == 0)) {
    setProperty("rbColor2", "checked", true);
  } else if (StoredR == 255 && (StoredG == 255 && StoredB == 0)) {
    setProperty("rbColor3", "checked", true);
  } else if (StoredR == 0 && (StoredG == 255 && StoredB == 0)) {
    setProperty("rbColor4", "checked", true);
  } else if (StoredR == 0 && (StoredG == 0 && StoredB == 255)) {
    setProperty("rbColor5", "checked", true);
  } else if (StoredR == 128 && (StoredG == 0 && StoredB == 128)) {
    setProperty("rbColor6", "checked", true);
  }
}
