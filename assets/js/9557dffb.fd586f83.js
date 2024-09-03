"use strict";(self.webpackChunkacs_portfolio=self.webpackChunkacs_portfolio||[]).push([[907],{6554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(4848),i=r(8453);const s={sidebar_position:3},a="Operating a Veteran-class Furuno Radar",o={id:"tech-writing/radars",title:"Operating a Veteran-class Furuno Radar",description:'This is a small section of the 81-page "Survival Guide" that I wrote for new cadets joining my ship, prior to transitioning to full-time technical writing.',source:"@site/docs/tech-writing/radars.md",sourceDirName:"tech-writing",slug:"/tech-writing/radars",permalink:"/acs-portfolio/docs/tech-writing/radars",draft:!1,unlisted:!1,editUrl:"https://github.com/ACStone-MTS/acstone-mts.github.io/docs/tech-writing/radars.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Writing a Basic Smart Contract in Rust",permalink:"/acs-portfolio/docs/tech-writing/contract"},next:{title:"A Fundamental Analysis of Bitcoin",permalink:"/acs-portfolio/docs/tech-writing/bitcoin"}},h={},l=[{value:"Upper Left",id:"upper-left",level:2},{value:"Upper Right",id:"upper-right",level:2},{value:"Lower Left",id:"lower-left",level:2},{value:"Lower Right",id:"lower-right",level:2}];function c(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"operating-a-veteran-class-furuno-radar",children:"Operating a Veteran-class Furuno Radar"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:'This is a small section of the 81-page "Survival Guide" that I wrote for new cadets joining my ship, prior to transitioning to full-time technical writing.'})}),"\n",(0,n.jsx)(t.p,{children:"This section of the guide will cover the functions specific to the Furuno Radars installed aboard OSG\u2019s Veteran Class tankers. We won\u2019t be covering basic electronic navigation or collision avoidance, although there will be some tips and tricks."}),"\n",(0,n.jsx)(t.p,{children:"The radar display will be split into five sections, four quadrants and the information screen on the right side. Each will be covered separately."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Radar Overlay",src:r(1083).A+"",width:"644",height:"469"})}),"\n",(0,n.jsx)(t.h2,{id:"upper-left",children:"Upper Left"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Upper Left",src:r(1967).A+"",width:"605",height:"610"})}),"\n",(0,n.jsxs)(t.p,{children:["Starting with the top left of the display, we see the ",(0,n.jsx)(t.strong,{children:"Range"}),", which shows us both the overall range that the radar is currently set to and the distance between rings if they are displayed."]}),"\n",(0,n.jsxs)(t.p,{children:["Next to this is the ",(0,n.jsx)(t.strong,{children:"Display Type"}),", which can be changed from Radar display to Plotter. The Plotter display adds latitude and longitude and removes the outer ring of the radar."]}),"\n",(0,n.jsxs)(t.p,{children:["The last section of the top line is the ",(0,n.jsx)(t.strong,{children:"Reference Point"}),". This can be used to offset the radar display from the Antenna location to the Consistent Common Reference Point or CCRP. This is a location on your ship, preset into the radar, where all horizontal measurements (Range, Bearing, Relative Course, Relative Speed, CPA and TCPA) are normally referenced."]}),"\n",(0,n.jsxs)(t.p,{children:["The next line is the radar display\u2019s ",(0,n.jsx)(t.strong,{children:"Orientation"}),", and can be set between North Up, Course Up and Head Up. You can also choose between True Motion and Relative Motion."]}),"\n",(0,n.jsxs)(t.p,{children:["The third line is the radar display\u2019s ",(0,n.jsx)(t.strong,{children:"Antenna"}),", or whether it is using the XBand (3cm) or S-Band (10cm) radar."]}),"\n",(0,n.jsxs)(t.p,{children:["The fourth line is the ",(0,n.jsx)(t.strong,{children:"Pulse Length"}),". A longer pulse gives greater accuracy at a distance, while a short pulse gives more detail at a shorter distance."]}),"\n",(0,n.jsxs)(t.p,{children:["The fifth line is the automatic ",(0,n.jsx)(t.strong,{children:"Picture"})," set up. You can choose between multiple preset configurations specifically for certain scenarios. There are four user defined Pictures (1 \u2013 4), then Near, Near Buoy, Harbor, Rough Sea, Far, Far Buoy, Coast and Ship. Most of these settings are designed for 12 NM or less, save for Far Buoy and Ship, so you\u2019re better off using Picture 1 with your own settings in most scenarios."]}),"\n",(0,n.jsxs)(t.p,{children:["Below the boxes, the first option is ",(0,n.jsx)(t.strong,{children:"IR or Interference Rejector"}),", which aids in the reduction of clutter due to other radars operating in the area. If you are having strange radar readings, and there are multiple other ships in the area, try increasing your IR setting."]}),"\n",(0,n.jsxs)(t.p,{children:["Next is ",(0,n.jsx)(t.strong,{children:"Echo Stretch"}),", which enlarges targets in the range and bearing directions to make them easier to see. (This will also stretch sea clutter!)"]}),"\n",(0,n.jsxs)(t.p,{children:["The third text option is ",(0,n.jsx)(t.strong,{children:"EAV or Echo Averaging"}),". This option reduces sea clutter by only showing radar returns that have a stable, repeating return. This will significantly reduce random sea clutter that appears in constantly differing locations. Each scan of the radar will reduce randomized sea clutter in brilliance, until it is no longer visible."]}),"\n",(0,n.jsxs)(t.p,{children:["The final option is ",(0,n.jsx)(t.strong,{children:"Auto Rain"}),", which is similar to options we\u2019ll cover in the upper right quadrant. It will automatically adjust to remove interference and clutter from rain storms."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Auto Rain reduces much more clutter than other options. Small, fast moving targets can be removed along with rain clutter. A target that the radar believes is sea clutter, may just be a small fishing boat enroute to collision."})}),"\n",(0,n.jsx)(t.h2,{id:"upper-right",children:"Upper Right"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Upper Right",src:r(976).A+"",width:"605",height:"610"})}),"\n",(0,n.jsxs)(t.p,{children:["At the top of the Upper Right Quadrant, we have selectors for the three picture modification slides. ",(0,n.jsx)(t.strong,{children:"Gain"}),", ",(0,n.jsx)(t.strong,{children:"Sea"})," and ",(0,n.jsx)(t.strong,{children:"Rain"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Gain"})," adjusts the sensitivity of the radar receiver. The higher you set your gain, the more aggressive the radar return will be."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Sea"})," adjusts sea clutter."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Rain"})," adjusts rain clutter."]}),"\n",(0,n.jsxs)(t.p,{children:["Next is the ",(0,n.jsx)(t.strong,{children:"Tune"})," bar, which should be set to auto and should generally return a bar that is about 2/3 full. If it is significantly outside of this range, you should look into having the radar serviced."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"As you lower your range, you will require less gain. 50 may be okay for a 16 or 24 nm scale, while 15 to 20 may be plenty for one to three nautical miles."})}),"\n",(0,n.jsxs)(t.p,{children:["Below these four sliders is the ",(0,n.jsx)(t.strong,{children:"Cursor Position"}),", which will return the Latitude and Longitude of your cursor location on the radar screen."]}),"\n",(0,n.jsxs)(t.p,{children:["Next is the ",(0,n.jsx)(t.strong,{children:"Range"}),", ",(0,n.jsx)(t.strong,{children:"Bearing"})," and ",(0,n.jsx)(t.strong,{children:"Time To Go"})," of your cursor. You can also set this to show an X/Y coordinate in nautical miles of your cursor, with the ship as the center of the plane."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also set and use the ",(0,n.jsx)(t.strong,{children:"Trial"})," function, which should function the same as the Trial Mode of whatever radar you took your electronic navigation class on."]}),"\n",(0,n.jsxs)(t.p,{children:["The large ",(0,n.jsx)(t.strong,{children:"Menu"})," button functions the same as the Menu button the keyboard."]}),"\n",(0,n.jsx)(t.h2,{id:"lower-left",children:"Lower Left"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Lower Left",src:r(3612).A+"",width:"606",height:"610"})}),"\n",(0,n.jsxs)(t.p,{children:["The Lower Left Quadrants starts with your ",(0,n.jsx)(t.strong,{children:"Parallel Index Lines"}),". You can scroll through PI 1-6 and activate them by left clicking. You can thenadjust the bearing and distance using either the mouse\u2019s scrollwheel, orthe EBL/VRM dials on the keyboard."]}),"\n",(0,n.jsxs)(t.p,{children:["Below this is the ",(0,n.jsx)(t.strong,{children:"Mark Selector"}),". You can scroll through all the available navigation marks, which can then be placed on the radar by clicking ",(0,n.jsx)(t.strong,{children:"Enter\r\nMark"})," on the keyboard. ",(0,n.jsx)(t.strong,{children:"Map On/Off"})," indicates whether the user placed marks will appear or not."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Brilliance"})," slider is below this and can be used to switch between preset color palettes, and to adjust the overall brightness of the screen. You can also right click on the slider to bring up the Brilliance Menu, where specific colors can be modified."]}),"\n",(0,n.jsxs)(t.p,{children:["In the far lower left corner, you have ",(0,n.jsx)(t.strong,{children:"HL OFF"}),", which allows you to turn off the header line, and ",(0,n.jsx)(t.strong,{children:"TX STBY"}),", which toggles the radar between transmitting and standing by."]}),"\n",(0,n.jsxs)(t.p,{children:["To the right of this are the two ",(0,n.jsx)(t.strong,{children:"EBL boxes"}),". Clicking will activate them, after which you can use the EBL dial on the keyboard to adjust them."]}),"\n",(0,n.jsxs)(t.p,{children:["The final option here is the first ",(0,n.jsx)(t.strong,{children:"Drop Mark"}),". These marks can be used to measure the range and bearing of a fixed point. To turn off a Drop Mark, hold down the left click button on top of the DROP1 or DROP2 box."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Drop marks will remain stationary, even if the ship moves a significant distance away. Always clean up your drop marks when you're done using them."})}),"\n",(0,n.jsx)(t.h2,{id:"lower-right",children:"Lower Right"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Lower Right",src:r(3785).A+"",width:"606",height:"610"})}),"\n",(0,n.jsxs)(t.p,{children:["The final Lower Right Quadrant starts with the ",(0,n.jsx)(t.strong,{children:"Target List"})," box, which will display a list of all AIS targets sorted by distance. The list will appear to the right in the information boxes."]}),"\n",(0,n.jsxs)(t.p,{children:["The next set of boxes are the two ",(0,n.jsx)(t.strong,{children:"Acquisition Zone"})," selectors, which will allow you to set up a zone where any return passing through will be auto acquired as a TT Target."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Alarm zones should not be used for acquiring TT targets in lieu of the Mate on Watch standing an efficient and prudent radar watch. The radar does not know if a target is dangerous or relevant, but you should."})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Alarm Zones"})," are similar but will simply alarm when any returns pass through as an early warning."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Trails"})," options are below the acquisition zones and allow you to set the radar to return a trail behind all radar returns. This can be used to further determine the past movements of a vessel."]}),"\n",(0,n.jsxs)(t.p,{children:["To the far left on the bottom row is the second ",(0,n.jsx)(t.strong,{children:"Drop Mark"})," and functions the same as the first in the lower left quadrant."]}),"\n",(0,n.jsxs)(t.p,{children:["Your two ",(0,n.jsx)(t.strong,{children:"VRM"})," boxes can be clicked to activate their respective VRMs, which can be altered by using the VRM dial on the keyboard."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"CU/TM reset"})," will reset the ship\u2019s location the radar when you are using a True Motion mode. It will place your current course up and the ship \xbc of the total radar distance from the edge currently astern."]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, the ",(0,n.jsx)(t.strong,{children:"Alarm Ack"})," button will acknowledge any radar alarms you get."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3612:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/lowerleft-e92578b3805b8e7e71421d671de31e83.png"},3785:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/lowerright-b16d5abb28821ff68cf08a1178c5ec2b.png"},1083:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/radar1-6a01a6f0936c4658d439a5ee703a3f5b.png"},1967:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/upperleft-0ec90c14b6f1104a5fe0ff8b8d65b16a.png"},976:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/upperright-197861af420ada9c015f80f80fd07b6f.png"},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);