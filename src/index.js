function doGet() {
  return ContentService.createTextOutput("これはgithub actionsからpushされたテストです");
}

function hello() {
  Logger.log("Hello from GAS with Yarn!");
}