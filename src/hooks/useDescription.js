import { useEffect, useRef } from "react";

// ESTE HOOK ES PARA MEJORAR EL SEO Y CAMBIAR LA DESCRIPCION POR CADA PAGINA
export default function useDescription({ description }) {
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute("content")
  );

  useEffect(() => {
    const previousDescription = prevDescription.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    //Si la description que me pasan no es undefined agrega la descripcion
    if (description) {
      metaDescription.setAttribute("content", description);
    }
    //Si cambia de componente o se destruye agrega el que estaba
    return () => metaDescription.setAttribute("content", previousDescription);
  }, [description]);
}
