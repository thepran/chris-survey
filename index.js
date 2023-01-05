const FRAME_1 = document.querySelector("#frame1");
const FRAME_2 = document.querySelector("#frame2");
const FRAME_3 = document.querySelector("#frame3");
const FRAME_4 = document.querySelector("#frame4");
const FRAME_5 = document.querySelector("#frame5");
const FRAME_6 = document.querySelector("#frame6");
const FRAME_7 = document.querySelector("#frame7");
const FRAME_8 = document.querySelector("#frame8");
const FRAME_9 = document.querySelector("#frame9");

// Frame 1

let haveFunToday = null;
const errorTextFrame1 = document.querySelector("#frame1-error-text");

const FRAME_1_SUB_BTN = document.querySelector("button#frame1-submit");
FRAME_1_SUB_BTN.addEventListener("click", (e) => {
  if (!haveFunToday) {
    errorTextFrame1.classList.remove("display-none");
    FRAME_1_SUB_BTN.classList.add("display-none");
  } else errorTextFrame1.classList.add("display-none");
  frameSubmit(e);
});

const FRAME_1_YES = document.querySelector("#frame1-yes");
const FRAME_1_NO = document.querySelector("#frame1-no");

FRAME_1_YES.addEventListener("click", setHaveFunToday);
FRAME_1_NO.addEventListener("click", setHaveFunToday);

function setHaveFunToday(e) {
  [...document.querySelectorAll("#options-frame1 .radio-list")].forEach(
    (list) => {
      list.classList.remove("selected");
      console.log("a");
    }
  );
  haveFunToday =
    haveFunToday === this.dataset.value ? null : this.dataset.value;
  console.log(`haveFunToday ${haveFunToday}`);
  console.log(this.dataset.value);
  frameSubmit(e);
  haveFunToday ? this.classList.add("selected") : "";
}
function frameSubmit(e) {
  console.log(Boolean(haveFunToday));
  //   console.log(this.target);

  if (Boolean(haveFunToday)) {
    FRAME_1_SUB_BTN.classList.remove("display-none");
    errorTextFrame1.classList.add("display-none");
    console.log("move to next frame");
    FRAME_2.scrollIntoView();
    /** 
     Move to next Frame..................
     * 
     * */
  }
}
/**................................................. */

/**********************frame2********************** */
let howWereQuestions = [];
const FRAME_2_RADIO = document.querySelectorAll("#frame2 .radio-list");
console.log(FRAME_2_RADIO);
[...FRAME_2_RADIO].forEach((radio) =>
  radio.addEventListener("click", setHowWereTheQuestions)
);
const errorTextFrame2 = document.querySelector("#frame2-error-text");
const FRAME_2_SUB_BTN = document.querySelector("button#frame2-submit");

FRAME_2_SUB_BTN.addEventListener("click", (e) => {
  console.log(Boolean(howWereQuestions.length));
  if (howWereQuestions.length == 0) {
    errorTextFrame2.classList.remove("display-none");
    errorTextFrame2.innerHTML = ` <span class="material-symbols-rounded"> warning </span>
    <strong>Oops!&nbsp;</strong>Please make a selection`;
  } else if (howWereQuestions.length < 2) {
    errorTextFrame2.classList.remove("display-none");
    errorTextFrame2.innerHTML = `<span class="material-symbols-rounded"> warning </span>
    Please select more choices`;
  } else {
    errorTextFrame2.classList.add("display-none");
    FRAME_3.scrollIntoView();
  }
});

function setHowWereTheQuestions(e) {
  console.log(this);
  //   if (howWereQuestions.length == 2) console.log("maxlimit");
  const indexOfValue = howWereQuestions.indexOf(this.dataset.value);
  if (indexOfValue == -1 && howWereQuestions.length < 2) {
    howWereQuestions.push(this.dataset.value);
    this.classList.add("selected");
  } else if (indexOfValue != -1) {
    howWereQuestions.splice(indexOfValue, 1);
    this.classList.remove("selected");
  }

  console.log(howWereQuestions);
}
//******************************************************************************* */

