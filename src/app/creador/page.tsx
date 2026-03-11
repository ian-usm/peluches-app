"use client";

import { useState } from "react";
import { animales, cicatrices } from "@/lib/creadorAssets";
import { bocas } from "@/lib/creadorAssets";

export default function CreadorPage() {

  const [animal, setAnimal] = useState("gato");
  const [color, setColor] = useState("negro");
  const [boca, setBoca] = useState("sonrisa");
  const [cicatriz, setCicatriz] = useState("ninguna");
  const [animar, setAnimar] = useState(false);

  function triggerBoing() {
    setAnimar(false);
    setTimeout(() => setAnimar(true), 10);
  }

  const cuerpo = `/creador/cuerpos/${animal}-${color}.png`;

  return (
    <div className="mt-10 w-full max-w-6xl mx-auto px-4">

      <div className="flex flex-col lg:flex-row gap-12 items-center">

        {/* PREVIEW */}
        <div className="border-4 border-red-800 p-6 flex items-center justify-center">

          <div className={`relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] ${animar ? "boing" : ""}`}>

            {/* cuerpo */}
            <img
              src={cuerpo}
              className="absolute inset-0"
            />

            {/* cicatriz */}
            {cicatriz !== "ninguna" && (
              <img
                src={`/creador/cicatrices/${cicatriz}.png`}
                className="absolute inset-0 mix-blend-multiply"
              />
            )}

            {/* ojos */}
            <img
              src="/creador/ojos/ojos-default.png"
              className="absolute inset-0"
            />

            {/* boca */}
            <img
              src={`/creador/bocas/${boca}.png`}
              className="absolute inset-0"
            />

          </div>

        </div>


        {/* OPCIONES */}
        <div className="flex flex-col gap-10 w-full max-w-md">

          {/* ANIMAL */}
          <div className="flex flex-col gap-4">

            <h2 className="text-xl text-red-800">
              Será un...
            </h2>

            <div className="flex gap-4">

              <button
                onClick={() => {
                  setAnimal("gato");
                  triggerBoing();
                }}
                className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                ${animal === "gato" ? "border-red-500" : "border-red-800"}`}
              >
                Gato!
              </button>

              <button
                onClick={() => {
                  setAnimal("conejo");
                  triggerBoing();
                }}
                className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                ${animal === "conejo" ? "border-red-500" : "border-red-800"}`}
              >
                Conejo!
              </button>

            </div>

          </div>


          {/* COLOR */}
          <div className="flex flex-col gap-4">

            <h2 className="text-xl text-red-800">
              De color...
            </h2>

            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() => {
                  setColor("negro");
                  triggerBoing();
                }}
                className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                ${color === "negro" ? "border-red-500" : "border-red-800"}`}
              >
                Negro
              </button>

              <button
                onClick={() => {
                  setColor("blanco");
                  triggerBoing();
                }}
                className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                ${color === "blanco" ? "border-red-500" : "border-red-800"}`}
              >
                Blanco
              </button>

              <button
                onClick={() => {
                  setColor("rosado");
                  triggerBoing();
                }}
                className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                ${color === "rosado" ? "border-red-500" : "border-red-800"}`}
              >
                Rosado
              </button>

            </div>

          </div>


          {/* BOCA */}
          <div className="flex flex-col gap-4">

            <h2 className="text-xl text-red-800">
              Y tendrá una boca...
            </h2>

            <div className="flex gap-4 flex-wrap">

              {bocas.map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setBoca(b);
                    triggerBoing();
                  }}
                  className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                    ${boca === b ? "border-red-500" : "border-red-800"}
                  `}
                >
                  <img
                    src={`/creador/bocas/${b}.png`}
                    className="w-12 h-12"
                  />
                </button>
              ))}

            </div>

          </div>


          {/* CICATRICES */}
          <div className="flex flex-col gap-4">

            <h2 className="text-xl text-red-800">
              ¿Tiene cicatrices?
            </h2>

            <div className="flex gap-4 flex-wrap">

              {/* sin cicatriz */}
              <button
                onClick={() => {
                  setCicatriz("ninguna");
                  triggerBoing();
                }}
                className={`border-2 px-4 py-2 transition hover:scale-105 hover-peligro
                ${cicatriz === "ninguna" ? "border-red-500" : "border-red-800"}`}
              >
                Ninguna
              </button>

              {cicatrices.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCicatriz(c);
                    triggerBoing();
                  }}
                  className={`border-2 p-2 transition hover:scale-105 hover-peligro
                  ${cicatriz === c ? "border-red-500" : "border-red-800"}`}
                >
                  <img
                    src={`/creador/cicatrices/${c}.png`}
                    className="w-12 h-12"
                  />
                </button>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}