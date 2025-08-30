function doGet() {
  return ContentService.createTextOutput("こんにちは");
}

function hello() {
  Logger.log("Hello from GAS with Yarn!");
}