/***FRAME-3 *************************/
let wereInteresting = null;
const errorTextFrame3 = document.querySelector("#frame3-error-text");

const FRAME_3_SUB_BTN = document.querySelector("button#frame3-submit");
FRAME_3_SUB_BTN.addEventListener("click", (e) => {
  if (!wereInteresting) {
    errorTextFrame3.classList.remove("display-none");
    FRAME_3_SUB_BTN.classList.add("display-none");
  } else errorTextFrame3.classList.add("display-none");
  frame3Submit(e);
});

const FRAME_3_YES = document.querySelector("#frame3-yes");
const FRAME_3_NO = document.querySelector("#frame3-no");

FRAME_3_YES.addEventListener("click", setWereInterseting);
FRAME_3_NO.addEventListener("click", setWereInterseting);

function setWereInterseting(e) {
  [...document.querySelectorAll("#options-frame3 .radio-list")].forEach(
    (list) => {
      list.classList.remove("selected");
      console.log("a");
    }
  );
  wereInteresting =
    wereInteresting === this.dataset.value ? null : this.dataset.value;
  console.log(`wereInterseting ${wereInteresting}`);
  console.log(this.dataset.value);
  frame3Submit(e);
  wereInteresting ? this.classList.add("selected") : "";
}
function frame3Submit(e) {
  console.log(Boolean(wereInteresting));
  //   console.log(this.target);

  if (Boolean(wereInteresting)) {
    FRAME_3_SUB_BTN.classList.remove("display-none");
    errorTextFrame3.classList.add("display-none");
    console.log("move to next frame");
    FRAME_4.scrollIntoView();
  }
}
/************************************************************** */

/**FRAME 4***************************************** */
let wereRelatable = null;
const errorTextFrame4 = document.querySelector("#frame4-error-text");

const FRAME_4_SUB_BTN = document.querySelector("button#frame4-submit");
FRAME_4_SUB_BTN.addEventListener("click", (e) => {
  if (!wereRelatable) {
    errorTextFrame4.classList.remove("display-none");
    FRAME_4_SUB_BTN.classList.add("display-none");
  } else errorTextFrame4.classList.add("display-none");
  frame4Submit(e);
});

const FRAME_4_YES = document.querySelector("#frame4-yes");
const FRAME_4_NO = document.querySelector("#frame4-no");

FRAME_4_YES.addEventListener("click", setWereRelatable);
FRAME_4_NO.addEventListener("click", setWereRelatable);

function setWereRelatable(e) {
  [...document.querySelectorAll("#options-frame4 .radio-list")].forEach(
    (list) => {
      list.classList.remove("selected");
      console.log("a");
    }
  );
  wereRelatable =
    wereRelatable === this.dataset.value ? null : this.dataset.value;
  frame4Submit(e);
  wereRelatable ? this.classList.add("selected") : "";
}
function frame4Submit(e) {
  //   console.log(this.target);

  if (Boolean(wereRelatable)) {
    FRAME_4_SUB_BTN.classList.remove("display-none");
    errorTextFrame4.classList.add("display-none");
    FRAME_5.scrollIntoView();
  }
}
/************************************** */

/**frame5******************** */

let wereNotPaired = null;
const errorTextFrame5 = document.querySelector("#frame5-error-text");

const FRAME_5_SUB_BTN = document.querySelector("button#frame5-submit");
FRAME_5_SUB_BTN.addEventListener("click", (e) => {
  if (!wereNotPaired) {
    errorTextFrame5.classList.remove("display-none");
    FRAME_5_SUB_BTN.classList.add("display-none");
  } else errorTextFrame5.classList.add("display-none");
  frame5Submit(e);
});

const FRAME_5_YES = document.querySelector("#frame5-yes");
const FRAME_5_NO = document.querySelector("#frame5-no");

FRAME_5_YES.addEventListener("click", setWereNotPaired);
FRAME_5_NO.addEventListener("click", setWereNotPaired);

