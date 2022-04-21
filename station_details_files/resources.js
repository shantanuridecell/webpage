typeof Aura === "undefined" && (Aura = {});

(function() { 
	 function initAccessResources() {
			 $A.componentService.addModule('markup://force:customPerms', 'force/customPerms', ['exports'], null, {}); 
			 $A.componentService.addModule('markup://force:userPerms', 'force/userPerms', ['exports'], null, {}); 
	 };
	 if(Aura.frameworkJsReady)initAccessResources();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initAccessResources)}
})(); 
Aura.StaticResourceMap = {"Delete":{"":1612436686000},"calendareverything":{"powerpack":1620646232000},"Community_MyProfile_Name":{"":1612771995000},"PT_TimePicker_JS":{"rh2":1604109909000},"Community_MyProfile_Email":{"":1612771995000},"ridecelltest_community_flex_icon":{"":1631095617000},"jQueryUI":{"et4ae5":1645884234000},"HS_Jquery":{"rh2":1620149096000},"RequiredField":{"et4ae5":1587386781000},"Community_MyBookings_Date":{"":1612868130000},"ridecelltest_community_staticfiles":{"":1643787797000},"MessagingLogo":{"":1592245117000},"profileImg":{"":1612771995000},"NoAccess2_svg":{"et4ae5":1587386781000},"app":{"puzzel":1591773645000},"status_icons":{"":1584887424000},"Community_ReferAFriend_DownArrow":{"":1612774556000},"images":{"analyticsengine":1647465047000},"PT_JSZip":{"rh2":1620149097000},"GraphicsPackNew":{"":1591352344000},"locationImg":{"":1612362028000},"Community_MobileHeader_Login_MyRidecell":{"":1612879493000},"ScriveOneSendDocumentStep2":{"scrive":1621855365000},"linkedinsvg":{"":1592806300000},"LightningGraphicsPackExample":{"":1591352344000},"Chat_Avatar2":{"":1592244984000},"calendarapp":{"powerpack":1620646231000},"svg4everybody":{"rh2":1604109909000},"uxds":{"et4ae5":1645884235000},"bootstrap":{"et4ae5":1645884230000},"Bot_PerChat":{"":1612901049000},"moment":{"scrive":1621855365000},"Community_ActiveBooking_Calender":{"":1612362028000},"jQuery_UI":{"scrive":1635152860000},"ExactTargetStyles":{"et4ae5":1619270473000},"RequiredFieldG":{"et4ae5":1587386781000},"instagramsvg":{"":1592806289000},"ExactTargetImages":{"et4ae5":1645884226000},"Community_MyBookings_Vehicle":{"":1612868130000},"fsc_Quickchoice_Images":{"":1607004490000},"OneStarter":{"scrive":1635152857000},"SLDS0102":{"scrive":1635152860000},"ScriveLogo":{"scrive":1621855365000},"twittersvg":{"":1592806326000},"og_image":{"":1613470935000},"SLDS100":{"et4ae5":1645884230000},"facebooksvg2":{"":1592806342000},"Community_MyProfile_Address":{"":1612771995000},"Community_MyProfile_Phone":{"":1612771995000},"fuelUX":{"et4ae5":1645884232000},"ChatSettings2":{"":1613990282000},"ChatSettingsFile":{"":1591784796000},"webapp":{"analyticsengine":1647465047000,"powerpack":1620646234000},"SFStyleSheets":{"rh2":1591344860000},"mobileLandingImage":{"":1584887424000,"mobileLanding":1584887424000},"Chat_Avatar":{"":1591782702000},"SLDS":{"scrive":1635152858000},"ToyotaType_Book":{"":1591626760000},"DefaultCarImage":{"":1612882689000},"ridecelltest_community_share_icon":{"":1631095617000},"Community_ReferAFriend_RightArrow":{"":1612774556000},"aljs":{"scrive":1635152860000},"Tick":{"":1612436658000},"ToyotaTypeSemibold":{"":1591630058000},"jqueryforltng":{"":1591352346000},"slds":{"powerpack":1620646233000},"Community_MobileHeader_BookACar":{"":1612879493000},"VisualStrap_Resources":{"powerpack":1620646229000},"componentStyles":{"et4ae5":1587386781000},"ChatAvatar":{"":1591973102000},"PT_Resources_v1":{"rh2":1620149097000},"Tooltips":{"et4ae5":1619270475000},"us_ziptolatlong":{"powerpack":1608546524000},"Chat_Logo":{"":1591783267000},"SLDS202forLtng":{"":1591352346000},"sObjectRemote":{"powerpack":1608546524000},"ScriveOneSendIcon":{"scrive":1621855365000},"ScriveActionLogo":{"scrive":1621855365000},"highlightjs":{"":1591352346000},"Icons":{"scrive":1635152857000},"JB_Icon":{"et4ae5":1587386781000},"TwitterNewIm":{"":1613064113000},"beta_logo":{"":1606389106000},"Typeahead":{"et4ae5":1645884230000},"SiteSamples":{"":1591370520000},"jQueryUISlider":{"et4ae5":1645884235000},"Community_MyBookings_Station":{"":1612868130000},"favicon":{"":1606387723000},"MciLogin":{"et4ae5":1613224868000},"Ridecell_Community_Logo":{"":1631095617000},"ScriveResources":{"scrive":1635152860000},"modStyle":{"et4ae5":1587386781000},"jQuery":{"et4ae5":1619270477000},"PT_TimePicker_CSS":{"rh2":1604109909000},"Community_MobileHeader_Menu":{"":1612879493000},"Community_ActiveBooking_Time":{"":1612362028000},"desert_svg":{"et4ae5":1587386781000},"Ridecell_signatur_logo":{"":1592486743000},"LightningMarketingCloudStyles":{"et4ae5":1587386781000}};

(function() {
function initResourceGVP() {
if (!$A.getContext() || !$A.get('$Resource')) {
$A.addValueProvider('$Resource',
{
merge : function() {},
isStorable : function() { return false; },
get : function(resource) {
var modStamp, rel, abs, name, ns;
var nsDelim = resource.indexOf('__');
if (nsDelim >= 0) { ns = resource.substring(0, nsDelim); name = resource.substring(nsDelim + 2); } else { name = resource; }
var srMap = Aura.StaticResourceMap[name];
modStamp = srMap && srMap[ns = ns || Object.keys(srMap)[0]];
if (!modStamp) { return; }
rel = $A.get('$SfdcSite.pathPrefix');
abs = $A.get('$Absolute.url');
return [(abs || rel || ''), '/resource/', modStamp, '/', ns === '' ? name : ns + '__' + name].join('');
}
});
}
}
if(Aura.frameworkJsReady)initResourceGVP();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initResourceGVP)}
})();