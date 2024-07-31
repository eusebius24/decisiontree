"use strict";

/* variable definitions */
const parentAndMe = document.getElementById("parentAndMe");
const squid = document.getElementById("squid");
const fourfive = document.getElementById("fourfive");
const sixseven = document.getElementById("sixseven");
const tenplus = document.getElementById("tenplus");
const level1cannotswim = document.getElementById("level1cannotswim");
const level1headUnderWater = document.getElementById("level1headUnderWater");
const level1shortDistance = document.getElementById("level1shortDistance");
const level2cannotswim = document.getElementById("level2cannotswim");
const level2headUnderWater = document.getElementById("level2headUnderWater");
const level2shortDistance = document.getElementById("level2shortDistance");
const level2learningStrokes = document.getElementById("level2learningStrokes");
const level2fewLengths = document.getElementById("level2fewLengths");
const level3oneLength = document.getElementById("level3oneLength");
const level3fewLengths = document.getElementById("level3fewLengths");
const level3swim100m = document.getElementById("level3swim100m");
const level3swim200m = document.getElementById("level3swim200m");
const level3swim300m = document.getElementById("level3swim300m");
const level3swim400m = document.getElementById("level3swim400m");
const neuro1 = document.getElementById("neuro1");
const neuro2 = document.getElementById("neuro2");
const reset = document.getElementById("reset");

function hideClass() {
  if (!document.querySelector(".parentAndMeDesc").classList.contains("hidden"))
    document.querySelector(".parentAndMeDesc").classList.add("hidden");
  if (!document.querySelector(".squidDesc").classList.contains("hidden"))
    document.querySelector(".squidDesc").classList.add("hidden");
  if (
    !document.querySelector(".littleSeahorseDesc").classList.contains("hidden")
  )
    document.querySelector(".littleSeahorseDesc").classList.add("hidden");
  if (!document.querySelector(".bigSeahorseDesc").classList.contains("hidden"))
    document.querySelector(".bigSeahorseDesc").classList.add("hidden");
  if (!document.querySelector(".level1").classList.contains("hidden"))
    document.querySelector(".level1").classList.add("hidden");
  if (!document.querySelector(".level2").classList.contains("hidden"))
    document.querySelector(".level2").classList.add("hidden");
  if (!document.querySelector(".level3").classList.contains("hidden"))
    document.querySelector(".level3").classList.add("hidden");
  if (!document.querySelector(".littleTurtleDesc").classList.contains("hidden"))
    document.querySelector(".littleTurtleDesc").classList.add("hidden");
  if (!document.querySelector(".bigTurtleDesc").classList.contains("hidden"))
    document.querySelector(".bigTurtleDesc").classList.add("hidden");
  if (!document.querySelector(".littleOtterDesc").classList.contains("hidden"))
    document.querySelector(".littleOtterDesc").classList.add("hidden");
  if (!document.querySelector(".bigOtterDesc").classList.contains("hidden"))
    document.querySelector(".bigOtterDesc").classList.add("hidden");
  if (!document.querySelector(".sealDesc").classList.contains("hidden"))
    document.querySelector(".sealDesc").classList.add("hidden");
  if (!document.querySelector(".orcaDesc").classList.contains("hidden"))
    document.querySelector(".orcaDesc").classList.add("hidden");
  if (!document.querySelector(".lakeOntarioDesc").classList.contains("hidden"))
    document.querySelector(".lakeOntarioDesc").classList.add("hidden");
  if (!document.querySelector(".lakeErieDesc").classList.contains("hidden"))
    document.querySelector(".lakeErieDesc").classList.add("hidden");
  if (!document.querySelector(".lakeHuronDesc").classList.contains("hidden"))
    document.querySelector(".lakeHuronDesc").classList.add("hidden");
  if (!document.querySelector(".lakeMichiganDesc").classList.contains("hidden"))
    document.querySelector(".lakeMichiganDesc").classList.add("hidden");
  if (!document.querySelector(".lakeSuperiorDesc").classList.contains("hidden"))
    document.querySelector(".lakeSuperiorDesc").classList.add("hidden");
  if (!document.querySelector(".neuroDiverseDesc").classList.contains("hidden"))
    document.querySelector(".neuroDiverseDesc").classList.add("hidden");
}

