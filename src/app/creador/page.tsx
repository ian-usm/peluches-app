"use client";

import { useState } from "react";

export default function CreadorPage() {
  const [cuerpo, setCuerpo] = useState("gato-negro.png");
  const [boca, setBoca] = useState("boca-gato.png");

  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      
      {/* Lienzo */}
      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
        <img
          src={`/creador/cuerpos/${cuerpo}`}
          className="absolute inset-0"
        />

        <img
          src="/creador/ojos/ojos-default.png"
          className="absolute inset-0"
        />

        <img
          src={`/creador/bocas/${boca}`}
          className="absolute inset-0"
        />
      </div>

      {/* Controles */}
      <div className="flex gap-4">
        <button onClick={() => setCuerpo("gato-negro.png")}>
          Negro
        </button>
        <button onClick={() => setCuerpo("gato-rosado.png")}>
          rosado
        </button>
        <button onClick={() => setCuerpo("gato-blanco.png")}>
          Blanco
        </button>
      </div>

      <div className="flex gap-4">
        <button onClick={() => setBoca("boca-gato.png")}>
          😊
        </button>
        <button onClick={() => setBoca("boca-triste.png")}>
          ☹️
        </button>
      </div>
    </div>
  );
}