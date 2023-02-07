import Head from "next/head";
import { useRef } from "react";
import Showdown from "showdown";
import Style from "../styles/index.module.css"

export default function Home() {
  const div = useRef()
  const converter = new Showdown.Converter()

  const handleChange = e => {
    let value = e.target.value;
    let lines = value.split("\n");
    let html = "";

    for (const element of lines) {
      html += converter.makeHtml(element);
    }

    div.current.innerHTML = html;
  }

  return (
    <>
      <Head>
        <title>Text aesthetic - hiyo</title>
      </Head>


    <header className={Style.header}>
      <h1>HIYO</h1>
    </header>
      
      <div className={Style.textContainer}>
        <textarea className={Style.textarea} onChange={handleChange} placeholder={`Type anyhing here, example:

# HI 
i just want you to know about this page is support **markdown syntax**🥳🥳

if you don't know what markdown is, just go search it in google and it will be fun.

also you can make a fun thing with this like The time is write js code -> \`console.log("HI MOM")\` and write a quotes for your friends or something
and the fun part is this textarea can be **resize** yeaaaah :)
`}></textarea>
<div className={Style.text}>T</div>
      </div>

      <div className={Style.containerResult}>
        <div ref={div} className={Style.result}></div>
      </div>


      <footer className={Style.footer}>
        <p>This page made by ・ <a href="https://github.com/hiyokun-d/">HIYO</a> ・ with ♥︎</p>
      </footer>
    </>
  )
}