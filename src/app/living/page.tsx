"use client"

import { LivingCardList } from "@/components/living/LivingCardList";
import React from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

export default function Living() {
  return (
    <main>
      <>
        {isBrowser &&
          <div>
            <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0" }}>
            <span style={{color:"#314FC0"}}>무료로</span> 새로운 삶을 경험해보세요
            </div>
            <LivingCardList />
          </div>
        }

        {isMobile &&
          <div  style={{width:"101vw", marginLeft:"-4vw", overflow:"hidden"}}>
            <div style={{ width: "100%", fontSize: "20px", fontWeight: "600", margin: "30px 0 20px 0", paddingLeft:"4vw" }}>
            <span style={{color:"#314FC0"}}>무료로</span> 새로운 삶을 경험해보세요
            </div>
            <div style={{width:"97%"}}>
              <LivingCardList />
            </div>
          </div>
        }
      </>
    </main>
  );
}
