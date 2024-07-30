"use client";

import { cardPriceText } from "@/lib/stringUtil";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function HouseCard({ data, className }: { data: any; className?: string }) {
  const houseImage = data["house_img_urls"].split(",");

  return (
    <div className={`${className ? `${className} ` : ""}col-md-4 col-lg-3`}>
      <Link
        className="card text-decoration-none"
        style={{ width: "100%", border: "none" }}
        href={`/house/${data.house_id}`}
      >
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ width: "100%", height: "280px" }}
        >
          {houseImage
            ?.filter((_, i) => i < 6)
            .map((e, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    width={300}
                    height={300}
                    src={e || "/blur_image.png"}
                    alt={`${data["house_name"]}_${i}`}
                  />
                  {/* <div
                    className="d-flex justify-content-left mb-2"
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      zIndex: "10",
                    }}
                  >
                    {data.has_model === "1" && (
                      <div
                        className="badge me-1 text-white rounded-3 text-center align-self-center"
                        style={{
                          backgroundColor: "#136E11",
                          fontWeight: "500",
                        }}
                      >
                        모델하우스
                      </div>
                    )}
                    {data.is_hut === "1" && (
                      <div
                        className="badge me-1 text-white rounded-3 text-center align-self-center"
                        style={{ backgroundColor: "#3284e8" }}
                      >
                        농막주택
                      </div>
                    )}
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="card-body w-100" style={{ height: "160px", border: "none", padding: "5px" }}>
          <div className="d-flex flex-column" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between">
              <div
                style={{
                  fontSize: "15px",
                  color: "gray",
                  marginTop: "3px",
                  width: "auto",
                }}
              >
                {data["company_name"]}
              </div>
              {/* <div style={{ fontSize: "16px", width: "auto" }}>★4.8</div> */}
            </div>

            <div
              className="card-title text-nowrap"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {data["house_name"]}
            </div>

            <div className="row d-flex justify-content-between">
              <div style={{ width: "auto", marginTop: "-7px" }}>
                <div style={{ fontSize: "15px", fontWeight: "500" }}>{cardPriceText(data["final_price"])}</div>
              </div>
              <div style={{ width: "auto" }}>
                {data["discount_rate"] > 0 && (
                  <div
                    style={{
                      color: "#314FC0",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {data["discount_rate"]}%
                  </div>
                )}
              </div>
            </div>

            <div className="row" style={{ marginBottom: "10px" }}>
              <div className="d-flex justify-content-start px-1" style={{ width: "33%" }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect opacity="0.8" width="30" height="30" fill="url(#pattern0_1672_959)" />
                  <defs>
                    <pattern id="pattern0_1672_959" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_1672_959" transform="translate(-0.001) scale(0.002)" />
                    </pattern>
                    <image
                      id="image0_1672_959"
                      width="501"
                      height="500"
                      xlinkHref="data:image/png;base64,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7Ow1fMZ54i9Qdq2/0Tz65Gfx1BI11iXqABDCZ+oAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAhRB0AQog6AIQQdQAIIeoAEELUASCEqANACFEHgBCiDgAJSin/AL1n57eXtEZYAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
                <div
                  style={{
                    textAlign: "center",
                    width: "auto",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  {data["total_floor_area"]?.toFixed(1) || "NaN"}평
                </div>
              </div>
              <div className="d-flex justify-content-start px-1" style={{ width: "29%" }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect opacity="0.8" width="30" height="30" fill="url(#pattern0_1672_957)" />
                  <defs>
                    <pattern id="pattern0_1672_957" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_1672_957" transform="translate(-0.001) scale(0.002)" />
                    </pattern>
                    <image
                      id="image0_1672_957"
                      width="501"
                      height="500"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <div
                  style={{
                    textAlign: "center",
                    width: "auto",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  {data["room_count"]}개
                </div>
              </div>
              <div className="d-flex justify-content-start px-1" style={{ width: "29%" }}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect opacity="0.8" width="30" height="30" fill="url(#pattern0_1672_958)" />
                  <defs>
                    <pattern id="pattern0_1672_958" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_1672_958" transform="translate(-0.001) scale(0.002)" />
                    </pattern>
                    <image
                      id="image0_1672_958"
                      width="501"
                      height="500"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAH0CAYAAAAkFLS0AAAACXBIWXMAAAsSAAALEgHS3X78AAAYwklEQVR4nO3d7XHdNtqAYXon/50O7K3A3gqsrcBKBZYriLYCCBXscQWRKohcwcodSBW8VgdRBXoHCbSjdexYxCF5wIfXNaPJH+d8UB/3AQiCz+7v7wcAYP3+5nsIADGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKIOAEGIOgAE8YNvJE+Vc/5xGIbXex6wzymlzw46wPSe3d/fO6z8Sc75aBiGoxrx8vVi4qN0NwzD9aOvy5TSb74TAO1Enf+qIT8ZhuF4GIbnBzgyN8MwnJcvgQcYT9QpMS8hP5thNL6Pi/KaTNUDPJ2ob1inMf+SuAM8kahvUM65nCPfDcPwZiXvvpx/36WUzjp4LQDdEvWNyTmf1tH5Ic6Z76uccz82agf4OlHfiHo5Whmdv1v5Oy6j9pOU0mUHrwWgK6K+ATXoV8MwvAr0bt+nlM47eB0A3bCjXHBBg178Uhf6AVCJemCBg/5A2AEeMf0e1AaC/thPzrEDGKlHtttI0IvzepkewKa5oUtA9bK1KVe5f6qj/rJHe9m+9bp1G9ca35d1X/njiTa+eV63lxV2YNNMvweTc35Z47vvdeg3dbQ/641WHu03P8WHkGyDGmDLRD2YnPPVnjvF3dZtWRe9XGzCXe7+bnMaYKucUw+kjnr3iWLZZ/31Ia7/TimVKf3y+v+150PtJnpJAKtjpB7InqP0bqau64eTyz1OIfyjfEiY+GUBdM9IPYg9R+ldnYtOKV3VhXR3jQ9xOvFLAlgFUY+jdROWix4Xl9WR9lHj//6uXqcPsCmiHkAN2HHDO7nteVRbw956jr3leACsmqjHcNx4/vlkzsvVppBS2tXr5McyBQ9sjqjH0DJNfVHPXa9By6mFV/WafYDNEPUYWqK+mk1a6nXnFw3/qyl4YFNEfeXqaHTsVqsfV7hBS8v15+7gBmyKvd/Xr2WKefHNZSbQ8j7LFPxlveZ91u1uAXpg85mVyzmXafQ05l2klJ6t4V3XWYiTOo0+xR3nPta4r/FDDcB3GalvT8tK8kXlnE9qzPfdB/5Lb8tXznlXZyt29okHIhH19Ru7SK7b7VNzzsf13PkUt2P9K+Xyv5/LV865LMA7NTUPRGCh3PZ0F68yzV7Pff+6QNC/VG75+rnegx5g1USdg6qj8+s6NX4oZeT+75zztWvbgTUTdQ6mntv+dY+7sU2tLMa7rh80AFZH1Flc2au+3ib25w6PfvmA8WtdrAewKqLOourNZ/a57/tSfsk5u/QNWBVRZzGPgj7FNedLeFf3AQBYBVFnSWsK+oNkKh5YC1FnEXUqe21Bf7DLOb/u46UAfJvNZ5hdHem+m/B5PtZR//WXt4/NOR/VfeKP6tcU172XxXPn5bFtUgP0TNSZVb3uu+UOa1+6q4+z+6uwPor874vcauRPJ7gO/lV9HOfYgW6ZfmduuwmuQ89l9J1SOhs7Ui6RTymV687/McG+98nmNEDPjNSZTR0l7zNCvik3dkkp7b1ffX2Mo7od7NkeHzTOG/bbB1iEkTpz2mequtxo5WiKoD+WUtrVKN81PsSb+mEFoDuizixq+Fo3mLlIKZ3MtSitflB4vUfY3fwF6JKoM5fWa7t/D/rc35V6H/XWEftb59aBHok6k6s7x7Vcwnaz5Ci4jthbP0DYkAbojqgzh9a7nM025f4tKaXLet37WKIOdEfUmUPLQrKLqRfFjdAyO/DCLnNAb0SdObRE/fJQ34l6fv2i4X+1Ch7oiuvUmVRdQNayNetvB75UrGXa/2ii3fIAJiHqTK11Svo/K/xOmH4HumL6naltKXRT3CwGYDKiztQ2df2269WBnog6U9ta5EQd6IaoA0AQog4AQYg6AAQh6kztamNH9HMHrwHgd6LO1LYU9Zu6Gx1AF0SdSaWUStQ/beSouq860BVRZw7HGwj7+/oBBqAbos7kyu1TU0plX/T3jbc17dVtvfHL31NK535ygN7Y+53Z1PCJH8BCjNQBIAhRB4AgRB0AghB1AAhC1AEgCKvfmU3O+aRes/62Psdt3XHubIqd2L7y+Df18XcTP365PO/51I8PMLVn9/f3DuqK5ZxLZN6MeAc5pXQ25zvOOf9YL2V7+41/cjcMw0lK6XKPx7/8i/c9xePP9voB5mL6nTn8VRCHOur9Nef8uvG5z7/zQWaKx5/z9QPMQtSZVM756DtBfGw39rnX/vgAcxJ1pnYy4vHe5Jxfjnz+uR9/zE1aWh4fYDaiztTGRq63f//jzK8HYDaiDgBBiDoABCHqTG3s9PVYprsBvkHUmdqrmY/oC98xgK8TdQAIQtRhP3OfbgB4MlGH/dhVDuiGqMP/shAPWC1R59Dmnr4e+/hjF+Jdjfz3ALMRdaZ2O/Lxxk5f3838+ACrJepMbe77jF/7jgF8nahzaL1FeuxMA0A3RJ1D+23m5x97znvumQaA2Yg6hzZ31Mc+/tz/HmA2os7ULkc83m1Kaez0+9ofH2A2os7Uzkeclz5reO65H/9yxOPvGh4fYDaizqRSSmU6+vgJl55dpJTOxz53Z48v6kBXRJ3J1SnpsjNb/sqo99MwDD+llE5an/c7j/9xwsf/MMfjA8zl2f39vYO7Yjnnsrr7zYh3kFNKLdPSAHTOSB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCB+8I0ElpJzfj0Mw49bPeAppasOXgaBiTowm5zz8TAM5avE/NXWj3TOufznbhiGEvfL8pVS+u3wr4woRB2YVM65jMTPhmE4GYbhuaP7J+WYvK1fv+ScL4ZhODeKZwrOqQOTyTmXmH8ehuFnQX+yd8Mw/CfnfF4/EEEzUQf2VmKUcy4jzSTmzUrcP+ecj1b6+umAqAN7qYvfStDfOJJ7e15H7Scrfx8ciKgDzep08aVFcJP7RdhpIerAPsoI/YUjOItfTMUzlqgDTeqiOCP0eV1aPMcYog6MlnN+WRfFMa9yjv3cMeapRB1oITTLeWsanqcSdWCUuoDLSvdlnW3pzdLu2f39vcPXqXou7fV3Xt1u5HnNC6Ms9nBcN5Zhee/rxj6H9DmldOjXwF8Q9c482iv7yKpigvlUP4RebXG/83o9f/ndPg2wQc+nh/3rU0rXHbweKlHvQB2Rnwb5ZYev+VdKaefI/Pf3/SrQlQMl8Gf2ru+DqB9Yzvm0ni8Tc6LKKSXnhB+pYf8c7Pe+xP3E9PxhifqBPNqJy4IjIrtLKbnO+ivqdf7RLgsst5U9TSlZt3MgVr8fQD23di3obIA/7t8W8dg8t8XtYYn6wuqmHbbWZCs2tyDuqYJPUwv7gYj6gh5NuTt/zlY4v7pdwn4Aor4se2WzNaK+bbt6upGFiPpC6jaPNu0AtuR53ZuAhYj6clzSA2zRG9PwyxH1BdRRupXuwFYZ1CxE1JdxuoU3CfANL+oW2MzsBwd4XnXF+9vGJ/l9r+yU0uVa3i+x5ZztVnVYH1JKBxkkTLB3/XG9+ocZifr8Wu+D/N6uTMAXDnbdf71xy3XOede4d717wi/A9Pv8Wi7n+CDoQI/qHfaO65awY7yoM5fMSNTnN/bT6Z1FJUDP6m54LZequWZ9ZqLen8st3msaWB2ziR0S9f7YgQvonlus9knUASAIUe+Pc05A9+zp3idRn9/1yGd4W2/PCtCzluvlx/49ZCRRn1/LeadLl34Avaq7w70b+fLuLAKen6jP76rhGcqmDldG7EBv6s1ZWla+t/wtZCQ7ys2s7MKUc74tGy+MfKYS9v/LOX+svwymrYCX9QZRh3BUN50Zu5PcA1vELkDUl3G5x73U3+6xdzwQy7uGae9eiPoCTL8vo2XnJYAoLpxPX4aoL6Bu0nAR/o0CfJ2trxci6ss5bbgBAsDafbD73HJEfSF16ulkE28W4A+3RunLEvUFpZQuTcMDG1FmJo+dS1+WqC8spXQi7EBwJehH5ZJe3+hlifoB1LDnzb1xYAtuBf1wRP1AUkrlPNNPFs8BgZRZyNeCfjiifkD1HHvZCvbDZg8CEMGnYRj+WWYhnUM/LDvKHVj9BTjNOe/qfspvNn1AgLV5n1Jq2QueGRipd6Jcx5lSOqqfeAHW4ELQ+2Kkvn4XjXdMghb/cdQOqkxxz3a3s5zz/cj/xX7unRH19fs85y85PJazizb4H86fd8b0OwAEIeoAEISoA0AQog4AQYg6AAQh6gAQhKgDQBCiDgBBiDoABCHqABCEqANAEKK+fvZeBuB3or5+11s/AAD8QdQBIAhRB4AgRH39ftz6AQDgD6K+fq+3fgAA+IOoA0AQog4AQYg6MCdrPmBBor5+L7d+AOiaNR8rkXM+2voxiOCHrR+ADn0ehuHNiJcl6vTsKOd85jsUU0rpauvHoDei3p/PI1+R6U2WdDMMw6sRz/dm5IdUDscAIQDT7/0Zu5f7mD+wsC/3GohrbNRvt37AeiTq/Rm9l3vO2SdsluJeA4c15/Efu/5h7KwiCxD1/rSMhESdpTiHejg3KaU5Z0rG/h0R9Q6JemdSSi2fxK1aZSkl6neO9kGcz/ykY0/liXqHRL1PNyNflcuGWEQdKe4c7cXdzRn1xsvZzNp0SNT7NHa0bqTOknYWSS3uZOap95aBgZF6h0S9T2Oj/jznbLTOImpcjk3DL+ZDSuly5icbOzC4SymJeodEvU8t01pG6yymrv04EvbZXaSUThd4nrF/P0y9d0rUO1T/YI79Y3m8iYNDNx6FfewaEJ4mp5RO5j5WOefyt+P5yP9N1Dsl6v0a+0vzJudsdzkWVcKeUiqnft6L+2Q+DcPwz5TSUtvrtgwIRL1TtontV/mleTvy1R0vcNkL/ElKqfzcndeNkI7rl+1hn+a2Ljorv/PnBzhXPTbqd42X3rIAUe9XWRjz75Gv7kTUOaQapJ3L3tahcep97kV77MH0e6fqH8exlw29sWUsMIKp92BEvW8tn4iXWCkLrFwdALxreBdG6h0T9b61TKWfWDAHPEHLyvqPM2+Cw55EvWN1McrYKfjnLm8D/kr94N8yq2fNTudEvX8tC46WuhQGWKfThgVydwvsbMeeRL1/LZ+MX+ScZ9+0Algfo/TYRL1z9fzVRcOr3Dm3DnxFyyh9cJniOoj6OrR8Qn5uJTzwWF3x3vJ34aMbuKyDqK9ASumqbh05VnLdOvDIzig9NlFfj9bFb86DAQ+7x43derr4VAcWrICor8Qeo/Wyy5xpeNiwur6m9QO+q2lWRNTXpfWX68w0PGzaeeO0u1H6yoj6iuwxWn9ua0fYpnp5a8u0+2CUvj6ivj6tU+mvcs4Wu8CG5Jxf77HIzSh9hUR9ZerWsS3XrRc/25QGtuHRefSWafehcW94DkzU16mM1u8aX/mufnoHYitBf9X4DrPr0tdJ1Feo7jLX+im6fGq/EnaIK+d8vsd59FvXpa+XqK9UvbHCx8ZX//vCOdvIQjz1FFvLfdIfnLi96nqJ+rqd7DEN/6KO2IUdgqhB/2WPd/PB4rh1E/UV23Mafqjn24QdApgg6DcuYVs/UV+5Og3/YY938co5dli3umvkPkG/M+0ew7P7+/utH4MQcs5lyuzNHu+l/FIf1UvmgJWoi+L2OYdevE8puU9EAEbqcRzXVautHlbFuzYVVqCcNss5X04Q9AtBj8NIPZA6hX61x2YTD8piGTeBgU7V3/V9rkN/UHaNO/J9jsNIPZA6dX48wTsqO89duwkM9KeeP7+aIOg3E/29oCNG6gFNsAr2QTnPfpZSshEFHNijbV9bN5V5rPxuv7QwLh5RD2rCsA/1znAnto2Ew6ij87MJTq0NFsXGJuqBTRz2IpftI326h2XknI9qzPe5suUxQQ9O1IObIezlj8Kp1bIwn7qeZTfRVPsDQd8AUd+AGcI+1Mvnygji0sgdplFXtZ9OcJnal27qKTRBD07UN2KmsA/10/95nZZ3zh0a5JyPa8ynmmZ/7KaO0H343gBR35AJr2P/lk818Ebv8B11iv20Xlb2Yqbj9dH2r9si6htT/5BcTnCN6/d8rB8gLo3g4Q/1g3WZNTta4Hcwp5TcoGVjRH2D6vWuuxnO233LbQ18OZ937daObEH9PXtdv47q11yzZI893Jzl0g/a9oj6htXz7LuF/tB8qYT+86Ov4rcafliTEu2H2xe/fPQ115T6X/l9lzizY9sl6htXp+PPZ1qgAyzHdDuizh8m3rEKWI7L1fgvUee/ZtrwApiHezPwJ6LOn9StKXcLrM4F2nyoQXepGv9D1PmmupDu7EALfoA/u6gxtxCOrxJ1vqvG/dTIHQ5GzHkSUefJ6rT8yYLXt8OW3dXTYOdizlOJOqPVBXUPe1Wbmodpfaw7MboTIqOJOntZeNtLiOqm7hdxbvEb+xB1JvNoBL/klpiwRncP90ZwAySmJOrMpo7iH3/ZtY6t+lS3RC4bxFzZKIa5iDqLqqP5o5nu7d7qk5+CJ/vRaZYn+VQvB702CmdJos5B5JzH/uDdppRe+m4xpfoh83s/V2WW6d8jn9Y+7BzEDw47S6vT8mO5XSuTq5eK/eXlYjnn64ao//iEfwOT+5tDygEcNTylqHMQdfr8ZuRzt/yMw95EnUNo+YN36TvFAY39UPmqTu3DokSdQxgb9RuLjTiwlpmiY980libqLKqeTx97/bqpdw4qpdQyUyTqLE7UWVrLHzpT7/Rg7KWPLQtCYS+iztJGn09PKRmp04OxP4fPG6/0gGaiztLG7ir30XeITrR8uLQKnkWJOoupt24dyyidLjTOGDmvzqJEnSW1/IETdXoy9ry6+x2wKFFnSWNH6ndufEFnRi/azDkbrbMYUWcROeeWG4EYpdMb59XpmqizFLvIsXp15uhu5PsQdRYj6izFIjmiaNky1g1eWISos5Sx1+ve1jtoQW9aPmy6Xp1FiDpLGbsK2CidXrX8bLq5C4sQdWbXeLcq59PpUj2vfjvytYk6ixB1ltDyB81InZ75+aRLos7sGnbi+uhWq3Ru7EyS9SEsQtRZypg93E2907V6K9YxU/BG9ixC1FnK2ROv771JKZ37rrACT90p7oMrOViKqLOIurjo5Dthv7FRB2tRf6Z/+s7PdAn6qW8qS3l2f3/vYLOYuhL+tMb7YdvYcpOMy5TSzneCtak/02f1Z/pFnZYv0+3njXd2g2aiDgBBmH4HgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUACELUASAIUQeAIEQdAIIQdQAIQtQBIAhRB4AgRB0AghB1AAhC1AEgCFEHgCBEHQCCEHUAiGAYhv8HEvxmUQJ8poMAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>

                <div
                  style={{
                    textAlign: "center",
                    width: "auto",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  {data["toilet_count"]}개
                </div>
              </div>
            </div>
          </div>

          {/*view count 들어가야함 */}
          {/* <div className="d-flex justify-content-start" style={{ width: "33%", marginRight: "5px" }}>
                  <Image
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                    width={18}
                    height={18}
                    alt="아이콘"
                    style={{ marginTop: "2px" }}
                  />
                  
                  <div style={{ textAlign: "center", width: "auto", fontSize: "12px", marginTop: "3px" }}>
                    {cardCountText(data["view_count"])}
                  </div>
                </div> */}
          {/*like count 들어가야함 */}
          {/* <div className="d-flex justify-content-between" style={{ width: "29%", marginRight: "5px" }}>
                  <Image
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
                    width={18}
                    height={18}
                    alt="아이콘"
                    style={{ marginTop: "2px" }}
                  />
                  
                  <div style={{ textAlign: "center", width: "auto", fontSize: "12px", marginTop: "3px" }}>
                    {cardCountText(data["like_count"])}
                  </div>
                </div> */}

          {/*<div className="d-flex justify-content-between">
                <div className="fw-bold">AS기간</div>
                <div>{data["warranty"]}</div>
              </div>*/}
        </div>
      </Link>
    </div>
  );
}
