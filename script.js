var purl=window.location.href;
var hosta=window.location.hostname;
var hostArray=["userscloud.com","openload.com","4shared.com","mega.nz","adf.ly","sh.st","zippyshare.com","mi.cr"/*"","","","","","","","",""*/];
var i,flag=false;
for(i=0;i<hostArray.length;i++)
{
	if(hostArray[i]==hosta)
	{
		flag=true;
		break;
	}
}

if(flag)
{
	document.body.innerHTML+="<a href=\"http://www.autogeneratelink.com/?link="+purl+"\">goto autogeneratelink.com</a>";
}