function setWereNotPaired(e) {
  [...document.querySelectorAll("#options-frame5 .radio-list")].forEach(
    (list) => {
      list.classList.remove("selected");
      console.log("a");
    }
  );
  wereNotPaired =
    wereNotPaired === this.dataset.value ? null : this.dataset.value;
  frame5Submit(e);
  wereNotPaired ? this.classList.add("selected") : "";
}
function frame5Submit(e) {
  //   console.log(this.target);

  if (Boolean(wereNotPaired)) {
    FRAME_5_SUB_BTN.classList.remove("display-none");
    errorTextFrame5.classList.add("display-none");
    FRAME_6.scrollIntoView();
  }
}
/**************************** */

/**Frame6*********************** */
let firstName = null;
let lastName = null;

const FRAME_6_SUB_BTN = document.querySelector("button#frame6-submit");
FRAME_6_SUB_BTN.addEventListener("click", (e) => {
  const inputfirstName = document.querySelector(
    "#frame6 input#first-name"
  ).value;
  const inputlastName = document.querySelector("#frame6 input#last-name").value;
  firstName = inputfirstName ? inputfirstName : null;
  lastName = inputlastName ? inputlastName : null;

  FRAME_7.scrollIntoView();
});
/**************************************** */

/**FRAME 7*************** */
let isInterested = null;
const errorTextFrame7 = document.querySelector("#frame7-error-text");

const FRAME_7_SUB_BTN = document.querySelector("button#frame7-submit");
FRAME_7_SUB_BTN.addEventListener("click", (e) => {
  if (!isInterested) {
    errorTextFrame7.classList.remove("display-none");
    FRAME_7_SUB_BTN.classList.add("display-none");
  } else errorTextFrame7.classList.add("display-none");
  frame7Submit(e);
});

const FRAME_7_YES = document.querySelector("#frame7-yes");
const FRAME_7_NO = document.querySelector("#frame7-no");

FRAME_7_YES.addEventListener("click", setisInterested);
FRAME_7_NO.addEventListener("click", setisInterested);

function setisInterested(e) {
  [...document.querySelectorAll("#options-frame7 .radio-list")].forEach(
    (list) => {
      list.classList.remove("selected");
    }
  );
  isInterested =
    isInterested === this.dataset.value ? null : this.dataset.value;
  console.log(this.dataset.value);
  frame7Submit(e);
  isInterested ? this.classList.add("selected") : "";
}
function frame7Submit(e) {
  if (Boolean(isInterested)) {
    FRAME_7_SUB_BTN.classList.remove("display-none");
    errorTextFrame7.classList.add("display-none");
    FRAME_8.scrollIntoView();
  }
}
/************************************************* */
let wantToTryTrial = null;
const errorTextFrame8 = document.querySelector("#frame8-error-text");

const FRAME_8_SUB_BTN = document.querySelector("button#frame8-submit");
FRAME_8_SUB_BTN.addEventListener("click", (e) => {
  if (!wantToTryTrial) {
    errorTextFrame8.classList.remove("display-none");
    FRAME_8_SUB_BTN.classList.add("display-none");
  } else errorTextFrame8.classList.add("display-none");
  frame8Submit(e);
});

const FRAME_8_YES = document.querySelector("#frame8-yes");
const FRAME_8_NO = document.querySelector("#frame8-no");

FRAME_8_YES.addEventListener("click", setWantToTryTrial);
FRAME_8_NO.addEventListener("click", setWantToTryTrial);

function setWantToTryTrial(e) {
  [...document.querySelectorAll("#options-frame8 .radio-list")].forEach(
    (list) => {
      list.classList.remove("selected");
    }
  );
  wantToTryTrial =
    wantToTryTrial === this.dataset.value ? null : this.dataset.value;
  console.log(this.dataset.value);
  frame8Submit(e);
  wantToTryTrial ? this.classList.add("selected") : "";
}
function frame8Submit(e) {
  if (Boolean(wantToTryTrial)) {
    FRAME_8_SUB_BTN.classList.remove("display-none");
    errorTextFrame8.classList.add("display-none");
    FRAME_9.scrollIntoView();
  }
}
/************************FRAME 8************************ */

/******************************************************* */
