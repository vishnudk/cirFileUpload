
function setMentor(e){
 mentor = e.demoSelect
 
}
function upload(e){
// var ui = DriveApp.getUi();
// var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);

  var destinationId = '1MhBnt6paSK5zft0sA_ASp9M-bbGca0Jj'

  var kiran = '1TfiHO1KGg8cOXrAQ-37g_f3drWx1bIIo'
  var darsana = '1eIj0fNCfuMThqvlKmyIXlo3dm8GAEV-q'
  var balachandar = '13mKoeVQlsQdHKztgS9eP1aF_ppcjHYjb'
  var krishnan = '1nP4c-qXLnu4pwjJem51dvcxXU-YGjS6R'
  var deepa = '1f48p3zsUivpkmkPzZWjmOZMs6H_PBPFM'
  var sreesankar = '13nev_tafG16HShKtfnuNI8quxTExKE8S'
  var anuja = '1u2f272UNkZ7qUYPk6J58CGofWZ7tpylE'
  var chinju = '1GzWuiLRyuVvfihijyEx6Q8OI7jOFMKtb'
  var lakshmi = '1ouMQrmauFvKDeWgHFxUpZSWtq-6bceIM'
  var indira = '1cnXsu4e838of67N3MQYVcl7ybYDdNRP-'
  var narayanan = '1wh4EXbAo0ycHKzbldb6RMzbHS9AIoj6b'



  var f1 = e.upload1
  var f2 = e.upload2
  var f3 = e.upload3
  var f4 = e.upload4
  var f5 = e.upload5
  var f6 = e.upload6
  var f7 = e.upload7

  var gno = e.gno 
  var mentor = e.demoSelect

  
   
  if(mentor == "A")
  {
    var destination = DriveApp.getFolderById(kiran)
    var contents = destination.getFolders()
    var flag = 0
      while(contents.hasNext()) {
    file = contents.next();
    name = file.getName();
    tmp = "SSR20-21- 0" + gno
    if(name == tmp){
      flag = 1
      
    }
    }
    if(flag == 0){
      var new_folder = destination.createFolder("SSR20-21- 0" + gno).getId();
   var createFile1 = DriveApp.getFolderById(new_folder).createFile(f1).setName("SSR20-21- 0"+gno+" -Video")
    var createFile2 = DriveApp.getFolderById(new_folder).createFile(f2).setName("SSR20-21- 0"+gno+" -Social media/New paper cuttings")
    var createFile3 = DriveApp.getFolderById(new_folder).createFile(f3).setName("SSR20-21- 0"+gno+" -PPT presentation")
    var createFile4 = DriveApp.getFolderById(new_folder).createFile(f4).setName("SSR20-21- 0"+gno+" -ProjectReport")
    var createFile5 = DriveApp.getFolderById(new_folder).createFile(f5).setName("SSR20-21- 0"+gno+" -A3poster")
    var createFile6 = DriveApp.getFolderById(new_folder).createFile(f6).setName("SSR20-21- 0"+gno+" -FileContainingSurveys/images/etc")
    var createFile7 = DriveApp.getFolderById(new_folder).createFile(f7).setName("SSR20-21- 0"+gno+" -Blog(MSWord)")

    return true;


    }
    else
      return false
  }
  else if(mentor == "B")
  {
    var destination = DriveApp.getFolderById(indira)
     var contents = destination.getFolders()
    var flag = 0
      while(contents.hasNext()) {
    file = contents.next();
    name = file.getName();
    tmp = "SSR20-21- 0" + gno
    if(name == tmp){
      flag = 1
      
    }
    }
    if(flag == 0){
     var new_folder = destination.createFolder("SSR20-21- 0" + gno).getId();
   var createFile1 = DriveApp.getFolderById(new_folder).createFile(f1).setName("SSR20-21- 0"+gno+" -Video")
    var createFile2 = DriveApp.getFolderById(new_folder).createFile(f2).setName("SSR20-21- 0"+gno+" -Social media/New paper cuttings")
    var createFile3 = DriveApp.getFolderById(new_folder).createFile(f3).setName("SSR20-21- 0"+gno+" -PPT presentation")
    var createFile4 = DriveApp.getFolderById(new_folder).createFile(f4).setName("SSR20-21- 0"+gno+" -ProjectReport")
    var createFile5 = DriveApp.getFolderById(new_folder).createFile(f5).setName("SSR20-21- 0"+gno+" -A3poster")
    var createFile6 = DriveApp.getFolderById(new_folder).createFile(f6).setName("SSR20-21- 0"+gno+" -FileContainingSurveys/images/etc")
    var createFile7 = DriveApp.getFolderById(new_folder).createFile(f7).setName("SSR20-21- 0"+gno+" -Blog(MSWord)")


    return true

    }
    else
      return false
  }
  else if(mentor == "C")
  {
    var destination = DriveApp.getFolderById(narayanan)
    var contents = destination.getFolders()
    var flag = 0
      while(contents.hasNext()) {
    file = contents.next();
    name = file.getName();
    tmp = "SSR20-21- 0" + gno
    if(name == tmp){
      flag = 1
      
    }
    }
    if(flag == 0){
      var new_folder = destination.createFolder("SSR20-21- 0" + gno).getId();
   var createFile1 = DriveApp.getFolderById(new_folder).createFile(f1).setName("SSR20-21- 0"+gno+" -Video")
    var createFile2 = DriveApp.getFolderById(new_folder).createFile(f2).setName("SSR20-21- 0"+gno+" -Social media/New paper cuttings")
    var createFile3 = DriveApp.getFolderById(new_folder).createFile(f3).setName("SSR20-21- 0"+gno+" -PPT presentation")
    var createFile4 = DriveApp.getFolderById(new_folder).createFile(f4).setName("SSR20-21- 0"+gno+" -ProjectReport")
    var createFile5 = DriveApp.getFolderById(new_folder).createFile(f5).setName("SSR20-21- 0"+gno+" -A3poster")
    var createFile6 = DriveApp.getFolderById(new_folder).createFile(f6).setName("SSR20-21- 0"+gno+" -FileContainingSurveys/images/etc")
    var createFile7 = DriveApp.getFolderById(new_folder).createFile(f7).setName("SSR20-21- 0"+gno+" -Blog(MSWord)")

    e={'parameter':{'page':'lastPage'}}
    // doGet(e)
    return true;
    }
    else
      return false;
    
  }
  

  return false;
}

function homePageCall(){
  flag = 2
  // return HtmlService.createHtmlOutputFromFile("homePage.html")
}
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}


function doGet(e) {

    var op = HtmlService.createHtmlOutputFromFile("lastPage.html")
  op.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  return op
}