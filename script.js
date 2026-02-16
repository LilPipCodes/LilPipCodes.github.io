// Shared header and footer injection + mobile behavior
document.addEventListener('DOMContentLoaded',function(){
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  if(header){
    header.innerHTML = headerTemplate();
    wireHeader();
  }
  if(footer) footer.innerHTML = footerTemplate();

  // mark active link (desktop + mobile drawer)
  try{
    const path = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(a=>{
      if(a.getAttribute('href')===path || (a.getAttribute('href')==='index.html' && path==='')){
        a.classList.add('active');
      }
    });

    // also mark links inside the mobile drawer
    document.querySelectorAll('#mobile-drawer a').forEach(a=>{
      const href = a.getAttribute('href');
      if(!href) return;
      if(href===path || (href==='index.html' && path==='')){
        a.classList.add('active');
      }
    });
  }catch(e){/* ignore */}
  // Scroll reveal using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      })
    },{threshold:0.12});
    reveals.forEach(r=>obs.observe(r));
  } else {
    reveals.forEach(r=>r.classList.add('visible'));
  }

  // Header scroll shadow
  const headerEl = document.getElementById('site-header');
  function onScroll(){
    if(window.scrollY > 8) headerEl.classList.add('scrolled'); else headerEl.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
});

function headerTemplate(){
  return `
  <nav class="nav">
    <div class="brand">
      <div class="logo" aria-hidden>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="white" opacity="0.06" />
          <path d="M6 12c1.5-3 4.5-4 6-4s4.5 1 6 4" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>
          <circle cx="12" cy="12" r="2" fill="white" opacity="0.95" />
        </svg>
      </div>
      <div class="site-text">
        <div class="site-title">ITOS220-T:</div>
        <div class="site-subtitle">Final Project</div>
      </div>
    </div>

    <ul class="menu" role="menubar">
      <li>
        <a href="index.html" class="nav-link">HOME</a>
        <div class="dropdown" aria-hidden>
          <a href="overview.html">Overview</a>
          <a href="features.html">Features</a>
          <a href="types.html">Types</a>
          <a href="management.html">Management</a>
        </div>
      </li>

      <li>
        <a href="#" class="nav-link">LABORATORY ACTIVITIES</a>
        <div class="dropdown" aria-hidden>
          <a href="laboratory-active-directory.html">Active Directory: Creating Users</a>
          <a href="laboratory-dhcp-role.html">DHCP Role and Joining Workstations in Domain</a>
          <a href="laboratory-application-web-server.html">Application and Web Server</a>
          <a href="laboratory-raid-installation.html">RAID Installation</a>
          <a href="laboratory-group-policy-management.html">Group Policy Management</a>
          <a href="laboratory-file-server.html">File Server</a>
        </div>
      </li>

      <li>
        <a href="#" class="nav-link">WINDOWS INSTALLATION</a>
        <div class="dropdown" aria-hidden>
          <a href="windows-95.html">Windows 95</a>
          <a href="windows-98.html">Windows 98</a>
          <a href="windows-nt.html">Windows NT</a>
          <a href="windows-2000.html">Windows 2000</a>
          <a href="windows-me.html">Windows ME</a>
          <a href="windows-xp.html">Windows XP</a>
          <a href="windows-server-2003.html">Windows Server 2003</a>
          <a href="windows-vista.html">Windows Vista</a>
          <a href="windows-server-2008.html">Windows Server 2008</a>
          <a href="windows-7.html">Windows 7</a>
          <a href="windows-8.html">Windows 8</a>
          <a href="windows-10.html">Windows 10</a>
          <a href="windows-11.html">Windows 11</a>
          <a href="windows-bootable-usb.html">Bootable USB Creation</a>
          <a href="windows-bios-uefi.html">BIOS / UEFI Configuration</a>
        </div>
      </li>

      <li>
        <a href="#" class="nav-link">FINALS: TUP–TAGUIG DOMAIN</a>
        <div class="dropdown" aria-hidden>
            <a href="finals-part1.html">Part 1: Domain Controller</a>
            <a href="finals-part2.html">Part 2: Adding Users</a>
            <a href="finals-part3.html">Part 3: DHCP Server</a>
            <a href="finals-part4.html">Part 4: File Sharing</a>
            <a href="finals-part5.html">Part 5: RAID</a>
            <a href="finals-part6.html">Part 6: Remote Desktop</a>
            <a href="finals-part7.html">Part 7: Web Server</a>
            <a href="finals-part8.html">Part 8: Group Policies</a>
            <a href="finals-part9.html">Part 9: Windows Deployment</a>
        </div>
      </li>

      <li><a href="about.html" class="nav-link">ABOUT</a></li>
    </ul>

    <button class="hamburger" aria-label="Open menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <div class="mobile-drawer" id="mobile-drawer" aria-hidden>
      <div class="mobile-links">
        <a href="index.html">HOME</a>
        <a href="overview.html">Overview</a>
        <a href="features.html">Features</a>
        <a href="types.html">Types</a>
        <a href="management.html">Management</a>
        <hr>
        <a href="laboratory-active-directory.html">Active Directory</a>
        <a href="laboratory-dhcp-role.html">DHCP Role</a>
        <a href="laboratory-application-web-server.html">App & Web Server</a>
        <a href="laboratory-raid-installation.html">RAID</a>
        <a href="laboratory-group-policy-management.html">Group Policy</a>
        <a href="laboratory-file-server.html">File Server</a>
        <hr>
        <a href="windows-10.html">Windows 10</a>
        <a href="windows-11.html">Windows 11</a>
        <a href="windows-bootable-usb.html">Bootable USB</a>
        <a href="windows-bios-uefi.html">BIOS / UEFI</a>
        <hr>
        <a href="finals-part1.html">Finals — Part 1</a>
        <a href="about.html">About</a>
      </div>
    </div>
  </nav>`;
}

function footerTemplate(){
  return `
  <div class="footer-inner footer">
    <div class="footer-left">
      <h4>Operating Systems</h4>
      <p>This website serves as an academic project covering Windows OS installation, configuration, and management.</p>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="overview.html">Overview</a>
        <a href="management.html">Management</a>
      </div>
    </div>
    <div class="footer-right">
      <p><strong>STEFANIE MAE G. ESPINAR</strong></p>
      <p>BSIT-NS-2A</p>
      <p>© 2026 Operating Systems Project | TUP Taguig</p>
    </div>
  </div>`;
}

function wireHeader(){
  const btn = document.querySelector('.hamburger');
  const drawer = document.getElementById('mobile-drawer');
  if(btn && drawer){
    btn.addEventListener('click',()=>drawer.classList.toggle('show'));
  }
}