function neuroCheck() {
  if (document.getElementById("neuro2").checked) {
    document.getElementById("parentAndMe").disabled = true;
    document.getElementById("squid").disabled = true;
    document.getElementById("fourfive").disabled = true;
    document.getElementById("sixseven").disabled = true;
    document.getElementById("tenplus").disabled = true;
    document.getElementById("level1cannotswim").disabled = true;
    document.getElementById("level1headUnderWater").disabled = true;
    document.getElementById("level1shortDistance").disabled = true;
    document.getElementById("level2cannotswim").disabled = true;
    document.getElementById("level2headUnderWater").disabled = true;
    document.getElementById("level2shortDistance").disabled = true;
    document.getElementById("level2fewLengths").disabled = true;
    document.getElementById("level2learningStrokes").disabled = true;
    document.getElementById("level3oneLength").disabled = true;
    document.getElementById("level3fewLengths").disabled = true;
    document.getElementById("level3swim100m").disabled = true;
    document.getElementById("level3swim200m").disabled = true;
    document.getElementById("level3swim300m").disabled = true;
    document.getElementById("level3swim400m").disabled = true;
  } else {
    document.getElementById("parentAndMe").disabled = false;
    document.getElementById("squid").disabled = false;
    document.getElementById("fourfive").disabled = false;
    document.getElementById("sixseven").disabled = false;
    document.getElementById("tenplus").disabled = false;
    document.getElementById("level1cannotswim").disabled = false;
    document.getElementById("level1headUnderWater").disabled = false;
    document.getElementById("level1shortDistance").disabled = false;
    document.getElementById("level2cannotswim").disabled = false;
    document.getElementById("level2headUnderWater").disabled = false;
    document.getElementById("level2shortDistance").disabled = false;
    document.getElementById("level2fewLengths").disabled = false;
    document.getElementById("level2learningStrokes").disabled = false;
    document.getElementById("level3oneLength").disabled = false;
    document.getElementById("level3fewLengths").disabled = false;
    document.getElementById("level3swim100m").disabled = false;
    document.getElementById("level3swim200m").disabled = false;
    document.getElementById("level3swim300m").disabled = false;
    document.getElementById("level3swim400m").disabled = false;
  }
}
/*swim class form choices */
parentAndMe.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  if (document.querySelector(".parentAndMeDesc").classList.contains("hidden"))
    document.querySelector(".parentAndMeDesc").classList.remove("hidden");
});

squid.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  if (document.querySelector(".squidDesc").classList.contains("hidden"))
    document.querySelector(".squidDesc").classList.remove("hidden");
});

fourfive.addEventListener("change", function () {
  hideClass();
  document.querySelector(".level1").classList.remove("hidden");

  document.querySelector(".swim-class").innerHTML =
    "Please choose an option to the left";
});

level1cannotswim.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level1").classList.remove("hidden");
  if (
    document.querySelector(".littleSeahorseDesc").classList.contains("hidden")
  )
    document.querySelector(".littleSeahorseDesc").classList.remove("hidden");
});

level1headUnderWater.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level1").classList.remove("hidden");
  if (document.querySelector(".littleTurtleDesc").classList.contains("hidden"))
    document.querySelector(".littleTurtleDesc").classList.remove("hidden");
});

level1shortDistance.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level1").classList.remove("hidden");

  if (document.querySelector(".littleOtterDesc").classList.contains("hidden"))
    document.querySelector(".littleOtterDesc").classList.remove("hidden");
});

level1Strokes.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level1").classList.remove("hidden");

  if (document.querySelector(".littleOtterDesc").classList.contains("hidden"))
    document.querySelector(".littleOtterDesc").classList.remove("hidden");
});

sixseven.addEventListener("change", function () {
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  document.querySelector(".swim-class").innerHTML =
    "Please choose an option to the left";
});

level2cannotswim.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  if (document.querySelector(".bigSeahorseDesc").classList.contains("hidden"))
    document.querySelector(".bigSeahorseDesc").classList.remove("hidden");
});

level2headUnderWater.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  if (document.querySelector(".bigTurtleDesc").classList.contains("hidden"))
    document.querySelector(".bigTurtleDesc").classList.remove("hidden");
});

