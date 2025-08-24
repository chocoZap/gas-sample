function doGet() {
  return ContentService.createTextOutput("ok");
}

function hello() {
  Logger.log("Hello from GAS with Yarn!");
}