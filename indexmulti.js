// t.me/andraz404 t.me/boterdrop
const _0x341a97=_0x4c57;(function(_0x5dc315,_0x39954c){const _0x3a6cef=_0x4c57,_0x7205bf=_0x5dc315();while(!![]){try{const _0xe7c5d4=parseInt(_0x3a6cef(0x16d))/0x1+-parseInt(_0x3a6cef(0x17a))/0x2+-parseInt(_0x3a6cef(0x167))/0x3*(parseInt(_0x3a6cef(0x194))/0x4)+-parseInt(_0x3a6cef(0x16c))/0x5*(parseInt(_0x3a6cef(0x166))/0x6)+-parseInt(_0x3a6cef(0x193))/0x7*(parseInt(_0x3a6cef(0x18d))/0x8)+-parseInt(_0x3a6cef(0x177))/0x9+parseInt(_0x3a6cef(0x18b))/0xa*(parseInt(_0x3a6cef(0x199))/0xb);if(_0xe7c5d4===_0x39954c)break;else _0x7205bf['push'](_0x7205bf['shift']());}catch(_0x35a803){_0x7205bf['push'](_0x7205bf['shift']());}}}(_0x4193,0xe4ee5));const axios=require('axios'),fs=require('fs'),querystring=require(_0x341a97(0x18e));let accounts=[],currentAccount=0x0;function _0x4c57(_0x52ce89,_0x420cee){const _0x419383=_0x4193();return _0x4c57=function(_0x4c579b,_0x23f5ef){_0x4c579b=_0x4c579b-0x166;let _0xb257bd=_0x419383[_0x4c579b];return _0xb257bd;},_0x4c57(_0x52ce89,_0x420cee);}function readAccounts(){const _0x3f46af=_0x341a97,_0x408faf=fs[_0x3f46af(0x173)](_0x3f46af(0x195),_0x3f46af(0x179)),_0x2dfc78=_0x408faf[_0x3f46af(0x183)]()['split']('\x0a');_0x2dfc78['forEach']((_0x8b76a0,_0x41285a)=>{const _0x56f673=_0x3f46af,_0x2d08ba=querystring[_0x56f673(0x18c)](_0x8b76a0['trim']()),_0x19820c=JSON[_0x56f673(0x18c)](decodeURIComponent(_0x2d08ba['user'])),_0x27bda7={'gameId':0x2,'initData':{'query_id':_0x2d08ba[_0x56f673(0x1a4)],'user':JSON[_0x56f673(0x168)](_0x19820c),'auth_date':_0x2d08ba[_0x56f673(0x184)],'hash':_0x2d08ba[_0x56f673(0x169)][_0x56f673(0x178)](/\r$/,'')},'externalId':_0x19820c['id'],'username':_0x19820c['username'],'firstName':_0x19820c['first_name'],'language':_0x19820c['language_code'],'lastName':_0x19820c['last_name'],'refId':''};accounts[_0x56f673(0x174)](_0x27bda7);});}async function loginAndClaim(){const _0x48695d=_0x341a97;if(currentAccount>=accounts[_0x48695d(0x170)]){console[_0x48695d(0x185)](_0x48695d(0x176));return;}const _0x22c424=accounts[currentAccount],_0x24abdf=JSON[_0x48695d(0x168)](_0x22c424)[_0x48695d(0x178)](/\s/g,''),_0x39f81a={'Content-Type':_0x48695d(0x19e)};try{const _0x581c71=await axios[_0x48695d(0x189)](_0x48695d(0x1a5),_0x24abdf,{'headers':_0x39f81a}),_0x26b489=_0x581c71['headers'][_0x48695d(0x192)],_0xaa256a=convertCookie(_0x26b489);console[_0x48695d(0x185)](''),console[_0x48695d(0x185)](_0x48695d(0x19f)),_0x581c71['data']['data']?(console[_0x48695d(0x185)](_0x48695d(0x172),_0x581c71[_0x48695d(0x186)][_0x48695d(0x186)]['id']),console[_0x48695d(0x185)](_0x48695d(0x1a6),_0x581c71['data'][_0x48695d(0x186)][_0x48695d(0x17c)]),console['log'](_0x48695d(0x190),_0x581c71['data'][_0x48695d(0x186)][_0x48695d(0x180)]+'\x20'+_0x581c71[_0x48695d(0x186)][_0x48695d(0x186)][_0x48695d(0x16a)]),console['log'](_0x48695d(0x1a3),_0x581c71[_0x48695d(0x186)][_0x48695d(0x186)]['capcha'])):console[_0x48695d(0x185)](_0x48695d(0x18a),currentAccount+0x1),console[_0x48695d(0x185)](''),console[_0x48695d(0x185)](_0x48695d(0x1a0),_0xaa256a),console[_0x48695d(0x185)](''),_0x581c71[_0x48695d(0x186)]['data']&&_0x581c71[_0x48695d(0x186)]['data'][_0x48695d(0x16e)]?await solveCaptchaAutomatically(_0x581c71[_0x48695d(0x186)]['data'][_0x48695d(0x16e)],_0xaa256a):await claimWithCookie(_0xaa256a),currentAccount++,await loginAndClaim();}catch(_0x93755d){console['log'](_0x48695d(0x1a1),_0x93755d),currentAccount++,await loginAndClaim();}}function convertCookie(_0x555e42){const _0x2c2335=_0x341a97;if(!Array[_0x2c2335(0x1a8)](_0x555e42))return _0x2c2335(0x17b);let _0x400d53='',_0x30ca2e='';_0x555e42[_0x2c2335(0x19a)](_0x447830=>{const _0x266f38=_0x2c2335;if(_0x447830['includes'](_0x266f38(0x191)))_0x400d53=_0x447830;else _0x447830['includes'](_0x266f38(0x171))&&(_0x30ca2e=_0x447830);});const _0x4772ea=_0x400d53[_0x2c2335(0x1a7)](';\x20')['filter'](_0x2aa001=>!_0x2aa001[_0x2c2335(0x18f)](_0x2c2335(0x17e))&&!_0x2aa001[_0x2c2335(0x18f)](_0x2c2335(0x175))&&!_0x2aa001['startsWith'](_0x2c2335(0x187))&&!_0x2aa001[_0x2c2335(0x18f)]('HttpOnly')&&!_0x2aa001['startsWith']('Secure')&&!_0x2aa001[_0x2c2335(0x18f)](_0x2c2335(0x182))),_0x146fb2=_0x30ca2e['split'](';\x20')['filter'](_0x54e633=>!_0x54e633[_0x2c2335(0x18f)](_0x2c2335(0x175))&&!_0x54e633[_0x2c2335(0x18f)](_0x2c2335(0x196))&&!_0x54e633['startsWith'](_0x2c2335(0x17e))&&!_0x54e633['startsWith'](_0x2c2335(0x17d))&&!_0x54e633[_0x2c2335(0x18f)]('HttpOnly')&&!_0x54e633[_0x2c2335(0x18f)](_0x2c2335(0x182))),_0x1d52dc=[_0x4772ea['join'](';\x20'),_0x146fb2[_0x2c2335(0x181)](';\x20')][_0x2c2335(0x19b)](Boolean)[_0x2c2335(0x181)](';\x20');return _0x1d52dc;}async function solveCaptchaAutomatically(_0x17db0f,_0x3c6b2e){const _0x282800=_0x341a97,_0x5df3ea=_0x17db0f['split']('\x20'),_0x164792=parseInt(_0x5df3ea[0x0]),_0x8dea00=_0x5df3ea[0x1],_0x593f31=parseInt(_0x5df3ea[0x2]);let _0x1a9254;switch(_0x8dea00){case'+':_0x1a9254=_0x164792+_0x593f31;break;case'-':_0x1a9254=_0x164792-_0x593f31;break;case'*':_0x1a9254=_0x164792*_0x593f31;break;case'/':_0x1a9254=_0x164792/_0x593f31;break;default:console['log'](_0x282800(0x19c),_0x8dea00);return;}console[_0x282800(0x185)](_0x282800(0x19d),_0x17db0f),console['log'](_0x282800(0x16f),_0x1a9254),await verifyCaptcha(_0x1a9254,_0x3c6b2e);}async function verifyCaptcha(_0x799d54,_0xfc0c7f){const _0x432d71=_0x341a97,_0x2e6ac3=_0x432d71(0x16b),_0x2dc8de={'Cookie':_0xfc0c7f};try{const _0x5cdb6e=await axios[_0x432d71(0x189)](_0x2e6ac3,{'code':_0x799d54},{'headers':_0x2dc8de});console[_0x432d71(0x185)](''),console[_0x432d71(0x185)](_0x432d71(0x188)),console[_0x432d71(0x185)](_0x5cdb6e[_0x432d71(0x186)]),await claimWithCookie(_0xfc0c7f);}catch(_0x4ac82c){console[_0x432d71(0x17f)]('Error\x20during\x20CAPTCHA\x20verification:',_0x4ac82c),currentAccount++,await loginAndClaim();}}function _0x4193(){const _0x235e6d=['expires=','All\x20accounts\x20have\x20been\x20processed.\x20Exiting\x20the\x20bot.','10962819bursJt','replace','utf8','976256ozCwIE','Invalid\x20cookie\x20format','username','secure','path=','error','firstName','join','SameSite','trim','auth_date','log','data','domain=','Verification\x20Response:','post','Login\x20failed\x20for\x20account:','20xtLLKv','parse','4040AxzRRP','querystring','startsWith','Name:','__cf_bm','set-cookie','18921RbjUXZ','163564gabenr','payload.txt','Max-Age=','Error\x20during\x20claiming:','Claim\x20Response:','30804268vmtUpX','forEach','filter','Unsupported\x20operator:','Auto\x20Solving\x20Captcha:','application/json','=======\x20t.me\x20boterdrop\x20=======','Cookie\x20Convert:','Error:','https://tgames-vivaftn.bcsocial.net/panel/games/claim','Capcha:','query_id','https://tgames-vivaftn.bcsocial.net/panel/users/login','Username:','split','isArray','174612qPhTjg','87aweQft','stringify','hash','lastName','https://tgames-vivaftn.bcsocial.net/panel/users/verifyCapcha','140bDxqBY','408854FLVThc','capcha','Result:','length','ci_session','User\x20ID:','readFileSync','push'];_0x4193=function(){return _0x235e6d;};return _0x4193();}async function claimWithCookie(_0x18eeda){const _0x41e092=_0x341a97,_0x2761c7=_0x41e092(0x1a2),_0x51c489={'Cookie':_0x18eeda};try{const _0xac8b09=await axios[_0x41e092(0x189)](_0x2761c7,{},{'headers':_0x51c489});console[_0x41e092(0x185)](''),console[_0x41e092(0x185)](_0x41e092(0x198)),console[_0x41e092(0x185)](_0xac8b09[_0x41e092(0x186)]),currentAccount++,await loginAndClaim();}catch(_0x5a622a){console['error'](_0x41e092(0x197),_0x5a622a),currentAccount++,await loginAndClaim();}}function startProcess(){console['clear'](),readAccounts(),loginAndClaim();}startProcess();
// t.me/andraz404 t.me/boterdrop