level2shortDistance.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  if (document.querySelector(".bigOtterDesc").classList.contains("hidden"))
    document.querySelector(".bigOtterDesc").classList.remove("hidden");
});

level2learningStrokes.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  if (document.querySelector(".sealDesc").classList.contains("hidden"))
    document.querySelector(".sealDesc").classList.remove("hidden");
});

level2oneLength.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  if (document.querySelector(".orcaDesc").classList.contains("hidden"))
    document.querySelector(".orcaDesc").classList.remove("hidden");
});

level2fewLengths.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level2").classList.remove("hidden");
  if (document.querySelector(".lakeOntarioDesc").classList.contains("hidden"))
    document.querySelector(".lakeOntarioDesc").classList.remove("hidden");
});

tenplus.addEventListener("change", function () {
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  document.querySelector(".swim-class").innerHTML =
    "Please choose an option to the left";
});

level3oneLength.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  if (document.querySelector(".orcaDesc").classList.contains("hidden"))
    document.querySelector(".orcaDesc").classList.remove("hidden");
});

level3fewLengths.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  if (document.querySelector(".lakeOntarioDesc").classList.contains("hidden"))
    document.querySelector(".lakeOntarioDesc").classList.remove("hidden");
});

level3swim100m.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  if (document.querySelector(".lakeErieDesc").classList.contains("hidden"))
    document.querySelector(".lakeErieDesc").classList.remove("hidden");
});

level3swim200m.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  if (document.querySelector(".lakeHuronDesc").classList.contains("hidden"))
    document.querySelector(".lakeHuronDesc").classList.remove("hidden");
});

level3swim300m.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  if (document.querySelector(".lakeMichiganDesc").classList.contains("hidden"))
    document.querySelector(".lakeMichiganDesc").classList.remove("hidden");
});

level3swim400m.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  document.querySelector(".level3").classList.remove("hidden");
  if (document.querySelector(".lakeSuperiorDesc").classList.contains("hidden"))
    document.querySelector(".lakeSuperiorDesc").classList.remove("hidden");
});

neuro1.addEventListener("change", function () {
  // Get the checkbox
  var checkBox = document.getElementById("neuro1");
  // Get the output text
  var text = document.querySelector(".neuro1");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    document.querySelector(".neuro1desc").classList.remove("hidden");
  }
});

neuro2.addEventListener("change", function () {
  document.querySelector(".swim-class").innerHTML = "";
  hideClass();
  if (document.querySelector(".neuroDiverseDesc").classList.contains("hidden"))
    document.querySelector(".neuroDiverseDesc").classList.remove("hidden");
  neuroCheck();
});

reset.addEventListener("click", function () {
  document.getElementById("parentAndMe").disabled = false;
  document.getElementById("squid").disabled = false;
  document.getElementById("fourfive").disabled = false;
  document.getElementById("sixseven").disabled = false;
  document.getElementById("tenplus").disabled = false;
  document.getElementById("level1cannotswim").disabled = false;
  document.getElementById("level1headUnderWater").disabled = false;
  document.getElementById("level1shortDistance").disabled = false;
  document.getElementById("level2cannotswim").disabled = false;
  document.getElementById("level2headUnderWater").disabled = false;
  document.getElementById("level2shortDistance").disabled = false;
  document.getElementById("level2fewLengths").disabled = false;
  document.getElementById("level2learningStrokes").disabled = false;
  document.getElementById("level3oneLength").disabled = false;
  document.getElementById("level3fewLengths").disabled = false;
  document.getElementById("level3swim100m").disabled = false;
  document.getElementById("level3swim200m").disabled = false;
  document.getElementById("level3swim300m").disabled = false;
  document.getElementById("level3swim400m").disabled = false;
  document.querySelector(".level1").classList.add("hidden");
  document.querySelector(".level2").classList.add("hidden");
  document.querySelector(".level3").classList.add("hidden");
  if (!document.querySelector(".neuro1desc").classList.contains("hidden"))
    document.querySelector(".neuro1desc").classList.add("hidden");
  hideClass();
  document.querySelector(".swim-class").innerHTML =
    "Choose an option to the left";
});
