function capFirst(a){return a?a.charAt(0).toUpperCase()+a.slice(1):a}
function fetchLearnerGuruList(a){webctxt=a;var t=a+"?route=common/customer/number_gurus_customer_list";$.ajax({url:t,type:"POST",success:function(a){(guru_learner_data=a).hasData&&updateLearnerGuruList(guru_learner_data)},error:function(a){console.log(a)}})}
function updateLearnerGuruList(a){var customer_no="";var guru_no="";if(a.number_booking>10)
{customer_no=a.number_booking}
if(a.gurus_available>10)
{guru_no=a.gurus_available}
window.innerWidth<=767?showRecords=4:showRecords=8,html_code="",page=1,""!=a.customer_data&&(html_code+="<div class='customerlist'><div class='title_box'><h3 class='ttnone text-center'>"+customer_no+" Learners Served <br/><span>",a.type&&(html_code+=a.customer_served),html_code+=" in ","all"!=a.formatted_area&&""!=a.formatted_area&&(html_code=html_code+a.formatted_area+", "),html_code+=a.formatted_city,html_code+="</span></h3></div><div id='customer-list' class='row'>",a.customer_data.length>showRecords?loop=showRecords:loop=a.customer_data.length,html_code+=addRowsForLearners(0,loop,page)),""!=a.gurus_data&&(count=0,html_code+="<div class='customerlist'><div class='title_box'><h3 class='ttnone text-center'>"+guru_no+" Gurus Available <br/><span>",a.type&&(html_code+=a.gurus_available),html_code+=" in ",a.formatted_area&&(html_code=html_code+a.formatted_area+", "),html_code+=a.formatted_city,html_code+="</span></h3></div><div id='gurus-list' class='row'>",a.gurus_data.length>showRecords?loop=showRecords:loop=a.gurus_data.length,html_code+=addRowsForGuru(0,loop,page)),$("#first_insert").append(html_code),$("#scroll_here").animate({scrollTop:"0px"},300),$(document).on("click","#more-customers",showMoreRecordsLearners),$(document).on("click","#more-gurus",showMoreRecordsGuru)}
function addRowsForLearners(a,t,e){for(data=guru_learner_data,console.log(data),html_code="",i=a;i<t;i++){var o=i+1;html_code=html_code+"<div class='col-md-3'><div class='customer-box'><div class='row'><div class='col-sm-12 col-xs-9'><div class='listing-image-box' style='position: relative;''><span>"+o+"</span> </div><div class='customer-name'><a>",data.customer_data[i].first_name&&null!=data.customer_data[i].first_name&&(null!=data.customer_data[i].salutation?html_code=html_code+data.customer_data[i].salutation+" "+data.customer_data[i].first_name:html_code+=capFirst(data.customer_data[i].first_name)),html_code+=" </a></div><div class='location mt5 lszero'> <i class='fa fa-map-marker'></i>",data.customer_data[i].area?html_code=html_code+data.customer_data[i].area+", ":html_code=html_code+data.formatted_area+", ";var s=moment(data.customer_data[i].startdate).fromNow().replace("ago","").replace("in","");html_code=html_code+data.formatted_city+" </div><hr class='hr'><div class='maincolor lszero lh15'><span class=''>Home Tuitions for </span>"+data.customer_data[i].requirement+"</div> <div class='maincolor lszero lh15'><span class=''>Tutor for </span>"+data.customer_data[i].courses+" </div> <div class='maincolor lszero lh15'><span class=''>Assigned Tutor </span><a href='"+webctxt+"tutor-profile/"+data.customer_data[i].guru_id+"' class='name'>"+capFirst(data.customer_data[i].guru_name)+"</a> </div> <div class='maincolor lszero lh15'><span class=''>Learning since </span>"+s+"</div></div>    </div></div></div>"}
return html_code+="</div>",data.customer_data.length>t&&(html_code=html_code+"<div class='text-center'><button id='more-customers' class='btn btn-pink' data-myval='"+e+"'>Load More Learners</button></div>"),html_code}
function addRowsForGuru(a,t,e){data=guru_learner_data,html_code="";for(var o=a;t>o;o++){var s=o+1;html_code=html_code+"<div class='col-md-3'><div class='customer-box'><div class='row'><div class='col-sm-12 col-xs-9'><div class='listing-image-box' style='position: relative;''><span>"+s+"</span> </div><div class='customer-name'><a href='"+webctxt+"tutor-profile/"+data.gurus_data[o].smart_id_c,html_code+="'>",data.gurus_data[o].first_name&&null!=data.gurus_data[o].first_name?null!=data.gurus_data[o].salutation?html_code=html_code+data.gurus_data[o].salutation+" "+data.gurus_data[o].first_name:html_code+=data.gurus_data[o].first_name:null!=data.gurus_data[o].salutation?html_code=html_code+data.gurus_data[o].salutation+" "+data.gurus_data[o].last_name:html_code+=data.gurus_data[o].last_name,html_code+=" </a></div><div class='location mt5 lszero'> <i class='fa fa-map-marker'></i>",data.gurus_data[o].area?html_code=html_code+data.gurus_data[o].area+", ":html_code=html_code+data.formatted_area+", ",html_code=html_code+data.formatted_city+" </div><hr class='hr'> <div class='maincolor lszero lh15'><span class=''>Home Tutor for </span>"+data.gurus_data[o].expertise+" </div> <div class='maincolor lszero lh15'><span class=''>Joined on </span>"+moment(data.gurus_data[o].date_entered).format("Do MMM YY")+"</div><div class='maincolor lszero lh15'><span class=''>Last Active </span>"+moment(data.gurus_data[o].last_active).fromNow()+"</div></div>    </div></div></div>"}
return html_code+="</div>",data.customer_data.length>t&&(html_code=html_code+"<div class='text-center'><button id='more-gurus' class='btn btn-pink' data-myval='"+e+"'>Load More Gurus</button></div></div>"),html_code}
function showMoreRecordsLearners(){data=guru_learner_data;var a=$("#more-customers").data("myval");$("#more-customers").remove(),a+=1,html_code="",data.customer_data.length>showRecords*a?loop=showRecords*a:loop=data.customer_data.length,html_code+=addRowsForLearners(showRecords*(a-1),loop,a),$("#customer-list").append(html_code)}
function showMoreRecordsGuru(){data=guru_learner_data,html_code="";var a=$("#more-gurus").data("myval");$("#more-gurus").remove(),a+=1,data.gurus_data.length>showRecords*a?loop=showRecords*a:loop=data.gurus_data.length,html_code+=addRowsForGuru(showRecords*(a-1),loop,a),$("#gurus-list").append(html_code)}
var guru_learner_data,webctxt