// Custom hook for managing search parameters
import { useRouter } from "next/navigation";

const useSearchParamsInteraction = () => {
  const router = useRouter();

  const setSearchParams = (searchInput: string, queryName: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (!searchInput) {
      searchParams.delete(queryName);
    } else {
      searchParams.set(queryName, searchInput);
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return { setSearchParams }; // The hook does not need to return any component.
};

export default useSearchParamsInteraction;
