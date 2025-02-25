/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';
// Page data
var monthlyData = [
  {
    "month": "January", "imageUrl": "../assets/monthly-images/january.jpg", "copyOne": "<p>Florida State College at Jacksonville’s Fire Academy of the South was named the 2016 Florida Fire Service Training and Education Provider of the Year. The honor marked the second time the Fire Academy has earned the award. Selection was based upon faculty and staff credentials and resumes, success of the Fire Fighter I/II program and innovative programming.<\/p>", "column": 0
  }, 
  {
    "month": "February", "imageUrl": "../assets/monthly-images/february.png", "copyOne": "<p>Florida State College at Jacksonville began construction on the downtown student housing and 20West Cafe project. FSCJ Student Housing will offer 58 apartment-style living spaces combining modern, comfortable conveniences of home with a trendy, urban twist. 20West Cafe will be operated by students from FSCJ’s culinary program.<\/p>", "column": 0
  }, 
  { "month": "March", "imageUrl": "../assets/monthly-images/march.jpg", "copyOne": "<p>Florida State College at Jacksonville launched the first program in Florida to provide a debt-free pathway to college completion. FSCJ Promise will fully fund the first two years at FSCJ (tuition, fees and books) for eligible Duval and Nassau students, leading the College Promise initiative in Florida.<\/p>", "column": 0 

  }, 
  { "month": "April", "imageUrl": "../assets/monthly-images/april.jpg", "copyOne": "<p>Florida State College at Jacksonville hosted a grand opening for the newly created FSCJ H.O.P.E. Food Pantry which was created in response to the high number of our students who face food insecurity. The food pantry allows students anonymous and free access to nonperishable food products made available by generous donations from the community.<\/p>", "column": 0 

  }, 
  { "month": "May", "imageUrl": "../assets/monthly-images/may.jpg", "copyOne": "<p>Florida State College at Jacksonville awarded more than 7,800 degrees and certificates to students. These graduates now join more than 132,000 alumni who have graduated from FSCJ since 1968.<\/p>", "column": 1 

  }, 
  { "month": "June", "imageUrl": "../assets/monthly-images/june.jpg", "copyOne": "<p>Florida State College at Jacksonville, through a private donation and in partnership with Duval County Public Schools and a diverse group of local employers, launched Pathways to Work, a program which utilizes innovative, accelerated workforce training strategies to prepare and place students in entry-level high-demand occupations in Construction/Trades, Culinary Arts and Global Logistics industries.<\/p>", "column": 1 

  }, 
  { "month": "July", "imageUrl": "../assets/monthly-images/july.jpg", "copyOne": "<p>Florida State College at Jacksonville was awarded a $10,000 Economic Mobility Grant from the Bank of America Charitable Foundation to prepare students for meaningful employment and support the College’s capacity to deliver practical cybersecurity education.<\/p>", "column": 1 

  }, 
  { "month": "August", "imageUrl": "../assets/monthly-images/august.jpg", "copyOne": "<p>Faculty and staff celebrated the start of a new academic year at Convocation, embracing our theme of Achieve @ FSCJ. Through an enlightening student panel, attendees gained the ability to hear first-hand stories of student success and areas of opportunity to elevate the experience for the students we serve. Additionally, Dr. Rebecca Reeder brought statistics to life with her comedic, and even athletic, illustration of our student make up.<\/p>", "column": 1 

  }, 
  { "month": "September", "imageUrl": "../assets/monthly-images/september.png", "copyOne": "<p>Florida State College at Jacksonville was ranked 10th on the list for 30 Best Online Community Colleges for 2017 by College Choice. College Choice correlates data from Aspen Institute’s College Excellence Program and individual community colleges as they consider several factors including first year retention rates, three-year graduation rates, credentials awarded and other criteria.<\/p>", "column": 2 

  }, 
  { "month": "October", "imageUrl": "../assets/monthly-images/october.png", "copyOne": "<p>Florida State College at Jacksonville was named one of 150 community colleges eligible to compete for the 2019 Aspen Prize for Community College Excellence, the nation’s signature recognition of high achievement and performance in America’s community colleges. This is the second time in the last three years FSCJ has been ranked in the top 10%.<\/p>", "column": 2 

  }, 
  { "month": "November", "imageUrl": "../assets/monthly-images/november.jpg", "copyOne": "<p>Florida State College at Jacksonville held its first Business Speaker Series event, presented by First Florida Credit Union. The series is made possible by a $250,000 commitment from First Florida Credit Union to support initiatives that will help local students and community members become future business leaders. The funding helped launch the series and will bolster the College’s Financial Skills Academy over the span of five years.<\/p>", "column": 2 

  }, 
  { "month": "December", "imageUrl": "../assets/monthly-images/december.jpg", "copyOne": "<p>Florida State College at Jacksonville was honored to welcome some of our distinguished alumni members who are advocates for higher education and the future of students in our community. Alumni play a critical role in helping FSCJ deliver on our mission and we are proud to have them as partners in our student success efforts.<\/p>", "column": 2 }];

// Parse in page data
var myData = monthlyData,
  modalListElements = document.getElementsByClassName("modalMonth");
  console.log(myData);
// Generate month lists

$(document).ready(function () {
  // Define uls to be appended to by id
  var grouplist = $('#groups'), // Left side list for all months on modal
    columnOne = $('#columnOne'), // Months Jan-April on landing
    columnTwo = $('#columnTwo'), // Months May-Aug on landing
    columnThree = $('#columnThree'), // Months Sept-Dec on landing
    linkOpenTag = '<li class="landing listMonth landing-month" data-toggle="modal" data-target="#contentModal">', // Opening tag for month lists on landing
    linkCloseTag = '</li>'; // Closing tag for month lists on landing
  // Iterate through myData to fetch months
  $.each(myData, function () {
    // Concatenate list item links for month lists on landing
    var linkAppend = linkOpenTag.concat(this.month, linkCloseTag);
    // Full month list on fullpage modal
    $('<li class="modalMonth listMonth modal-list">' + this.month + '</li>').appendTo(grouplist);
    $(linkAppend).appendTo(columnOne);
  });
});
// Function to change display image
function changeImage(a) {
  document.getElementById("img").src = a;
}
// Find item in array with value matching input
function findWithAttr(array, attr, value) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}
//Main logic
$(function () {
  // Define variables
  var $monthTitle = $('#monthTitle'), // Represents display month on fullpage modal view
    $monthContent = $('#monthContent'); // Represents display copy on fullpage modal view
  // Update display information on click of month
  $('.listMonth').click(function () {
    // Define variables
    var txt = $(this).text(), // Set txt equal to string of clicked item
      index = findWithAttr(myData, 'month', txt), // Set index equal to index of clicked item's corresponding object in array
      i;
    // Update display image
    changeImage(myData[index].imageUrl);
    // Update display month
    document.getElementById("monthTitle").innerHTML = myData[index].month;
    // Update display text
    document.getElementById("monthContent").innerHTML = myData[index].copyOne;
    // Make sure the month that has been clicked shows as active on the fullpage modal view
    for (i = 0; i < modalListElements.length; i += 1) {
      if (modalListElements[i].innerHTML === txt) {
        $(modalListElements[i]).addClass('list-active');
        $(modalListElements[i]).siblings().removeClass('list-active');
      }
    }
  });
});
//For fullscreen modal
$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout(function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});
$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout(function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});