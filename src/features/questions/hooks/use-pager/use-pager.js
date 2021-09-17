import { useState } from "react";

/**
 * Hook to manage pagination
 * @param {Object} props hook props
 * @param {number} props.min minimum page
 * @param {number | undefined} props.max maximum page
 * @param {number | undefined} props.initialPage page to be inited
 */
export const usePager = ({ initialPage, min, max }) => {
  const [currentPage, setCurrentPage] = useState(initialPage || 1);

  /**
   * Validates and sets the next page if is not major than max
   */
  const nextPage = () =>
    setCurrentPage((page) => {
      if (!max) return page + 1;

      return currentPage < max ? page + 1 : page;
    });

  /**
   * Validates and sets the previous page if is not minor than min prop
   */
  const previousPage = () =>
    setCurrentPage((page) => (page > (min || 1) ? page - 1 : page));

  return { currentPage, nextPage, previousPage };
};
