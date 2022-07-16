function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  var ah=0,ngetikh;ngetikh=0;
  function ngetikC() {if(ah<ngetikh.length){kalimatc.innerHTML += ngetikh.charAt(ah);ah++;setTimeout(ngetikC,60);} 
  if(ah==ngetikh.length){setTimeout(otomatisc2,1000);}}
  
  function otomatisc2() {setTimeout(tombol,700);befanimkatac();setTimeout(animkatac,400);} 
  function befanimkatac(){kalimat.style.opacity="0";kalimatb.style.opacity="0";kalimatc.style.opacity="0";skalimatc=kalimatc1.innerHTML;kalimatc.innerHTML="";} 
  function animkatac() {kalimat.innerHTML = kalimat1.innerHTML;kalimatb.innerHTML = kalimatb1.innerHTML;kalimatc.innerHTML = kalimatc1.innerHTML;kalimat.style.opacity="1";kalimatb.style.opacity="1";kalimatc.style.opacity="1";}

  function otomatis2() {befanimkata2();setTimeout(animkata2,400);} 
  function befanimkata2(){kalimat.style.opacity="0";kalimatb.style.opacity="0";kalimatc.style.opacity="0";} 
  function animkata2() {mulaict();kalimat.innerHTML = kalimat2.innerHTML;kalimatb.innerHTML = kalimatb2.innerHTML;kalimatc.innerHTML = kalimatc2.innerHTML;kalimat.style.opacity="1";kalimatb.style.opacity="1";kalimatc.style.opacity="1";}
  
  function otomatis3() {befanimkata3();setTimeout(animkata3,400);} 
  function befanimkata3(){kalimat.style.opacity="0";kalimatb.style.opacity="0";} 
  function animkata3() {setTimeout(otomatis3a,3000);kalimat.innerHTML = kalimat3.innerHTML;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style.opacity="1";kalimatb.style.opacity="1";}
  
  function otomatis3a() {setTimeout(sbakhir,700);befanimkata3a();setTimeout(animkata3a,400);} 
  function befanimkata3a(){kalimatc.style.opacity="0";} 
  function animkata3a() {kalimatc.innerHTML = kalimatc3.innerHTML;kalimatc.style.opacity="1";}

  function otomatis3b() {befanimkata3b();setTimeout(animkata3b,400);} 
  function befanimkata3b(){kalimat.style="transform:scale(.3);";} 
  function animkata3b() {kalimatc.innerHTML = kalimatc3b.innerHTML;kalimat.style="transform:scale(1);";}

  function fangka(){angka.innerHTML = Math.floor(Math.random() * 25) + 5;}
  function henti(){clearInterval(tmer);setTimeout(ngetikC,1200);}
  
  function mulaihitung(){
  	tmer = setInterval(fangka,200);
      setTimeout(henti,2000);
  }
  
  function sbakhir(){Bn.style.display="none";setTimeout(stakhir,500);} function stakhir(){tmbl.innerHTML="💌 Kirim";Tombol.style="margin-top:10px;opacity:1;transform: scale(1)";ftom=5;fungsi=0;}
  
  async function lanjut(){
      fthilang();ftganti=1;
      setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(2);opacity:1;";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;margin-top:0;";
      Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      otomatisc2();jikakuis=1;
   }

  async function diterima(){
      fthilang();ftganti=2;
      setTimeout(ftmuncul,400);
      wallpaper.style="transform: scale(1);opacity:1;";
      bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;margin-top:0;";
      Tombol.style="opacity:0;transition:all .5s ease;transform: scale(.1);";
      otomatis2();
   }

  async function ditolak(){
  	if(fungsi==1){
  	Tombol.style="transition:all .3s ease;opacity:0";await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});tombol();
  	}
   }

  function mulaict(){
    var timeleft = 0;
    var downloadTimer = setInterval(function(){
    timeleft++;
    document.getElementById("ctimer").textContent = timeleft;
    if(timeleft >= 6)
      clearInterval(downloadTimer);
      if(timeleft==6){
      setTimeout(hentict,2000);
      }
    },1000);
  }
  function hentict(){
    wallpaper.style="transform: scale(2);opacity:1;";
      setInterval(createHeart,200);
      fthilang();ftganti=3;
      setTimeout(ftmuncul,400);otomatis3();
  }
