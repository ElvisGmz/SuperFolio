import { useEffect, useRef } from "react";

// ESTE HOOK ES PARA MEJORAR EL SEO Y CAMBIAR EL TITULO POR CADA PAGINA
export default function useTitle({ title }) {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previousTitle = prevTitle.current;

    document.title = `Elvis Gómez | ${title}`;
    return () => (document.title = previousTitle);
  }, [title]);
}
