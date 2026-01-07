import { useEffect } from "react";

const useTitle = (pageTitle) => {
  useEffect(() => {
    const baseTitle = "Toy Land";
    document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  }, [pageTitle]);
};

export default useTitle;
