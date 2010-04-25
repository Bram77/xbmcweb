var config      = new Array();
config['xbmc']  = new Array();
config['app']   = new Array();

config['xbmc']['address']   = "localhost";
config['xbmc']['port']      = "8080";
config['xbmc']['username']  = "xbmc";
config['xbmc']['password']  = "xbmc";
config['xbmc']['debug']     = false;

config['app']['name']       = 'player';
config['app']['style_path'] = 'style/application/' +config['app']['name']+ '/';



//Do not edit below this line\\
var Xbmc            = new Xbmc(config['xbmc']);
var a_modules       = new Array();

a_modules[0]        = 'now_playing';
a_modules[1]        = 'media_browser';
a_modules[2]        = 'media_details';
a_modules[3]        = 'controls';
a_modules[4]        = 'status';

$(document).ready(function ()
{
    if (!Xbmc.JsonRpc.ping())
        alert("Could not connect to XBMC.\nMake sure the webservice is enabled.");
    else
    {
        for (var x=0; x<a_modules.length; x++)
            $('#' +a_modules[x]+ '_container').load('view/' +config['app']['name']+ '/'+a_modules[x]+'.html');
    }
});