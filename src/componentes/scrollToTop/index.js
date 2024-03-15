import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;

/* este componete vai ser utilizado pra quando mudar de pagina a barra de rolagem iniciar do inicio da pagina */
}

